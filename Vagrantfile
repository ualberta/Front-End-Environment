# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

  # Every Vagrant virtual environment requires a box to build off of.
  config.vm.box = "static-front-end-env"

  # The url from where the 'config.vm.box' box will be fetched if it
  # doesn't already exist on the user's system.
  config.vm.box_url = "https://dl.dropboxusercontent.com/s/by5arwbadp1v580/front-end-dev-base.box"

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine. In the example below,
  # accessing "localhost:8080" will access port 80 on the guest machine.
  config.vm.network :forwarded_port, guest: 8080, host: 3333

  # install any dependencies in packages.json
  config.vm.provision :shell, :inline => "cd /vagrant ; sudo npm install"

  # run reload in a detached screen, to reload the browser when 
  # files in the "build" folder change
  config.vm.provision :shell, :inline => "cd /vagrant/build ; screen -dm reload -p 8080"

  # run the default grunt task for the project
  config.vm.provision :shell, :inline => "cd /vagrant ; grunt default --verbose"

end
