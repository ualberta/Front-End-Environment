var UAlberta = UAlberta || {};
(function (UAlberta) {

  (function (FrontEnd) {

    (function (Pages) {

      // Create an institutional home page layout
      // @extends Page
      function InstitutionalHome(baseData, options) {
        this.base = UAlberta.FrontEnd.Modules.Page;
        this.base("ualberta-home", baseData, options);

        this.baseData = baseData;

        this.options.featureArea = "#feature-area";
        this.options.firstColumn = "#first-column";
        this.options.secondColumn = "#second-column";
        this.options.sidebar = "#sidebar";

        this.options = $.extend(this.options, options);

        var self = this;

        this.addFeature = function(featureData) {
          if(featureData.features.length == 1)
            return UAlberta.FrontEnd.Modules.addModule('single-feature',featureData, this.options.featureArea );
          else
            return UAlberta.FrontEnd.Modules.addModule('carousel',featureData, this.options.featureArea);
        };

        this.addExploreBar = function() {
          return self.addModule('explore-bar', null, "#explore-row");
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

        this.add();

        this.prototype = new UAlberta.FrontEnd.Modules.Page("ualberta-home", baseData, options);

      }
      Pages.InstitutionalHome = InstitutionalHome;


    })(FrontEnd.Pages || (FrontEnd.Pages = {}));
    var Pages = FrontEnd.Pages;



    // MODULES
    // ---------

    (function (Modules) {

      // creates a new module on the page, 
      // provided a template, data, and parent.
      function Module(id, type, template, data, parent, options) {

        this.frontEndModule = true;
        this.type = type;
        this.placeholder = parent;
        this.template = template;
        this.data = data;
        this.id = id;
        this.modules = new Array();
        this.options = $.extend({},options);
        this.el = null;

        // if there is a header in the data, enable the option
        if(this.data && this.data.header)
          this.options.header = this.data.header;

        // if there is a footer in the data, enable the option
        if(this.data && this.data.footer)
          this.options.footer = this.data.footer;

        // set the parent jQuery element to append to
        // if the parent is a module, set it
        switch(typeof(parent)) {
          case 'string':
            this.parentEl = $(this.placeholder);
            break;
          case 'object':
            if(parent.selector) {
              this.parentEl = parent;
            } else if(parent.frontEndModule) {
              this.parentEl = parent.el;
              this.parent = parent;
            }
            break;
          default:
            console.log("error: invalid placeholder type");
        }

        // need to add the ID to the dom element
        if((typeof this.template) === "function")
          this.el = $('<div class="f-e-container"></div>').append(this.template(data));

        var self = this;

        this.add = function() {
          if(!self.parentEl)
            console.log("error: the selector " + self.placeholder + "doesn't exist");

          if(self.options.prepend)
            self.parentEl.prepend(self.el);
          else
            self.parentEl.append(self.el);

          if(this.options.header && !this.options.suppressHeader)
            self.addHeader();

          if(this.options.footer && !this.options.suppressFooter)
            self.addFooter();

          self.activate();
        };

        this.addHeader = function() {
          if(self.options.header) {
            self.el.prepend(UAlberta.FrontEnd.templates["module-heading.hbs"](self.options.header));
          }
        };

        this.addFooter = function() {
          if(self.options.footer) {
            self.el.append(UAlberta.FrontEnd.templates["module-footer.hbs"](self.options.footer));
          }
        };

        this.remove = function() {
          this.el.remove();
        };

        // placeholder for interactive modules to activate
        this.activate = function() { };

        // placeholder for interactive modules to activate
        this.disable = function() { };

        // updates the element with new data
        this.update = function(newData) {
          self.el.replaceWith($('<div class="f-e-container"></div>').append(self.template(data)));
          self.activate();
        };

        // add modules within modules within modules...
        this.addModule = function(moduleName,data,parent,options) {
          var parentEl = self.el.find(parent);
          if(parentEl.length > 0) {
            var module = UAlberta.FrontEnd.Modules.addModule(moduleName,data,parentEl,options);
            self.modules.push(module);
            return module;
          }
          console.log("error: the container " + parent + " does not exist in this module");
        };

        // swap the template and update
        this.switchTemplate = function(templateName) {
          var newTemplate = UAlberta.FrontEnd.templates[templateName+".hbs"];
          if(newTemplate) {
            self.template = newTemplate;
            self.update(self.data);
          }
        };

      };

      function Page(layoutTemplate, data, options) {
        // extend the module base
        this.base = Module;
        this.base('page', 'page', function() {}, data, 'body', options);

        this.el = $('body');

        this.layoutTemplate = layoutTemplate;

        var self = this;

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
        };

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

          this.activate();

          self.setLayout(self.layoutTemplate);
        };

        // Sets the layout of the content area, called after build()
        this.setLayout = function(layoutName) {
          console.log("trying to layout " + layoutName);
          if(!self.layout) {
            self.layout = self.addModule(layoutName, {}, "#content-wrapper");
          } else {
            self.layout.switchTemplate(layoutName);
          }

        };

        // Private 

        function addBlade() {
          self.blade = 
            self.addModule(
              'blade', 
              self.data.blade, 
              'header', 
              {}
            );
        };

        function addBanner() {

          self.banner = 
            self.addModule(
              'banner', 
              self.data.banner, 
              'header', 
              {}
            );

        };

        function addGlobalNavigation() {

          self.globalNav = 
            self.addModule(
              'global-navigation', 
              self.data.navigation, 
              'header', 
              {}
            );

        };

        function addMobileNavigation() {
                    
          self.mobileNav = 
            self.addModule(
              'mobile-navigation', 
              self.data.navigation, 
              'header', 
              {}
            );

        };

        function addSecondaryFooter() {

        };

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
        this.prototype = new Module('page', 'page', null, data, 'body', options);
      };
      Modules.Page = Page;


      function ExploreBar(id, type, template, data, placeholder, options) {
        
        // extend the module base
        this.base = Module;
        this.base(id, type, template, data, placeholder, options);

        var self = this;

        this.activate = function() {
          this.el.flexslider({
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

        // extend the module base
        this.prototype = new Module(id, type, template, data, placeholder, options);
      };

      function SidebarItem(id, type, template, data, placeholder, options) {
        
        // extend the module base
        this.base = Module;
        this.base(id, type, template, data, placeholder, options);

        var self = this;


        this.addHeader = function() {
          self.el.find('.sidebar-content').before(
            UAlberta.FrontEnd.templates["sidebar-header.hbs"](self.options.header)
          );
        };

        this.addFooter = function() {
          self.el.find('.sidebar-content').after(
            UAlberta.FrontEnd.templates["sidebar-footer.hbs"](self.options.footer)
          );
        };

        this.base_addModule = this.addModule;
        // suppress the headers on any modules added to the sidebar
        this.addModule = function(moduleName,data,parent,options) {
          var newOptions = options || {};
          newOptions.suppressHeader = true;
          return this.base_addModule(moduleName,data,parent,newOptions);
        };

        // extend the module base
        this.prototype = new Module(id, type, template, data, placeholder, options);
      };


      function Modal(id, type, template, data, placeholder, options) {
        
        // extend the module base
        this.base = Module;
        this.base(id, type, template, data, placeholder, options);

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
        this.prototype = new Module(id, type, template, data, placeholder, options);
      };

      function Video(id, type, template, data, placeholder, options) {
        
        // extend the module base
        this.base = Module;
        this.base(id, type, template, data, placeholder, options);

        var self = this;

        this.activate = function() {
          this.el.on({
            click: function() {
              var data = {
                heading: $(this).find('img').attr('alt'),
                embedUrl: $(this).attr('href')
              };
              addModule('modal', data, 'body');
              return false;
            }
          }, 'a');
        };

        // extend the module base
        this.prototype = new Module(id, type, template, data, placeholder, options);
      };

      function Accordion(id, type, template, data, placeholder, options) {
        
        // extend the module base
        this.base = Module;
        this.base(id, type, template, data, placeholder, options);

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
        this.prototype = new Module(id, type, template, data, placeholder, options);
      };

      function SectionNavigation(id, type, template, data, placeholder, options) {
        
        // extend the module base
        this.base = Module;
        this.base(id, type, template, data, placeholder, options);

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
        this.prototype = new Module(id, type, template, data, placeholder, options);
      };

      function LinkFilter(id, type, template, data, placeholder, options) {
        
        // extend the module base
        this.base = Module;
        this.base(id, type, template, data, placeholder, options);

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
        this.prototype = new Module(id, type, template, data, placeholder, options);
      };

      function Carousel(id, type, template, data, placeholder, options) {
        
        // extend the module base
        this.base = Module;
        this.base(id, type, template, data, placeholder, options);

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
        this.prototype = new Module(id, type, template, data, placeholder, options);
      };

      // module factory
      // returns a module as long as a valid moduleName is provided
      // moduleName must match the hbs template file name
      function addModule(moduleName, data, parent, options) {

        var template = UAlberta.FrontEnd.templates[moduleName+".hbs"];

        // TODO: append timestamp to id? not sure if that is useful.

        
        var moduleConstructor;
        switch(moduleName) {
          case 'explore-bar':
            moduleConstructor = ExploreBar;
            break;
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
            moduleConstructor = Modal;
            break;
          case 'sidebar-item':
            moduleConstructor = SidebarItem;
            break;
          case 'youtube-video':
            template = UAlberta.FrontEnd.templates["image-caption.hbs"];
            moduleConstructor = Video;
            break;
          default:
            moduleConstructor = Module;
        }

        if(template) {

          var module = new moduleConstructor(
                moduleName, 
                moduleName, 
                template, 
                data, 
                parent, 
                options
          );

          // run the module's add function
          module.add();

          return module;

        } else {
          console.log("error: template for " + moduleName + " not found.");
        } 


      };
      Modules.addModule = addModule;


    })(FrontEnd.Modules || (FrontEnd.Modules = {}));
    var Modules = FrontEnd.Modules;

  })(UAlberta.FrontEnd || (UAlberta.FrontEnd = {}));
  var FrontEnd = UAlberta.FrontEnd;

})(UAlberta || (UAlberta = {}));