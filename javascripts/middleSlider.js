jQuery(function($) {
	function generatePages() {
		var _total, i, _link;
		
		_total = $( ".carousel-1" ).rcarousel( "getTotalPages" );
		
		for ( i = 0; i < _total; i++ ) {
			_link = $( "<a href='#'></a>" );
			
			$(_link)
				.bind("click", {page: i},
					function( event ) {
						$( ".carousel-1" ).rcarousel( "goToPage", event.data.page );
						event.preventDefault();
					}
				)
				.addClass( "bullet-1 off" )
				.appendTo( ".pages-1" );
		}
		
		// mark first page as active
		$( "a:eq(0)", ".pages-1" )
			.removeClass( "off" )
			.addClass( "on" )
			.css( "background-image", "url(images/smallFullCircle.png)" );

	}

	function pageLoaded( event, data ) {
		$( "a.on", ".pages-1" )
			.removeClass( "on" )
			.css( "background-image", "url(images/smallCircle.png)" );

		$( "a", ".pages-1" )
			.eq( data.page )
			.addClass( "on" )
			.css( "background-image", "url(images/smallFullCircle.png)" );
	}
	
	$(".carousel-1").rcarousel(
		{
			visible: 1,
			step: 1,
			speed: 700,
			auto: {
				enabled: true
			},
			width: 420,
			height: 280,
			start: generatePages,
			pageLoaded: pageLoaded
		}
	);
});