jQuery(function($) {
	$('.search input[type="text"]').focus(function() {
		$('.search').css('border','2px solid red');
    });
	$('.search input[type="text"]').focusout(function() {
		$('.search').css('border','2px solid #f07979');
    });
	$('.callback').click(function() {
		$('.parent').css('display','block');
	});
	$('.popup p').click(function() {
		$('.parent').css('display','none');
	});
document.getElementsByClassName('contacts')[0].onclick = function(e) {
 
  // 2. получаем event.target
  var event = e || window.event;
  var target = event.target || event.srcElement;
 
  // 3. проверим, интересует ли нас этот клик?
  // если клик был не на ссылке, то нет
  if (target.tagName != 'SPAN') return;
  // обработать клик по ссылке
  alert(target.innerHTML); // в данном примере просто выводим
  return false;
};
});
