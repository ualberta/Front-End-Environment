# UAlberta Front-End Framework

The UAlberta front-end framework allows dynamic creation of pages and modules within the UAlberta Framework using JSON data.

## Usage

Add `/build/js/main.min.js` (requires jQuery, and Handlebars Runtime) and `/build/css/framework.css` to your page.  You will then be able to access the pages and modules through `UAlberta.FrontEnd.Pages` and `UAlberta.FrontEnd.Modules` namespaces.

For example, you could build a replica of the [UAlberta home page](http://www.ualberta.ca/) with:

    // CREATE BASE PAGE

    var page = new UAlberta.FrontEnd.Pages.InstitutionalHome(pageData);


    // ADD MODULES

    page.addFeature(featureData); 

    page.addWhyUAlberta();

    page.addExploreBar();

    page.addToFirstColumn('data-list', newsData);

    page.addToSecondColumn('data-list', campusNoticeData); 

    page.addToSecondColumn('data-list', blogData);  

    page.addToSidebar('content', contentData);

    page.addToSidebar('social-media', socialMediaData);



**The JSON data format for each module is currently being documented.  For now, you can browse the [data folder](https://github.com/ualberta/front-end-framework/tree/master/src/assets/data) for some sample json files.**

## Pages

### `Page(baseData)`

  - [View Institutional Sample JSON](https://github.com/ualberta/front-end-framework/blob/master/src/assets/data/base_institutional.json)
  - [View Faculty Sample JSON](https://github.com/ualberta/front-end-framework/blob/master/src/assets/data/base_faculty.json)

Creates a page with the base data provided.  The base data contains: 

  - blade logo (if any)
  - quick links
  - banner logo (if any)
  - site title
  - audience links (if any)
  - global navigation
  - mobile navigation
  - secondary footer data (if any)
  - ualberta footer links

The base page does not have a layout and does not automatically build when created.

#### `Page.setLayout(layoutName)`

Adds the specified layout to the page.  Currently `ualberta-home` is the only valid layout.

### `InstitutionalHome(baseData)`

Extends `Page` and provides the following additional functions:

  - `addFeature(data)`
  - `addWhyUAlberta()`
  - `addExploreBar()`
  - `addToFirstColumn(moduleName, data)` - "data-list" is currently the only valid moduleName in the first column.
  - `addToSecondColumn(moduleName, data)`
  - `addToSidebar(moduleName, data)`

## Modules

To add a module to an existing page, you need the following three parameters:

  - `data`: The JSON data for the module
  - `parent`: a string containing a selector to append the markup to
  - `options`: any additional options for the module

So far, the following modules have been inplemented.

### `addSingleFeature(data, parent, options)`

  - [View Sample Feature JSON](https://github.com/ualberta/front-end-framework/blob/master/src/assets/data/components/sample-feature.json)

### `addDataList(data, parent, options)`

  - [View Sample News List JSON](https://github.com/ualberta/front-end-framework/blob/master/src/assets/data/components/sample-news-list.json)
  - [View Sample Link List JSON](https://github.com/ualberta/front-end-framework/blob/master/src/assets/data/components/sample-link-list.json)

### `addSidebarContentItem(data, parent, options)`

  - [View Sample Sidebar Content JSON](https://github.com/ualberta/front-end-framework/blob/master/src/assets/data/components/sample-sidebar-content.json)

### `addSidebarSocialMedia(data, parent, options)`

  - [View Sample JSON](https://github.com/ualberta/front-end-framework/blob/master/src/assets/data/components/sample-sidebar-social-media.json)

## Contributing

### Getting Started

  - Install [VirtualBox](https://www.virtualbox.org/wiki/Downloads)
  - Install [Vagrant](http://www.vagrantup.com/downloads.html)

Once you have VirtualBox and Vagrant installed, clone this repository.  Go into the "tools" folder and run `mac-start.command` (Mac/Linux) or `win-start.bat` (Windows).

Running the start command will download the development environment and run it on your machine.  The initial download / setup will only happen the first time.

Once the initial setup is complete, you will see a notification in the terminal window that it is watching files.

If you navigate to `http://localhost:3333/` you should see a "Hello World!" page. 

Using the editor of your choice, you can modify the  less, js, or html files in the `/src` folder and see a live preview in your browser.

Run the "stop" command that corresponds to your Operating System to stop the development environment.

The development environment is preconfigured with npm and grunt tasks that will:

  - Serve files from the `/build` directory
    - auto refresh when there are html, css, or js changes (via [reload](https://www.npmjs.org/package/reload))
  - Watch `.less` files in `/src/less/` for changes 
    - compile into `/build/css/framework.css` 
  - Watch `*.js` files in `/src/js` for changes 
    - concatenate vendor scripts in `/src/js/vendor`
    - concatenate author scripts in `/src/js`
    - uglify
    - copy to `/build/js`
  - Watch `.html` files in `/src/` for changes
    - copy to `/build` when modified
  - Watch `/src/templates/` for `.hbs` tempate changes 
    - compiles the templates into `/build/js/templates.js`, which are accessible through `UAlberta.FrontEnd.templates`


### Creating a Module

A module consists of three pieces:

  - `/src/templates/components/{{COMPONENT_NAME}}.hbs`: The handlebars template file for the markup
  - `/src/less/framework/components/_{{COMPONENT_NAME.less}}`: The less file containing the styling for the component (you need to reference this file in `components.less` to include it in framework.css)
  - `/src/js/UAlberta.FrontEnd.js`: A function in the Modules namespace that specified the template to use.


