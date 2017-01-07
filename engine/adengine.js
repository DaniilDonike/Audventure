// Этот код полон дерма не обращайте внимания 
// И вообще что вы тут забыли
//УХАДИ
$('button').click(function() {
	var i = $('input').val();
	console.log(i);
	switch(i) {
		case 'yes':
			$('div').append('<p>some text</p>');
			$('button').click(function() {
				var i = $('input').val();
				switch(i) {
					case '1':
					alert(123);
					break;
					case '2':
					break;
				}
			});
		break;
		case 'no':
			$('div').append('<p>some text2</p>');
		break;
	}
});