var UAlberta = UAlberta || {};
(function (UAlberta) {

  (function (FrontEnd) {

    (function (Pages) {

      // TODO: size page content area if it does not fill the window
      function fillBrowserWindow() {

      };

      function Page(baseData) {
        this.base = baseData;
        this.layout = {};
        this.modules = new Array();

        this.addLayout = function(layoutName) {

        };

        this.addModule = function(componentName, data) {

        };

        this.buildPage = function() {

          // create base

          // add layout

          // add modules

        };

      };

      // creates base page (header/footer) based on the data passed
      function createBase(data) {
        UAlberta.FrontEnd.Modules.addBlade(data.blade);
        UAlberta.FrontEnd.Modules.addBanner(data.banner);
        UAlberta.FrontEnd.Modules.addGlobalNavigation(data.navigation);
        UAlberta.FrontEnd.Modules.addMobileNavigation(data.navigation);
        UAlberta.FrontEnd.Modules.addInstitutionalFooter(data.ualbertaFooter);
      }

      // loads default institutional base data, passes it to createBase
      function createInstitutionalBase() {
        $.getJSON( "assets/data/base_institutional.json", null, createBase)
          .fail( function(d, textStatus, error) {
            console.error("getJSON failed, status: " + textStatus + ", error: "+error)
          });
      };
      Pages.createInstitutionalBase = createInstitutionalBase;

      // loads default faculty base data, passes it to createBase
      function createFacultyBase() {
        $.getJSON( "assets/data/base_faculty.json", null, createBase)
          .fail( function(d, textStatus, error) {
            console.error("getJSON failed, status: " + textStatus + ", error: "+error)
          });
      };
      Pages.createFacultyBase = createFacultyBase;

      // create the base institutional homepage layout
      function createInstitutionalHomePage() {

        createInstitutionalBase();
        UAlberta.FrontEnd.Modules.addInstitutionalHomeLayout();

      };
      Pages.createInstitutionalHomePage = createInstitutionalHomePage;

      function createInstitutionalLandingPage() {

      };

      function createFacultyHomePage() {

      };

      function createFacultyLandingPage() {

      };

      function createContentPage() {

      };

    })(FrontEnd.Pages || (FrontEnd.Pages = {}));
    var Pages = FrontEnd.Pages;

    (function (Modules) {

      // TODO: removing items from this array could cause ID conflics. Fix that.
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

        /* TODO: provide a method to update the component with new data
        this.update = function(newData) {
          var updateEl = this.el;
          updateEl.empty();
          $(template(data)).children().each(function() {
            updateEl.append($(this));
          });
        };
        */


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
        pageModules.push(new Module(id, type, template, data, placeholder, options));
      };

      function addBlade(data, options) {

        var placeholder = "header";
        var template = UAlberta.FrontEnd.templates["blade.hbs"];
        var data = data;

        addModule('blade', 'blade', template, data, placeholder, options);

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
      Modules.addBlade = addBlade;

      function addBanner(data, options) {

        var placeholder = "header";
        var template = UAlberta.FrontEnd.templates["banner.hbs"];
        var data = data;

        addModule('banner', 'banner', template, data, placeholder, options);

      };
      Modules.addBanner = addBanner;

      function addGlobalNavigation(data, options) {

        var placeholder = "header";
        var template = UAlberta.FrontEnd.templates["global-navigation.hbs"];
        var data = data;

        addModule('global-nav', 'global-nav', template, data, placeholder, options);

      };
      Modules.addGlobalNavigation = addGlobalNavigation;

      function addMobileNavigation(data, options) {

        var placeholder = "header";
        var template = UAlberta.FrontEnd.templates["mobile-navigation.hbs"];
        var data = data;

        addModule('mobile-nav', 'mobile-nav', template, data, placeholder, options);

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
      Modules.addMobileNavigation = addMobileNavigation;

      function addInstitutionalHomeLayout() {
        var template = UAlberta.FrontEnd.templates["ualberta-home.hbs"];
        addModule('layout'+(pageModules.length+1), 'layout', template, {}, "#content-wrapper", {});
      };
      Modules.addInstitutionalHomeLayout = addInstitutionalHomeLayout;

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

      function addInstitutionalFooter(data, options) {

        var placeholder = "footer";
        var template = UAlberta.FrontEnd.templates["institutional-footer.hbs"];
        var data = data;

        addModule('institutional-footer', 'institutional-footer', template, data, placeholder, options);

      };
      Modules.addInstitutionalFooter = addInstitutionalFooter;

    })(FrontEnd.Modules || (FrontEnd.Modules = {}));
    var Modules = FrontEnd.Modules;

  })(UAlberta.FrontEnd || (UAlberta.FrontEnd = {}));
  var FrontEnd = UAlberta.FrontEnd;

})(UAlberta || (UAlberta = {}));