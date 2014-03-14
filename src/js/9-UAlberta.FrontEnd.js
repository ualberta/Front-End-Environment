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

        // TODO: append timestamp to id? not sure if that is useful. 
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
          case 'carousel-feature':
            moduleConstructor = Carousel;
            break;
          case 'carousel':
            moduleConstructor = Carousel;
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
        
        this.id = id;
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

          // set module selector once added to page
          self.moduleSelector = self.type+"-"+(moduleCount++);

          // create the element to add
          if((typeof this.template) === "function")
            self.el = $('<div class="f-e-container"></div>')
                        .addClass(this.moduleSelector)
                        .append(this.template(data));

          if(this.options.placeholder) {
            self.parentEl = self.parentEl.find(this.options.placeholder);
          }

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
            .append(self.template(data)));
          self.activate();
        };

        /** @function adds a module inside this module */
        this.addModule = function(moduleName,data,placeholder,options) {
            var module = UAlberta.FrontEnd.Modules.addModule(
              moduleName,
              data,
              self,
              placeholder,
              options
            );
            //var module = UAlberta.FrontEnd.Modules.addModule(moduleName,data,self,options);
            self.modules.push(module);
            return module;
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
      function Page(layoutTemplate, data, options) {

        // extend the module base
        this.base = Module;
        this.base('page', 'page', function() {}, data, null, 'body', options);

        this.el = $('body');

        this.layoutTemplate = layoutTemplate;

        // default placeholders
        this.options.featureArea = "#feature-area";
        this.options.firstColumn= "#first-column";
        this.options.secondColumn= "#second-column";
        this.options.sidebar= "#sidebar";

        this.options = $.extend(this.options, options);

        var self = this;

        this.addFeature = function(featureData) {
          if(featureData.features.length == 1)
            return self.addModule('single-feature',featureData, this.options.featureArea );
          else
            return self.addModule('carousel',featureData, this.options.featureArea);
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

          // activate the explore bar
          $('#explore-bar').flexslider({
            animation: "slide",
            itemWidth: 93,
            minItems: 3,
            maxItems: 7,
            itemMargin: 0,
            controlNav: false,
            slideshow: false,
            animationLoop: true,
            prevText: "",
            nextText: "",
            touch: true
          });
        };

        /** @function builds the page and adds it to the DOM */
        this.add = function() {
          if(self.data.blade)
            addBlade();

          if(self.data.banner)
            addBanner();

          if(self.data.navigation) {
            addGlobalNavigation();
            addMobileNavigation();
          }
          
          if(self.data.secondaryFooter)
            addSecondaryFooter();
          
          if(self.data.ualbertaFooter)
            addInstitutionalFooter();

          self.setLayout(self.layoutTemplate);

          this.activate();

        };

        /** 
         * sets the layout of the page to the template name provided
         * @function 
         * @param {string} layoutName A string specifying the layout template name
         */
        this.setLayout = function(layoutName) {
          console.log("trying to layout " + layoutName);
          if(!self.layout) {
            self.layout = self.addModule(layoutName, {}, "#content-wrapper");
          } else {
            self.layout.switchTemplate(layoutName);
          }
        };

        /** @private adds the blade to the page */
        function addBlade() {
          self.blade = 
            self.addModule(
              'blade', 
              self.data.blade, 
              'header', 
              {}
            );
        };

        /** @private adds the banner to the page */
        function addBanner() {
          self.banner = 
            self.addModule(
              'banner', 
              self.data.banner, 
              'header', 
              {}
            );
        };

        /** @private adds global navigation to the page */
        function addGlobalNavigation() {
          self.globalNav = 
            self.addModule(
              'global-navigation', 
              self.data.navigation, 
              'header', 
              {}
            );
        };

        /** @private adds mobile navigation to the page */
        function addMobileNavigation() {    
          self.mobileNav = 
            self.addModule(
              'mobile-navigation', 
              self.data.navigation, 
              'header', 
              {}
            );
        };

        /** @private adds a secondary footer to the page */
        function addSecondaryFooter() {

        };

        /** @private add the institutional footer to a page */
        function addInstitutionalFooter() {
          self.primaryFooter = 
            self.addModule(
              'institutional-footer', 
              self.data.ualbertaFooter, 
              'footer', 
              {}
            );
        };

        // extend the module base
        this.prototype = new Module('page', 'page', null, data, null, 'body', options);
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
      function Modal(id, type, template, data, parentModule, placeholder, options) {
        // extend the module base
        this.base = Module;
        this.base(id, type, template, data, parentModule, placeholder, options);

        var self = this;

        this.activate = function() {
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
      function Accordion(id, type, template, data, parentModule, placeholder, options) {
        // extend the module base
        this.base = Module;
        this.base(id, type, template, data, parentModule, placeholder, options);

        var self = this;

        this.activate = function() {
          // expand / collapse functionality
          this.el.on({
            click: function() {
              $(this).parent().toggleClass('expanded'); 
              return false;
            }
          }, '.accordion-toggle'); 
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

        this.currentSlide = 0;

        this.goToSlide = function(index) {
          this.el.find('.current').removeClass('current');
          this.el.find('.toggles li').eq(index).addClass('current');
          this.el.find('.slide').eq(index).addClass('current');
        };
    
        this.activate = function() {
          var autoRotate = setInterval(function () {
            // if the next slide doesn't exist, restart
            if((self.currentSlide+1) >= data.features.length)
              self.currentSlide = -1;
            self.goToSlide(self.currentSlide++);
          }, 8000);

          this.el.on({ 
            click: function() {
              self.currentSlide = $(this).index();
              self.goToSlide(self.currentSlide);
              clearInterval(autoRotate);
            }
          },'li:not(.current)');

          self.goToSlide(0);
        };

        // extend the module base
        this.prototype = new Module(id, type, template, data, parentModule, placeholder, options);
      };

    })(FrontEnd.Modules || (FrontEnd.Modules = {}));
    var Modules = FrontEnd.Modules;

  })(UAlberta.FrontEnd || (UAlberta.FrontEnd = {}));
  var FrontEnd = UAlberta.FrontEnd;

})(UAlberta || (UAlberta = {}));