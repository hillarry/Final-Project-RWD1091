let email,password;
let isEmailSuccessed, isPasswordSuccessed = false;

let predefinedData = {
	email : 'hhm@gmail.com',
	password : '123456'
}

function submitFunction(){
	email = document.getElementById('email').value;
	password = document.getElementById('password').value;

	if ( email == predefinedData.email){
		console.log('correct email');
		isEmailSuccessed = true;
	}

	if( password == predefinedData.password){
		console.log('correct password');
		isPasswordSuccessed = true;
	}

	if( isEmailSuccessed && isPasswordSuccessed){
		console.log('correct email and password');
		window.location.replace('../html/admin_panel.html');

		window.localStorage.setItem('email',JSON.stringify(email));
		window.localStorage.setItem('password',JSON.stringify(password));
	}

	if(isEmailSuccessed != true || isPasswordSuccessed !=  true){
		console.log('Email or password is wrong');
		document.getElementById('message').innerText = 'Email or password is wrong';

	}
}

function logoutFunction(){
	window.localStorage.removeItem('email');
	window.localStorage.removeItem('password');
	window.location.replace('./login.html');
}
