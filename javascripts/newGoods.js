jQuery(function($) {
	$( ".newGoods").rcarousel({
		margin: 44,
		visible: 4,
		width: 196,
		height: 316,
		step: 1,
		navigation: {
			prev: ".prev-1",
			next: ".next-1"
		},
		border: 2,
		auto: {
			enabled: true
		}
	});
	
	$( ".next-1" )
		.add( ".prev-1" )
		.hover(
			function() {
				$( this ).css( "opacity", 0.7 );
			},
			function() {
				$( this ).css( "opacity", 1.0 );
			}
		);					
});