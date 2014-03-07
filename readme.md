# UAlberta Front-End Framework

The UAlberta front-end framework allows dynamic creation of pages and modules within the UAlberta Framework using JSON data.

## Usage

Add `/build/js/main.min.js` (requires jQuery, and Handlebars Runtime) and `/build/css/framework.css` to your page, then add modules to the page by passing the JSON data, and a selector string that represents the placeholder to insert the module into.

    // add a full width feature to a page
    UAlberta.Modules.addModule('single-feature', jsonData, '#feature-area');
    

You can also build entire pages and layouts from JSON data (recommended for testing purposes only).  For example, you could build a replica of the [UAlberta home page](http://www.ualberta.ca/) with:

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


## Modules

You can add any module that has a valid handlebars template with:

    UAlberta.FrontEnd.Modules.addModule(templateName, data, parent,options)

Where:

  - `templateName`: The name of the handlebars file without the .hbs extension.
  - `data`: The data to provide to the template
  - `parent`: A selector string of the element that will contain this module
  - `options`: An object specifying the options for the module

#### Module Options
The following options are available for all modules:

  - `heading`: A string containing a heading to place before the module.
  - `caption`: A string containing some text to place after the module.

Below you can find a list of modules that currently exist.

### Single Full Page Feature

Adds a single full page feature.

    addModule('single-feature', data, parent, options)

  - [View Sample Feature JSON](https://github.com/ualberta/front-end-framework/blob/master/src/assets/data/components/sample-feature.json)

#### Options
  - `alignment`: Set to "left" or "right" to force the image to stick to a side of the browser window on high resolutions. The image is centered by default
  - `boxPosition.vertical`: Set to "bottom" to anchor the content box to the bottom of the feature.  Vertically centered by default.
  - `boxPosition.horizontal`: Set to "left" or "right" to anchor the content box to either side of the feature.  Horizontally centered if not set.
  - `boxClass`: Set to "dark" for a dark treatment of the content box.
  - `featureClass`: A custom class to add to the feature wrapper element.

### Data Lists

    addModule('data-list', data, parent, options)
    addModule('sidebar-data-list', data, parent, options); // for sidebar

#### Treatmeants / Data
  - Link List [View Sample JSON](https://github.com/ualberta/front-end-framework/blob/master/src/assets/data/components/sample-link-list.json)
  - Heading, description list [View Sample JSON](https://github.com/ualberta/front-end-framework/blob/master/src/assets/data/components/sample-news-list.json)
  - Thumbnail, heading, description list [View Sample JSON](https://github.com/ualberta/front-end-framework/blob/master/src/assets/data/components/sample-thumbnail-data-list.json)

### Carousel

    addModule('carousel', data, parent, options)

Any carousel added to the content-inner section of the page will be wrapped with a white frame by default.  By passing the 'fullPage' option, you can force the carousel to appear at the top of the page and span the full width.

  - [View Sample Carousel JSON](https://github.com/ualberta/front-end-framework/blob/master/src/assets/data/components/sample-carousel.json)


### Sidebar Content

    addModule('sidebar-content', data, parent, options)

  - [View Sample Sidebar Content JSON](https://github.com/ualberta/front-end-framework/blob/master/src/assets/data/components/sample-sidebar-content.json)

### Sidebar Social Media

    addModule('sidebar-social-media', data, parent, options)

  - [View Sample JSON](https://github.com/ualberta/front-end-framework/blob/master/src/assets/data/components/sample-sidebar-social-media.json)

### Collapsible Navigation

    adModule('collapsible-navigation', data, parent, options)

### Accordion

    addModule('accordion', data, parent, options)

### Link Filter

    addModule('link-filter', data, parent, options)

### Video

    addModule('video', data, parent, options)

### Modals

    addModule('modal', data, parent, options)

## Pages

### `Page(baseData, options)`

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
  - `addWhyUAlberta()`: static for now
  - `addExploreBar()`: static for now
  - `addToFirstColumn(moduleName, data)`: "data-list" is currently the only valid moduleName in the first column.
  - `addToSecondColumn(moduleName, data)`
  - `addToSidebar(moduleName, data)`


## Contributing

### Getting Started

  - Install [VirtualBox](https://www.virtualbox.org/wiki/Downloads)
  - Install [Vagrant](http://www.vagrantup.com/downloads.html)

Once you have VirtualBox and Vagrant installed, clone this repository.  Go into the "tools" folder and run `mac-start.command` (Mac/Linux) or `win-start.bat` (Windows).

Running the start command will download the development environment and run it on your machine.  The initial download / setup will only happen the first time.

Once the initial setup is complete, you will see a notification in the terminal window that it is watching files.

If you navigate to `http://localhost:3333/` you should be served the `/build/index.html` file. 

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
  - data in json format

After creating these three pieces and compiling the templates and less files, you can add your module to any page with:

    UAlberta.FrontEnd.Modules.addModule({{COMPONENT_NAME}}, {{DATA}}, {{PARENT}})

