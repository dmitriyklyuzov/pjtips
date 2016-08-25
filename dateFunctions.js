var d = new Date();
	// in JS the month zero-based
	var month = d.getMonth() + 1;
	var date = d.getDate();
	var day = d.getDay();
	var dayText = '';
	var year = d.getFullYear();
	switch(day){
		case 1:
		dayText = "Monday";
		break;
		case 2:
		dayText = "Tuesday";
		break;
		case 3:
		dayText = "Wednesday";
		break;
		case 4:
		dayText = "Thursday";
		break;
		case 5:
		dayText = "Friday";
		break;
		case 6:
		dayText = "Saturday";
		break;
		default:
		dayText = "Sunday";
	}