$( "#email-form-wrapper" ).submit(function( event ) {
  var email = $("#email-input").val();
  console.log(email)
  event.preventDefault();

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://mokx4n2aq5.execute-api.us-east-1.amazonaws.com/dev/process_emails", true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({
    "table":"Emails",
    "column":"Email",
    "email": email
  }));
  $("#email-input").blur();
   $("#email-input").val("")
  // $("#email-form-input").addClass( "animated zoomOutRight bg-transparent" );
  // setTimeout(() => {
  //   $("#email-form-input").val("")
  //   $("#email-form-input").removeClass( "animated zoomOutRight bg-transparent" );
  // }, 1000);

});
