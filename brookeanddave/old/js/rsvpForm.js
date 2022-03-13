var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbwuiexlyU7qhL0zShuqtDZSake-imsM6vtuGoJDe3jeCfDgjYWm/exec'
    

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).done(
    console.log("done!");
  );
})