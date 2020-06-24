/*
This work and all of its affiliates, including but not limited to, the other pages, the javascript, 
the css files, and the images are copyrighted to Hleb Alikhver. If you have a question or request to 
use the works, please either click the link at the bottom of the page titled "Gleb Alikhver" or 
contact me by email at alikhvergleb@gmail.com or by phone, at (404)-933-7966. 
Any undocumented reproduction or use of any files listed here will be counted as a copyright offense 
and undocumented users of my work will be prosecuted. If you want to use my work, please just email me. 
I'll get back to you within an hour or so.
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			normal:    [ '1081px',  '1280px'  ],
			narrow:    [ '821px',   '1080px'  ],
			narrower:  [ '737px',   '820px'   ],
			mobile:    [ '481px',   '736px'   ],
			mobilep:   [ null,      '480px'   ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			speed: 300,
			alignment: 'center',
			noOpenerFade: true
		});

	// Nav.

		// Buton.
			$(
				'<div id="navButton">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						'<a href="index.html" class="link depth-0">Home</a>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					resetScroll: true,
					resetForms: true,
					side: 'top',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

})(jQuery);