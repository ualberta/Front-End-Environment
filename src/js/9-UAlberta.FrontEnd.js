var UAlberta = UAlberta || {};
(function (UAlberta) {

  (function (FrontEnd) {

    (function (Pages) {

      // TODO: size page content area if it does not fill the window
      function fillBrowserWindow() {

      };

      function Page(baseData) {
        this.baseData = baseData;

        this.modules = new Array();

        var self = this;

        // Public

        // Sets the layout of the content area, called after build()
        this.setLayout = function(layoutName) {
          switch(layoutName) {
            case "ualberta-home":
              var template = UAlberta.FrontEnd.templates["ualberta-home.hbs"];
              $("#content-wrapper").html(template({}));
              break;
            default:
              console.log("error: invalid layout");
          }
        };

        // Creates a base page with no layout
        this.build = function() {

          if(self.baseData.blade)
            addBlade();

          if(self.baseData.banner)
            addBanner();

          if(self.baseData.navigation) {
            addGlobalNavigation();
            addMobileNavigation();
          }
          
          if(self.baseData.secondaryFooter)
            addSecondaryFooter();
          
          if(self.baseData.ualbertaFooter)
            addInstitutionalFooter();

        };

        this.addModuleToPage = function(moduleName,data,parent,options) {
          UAlberta.FrontEnd.Modules.addModule(moduleName,data,parent,options);
        };

        // Private 

        function addBlade() {

          self.modules.push(
            UAlberta.FrontEnd.Modules.addModule(
              'blade', 
              self.baseData.blade, 
              'header', 
              {}
            )
          );

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

        };

        function addBanner() {

          self.modules.push(
            UAlberta.FrontEnd.Modules.addModule(
              'banner', 
              self.baseData.banner, 
              'header', 
              {}
            )
          );

        };

        function addGlobalNavigation() {

          self.modules.push(
            UAlberta.FrontEnd.Modules.addModule(
              'global-navigation', 
              self.baseData.navigation, 
              'header', 
              {}
            )
          );

        };

        function addMobileNavigation() {
                    
          self.modules.push(
            UAlberta.FrontEnd.Modules.addModule(
              'mobile-navigation', 
              self.baseData.navigation, 
              'header', 
              {}
            )
          );

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

        function addSecondaryFooter() {

        };

        function addInstitutionalFooter() {

          self.modules.push(
            UAlberta.FrontEnd.Modules.addModule(
              'institutional-footer', 
              self.baseData.ualbertaFooter, 
              'footer', 
              {}
            )
          );

        };

      };

      // Create an institutional home page layout
      // @extends Page
      function InstitutionalHome(baseData) {
        this.base = Page;
        this.base(baseData);

        this.baseData = baseData;

        var self = this;

        this.addFeature = function(featureData) {
          if(featureData.features.length == 1)
            UAlberta.FrontEnd.Modules.addModule('single-feature',featureData, "#feature-area");
          else
            UAlberta.FrontEnd.Modules.addModule('carousel-feature',featureData, "#feature-area");
        };

        this.addExploreBar = function() {
          UAlberta.FrontEnd.Modules.addModule('explore-bar', null, "#explore-row");
        };

        this.addToFirstColumn = function(moduleName, data) {
          this.addModuleToPage(moduleName,data,"#first-column");
        };

        this.addToSecondColumn = function(moduleName, data) {
          this.addModuleToPage(moduleName,data,"#second-column");
        };

        this.addToSidebar = function(moduleName, data) {
          this.addModuleToPage(moduleName,data,"#sidebar");
        };

        this.base_build = this.build;
        this.build = function() {
          this.base_build();
          this.setLayout("ualberta-home");
        }

        this.build();

        this.prototype = new Page(baseData);

      }
      Pages.InstitutionalHome = InstitutionalHome;


    })(FrontEnd.Pages || (FrontEnd.Pages = {}));
    var Pages = FrontEnd.Pages;



    // MODULES
    // ---------

    (function (Modules) {

      // creates a new module on the page, 
      // provided a template, data, and parent.
      function Module(id, type, template, data, placeholder, options) {

        this.type = type;
        this.placeholder = placeholder;
        this.template = template;
        this.data = data;
        this.id = id;
        this.options = options;

        // need to add the ID to the dom element
        this.el = $(template(data));

        this.add = function() {
          $(this.placeholder).append(this.el);
        };

        this.remove = function() {
          this.el.remove();
        };

        this.update = function(newData) {
          /* TODO: provide a method to update the component with new data
          var updateEl = this.el;
          updateEl.empty();
          $(template(data)).children().each(function() {
            updateEl.append($(this));
          });
          */
        };

      };

      function ExploreBar(id, type, template, data, placeholder, options) {
        
        // extend the module base
        this.base = Module;
        this.base(id, type, template, data, placeholder, options);

        var self = this;

        this.base_add = this.add; 
        this.add = function() {
          this.base_add();

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

      function Accordion(id, type, template, data, placeholder, options) {
        
        // extend the module base
        this.base = Module;
        this.base(id, type, template, data, placeholder, options);

        var self = this;

        this.base_add = this.add; 
        this.add = function() {
          this.base_add();

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

        this.base_add = this.add; 
        this.add = function() {
          this.base_add();

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

        this.base_add = this.add; 
        this.add = function() {
          this.base_add();

          this.el.find('.link-mod-category:first').addClass('link-mod-active');

          this.el.on({
            click: function() {
              module.el.find('.link-mod-active').removeClass('link-mod-active');
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
    
        this.base_add = this.add; 
        this.add = function() {
          this.base_add();

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

        if(template) {
          var moduleConstructor;
          switch(moduleName) {
            case 'explore-bar':
              moduleConstructor = ExploreBar;
              break;
            case 'accordion':
              moduleConstructor = Accordion;
              break;
            case 'left-navigation':
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
            default:
              moduleConstructor = Module;
          }
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