//Script for the password tester
const passwordInput = document.getElementById("passwordInput");
const strengthBar = document.getElementById("strengthBar");
const strengthText = document.getElementById("strengthText");

passwordInput.addEventListener("input", function () {
    const pwd = passwordInput.value;
    let strength = 0;

    if (pwd.length > 6) strength++;
    if (pwd.length > 10) strength++;
    if (/[A-Z]/.test(pwd)) strength++;
    if (/[0-9]/.test(pwd)) strength++;
    if (/[^A-Za-z0-9]/.test(pwd)) strength++;

    strengthBar.className = "strength-bar";

    switch (strength) {
        case 0:
        case 1:
            strengthBar.classList.add("strength-weak");
            strengthText.textContent = "Weak";
            strengthText.style.color = "#dc3545";
            break;
        case 2:
            strengthBar.classList.add("strength-medium");
            strengthText.textContent = "Medium";
            strengthText.style.color = "#ffc107";
            break;
        case 3:
        case 4:
            strengthBar.classList.add("strength-strong");
            strengthText.textContent = "Strong";
            strengthText.style.color = "#198754";
            break;
        case 5:
            strengthBar.classList.add("strength-very-strong");
            strengthText.textContent = "Very Strong";
            strengthText.style.color = "#0d6efd";
            break;
    }
});
 