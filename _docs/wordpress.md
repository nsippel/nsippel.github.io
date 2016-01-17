---
layout: docs
title: WordPress
permalink: /docs/wordpress/
---
After not working on WordPress projects for a while, I thought that it would be good to write down a short how to install a WordPress. Before installing WordPress, I set up a Linux server at Amazon Web Service (AWS), installed the Apache OS, PHP, Mysql and phpMyAdmin tool which are required for the WordPress installation. 

<h3>Install WordPress</h3>

{% highlight bash %}
~ $ cd /var/www/html # 1. Got to the document root.
~ $ wget http://wordpress.org/latest.tar.gz # 2. Download wordpress to your server.
~ $ tar -xzvf latest.tar.gz # 3: Unzip file latest.tar.gz.
~ $ mv wordpress 1-is # 4: Rename the wordpress folder (optional).
~ $ mv wp-config-sample.php 1-is/wp-config.php # 5: Create wordpress configuration file from wp-config-sample.php.
~ $ cd 1-is # 6: Create wordpress configuration file.
~ $ vi wp-config.php # 7: Modify wp-config.php using vim or other editor.
{% endhighlight %}

{% highlight vim %}
22 /** The name of the database for WordPress */
23 define('DB_NAME', 'blog');
24
25 /** MySQL database username */
26 define('DB_USER', 'root');
27
28 /** MySQL database password */
29 define('DB_PASSWORD', 'Ch2nn1ng');
30
31 /** MySQL hostname */
32 define('DB_HOST', 'wildbirdslife-dev.cj5p86rjr0to.us-west-1.rds.amazonaws.com');
{% endhighlight %}

 <h3>Install (Custom) WordPress Template</h3>
 
 Here is my new WordPress site: Http://www.wildbirdslife.com. duh