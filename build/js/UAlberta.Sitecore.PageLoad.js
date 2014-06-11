/**
* UAlberta Sitecore Page Load
* Script that is run on every page load to provide certain site wide functionality
*/

// All functionality that needs to be called on dom ready
$(document).ready(function () {

    //Setting Global Variables
    var winHeight = $(window).height(),
        headHeight = $('header').height(),
        footerHeight = $('footer').height(),
        bodyMinHeight = winHeight - (headHeight + footerHeight + 20),
        navTitle = $('#main-nav .navigation-toggle span');

    $('.content-wrapper').css('min-height', bodyMinHeight + 'px');
    $('.heading-link').tooltip();

    // navigation
    $('.nav-toggle').on('click', function (e) {
        $(this).parent().toggleClass('expanded');
        $(this).parent().parent().toggleClass('nav-expand');
        e.stopPropagation();
        return false;
    });
    $('.navigation-toggle').on('click', function (e) {
        $('header .nav-wrapper').toggleClass('on');
        e.stopPropagation();
        return false;
    });
    $('header .nav-wrapper').on('show', function () {
        navTitle.html('Hide Navigation');
    });
    $('header .nav-wrapper').on('hide', function () {
        navTitle.html('Show Navigation');
    });

    // Processes the Emergency messaging call to check for any emergency messages to be displayed
    UAlberta.Sitecore.EmergencyMessage.GetMessages();

    //run the collapse plugin for Bootstrap. Initializes all collapsible elements
    $(".collapse").collapse();

    //Set up input placeholders for browsers that do not support them
    UAlberta.InputPlaceholders.initialize();
});

//Index of functionality for Older IE Versions
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (elt /*, from*/) {
        var len = this.length >>> 0;

        var from = Number(arguments[1]) || 0;
        from = (from < 0)
                        ? Math.ceil(from)
                        : Math.floor(from);
        if (from < 0)
            from += len;

        for (; from < len; from++) {
            if (from in this &&
                            this[from] === elt)
                return from;
        }
        return -1;
    };
}

// make sure the sidebar does not extend past content area on desktop view
$(document).ready(function () {
    var contentContainer = null;
    var nudgeOffset = 110;

    if ($('.content-wrapper').hasClass('landing-page')) {
        contentContainer = $('.content-wrapper.landing-page');
    }

    if ($('.content-wrapper').hasClass('tertiary')) {
        contentContainer = $('.content-wrapper.tertiary');
    }

    function resizeContainer() {
        if ($(window).width() > 979 && contentContainer) {
            contentContainer.css('min-height', ($('.sidebar').height() + nudgeOffset) + 'px');
        }
    };

    resizeContainer();
    $(window).resize(resizeContainer);
});