(function ($) {
    'use strict';

    var form = $('.contact__form'),
        message = $('.contact__msg'),
        form_data;

    // Success function
    function done_func(response) {
        message.fadeIn().removeClass('alert-danger').addClass('alert-success');
        message.text(response);
        setTimeout(function () {
            message.fadeOut();
        }, 5000);
        $('input[type="text"]').val('');
        $('input[type="email"]').val('');
        $('input[type="textarea"]').val('');
        
    }

    // fail function
    function fail_func(data) {
        message.fadeIn().removeClass('alert-success').addClass('alert-danger');
        message.text(data.responseText);
        setTimeout(function () {
            message.fadeOut();
        }, 5000);
        $('input[type="text"]').val('');
        $('input[type="email"]').val('');
        $('input[type="textarea"]').val('');
    }
    
    form.submit(function (e) {
        e.preventDefault();
        form_data = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: form.attr('action'),
            data: form_data
        })
        .done(done_func)
        .fail(fail_func);
    });
    
})(jQuery);