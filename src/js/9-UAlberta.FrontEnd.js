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

        this.addModuleToPage = function(moduleName,data,parent) {
          switch(moduleName) {
            case "content":
              self.modules.push(
                UAlberta.FrontEnd.Modules.addSidebarContentItem(data, parent)
              );
              break;
            case "social-media":
              self.modules.push(
                UAlberta.FrontEnd.Modules.addSidebarSocialMedia(data, parent)
              );
              break;
            case "data-list":
              self.modules.push(
                UAlberta.FrontEnd.Modules.addDataList(data, parent)
              );
              break;
            case "sb-data-list":
              self.modules.push(
                UAlberta.FrontEnd.Modules.addSidebarDataList(data, parent)
              );
              break;
            default:
              console.log("error: invalid module name");
            }
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
          UAlberta.FrontEnd.Modules.addSingleFeature(featureData, "#feature-area");
        };

        this.addExploreBar = function() {
          UAlberta.FrontEnd.Modules.addExploreBar("#explore-row");
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
        
        this.add();

      };

      function ExploreBarModule(id, type, template, data, placeholder, options) {
        
        // extend the module base
        this.base = Module;
        this.base(id, type, template, data, placeholder, options);

        this.exploreBar = null;

        this.base_add = this.add; // store the add function so we can extend it
        this.add = function() {
          this.base_add();

          this.exploreBar = $("#explore-bar").flexslider({
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
      }


      function addExploreBar(parent) {

        addModule('explore-bar', {}, parent, {});

        $("#explore-bar").flexslider({
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
      Modules.addExploreBar = addExploreBar;

      function addAccordion(data, parent) {

        addModule('accordion', data, parent, {});

        $('.accordion-toggle').on('click', function() { 
          $(this).parent().toggleClass('expanded'); 
          return false;
        }); 

      };
      Modules.addAccordion = addAccordion;



      function addModule(moduleName, data, parent, options) {

        var template = UAlberta.FrontEnd.templates[moduleName+".hbs"];

        // TODO append timestamp to id

        console.log(moduleName, data, parent, template, options);

        if(template) {
          return new Module(
            moduleName, 
            moduleName, 
            template, 
            data, 
            parent, 
            options
          );
        } else {
          console.log("error: template for " + moduleName + " not found.");
        } 

      };
      Modules.addModule = addModule;

      function addSingleFeature(data, parent, options) {
        addModule('single-feature', data, parent, options);
      }
      Modules.addSingleFeature = addSingleFeature;

      function addDataList(data, parent, options) {
        addModule('data-list', data, parent, options);
      }
      Modules.addDataList = addDataList;

      function addSidebarDataList(data, parent, options) {
        addModule('sidebar-links', data, parent, options);
      }
      Modules.addSidebarDataList = addSidebarDataList;

      function addSidebarContentItem(data, parent, options) {
        addModule('sidebar-content', data, parent, options);
      }
      Modules.addSidebarContentItem = addSidebarContentItem;

      function addSidebarSocialMedia(data, parent, options) {
        addModule('sidebar-social-media', data, parent, options);
      }
      Modules.addSidebarSocialMedia = addSidebarSocialMedia;


    })(FrontEnd.Modules || (FrontEnd.Modules = {}));
    var Modules = FrontEnd.Modules;

  })(UAlberta.FrontEnd || (UAlberta.FrontEnd = {}));
  var FrontEnd = UAlberta.FrontEnd;

})(UAlberta || (UAlberta = {}));