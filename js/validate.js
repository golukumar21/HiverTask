$('.login form button').click(function() {	
	debugger;
	var emailValue = $('#InputEmail1').val();
	var phoneNumValue = $('#InputPhone').val();
	if(emailValue == "" && phoneNumValue == "") {
		alert('please enter the value for email and phone number');
	} else if(emailValue == "abhishek@gmail.com" && phoneNumValue == "918147745514") {
		alert("correct email and phone number");
	} else {
		alert('one of the required field is empty');
	}
});
$("form").submit(function(e) {
    e.preventDefault();
});