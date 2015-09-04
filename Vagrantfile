# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  # All Vagrant configuration is done here. The most common configuration
  # options are documented and commented below. For a complete reference,
  # please see the online documentation at vagrantup.com.

    config.vm.define :symfony do |symfony|
    # Every Vagrant virtual environment requires a box to build off of.
    symfony.vm.box = "debian/jessie64"
#   symfony.vm.box_url = "https://cloud-images.ubuntu.com/vagrant/trusty/current/trusty-server-cloudimg-amd64-vagrant-disk1.box"

    # Create a forwarded port mapping which allows access to a specific port
    # within the machine from a port on the host machine. In the example below,
    # accessing "localhost:8080" will access port 80 on the guest machine.
    symfony.vm.network :forwarded_port, guest: 8000, host: 8000

    # Create a private network, which allows host-only access to the machine
    # using a specific IP.
    symfony.vm.network :private_network, ip: "192.168.44.10"

  	symfony.vm.synced_folder "./", "/var/www/", :mount_options => ['nolock,vers=3,udp,noatime,actimeo=1'], :export_options => ['async,insecure,no_subtree_check,no_acl,no_root_squash'], :nfs => true

	symfony.vm.provider :virtualbox do |vb|
	  vb.name = "symfony"
	  vb.customize ["modifyvm", :id, "--memory", "2048"]
	  vb.customize ["modifyvm", :id, "--cpus", "1"]
	  vb.customize ["modifyvm", :id, "--hwvirtex", "on"]
	  vb.customize ["modifyvm", :id, "--nestedpaging", "on"]
	end

	symfony.vm.provision :shell, path: "./vagrant/provision.sh"
	end
end