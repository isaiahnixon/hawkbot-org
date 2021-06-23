(function($) {
    // Load the partial components.
    $('*[partial]').each(function() {
        $(this).load('partials/' + $(this).attr('partial') + '.html');
    });

    // Hide the contact form after submit.
    $('#gform').on('submit', function(e) {
		$('#gform *').fadeOut(1000);
		$('#gform').prepend('Your submission has been processed. Expect to hear back from us soon!');
	});

	// Activate tooltips.
	$("body").tooltip({ selector: '[data-toggle=tooltip]' });
	
})(jQuery);