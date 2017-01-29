var quen = prompt();

switch(quen) {
	case 'hello':
		$('div').append(quen);
		quen = prompt();
		switch(quen) {
			case 'good':
				$('div').append(quen);
			break;

			case 'bad':
				$('div').append(quen)
			break;
		}
	break;

	case "buy":
		$('div').append(quen);
	break;
}
//ir_engine 2.0
//2017
