
function getURLParameter(name) {
	return decodeURI(
		(RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1] || '');
}
// Grab URL variable
var subid       = getURLParameter('subid');
var subid2      = getURLParameter('subid2');
var firstname   = getURLParameter('firstname');
var surname     = getURLParameter('surname');
var city        = getURLParameter('city');
var zipcode     = getURLParameter('zipcode');
var address     = getURLParameter('address');
var phone       = getURLParameter('phone');
var mobile      = getURLParameter('mobile');
var pid         = getURLParameter('pid');
var nrp         = getURLParameter('nrp');

// FunnelFlux
var ffdomain = 'https://track.trckcell.com/click';

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

$(document).ready(function(){		
	$(".placeholder").each(function() {
		var text = $(this).text();
		$(this).text(text);
	});
	
	$(".ffdate").each(function() {
		var today = new Date();
		var tomorrow = new Date(today);
		tomorrow.setDate(tomorrow.getDate() + 1);
		
		var today_day = (today.getDate() < 10 ? "0" + today.getDate() : today.getDate());
		var date = "date";
		
		switch($(this).data("format")) {
			case "alpha": // July 2, 2021
				date = months[today.getMonth()] + " " + today_day + ", " + today.getFullYear();
			break;
			case "beta": // Monday 19 Of July
				date = days[today.getDay()] + " " + today.getDate() + " Of " + months[today.getMonth()];
			break;
			case "gamma": // Wednesday 21 Of July (tomorrow)
				date = days[tomorrow.getDay()] + " " + tomorrow.getDate() + " Of " + months[tomorrow.getMonth()];
			break;
			case "test":
				var opt = { weekday:'long', year: 'numeric', month: 'long', day: 'numeric' };
				date = today.toLocaleDateString(undefined, opt);
			break;
		}
		
		var text = $(this).text();
		text = text.replace("{{date}}", date);
		$(this).text(text);
	});
});