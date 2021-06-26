(function($) {
	// Fix the active nav tab
	if ($("body").hasClass('contact')) {
		$("li#contact").addClass('active');
	}

	if ($("body").hasClass('roadmap')) {
		$('#roadmap').addClass('active');
	}

	if ($("body").hasClass('home')) {
		$('#home').addClass('active');
	}

	if ($("body").hasClass('strategy')) {
		$('#strategy').addClass('active');
	}
	
})(jQuery);