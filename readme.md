# UAlberta Front-End Framework

The UAlberta front-end framework provides a series of styled components and allows dynamic creation of modules using JSON data.

## What's Included

  - **CSS (LESS) styles**: All source files are located in the `/src/less` folder, and compiled to `/build/css/framework.min.css`
  - **Front end templating**: Markup templates (handlebars) for components are located in `/src/templates`.  The Javascript for rendering the components with JSON data is located in `/src/js/9-UAlberta.FrontEnd.js` which also requires the handlebars runtime (`/src/js/0-handlebars.runtime.js`), handlebars helpers (`/src/js/1-helpers.js`), and the pre-compiled handlebars templates (`/src/js/2-templates.js`).
  - **Grunt Tasks**: Grunt tasks (defined in `/GruntFile.js`) for auto-compiling, minifying, and serving static web content.
  - **Style Guide**: The style guide for the University of Alberta is included, and located at `/src/style-guide.html`

## Getting Started

### Requirements

  - node.js

Once you have node.js installed, clone this repository, navgate to the folder you have cloned it to in the terminal and run the following command:

      npm install
      
After the install is finished you can run:

      grunt develop
      
Which will watch all files in the `/src/` directory and any time a file is changed the following tasks will be performed:
  
  - Concatenate and minify all javascript files in `/src/js` to `/build/js/main.min.js`
  - Compile `/src/less/framework.less` to `/build/css/framework.css`
  - Compile all handlebars templates in `/src/templates` to `/src/js/2-templates.js`
  - Copy all files in `/src/assets/` to `/build/assets/`
  - Copy all html file in `/src/` to `/build/`
  - Start a web server on port 8080 that serves files from the `/build/` directory. (http://localhost:8080/)

When you are ready to make a production bundle, you can run the following command:

      grunt production
      
Which will perform the following tasks:

  - Concatenate and minify all javascript files in `/src/js` to `/build/js/UAlberta.FrontEnd.min.js`
  - Compile and minify `/src/less/framework.less` to `/build/css/framework.min.css`

## Usage

Add `/build/js/main.min.js` (requires jQuery) and `/build/css/framework.css` to your page. 

The javascript file will build a page object in the UAlberta namespace that you can add modules to with JSON data.

    // add a carousel to a specific selector on the page.
    UAlberta.page.addModule('carousel', './assets/data/components/sample-carousel.json', '#carousel-element');

    // or use the shortcut functions to add modules to predefined areas
    UAlberta.page.addFeature(featureData); 
    UAlberta.page.addToFirstColumn('data-list', newsData);
    UAlberta.page.addToSecondColumn('data-list', campusNoticeData); 
    UAlberta.page.addToSidebar('social-media', socialMediaData);

**The JSON data format for each module is currently being documented.  For now, you can browse the [data folder](https://github.com/ualberta/front-end-framework/tree/master/src/assets/data) for some sample json files.**


## Modules

You can add any module that has a valid handlebars template with:

    UAlberta.page.addModule(componentName, data, placeholder, options)

Where:

  - `componentName`: The name of the component's handlebars template file without the .hbs extension.
  - `data`: The data to provide to the template
  - `placeholder`: A selector string of the element that will contain this module
  - `options`: An object specifying the options for the module

#### Module Options
The following options are available for all modules:

  - `prepend`: If set to true, the module will be prepended to the container instead of appended.
  - `wrapperClass`: A class name to wrap the module in.
  - `header.heading`: A string containing a heading to place before the module.
  - `header.actions`: A list of buttons the user can interact with to perform actions relating to the module.
  - `footer.text`: A string containing some text to place after the module.
  - `footer.content`: A string containing HTML to place after the module.

##### Example
Here is a JSON object setting all the options for a module:

    {
        "prepend": true,
        "wrapperClass": "frame",
        "header": {
            "heading": "Here is the heading for a module",
            "actions": [
              {
                "url": "#",
                "type": "rss"
              },
              {
                "url": "#",
                "type": "envelope"
              }
            ]
        },
        "footer": {
            "text": "this text will be displayed below the module",
            "content": "<strong>This HTML will be displayed below the module.</strong>"
        }
    }

#### Properties
Each module has the following properties available to it:
  - `el`: The jQuery DOM element for the module
  - `parent`: The jquery parent DOM element of the module
  - `modules`: An array of modules the current module contains


Below you can find a list of modules that currently exist.

### Single Full Page Feature

Adds a single full page feature.

    UAlberta.page.addModule('single-feature', data, parent, options)

  - [View Sample Feature JSON](https://github.com/ualberta/front-end-framework/blob/master/src/assets/data/components/sample-feature.json)

#### Options
  - `alignment`: Set to "left" or "right" to force the image to stick to a side of the browser window on high resolutions. The image is centered by default
  - `boxPosition.vertical`: Set to "bottom" to anchor the content box to the bottom of the feature.  Vertically centered by default.
  - `boxPosition.horizontal`: Set to "left" or "right" to anchor the content box to either side of the feature.  Horizontally centered if not set.
  - `boxClass`: Set to "dark" for a dark treatment of the content box.
  - `featureClass`: A custom class to add to the feature wrapper element.

### Data Lists

    UAlberta.page.addModule('data-list', data, parent, options)
    UAlberta.page.addModule('sidebar-data-list', data, parent, options); // for sidebar

#### Treatmeants / Data
  - Link List [View Sample JSON](https://github.com/ualberta/front-end-framework/blob/master/src/assets/data/components/sample-link-list.json)
  - Heading, description list [View Sample JSON](https://github.com/ualberta/front-end-framework/blob/master/src/assets/data/components/sample-news-list.json)
  - Thumbnail, heading, description list [View Sample JSON](https://github.com/ualberta/front-end-framework/blob/master/src/assets/data/components/sample-thumbnail-data-list.json)

### Carousel

    UAlberta.page.addModule('carousel', data, parent, options)

Any carousel added to the content-inner section of the page will be wrapped with a white frame by default.  By passing the 'fullPage' option, you can force the carousel to appear at the top of the page and span the full width.

  - [View Sample Carousel JSON](https://github.com/ualberta/front-end-framework/blob/master/src/assets/data/components/sample-carousel.json)


### Sidebar Items / Nesting Modules

You can add any of the available modules into a sidebar item by creating the sidebar item, and adding a module to it.

    var sidebarItem = UAlberta.page.addToSidebar('sidebar-item', {
            header: {
              heading: "Sidebar Content"
            }
          });
    sidebarItem.addModule('name', data, ".sidebar-content", options)

  - [View Sample Sidebar Content JSON](https://github.com/ualberta/front-end-framework/blob/master/src/assets/data/components/sample-sidebar-content.json)

### Collapsible Navigation

    addModule('collapsible-navigation', data, parent, options)

### Accordion

    addModule('accordion', data, parent, options)

### Link Filter

    addModule('link-filter', data, parent, options)

### Video

    addModule('youtube-video', data, parent, options)

### Modals

    addModule('modal', data, parent, options)


### Folder Structure

#### Javascript
All javascript resides in the `/src/js/` folder.  Upon modification of any of the javascript files, the grunt task will compile all of the javascript files, uglify them and copy them to the `/build/js` folder.

  - `/src/js/*.js` -> compile in order of file name, uglify -> `/build/js/main.min.js`
  - `/src/js/libs/*.js` -> compile in order of file name, uglify -> `/build/js/libs.min.js`


#### LESS / CSS File Structure
Any modifications to CSS code should be applied to the less files located in the `src/less/` folder.  The folder is organized as follows:

  - `/src/less/framework.less` : The master less file that imports all of the partial less files
  - `/src/less/framework/base/` : This folder contains all of the less files for mixins, standard HTML elements, and elements that are common to every page (blade, banner, navigation, footer).
  - `/src/less/framework/components/` : Contains files that handle the styling of components. Each component has its own less file.
  - `/src/less/framework/layouts/` : Contains files that handle the content layout.


### Creating a Module

A module consists of three pieces:

  - `/src/templates/components/{{COMPONENT_NAME}}.hbs`: The handlebars template file for the markup
  - `/src/less/framework/components/_{{COMPONENT_NAME.less}}`: The less file containing the styling for the component (you need to reference this file in `components.less` to include it in framework.css)
  - data in json format

After creating these three pieces and compiling the templates and less files, you can add your module to any page with:

    UAlberta.page.addModule({{COMPONENT_NAME}}, {{DATA}}, {{PARENT}}, {{OPTIONS}})

