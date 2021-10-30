
document.addEventListener('DOMContentLoaded', function(event) {
  // Attaches listener for click event
  document.querySelector('#content').addEventListener('keyup', function(e) {
    return setLen();
  });
  document.querySelector('#submit').addEventListener('click', function(e) {
    return setResult();
  });
  document.querySelector('#rate').addEventListener('click', function(e) {
    return setStrength();
  });
  $('input[name="options"]').change( function() {
    alert($(this).val())
  })

});

function setLen() {
	var len = document.getElementById("content").value.length;
	document.getElementById("charlen").innerHTML = len + "/400 Characters";
}

function setResult() {
	var content = document.getElementById("content").value;

	document.getElementById("result").innerHTML = "This is a test.";
}

function setStrength() {

}
