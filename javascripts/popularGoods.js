jQuery(function($) {
	$( ".popularGoods").rcarousel({
		margin: 44,
		visible: 4,
		width: 196,
		height: 316,
		step: 1,
		navigation: {
			prev: ".prev",
			next: ".next"
		},
		border: 2,
		auto: {
			enabled: true
		}
	});
	
	$( ".next" )
		.add( ".prev" )
		.hover(
			function() {
				$( this ).css( "opacity", 0.7 );
			},
			function() {
				$( this ).css( "opacity", 1.0 );
			}
		);					
});