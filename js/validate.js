function validation(){
		var user = document.getElementById('name').value;
		var email = document.getElementById('email').value;
		var password = document.getElementById('password').value;
		var cnfrm_password = document.getElementById('cnfrm_password').value;
		var number = document.getElementById('number').value;
// ==================================== ====================================		
		
		if(user ==""){
			document.getElementById('username').innerHTML = "*Please Enter Your Name";
			return false;
		}
		if((user.length <= 2) || (user.length > 20)){
			document.getElementById('username').innerHTML = "Please Fill the name between 2 to 20."
			return false;
		}
		if(!isNaN(user)){
			document.getElementById('username').innerHTML = "Please Use Only Characters."
			return false;
		}

// ==================================== ====================================

		if(email ==""){
			document.getElementById('mailid').innerHTML = "*Please Enter Your Email I'd";
			return false;
		}
		if(email.indexOf('@')<=0){
			document.getElementById('mailid').innerHTML = "*Use Correct Position of @";
			return false;
		}
		if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')){
			document.getElementById('mailid').innerHTML = "*Use Correct Position of (.)";
			return false;
		}

// ==================================== ====================================

		if(password ==""){
			document.getElementById('pass').innerHTML = "*Please Enter Your Password";
			return false;
		}
		if((password.length < 6)|| (password.length > 30)){
			document.getElementById('pass').innerHTML = "Please Fill the Password between 6 to 30."
			return false;
		}

		if(password!=cnfrm_password){
			document.getElementById('pass').innerHTML = "Password are not Matching."
			return false;
		}

// ==================================== ====================================
		if(cnfrm_password ==""){
			document.getElementById('cnfrmpass').innerHTML = "*Please Enter Your Confirm Password";
			return false;
		}


// ==================================== ====================================

		if(number ==""){
			document.getElementById('mbl').innerHTML = "*Please Enter Your Mobile Number";
			return false;
		}

		if(isNaN(number)){
			document.getElementById('mbl').innerHTML = "*User Must Write Digits not Characters";
			return false;
		}
		if(number.length!=10){
			document.getElementById('mbl').innerHTML = "*Please use 10 digit number";
			return false;
		}
// ==================================== ====================================
	}