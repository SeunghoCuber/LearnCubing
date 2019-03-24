var a = false;

$( function() {
	$("#messageform").hide();      
});

function hitOrMiss() {
	$("#sign").hide()
	$("#messageform").show();
}

function validate() {
	$("#error").html("Thank you for submitting!")
	var missing = [];
	if ($("#name").val() == "") {
		missing.push("name")
	}
	if ($("#email").val() == "") {
		missing.push(" email")
	}
	if ($("#message").val() == "") {
		missing.push(" message")
	}
	if (missing.length == 0) {
		$("#error").html("Thank you for submitting, " + $("#name").val() + "!")
		$("#error").css("color", "green")
	}else {
		$("#error").html("Missing: " + missing)
		$("#error").css("color", "red")
	}
}
