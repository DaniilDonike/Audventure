// Этот код полон дерма не обращайте внимания 
// И вообще что вы тут забыли
//УХАДИ
$('button').click(function() {
	var i = $('input').val();
	console.log(i);
	switch(i) {
		case '1':
			$('div').append('<p>some text</p>');
			$('button').click(function() {
				var i = $('input').val();
				switch(i) {
					case '1':
						$('div').append('<p>some text3</p>');
					break;
					case '2':
						$('div').append('<p>some text4</p>');
					break;
				}
			});
		break;
		case '2':
			$('div').append('<p>some text2</p>');
		break;
	}
});