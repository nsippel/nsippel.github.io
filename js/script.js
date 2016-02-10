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
	
	// Activate Bootstrap tool tip class.
	$('[data-toggle="tooltip"]').tooltip();
	
	// Activate Bootstrap tool pop over class.
	$('[data-toggle="popover"]').popover();
	
	/* Bootstrap Carousel configuration */
	$('.carousel').carousel({
		interval: false,
		wrap: false
	});

    /*
     * Js functions for the form on the Contact Us page. Try to hide my email from the spampambotbot.
    */
    var formspreeUrl = '//formspree.io/' + 'n.sippel' + '@' + '1-to' + '.' + 'com';
    
	/* Generate a simple mathematic captcha for the contact us form*/
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function generateCaptcha() {
        $('#captchaOperation').html([randomNumber(1, 100), '+', randomNumber(1, 200), '='].join(' '));
    }

    generateCaptcha();

	/* Validate the form on the Contact Us Page */
	$("#contact-form").bootstrapValidator({
        feedbackicons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
		fields :{
			name: {
				validators: {
                    notEmpty: {
                        message: 'The name is required'
                    }
                }
			},
			_replyto: {
                validators: {
                    notEmpty: {
                        message: 'The email address is required'
                    },
                    emailAddress: {
                        message: 'The input is not a valid email address'
                    }
                }
            },
            message: {
                validators: {
                    notEmpty: {
                        message: 'The message is required'
                    },
                    stringLength: {
                        max: 700,
                        message: 'The message must be less than 700 characters long'
                    }
                }
            },
            captcha: {
                validators: {
                    callback: {
                        message: 'Wrong answer',
                        callback: function(value, validator, $field) {
                            var items = $('#captchaOperation').html().split(' '),
                                sum   = parseInt(items[0]) + parseInt(items[2]);
                            return value == sum;
                        }
                    }
                }
            }
		}
	}).on("success.form.bv",function( e ) {
        // Prevent default form submission
        e.preventDefault();

        $.ajax({
            url: formspreeUrl,
            method: 'POST',
            data: $('#contact-form').serialize(),
            dataType: "json",
            success: function(data) {
                // Show the confirmation message
                $("#confirmation").removeClass("hidden");
                $("#contact-form").bootstrapValidator('disableSubmitButtons', false)  // Enable the submit buttons
                $("#contact-form").bootstrapValidator('resetForm', true);             // Reset the form
                $("input[name*='phone']").val('');  // the 'not-required' phone field is not reset by the bootstrapValidator :(
            },
            error: function(err) {
                
            }
        });
        $("#contact-form").reset();

    });

    // Add hit counter from hitcounter.com
    var imgsource = '//hitwebcounter.com/counter/counter.php?page=6231327&style=0006&nbdigits=5&type=ip&initCount=0';
    $('.hitcounter').append('<img src="' + imgsource + '" title="Hit Counter" alt="Hit Counter" width="75" height="20" />');

    // Link the carousel to the website home page, get the site url form the attribute 'data-url'
    $(".data-url").click(function(){
        window.open($(this).attr("data-url"), '_blank');
    });

    // show the alt image and hide the carousel. Show the carousel after all the carousel images are loaded
    $('.img-alt').show();
    $('.carousel').hide();
    // main carousel loaded ?
    $('.img-last').on('load', function(){
    // hide/remove the loading image
        $('.img-alt').hide();
        $('.carousel').show(); 
    });   
})





