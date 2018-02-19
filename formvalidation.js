
function validateEmail(email)
{
	var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	 if (reg.test(email)){
	 	return true; }
	 else{
	 	return false;
	 }
} 


function phoneNumberValidation2(p) {
  var phoneRegEx = /^[4-9]\d{2}\d{4}$/;
  var digits = p.replace(/\D/g, "");
  if(phoneRegEx.test(digits)===false){
  	return false;
  }
}
function phoneNumberValidation(p) {
  var phoneRegEx = /^(([(]{1}[+]?[3]{1}[5]{1}[4]{1}[)]{1}[-\s]?)|([+]?[(]{1}[3]{1}[5]{1}[4]{1}[)]{1}[-\s]?)|([+]?[3]{1}[5]{1}[4]{1}[-\s]?))?[4-9]{1}[0-9]{2}[-\s]?[0-9]{4}$/;
  if(phoneRegEx.test(p)===false){
  	return false;
  }
}

function validateForm() {
	//test name
	console.log("testing name.");
    var x = document.forms["form_name"]["input_name"].value;
    if (x.length === 0) {
        alert("Nafn verður að innihalda a.m.k. einn staf.");
        return false;
    }

	//test email
    x = document.forms["form_name"]["input_email"].value;
    if(validateEmail(x)==false){
    	alert("Ekki gilt e-mail.");
    	return false;
    }

    //test phone number
    console.log("testing phone number.");
    x = document.forms["form_name"]["input_phone"].value;
    if(phoneNumberValidation(x)===false){
    	alert("Ekki gilt símanúmer.");
    	return false;
    }

    console.log("testing question.");
    var x = document.forms["form_name"]["input_field"].value;
    if (x.length < 1) {
        alert("Fyrirspurn verður að innihalda a.m.k. 1 staf.");
        return false;
    }

    return true;
}

