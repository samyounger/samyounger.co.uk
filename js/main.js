$(document).ready(function() {
	$('h2').click(function() {
		if ($(this).next('p').length > 0) {
		$(this).next().slideToggle('show');
		} else {
		$(this).next().next().slideToggle('show');
		};
	});
});