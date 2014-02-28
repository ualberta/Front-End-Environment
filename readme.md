# UAlberta Front-End Framework

The UAlberta front-end framework allows dynamic creation of the Framework modules through json data.


## Usage

Add main.min.js (requires jQuery, and Handlebars Runtime) and framework.css to your page.  You will then be able to access the pages and modules through `UAlberta.FrontEnd.Pages` and `UAlberta.FrontEnd.Modules` namespaces.

For example, here is how the UAlberta.ca homepage could by dynamicly created:

    // Setup a new institutional homepage
    var page = new UAlberta.FrontEnd.Pages.InstitutionalHome(data);

    // Add a feature to the page
    page.addFeature(data);

    // Add the explore bar
    page.addExploreBar();

    // Add a module to the first column
    page.addToFirstColumn('data-list', data);

    // Add two modules to the second column
    page.addToSecondColumn('data-list', data);
    page.addToSecondColumn('data-list', data);

    // add sidebar modules
    page.addToSidebar('social-media', data);
    page.addToSidebar('content', data);

    page.build();

**The JSON data format for each module is currently being documented.  For now, you can browse the [data folder](https://github.com/ualberta/front-end-framework/tree/master/src/assets/data) for some sample json files.**


## Contributing

this repository has a base vagrant box with npm and grunt tasks preconfigured that will:

  - Serve files from the `/build` directory
    - auto refresh when there are html, css, or js changes (via [reload](https://www.npmjs.org/package/reload))
  - Watch `/src/less/framework.less` for changes 
    - compile into css file in `/build/css` 
  - Watch `.js` files for changes 
    - concatenate vendor scripts in `/src/js/vendor`
    - concatenate author scripts in `/src/js`
    - uglify
    - copy to `/build/js`
  - Watch `.html` files for changes
    - copy to `/build` when modified
  - Watch `/src/templates/` for `.hbs` tempate changes 
    - compiles the templates into `/build/js/templates.js`, which are accessible through `UAlberta.FrontEnd.templates`

### Getting Started

  - Install [VirtualBox](https://www.virtualbox.org/wiki/Downloads)
  - Install [Vagrant](http://www.vagrantup.com/downloads.html)

Once you have VirtualBox and Vagrant installed, clone this repository.  Go into the "tools" folder and run `mac-start.command` (Mac/Linux) or `win-start.bat` (Windows).

Running the start command will download the development environment and run it on your machine.  The initial download / setup will only happen the first time.

Once the initial setup is complete, you will see a notification in the terminal window that it is watching files.

If you navigate to `http://localhost:3333/` you should see a "Hello World!" page. 

Using the editor of your choice, you can modify the  less, js, or html files in the `/src` folder and see a live preview in your browser.

Run the "stop" command that corresponds to your Operating System to stop the development environment.


### Creating a Module

A module consists of three pieces:

  - `/src/templates/components/{{COMPONENT_NAME}}.hbs`: The handlebars template file for the markup
  - `/src/less/framework/components/_{{COMPONENT_NAME.less}}`: The less file containing the styling for the component (you need to reference this file in `components.less` to include it in framework.css)
  - `/src/js/UAlberta.FrontEnd.js`: A function in the Modules namespace that specified the template to use.

