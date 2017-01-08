var vopros = prompt("Вопрос 1");
switch(vopros) {
	case '1':
	console.log('ответ 1');
	vopros = prompt('Вопрос 2');
	switch(vopros){
		case '1':
		console.log('ответ 3');
		break;
		case '2':
		console.log('ответ 4');
		break;
	}
	break;
	case '2':
	console.log('ответ 2');
	break;
}