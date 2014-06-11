var UAlberta = UAlberta || {};
(function (UAlberta) {

  (function (FrontEnd) {

    /** 
     *  Contains several modules that can be added to a page
     *  @namespace Modules
     */
    (function (Modules) {

      var moduleCount = 0;

      /** 
       *  module factory
       *  returns a module as long as a valid moduleName is provided
       *  moduleName must match the hbs template file name
       */
      function addModule(moduleName, data, parent, placeholder, options) {

        var template = UAlberta.FrontEnd.templates[moduleName+".hbs"];

        // set the constructor based on the moduleName 
        var moduleConstructor;
        switch(moduleName) {
          case 'accordion':
            moduleConstructor = Accordion;
            break;
          case 'collapsible-navigation':
            moduleConstructor = SectionNavigation;
            break;
          case 'link-filter':
            moduleConstructor = LinkFilter;
            break;
          case 'feature-carousel':
            var newOptions = options || {};
            if(newOptions.wrapperClass)
              newOptions.wrapperClass = 'full-page-feature '+newOptions.wrapperClass;
            else
              newOptions.wrapperClass = 'full-page-feature';
            options = newOptions;
            template = UAlberta.FrontEnd.templates["carousel.hbs"];
            moduleConstructor = Carousel;
            break;
          case 'carousel':
            moduleConstructor = Carousel;
            break;
          case 'tabs':
            moduleConstructor = Tabs;
            break;
          case 'modal':
            // place modal at root
            parent = null;
            placeholder = 'body';
            moduleConstructor = Modal;
            break;
          case 'sidebar-item':
            moduleConstructor = SidebarItem;
            break;
          case 'youtube-video':
            // video is displayed with image caption template
            template = UAlberta.FrontEnd.templates["image-caption.hbs"];
            moduleConstructor = Video;
            break;
          default:
            moduleConstructor = Module;
        }

        // need a template to build a module
        if(template) {
          var module = new moduleConstructor(
            moduleName, 
            moduleName, 
            template, 
            data, 
            parent,
            placeholder, 
            options
          );
          // add the module to the DOM
          module.add();
          return module;
        } else {
          console.log("error: template for " + moduleName + " not found.");
        } 
      };
      Modules.addModule = addModule;
 
      /** 
       *  A base module
       *  @constructor Module
       *  @private
       *  @property {string}   id           A unique string identifying the module
       *  @property {string}   type         A string indicating what type of module this is
       *  @property {function} template     A function containing the compiled handlebars template
       *  @property {object}   data         A JSON object containing the data to pass to the template
       *  @property {Module}   parent       A Module that contains this module (null if no parent)
       *  @property {string}   placeholder  A selector string for the element to inset this module into
       *  @property {object}   options      A JSON object containing the options for the module
       */
      function Module(id, type, template, data, parentModule, placeholder, options) {
        
        this.id = type+"-"+(moduleCount++);
        this.type = type;
        this.template = template;
        this.data = data;
        this.parent = parentModule;
        this.placeholder = placeholder;
        this.options = $.extend({},options);

        /** array containing all modules added to this module */
        this.modules = new Array();

        /** wrapper DOM element for this module */
        this.el = null;

        /** template function for module header */
        this.headerTemplate = UAlberta.FrontEnd.templates["module-heading.hbs"];
        
        /** template function for module footer */
        this.footerTemplate = UAlberta.FrontEnd.templates["module-footer.hbs"]

        // if there is a header in the data, enable the option
        if(this.data && this.data.header)
          this.options.header = this.data.header;

        // if there is a footer in the data, enable the option
        if(this.data && this.data.footer)
          this.options.footer = this.data.footer;

        // if there is no parent, search the entire DOM for the placeholder
        // if there is a parent, search within the parent element for the placeholder
        if(this.parent === null)
          this.parentEl = $(this.placeholder);
        else
          this.parentEl = this.parent.el.find(this.placeholder);

        var self = this;

        /** @function renders the module using the template and data and adds to DOM */
        this.add = function() {
          //console.log(self, self.parent); 

          if(!self.parentEl)
            console.log("error: the selector " + self.placeholder + " doesn't exist");

          // create the element to add
          if((typeof self.template) === "function")
            self.el = $('<div class="f-e-container"></div>')
                        .addClass(self.type+"-module")
                        .append(self.template(self.data));

          if(this.options.placeholder) {
            self.parentEl = self.parentEl.find(this.options.placeholder);
          }

          // add a wrapper class if needed
          if(this.options.wrapperClass)
            self.el.addClass(this.options.wrapperClass);

          // add the element to the top or bottom of container
          if(self.options.prepend)
            self.parentEl.prepend(self.el);
          else
            self.parentEl.append(self.el);

          // add the module header if it exists
          if(this.options.header && !this.options.suppressHeader)
            self.addHeader();

          // add the module footer if it exists
          if(this.options.footer && !this.options.suppressFooter)
            self.addFooter();

          // run any activation code for this module
          self.activate();
        };

        /** @function renders a header on the module */
        this.addHeader = function() {
          if(self.options.header) {
            self.el.prepend(this.headerTemplate(self.options.header));
          }
        };

        /** @function renders a footer on the module */
        this.addFooter = function() {
          if(self.options.footer) {
            self.el.append(this.footerTemplate(self.options.footer));
          }
        };

        /** @function removes the module from the DOM */
        this.remove = function() {
          self.el.remove();
          self.disable();
        };

        /** @function runs after the module is added to the DOM */
        this.activate = function() { };

        /** @function runs after the module is removed from the DOM */
        this.disable = function() { };

        /** @function takes new data and re-renders the module. */
        this.update = function(newData) {
          self.el.replaceWith($('<div class="f-e-container"></div>')
            .append(self.template(newData)));
          self.activate();
        };

        /** @function adds a module inside this module */
        this.addModule = function(moduleName,data,placeholder,options) {
          // if data is a string, assume it's a url and fetch the data
          if((typeof data) === "string") {
            var moduleName = moduleName;
            var placeholder = placeholder;
            var options = options;
            $.getJSON( data, null, function(jsonData) {
              // data should be an object now, so call addModule again
              return self.addModule(moduleName, jsonData, placeholder, options);
            });
          } 
          // data is an object so create the module
          if((typeof data) === "object") {
            var module = UAlberta.FrontEnd.Modules.addModule(
              moduleName,
              data,
              self,
              placeholder,
              options
            );
            self.modules.push(module);
            return module;
          }
        };

        /** @function switches the template used to render this module */
        this.switchTemplate = function(templateName) {
          var newTemplate = UAlberta.FrontEnd.templates[templateName+".hbs"];
          if(newTemplate) {
            self.template = newTemplate;
            self.update(self.data);
          }
        };
      };

      /** 
       *  A base page
       *  @constructor Page
       *  @augments Module
       *  @property {string}   layoutTemplate  A  string identifying the page layout template 
       *  @property {object}   data            A JSON object containing the data to pass to the template
       *  @property {object}   options         A JSON object containing the options for the module
       */
      function Page(options) {

        // extend the module base
        this.base = Module;
        this.base('page', 'page', function() {}, {}, null, 'body', options);

        this.el = $('body');

        // default placeholders
        this.options.featureArea = "#feature-area";
        this.options.firstColumn= "#first-column";
        this.options.secondColumn= "#second-column";
        this.options.sidebar= "#sidebar";

        this.options = $.extend(this.options, options);

        var self = this;

        this.addFeature = function(featureData, options) {
          console.log("addFeature",options);
          return self.addModule('feature-carousel',featureData, this.options.featureArea, options);
        };

        this.addToFirstColumn = function(moduleName, data, options) {
          return self.addModule(moduleName,data,this.options.firstColumn, options);
        };

        this.addToSecondColumn = function(moduleName, data, options) {
          return self.addModule(moduleName,data,this.options.secondColumn, options);
        };

        this.addToSidebar = function(moduleName, data, options) {
          return self.addModule(moduleName,data,this.options.sidebar, options);
        };

        /** @function activates the quick links toggle and navigation toggle */
        this.activate = function() {  
          // close any open overlays when clicking the "body" element
          $('body').on('click',function(e) {
            if($('#ql').hasClass('open')) {
              $('#ql').removeClass('open');
              e.stopPropagation();
            }
          });
          
          // toggle the quick links dropdown
          $('#ql-toggle').on('click', function(e) {
            $('#ql').toggleClass('open');
            e.stopPropagation();
          });  


          // close any open overlays when clicking the "body" element
          $('body').on('click',function(e) {
            if($('.nav-wrapper').hasClass('on')) {
              $('.nav-wrapper').removeClass('on');
              e.stopPropagation();
            }
          });
          
          // toggle the navigations
          $('.navigation-toggle').on('click', function(e) {
            $('.nav-wrapper').toggleClass('on');
            e.stopPropagation();
          });

          // tooltips
          $('[data-toggle="tooltip"]').tooltip();

          // activate modals
          $('[data-modal]').click(function(e) {

            var modal = $($(this).data('target'));
            var modalBody = modal.find('.modal-body');
            var modalType = $(this).data('modal');

            // add the iframe to the body if it's external
            if(modalType=='iframe') {
              var iframe = $('<iframe type="text/html" frameborder="0"></iframe>')
                .attr('src',$(this).data('url'));
              $('<div class="video-mod-container"></div>').append(iframe).appendTo(modalBody);
            } else if (modalType=='content') {
              var modalContent = $($(this).data('modal-content'));
              // if the content exists, put it in the body
              if(modalContent.length > 0) {
                modalBody.empty().append(modalContent.clone());
              }
            }

            // set the title
            modal.find('h3').text($(this).data('title'));

            // make it visible
            modal.addClass('in');

            var closeModal = function() {
              modal.removeClass('in');
              modalBody.empty();
            };

            // enable close button
            modal.find('.close').click(closeModal);
            $('.modal-module.in').click(closeModal);

 
            return false;
          });

          // Device image scaling
          var mediaLibraryImages = $(".content-container img[src*='ualberta.ca/-/media/']");

          $(window).setBreakpoints({
            distinct: true, 
            breakpoints: [
                360,
                480,
                768,
                1024
            ]
          });

          $(window).bind('enterBreakpoint360',function() {
            mediaLibraryImages.DeviceImageScaling(480);
          });
          $(window).bind('enterBreakpoint480',function() {
            mediaLibraryImages.DeviceImageScaling(768);
          });
          $(window).bind('enterBreakpoint768',function() {
            mediaLibraryImages.DeviceImageScaling(1024);
          });
          $(window).bind('enterBreakpoint1024',function() {
            mediaLibraryImages.DeviceImageScaling(null);
          });

          // accordions 
          $('.accordion-list').accordion();

          // enable carousels
          $('.carousel-container').carousel();

          // enable tabs
          $('.tabs-container').tabs();

          // trigger window resize to set breakpoints
          $(window).resize();

        };

        // extend the module base
        this.prototype = new Module('page', 'page', null, {}, null, 'body', options);
      };
      Modules.Page = Page;

      /** 
       *  changes header/footer template and supresses headers on inner modules
       *  @private 
       */
      function SidebarItem(id, type, template, data, parentModule, placeholder, options) {
        // extend the module base
        this.base = Module;
        this.base(id, type, template, data, parentModule, placeholder, options);

        var self = this;

        this.headerTemplate = UAlberta.FrontEnd.templates["sidebar-header.hbs"];
        this.footerTemplate = UAlberta.FrontEnd.templates["sidebar-footer.hbs"];

        this.addHeader = function() {
          self.el.find('.sidebar-content').before(
            this.headerTemplate(self.options.header)
          );
        };

        this.addFooter = function() {
          self.el.find('.sidebar-content').after(
            this.footerTemplate(self.options.footer)
          );
        };

        this.base_addModule = this.addModule;
        // suppress the headers on any modules added to the sidebar
        this.addModule = function(moduleName,data,parent,options) {
          var newOptions = $.extend({ suppressHeader: true },options)
          return this.base_addModule(moduleName,data,parent, newOptions);
        };

        // extend the module base
        this.prototype = new Module(id, type, template, data, parentModule, placeholder, options);
      };

      /** @private */
      function SubMenu(id, type, template, data, parentModule, placeholder, options) {
        // extend the module base
        this.base = Module;
        this.base(id, type, template, data, parentModule, placeholder, options);

        var self = this;

        this.activate = function() { };

        // extend the module base
        this.prototype = new Module(id, type, template, data, parentModule, placeholder, options);
      };

      /** @private */
      function Modal(id, type, template, data, parentModule, placeholder, options) {
        // extend the module base
        this.base = Module;
        this.base(id, type, template, data, parentModule, placeholder, options);

        var self = this;

        this.activate = function() {
          this.el.addClass('in');
          this.el.on({
            click: function() {
              self.remove(); 
              return false;
            }
          }, '.close');
        };

        // extend the module base
        this.prototype = new Module(id, type, template, data, parentModule, placeholder, options);
      };

      /** @private */
      function Video(id, type, template, data, parentModule, placeholder, options) {
        // extend the module base
        this.base = Module;
        this.base(id, type, template, data, parentModule, placeholder, options);

        var self = this;

        this.activate = function() {
          this.el.on({
            click: function() {
              var data = {
                heading: $(this).find('img').attr('alt'),
                embedUrl: $(this).attr('href')
              };
              self.addModule('modal', data, 'body');
              return false;
            }
          }, 'a');
        };

        // extend the module base
        this.prototype = new Module(id, type, template, data, parentModule, placeholder, options);
      };

      /** @private */
      function Tabs(id, type, template, data, parentModule, placeholder, options) {
        // extend the module base
        this.base = Module;
        this.base(id, type, template, data, parentModule, placeholder, options);

        var self = this;

        this.activate = function() {
          this.el.tabs();
        };

        // extend the module base
        this.prototype = new Module(id, type, template, data, parentModule, placeholder, options);
      };
 
      /** @private */
      function Accordion(id, type, template, data, parentModule, placeholder, options) {
        // extend the module base
        this.base = Module;
        this.base(id, type, template, data, parentModule, placeholder, options);

        var self = this;

        this.activate = function() {
          this.el.accordion();
        };

        // extend the module base
        this.prototype = new Module(id, type, template, data, parentModule, placeholder, options);
      };

      /** @private */
      function SectionNavigation(id, type, template, data, parentModule, placeholder, options) {
        // extend the module base
        this.base = Module;
        this.base(id, type, template, data, parentModule, placeholder, options);

        var self = this;

        this.activate = function() {
          // expand / collapse functionality
          this.el.on({
            click: function() {
              $(this).parent().toggleClass('expanded');
              $(this).parent().parent().toggleClass('nav-expand');
              return false;
            }
          }, '.nav-toggle'); 
        };

        // extend the module base
        this.prototype = new Module(id, type, template, data, parentModule, placeholder, options);
      };

      /** @private */
      function LinkFilter(id, type, template, data, parentModule, placeholder, options) {
        // extend the module base
        this.base = Module;
        this.base(id, type, template, data, parentModule, placeholder, options);

        var self = this;

        this.activate = function() {
          this.el.find('.link-mod-category:first').addClass('link-mod-active');

          this.el.on({
            click: function() {
              self.el.find('.link-mod-active').removeClass('link-mod-active');
              $(this).parent().addClass('link-mod-active');
            }
          }, '.link-mod-category h4');
        };

        // extend the module base
        this.prototype = new Module(id, type, template, data, parentModule, placeholder, options);
      };

      /** @private */
      function Carousel(id, type, template, data, parentModule, placeholder, options) {
        
        // extend the module base
        this.base = Module;
        this.base(id, type, template, data, parentModule, placeholder, options);

        var self = this;
    
        this.activate = function() {
          self.el.carousel();
        };

        // extend the module base
        this.prototype = new Module(id, type, template, data, parentModule, placeholder, options);
      };

    })(FrontEnd.Modules || (FrontEnd.Modules = {}));
    var Modules = FrontEnd.Modules;

  })(UAlberta.FrontEnd || (UAlberta.FrontEnd = {}));
  var FrontEnd = UAlberta.FrontEnd;

})(UAlberta || (UAlberta = {}));