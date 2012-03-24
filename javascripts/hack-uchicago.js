head.ready(function() {
  var mailchimp_form = $('form#mc-embedded-subscribe-form');
  mailchimp_form.find('.inside_label').each(function() {
    var input = $(this).find('input');
    var label = $(this).find('label');
    input.data('default_text', label.text());

    input.focus(function() {
      if ( $(this).val() === $(this).data('default_text') ) {
        $(this).removeClass();
        $(this).val('');
      }
    });

    input.blur(function() {
      if ( $(this).val() === '' ) {
        $(this).addClass('undisturbed');
        $(this).val( $(this).data('default_text') );
      }
    });

    mailchimp_form.submit(function() {
      input.focus();
    });

    label.hide();
    input.blur();
  });
});
