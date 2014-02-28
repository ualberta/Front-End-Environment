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

        // Private 

        function addBlade() {

          var template = UAlberta.FrontEnd.templates["blade.hbs"];

          self.modules.push(
            UAlberta.FrontEnd.Modules.addModule(
              'blade', 
              'blade', 
              template, 
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

          var template = UAlberta.FrontEnd.templates["banner.hbs"];

          self.modules.push(
            UAlberta.FrontEnd.Modules.addModule(
              'banner', 
              'banner', 
              template, 
              self.baseData.banner, 
              'header', 
              {}
            )
          );

        };

        function addGlobalNavigation() {

          var template = UAlberta.FrontEnd.templates["global-navigation.hbs"];

          self.modules.push(
            UAlberta.FrontEnd.Modules.addModule(
              'global-nav', 
              'global-nav', 
              template, 
              self.baseData.navigation, 
              'header', 
              {}
            )
          );

        };

        function addMobileNavigation() {
        
          var template = UAlberta.FrontEnd.templates["mobile-navigation.hbs"];
            
          self.modules.push(
            UAlberta.FrontEnd.Modules.addModule(
              'mobile-nav', 
              'mobile-nav', 
              template, 
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

          var template = UAlberta.FrontEnd.templates["institutional-footer.hbs"];

          self.modules.push(
            UAlberta.FrontEnd.Modules.addModule(
              'institutional-footer', 
              'institutional-footer', 
              template, 
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

        this.addFeature = function(featureData) {
          UAlberta.FrontEnd.Modules.addSingleFeature(featureData, "#feature-area");
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

      // TODO: removing items from this array could cause ID conflics. Fix that.
      //       or keep the modules in the page.
      var pageModules = new Array(); 

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

        this.base_add = this.add; // store the add function so we can extend it
        this.add = function() {
          this.base_add();

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

        // extend the module base
        this.prototype = new Module(id, type, template, data, placeholder, options);
      }

      function addModule(id, type, template, data, placeholder, options) {
        var mod = new Module(id, type, template, data, placeholder, options);
        pageModules.push(mod);
        return mod;
      };
      Modules.addModule = addModule;

      function addExploreBar(parent) {

        var template = UAlberta.FrontEnd.templates["explore-bar.hbs"];
        addModule('explore-bar'+(pageModules.length+1), 'explore-bar', template, {}, parent, {});

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

      function addWhyUAlbertaRow(parent) {

        var template = UAlberta.FrontEnd.templates["why-ualberta-row.hbs"];
        addModule('why'+(pageModules.length+1), 'why', template, {}, parent, {});
      };
      Modules.addWhyUAlbertaRow = addWhyUAlbertaRow;

      function addSingleFeature(data, parent, options) {
        var template = UAlberta.FrontEnd.templates["single-feature.hbs"];
        addModule('single-feature-'+(pageModules.length+1), 'single-feature', template, data, parent, options);
      }
      Modules.addSingleFeature = addSingleFeature;

      function addDataList(data, parent, options) {
        var template = UAlberta.FrontEnd.templates["data-list.hbs"];
        addModule('data-list-'+(pageModules.length+1), 'data-list', template, data, parent, options);
      }
      Modules.addDataList = addDataList;

      function addSidebarContentItem(data, parent, options) {
        var template = UAlberta.FrontEnd.templates["sidebar-content.hbs"];
        addModule('sidebar-content-'+(pageModules.length+1), 'sidebar-content', template, data, parent, options);
      }
      Modules.addSidebarContentItem = addSidebarContentItem;

      function addSidebarSocialMedia(data, parent, options) {
        var template = UAlberta.FrontEnd.templates["sidebar-social-media.hbs"];
        addModule('sidebar-social-media-'+(pageModules.length+1), 'sidebar-social-media', template, data, parent, options);
      }
      Modules.addSidebarSocialMedia = addSidebarSocialMedia;


    })(FrontEnd.Modules || (FrontEnd.Modules = {}));
    var Modules = FrontEnd.Modules;

  })(UAlberta.FrontEnd || (UAlberta.FrontEnd = {}));
  var FrontEnd = UAlberta.FrontEnd;

})(UAlberta || (UAlberta = {}));