// package.json is node to connect b/t server and device
// CSV is like Exale file 



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

// App 
var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

