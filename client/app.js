

//Submitting data with AJAX 
$('#testButton').click(function () {
    var firstName = $("#name").val();
    var lastName = $("#LastName").val();

    $.ajax({
      type: "POST",
      url: "insert.php",
      data: { name: firstName, LastName: lastName }
    }).done(function( msg ) {
      alert( "Data Saved: " + msg );
});
});

