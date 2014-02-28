# What is this?

This is a base vagrant box with npm and grunt tasks preconfigured that will:

  - Serve files from the `/build` directory
    - auto refresh when there are html, css, or js changes (via [reload](https://www.npmjs.org/package/reload))
  - Watch `/src/less/style.less` for changes 
    - compile into css file in `/build/css` 
  - Watch `.js` files for changes 
    - concatenate vendor scripts in `/src/js/vendor`
    - concatenate author scripts in `/src/js`
    - uglify
    - copy to `/build/js`
  - Watch `.html` files for changes
    - copy to `/build` when modified

## Getting Started

  - Install [VirtualBox](https://www.virtualbox.org/wiki/Downloads)
  - Install [Vagrant](http://www.vagrantup.com/downloads.html)

Once you have VirtualBox and Vagrant installed, clone this repository.  Go into the "tools" folder and run `mac-start.command` (Mac/Linux) or `win-start.bat` (Windows).

Running the start command will download the development environment and run it on your machine.  The initial download / setup will only happen the first time.

Once the initial setup is complete, you will see a notification in the terminal window that it is watching files.

If you navigate to `http://localhost:3333/` you should see a "Hello World!" page. 

Using the editor of your choice, you can modify the  less, js, or html files in the `/src` folder and see a live preview in your browser.


## Usage

You can start the development environment by opening one of the two files, depending on your OS:

  - `/tools/mac-start.command`: Mac and Linux
  - `/tools/win-start.bat`: Windows
  
Leave the terminal window open while you do your development.

When you're finished using the development environment, run one of these to shut it down:

  - `/tools/mac-stop.command`: Mac and Linux
  - `/tools/win-stop.bat`: Windows
  
### Command Line Usage

If you prefer to use the command line to start up / shut down, go to the repository root directory and run one of these:

  - `vagrant up --provision`: boots up the environment, installs any dependencies in package.json, start the web server, and run the default grunt task.
  - `vagrant halt`: shuts down the development environment.
  - `vagrant up`: boots up the machine, but doesn't start the dependency installation / web server / grunt task
    - after running `vagrant up` without the `--provision` flag you can run `vagrant ssh` to get to the shell of the dev environment and install any additional software you may need.