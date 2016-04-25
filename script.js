$(document).ready(function() {
	$('button').on('click.', function() {
		$('header').slideDown();
		$('main').slideDown();
		$('button').hide();
	});
});