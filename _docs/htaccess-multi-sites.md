---
layout: docs
title: .htaccess for multi sites
permalink: /docs/htaccess-multi-sites/
---

This is just one simple tip to configure the .htaccess for hosting a multiple domains in 1 document root.

RewriteCond %{HTTP_HOST} ^(www.)?example1.com$   
RewriteRule !^subfolder1/ subfolder1%{REQUEST_URI} [L]
RewriteCond %{HTTP_HOST} ^(www.)?example2.com$   
RewriteRule !^subfolder2/ subfolder2%{REQUEST_URI} [L]