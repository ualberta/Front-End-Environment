# UAlberta Front-End Framework

The UAlberta front-end framework allows dynamic creation of the Framework modules through json data.


## Usage

Add `/build/js/main.min.js` (requires jQuery, and Handlebars Runtime) and `/build/css/framework.css` to your page.  You will then be able to access the pages and modules through `UAlberta.FrontEnd.Pages` and `UAlberta.FrontEnd.Modules` namespaces.

For example, this would create an institutional home page with a feature:

    // see sample page json in /src/assets/data
    var page = new UAlberta.FrontEnd.Pages.InstitutionalHome(data);

    // feature JSON data
    var feature = {
      "image" : "http://www.placehold.it/1680x504",
      "imageFocalPoint": "right",
      "heading" : "This is a sample feature.",
      "description" : "A sample description will follow the heading.",
      "buttons": [
        {
          "url": "#",
          "label": "Do Something!"
        }
      ],
      "boxPosition" : { "vertical": "bottom", "horizontal": "left" },
      "boxClass": "dark",
      "featureClass": "sample-feature"
    };

    // add the feature to the page.
    page.addFeature(feature);


**The JSON data format for each module is currently being documented.  For now, you can browse the [data folder](https://github.com/ualberta/front-end-framework/tree/master/src/assets/data) for some sample json files.**


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

