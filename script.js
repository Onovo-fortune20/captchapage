// Generate random captcha code
let captcha = Math.random().toString(36).substr(2, 5);

// Get DOM elements
const registrationForm = document.querySelector("#registration-form");
const passwordInput = document.querySelector("#password");
const passwordStrength = document.querySelector("#password-strength");

// Password strength criteria
const passwordCriteria = {
	length: 8,
	lowercase: true,
	uppercase: true,
	number: true,
	symbol: true
};

// Check password strength and give feedback
function checkPasswordStrength(password) {
	let strength = 0;
	if (password.length >= passwordCriteria.length) {
		strength++;
	}
	if (passwordCriteria.lowercase && /[a-z]/.test(password)) {
		strength++;
	}
	if (passwordCriteria.uppercase && /[A-Z]/.test(password)) {
		strength++;
	}
	if (passwordCriteria.number && /\d/.test(password)) {
		strength++;
	}
	if (passwordCriteria.symbol && /[^\w\s]/.test(password)) {
		strength++;
	}
	switch (strength) {
		case 0:
			passwordStrength.textContent = "";
			break;
		case 1:
			passwordStrength.textContent = "Weak";
			passwordStrength.style.color = "#ff0000";
			break;
		case 2:
			passwordStrength.textContent = "Moderate";
			passwordStrength.style.color = "#ffa500";
			break;
		case 3:
			passwordStrength.textContent = "Strong";
			passwordStrength.style.color = "#00ff00";
			break;
		case 4:
			passwordStrength.textContent = "Very strong";
			passwordStrength.style.color = "#008000";
			break;
		case 5:
			passwordStrength.textContent = "Extremely strong";
			passwordStrength.style.color = "#008000";
			break;
	}
}

// Update password strength feedback on input
passwordInput.addEventListener("input", function() {
	checkPasswordStrength(passwordInput.value);
});

// Validate captcha on form submit
registrationForm.addEventListener("submit", function(event) {
	event.preventDefault();
	if (document.querySelector("#captcha").value === captcha) {
		sendToken();
	} else {
		alert("Invalid captcha!");
	}
});

// Send one-time token to email address
function sendToken() {
	let email = document.querySelector("#username").value;
	let token = Math.random().toString(36).substr(2, 10);
	alert(`A one-time token has been sent to ${email}.`);
	console.log(`Token for ${email}: ${token}`);
}
