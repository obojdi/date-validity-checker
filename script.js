;
(() => {
	var
		i = 0,
		max = 200,
		years_range = 200,
		dates = [];
	while (i < 200) {
		var
			day = Math.round(Math.random() * 2).toString() + Math.round(Math.random() * 9).toString(),
			month = parseInt(Math.round(Math.random()).toString() + Math.round(Math.random() * 10).toString()),
			month = month < 12 ? month < 10 ? '0' + month.toString() : month.toString() : 12..toString(),
			year = (1900 + Math.round(Math.random() * years_range)).toString();
		day = day == "00" ? "01" : day;
		month = month == "00" ? "01" : month;
		a = day + '.' + month + '.' + year;
		valid = validate_date(a);
		dates.push({
			date: a,
			valid: valid
		});
		i++;
	}
	for (var i = dates.length - 1; i >= 0; i--) {
		date = dates[i];
		if (!date.valid) {
			console.log('invalid: ' + date.date)
		}
	}
	//regex modified to ru date format, original found on regexr.com
	function validate_date(string) {
		return /^(0[1-9]|[12]\d|3[01])[\.](0[1-9]|1[0-2])[\.](19|20)\d{2}$/.test(string)
	}
})();
