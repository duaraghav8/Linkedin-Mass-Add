/*
go to search result page where it shows list of people (the new linkedin UI) so you can see the "connect" buttons
to the right of each person. Copy-paste below script, hit enter.
*/

function pause(milliseconds) {
	dt = new Date();
	while ((new Date()) - dt <= milliseconds) { /* Do nothing */ }
}

(function press () {
	connectButtons = $("button:contains('Connect')");
	console.error ('a**');

	for (i = 0; i < connectButtons.length; i++) {
		button = connectButtons [i];
		console.error ('clicking connect');
		$(button).click();
		pause (500);
		console.error ('sending now');
		$($("button:contains('Send now')") [0]).click();
		pause (500);
	}
})();
