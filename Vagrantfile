# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
	config.vm.box = "debian/jessie64"

	# Create a forwarded port mapping which allows access to a specific port
	# within the machine from a port on the host machine. In the example below,
	# accessing "localhost:8080" will access port 80 on the guest machine.
	config.vm.network :forwarded_port, guest: 8000, host: 8000

	# Create a private network, which allows host-only access to the machine
	# using a specific IP.
	config.vm.network :private_network, ip: "192.168.44.10"
	config.vm.hostname = "symfony.dev"

	# speedup filesystem
	config.vm.synced_folder "./", "/var/www/", :mount_options => ['nolock,vers=3,udp,noatime,actimeo=1'], :export_options => ['async,insecure,no_subtree_check,no_acl,no_root_squash'], :nfs => true

	#config.vm.synced_folder "./", "/var/www/", owner: "vagrant", group: "www-data", mount_options: ["dmode=775,fmode=664"]

	config.vm.provider :virtualbox do |vb|
		vb.customize ["modifyvm", :id, "--memory", "2048"]
		vb.customize ["modifyvm", :id, "--cpus", "1"]
		vb.customize ["modifyvm", :id, "--hwvirtex", "on"]
		vb.customize ["modifyvm", :id, "--nestedpaging", "on"]

		# speed up network
	    vb.customize ["modifyvm", :id, "--nictype1", "virtio"]

	end

	config.vm.provision :shell, path: "./vagrant/provision.sh"
end
