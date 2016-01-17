---
layout: docs
title: Blink Text with a New Blink Tag
permalink: /docs/intro/
---

In this Collection Section, I included some of the code and techniques that I created or used in developing my portfolio.

According to W3C the blink tag is obsolete and a non-conforming feature in HTML5. I like a blink function for this site, so I wrote a short snippet to create a blink functionality with jquery and called it as &lt;jsblink&gt; tag. tag tag.

<div class="code-highlight highlight-javascript blink-text">
{% highlight javascript %}   
    $(function(){ 
        
        /* Begin create a blink tag and function 
         * Create html tag <jsblink>
         * Create css class jsblink.blink and append it to the head of the document
         * Toggle the class jsblink at interval 700 ms
         */
        document.createElement('jsblink');
        var style = "<style type='text/css'>" +
                        "jsblink.blink { " +
                            "opacity: 0.0; " +
                            "filter: alpha(opacity=0); /* For IE8 and earlier */ }" +
                    "</style>";
        $(style).appendTo("head");
        setInterval("$('jsblink').toggleClass('blink')",700);
            
        /* End create a blink tag and function */
    });
{% endhighlight %}
</div>

<h3>Example:</h3> &lt;jsblink&gt; <span class="green-bright"> &#9608; </span>&lt;\jsblink&gt;
  
<div class="grid terminal blink-text">
    <div class="code">
        <p class="title"><img src="/img/mac-max.png" alt=""  align="left">&nbsp;</p>
        <div class="shell  green-bright">
            <p class="line">
                <jsblink>&#9608;</jsblink>
            </p>
        </div>
    </div>
</div>