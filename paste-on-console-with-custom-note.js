myBigBoringLetsConnectMessage = 'YEH BOK GAYI HAI GORMINT';

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

		console.error ('Adding a note');
		$($("button:contains('Add a note')") [0]).click();
		pause (500);

		textArea = $('textarea[id="custom-message"]');
		textArea.val (myBigBoringLetsConnectMessage);
		pause (500);

		console.error ('sending now');
		$($("button:contains('Send invitation')") [0]).click();
		pause (500);
	}
})();
