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

        this.add();

        this.prototype = new UAlberta.FrontEnd.Modules.Page("ualberta-home", baseData, options);

      }
      Pages.InstitutionalHome = InstitutionalHome;


    })(FrontEnd.Pages || (FrontEnd.Pages = {}));
    var Pages = FrontEnd.Pages;



    // MODULES
    // ---------

    (function (Modules) {

      var moduleCount = 0;

      // TODO: Make sure parent is always a module
          // add parent selector as parameter
          // parameters (template, parentPlaceholder, parentModule, data, options)

      // creates a new module on the page, 
      // provided a template, data, and parent.
      function Module(id, type, template, data, parentModule, placeholder, options) {

        this.frontEndModule = true;
        this.type = type;
        this.placeholder = placeholder;
        this.parent = parentModule;
        this.template = template;
        this.data = data;
        this.id = id;
        this.modules = new Array();
        this.options = $.extend({},options);
        this.el = null;
        this.headerTemplate = UAlberta.FrontEnd.templates["module-heading.hbs"];
        this.footerTemplate = UAlberta.FrontEnd.templates["module-footer.hbs"]

        // if there is a header in the data, enable the option
        if(this.data && this.data.header)
          this.options.header = this.data.header;

        // if there is a footer in the data, enable the option
        if(this.data && this.data.footer)
          this.options.footer = this.data.footer;

        

        if(this.parent === null)
          this.parentEl = $(this.placeholder);
        else
          this.parentEl = this.parent.el.find(this.placeholder);

        // set the parent jQuery element to append to
        // if the parent is a module, set it
        /*
        switch(typeof(this.parent)) {
          case 'string':
            this.parentEl = $(this.placeholder);
            break;
          case 'object':
            if(this.parent.frontEndModule) {
              // we have a Module
              this.parentEl = parent.el;
            }
            break;
          default:
            console.log("error: invalid placeholder type");
        }
*/
        var self = this;

        /* add
         * places the module into the DOM
         */ 
        this.add = function() {
          //console.log(self, self.parent); 

          if(!self.parentEl)
            console.log("error: the selector " + self.placeholder + " doesn't exist");

          // set module selector once added to page
          self.moduleSelector = self.type+"-"+(moduleCount++);

          // create the element to add
          if((typeof this.template) === "function")
            self.el = $('<div class="f-e-container"></div>').addClass(this.moduleSelector).append(this.template(data));

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

        this.addHeader = function() {
          if(self.options.header) {
            self.el.prepend(this.headerTemplate(self.options.header));
          }
        };

        this.addFooter = function() {
          if(self.options.footer) {
            self.el.append(this.footerTemplate(self.options.footer));
          }
        };

        /* remove
         * removes the element from the DOM
         */
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
        this.addModule = function(moduleName,data,placeholder,options) {
          // if the placeholder refers to an element outside the module
          console.log("adding module:",moduleName,placeholder,self)

          var newOptions = $.extend({}, options);

          var parentEl = self.el.find(placeholder);
          if(newOptions.outsideModule)
            parentEl = $(placeholder);
          if(parentEl.length > 0) {
            var module = UAlberta.FrontEnd.Modules.addModule(moduleName,data,self,placeholder,newOptions);
            // TODO: make it to you pass self as parent
            //var module = UAlberta.FrontEnd.Modules.addModule(moduleName,data,self,options);
            self.modules.push(module);
            return module;
          }
          console.log("error: the container " + placeholder + " does not exist in this module");
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

      function Layout(layoutTemplate) {

      };

      function Page(layoutTemplate, data, options) {
        // extend the module base
        this.base = Module;
        this.base('page', 'page', function() {}, data, null, 'body', options);

        this.el = $('body');

        this.layoutTemplate = layoutTemplate;

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

          console.log('activating')

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
        this.prototype = new Module('page', 'page', null, data, null, 'body', options);
      };
      Modules.Page = Page;


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
              addModule('modal', data, 'body', { outsideModule: true });
              return false;
            }
          }, 'a');
        };

        // extend the module base
        this.prototype = new Module(id, type, template, data, parentModule, placeholder, options);
      };

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

      // module factory
      // returns a module as long as a valid moduleName is provided
      // moduleName must match the hbs template file name
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
                placeholder, 
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