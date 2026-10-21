const passwordInput = document.getElementById("passwordInput");
const togglePassword = document.getElementById("togglePassword");

const strengthText = document.getElementById("strengthText");
const strengthFill = document.getElementById("strengthFill");
const scoreElement = document.getElementById("score");

const suggestionText = document.getElementById("suggestionText");

const commonWarning = document.getElementById("commonWarning");
const commonWarningText = document.getElementById("commonWarningText");

const checks = {
    length: document.getElementById("lengthCheck"),
    uppercase: document.getElementById("uppercaseCheck"),
    lowercase: document.getElementById("lowercaseCheck"),
    number: document.getElementById("numberCheck"),
    special: document.getElementById("specialCheck"),
    long: document.getElementById("longCheck")
};


// =========================
// PASSWORD VISIBILITY
// =========================

togglePassword.addEventListener("click", () => {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";
        togglePassword.textContent = "◉";

    } else {

        passwordInput.type = "password";
        togglePassword.textContent = "◎";

    }

});


// =========================
// UPDATE REQUIREMENT
// =========================

function updateCheck(element, valid) {

    if (valid) {

        element.classList.add("valid");

        element.querySelector(".check").textContent = "✓";

    } else {

        element.classList.remove("valid");

        element.querySelector(".check").textContent = "×";

    }

}


// =========================
// COMMON PASSWORD CHECK
// =========================

function checkCommonPassword(password) {

    const normalizedPassword = password.toLowerCase();

    return commonPasswords.some(
        commonPassword =>
            commonPassword.toLowerCase() === normalizedPassword
    );

}


// =========================
// PASSWORD ANALYSIS
// =========================

function analyzePassword(password) {

    const hasLength = password.length >= 8;

    const hasUppercase = /[A-Z]/.test(password);

    const hasLowercase = /[a-z]/.test(password);

    const hasNumber = /[0-9]/.test(password);

    const hasSpecial = /[^A-Za-z0-9]/.test(password);

    const hasLongLength = password.length >= 12;


    // =========================
    // REQUIREMENTS
    // =========================

    updateCheck(
        checks.length,
        hasLength
    );

    updateCheck(
        checks.uppercase,
        hasUppercase
    );

    updateCheck(
        checks.lowercase,
        hasLowercase
    );

    updateCheck(
        checks.number,
        hasNumber
    );

    updateCheck(
        checks.special,
        hasSpecial
    );

    updateCheck(
        checks.long,
        hasLongLength
    );


    // =========================
    // SCORE
    // =========================

    let score = 0;

    if (hasLength) score++;
    if (hasUppercase) score++;
    if (hasLowercase) score++;
    if (hasNumber) score++;
    if (hasSpecial) score++;
    if (hasLongLength) score++;


    scoreElement.textContent =
        `${score}/6`;


    // =========================
    // COMMON PASSWORD CHECK
    // =========================

    const isCommon =
        password.length > 0 &&
        checkCommonPassword(password);


    if (isCommon) {

        commonWarning.classList.add("show");

        commonWarningText.textContent =
            "This password appears in the Top 200 commonly used password list. Choose something more unique.";

    } else {

        commonWarning.classList.remove("show");

    }


    // =========================
    // EMPTY PASSWORD
    // =========================

    if (password.length === 0) {

        strengthText.textContent =
            "WAITING";

        strengthText.style.color =
            "#71899c";

        strengthFill.style.width =
            "0%";

        strengthFill.style.background =
            "#00aaff";

        strengthFill.style.boxShadow =
            "none";

        suggestionText.textContent =
            "Start typing to analyze your password.";

        return;

    }


    // =========================
    // STRENGTH
    // =========================

    let strength;
    let percentage;


    if (score <= 2) {

        strength = "WEAK";
        percentage = 33;

    } else if (score <= 4) {

        strength = "MEDIUM";
        percentage = 66;

    } else {

        strength = "STRONG";
        percentage = 100;

    }


    strengthText.textContent =
        strength;

    strengthFill.style.width =
        `${percentage}%`;


    // =========================
    // STRENGTH COLORS
    // =========================

    if (strength === "WEAK") {

        strengthText.style.color =
            "#ff5c5c";

        strengthFill.style.background =
            "#ff5c5c";

        strengthFill.style.boxShadow =
            "0 0 15px rgba(255,92,92,0.6)";

    }

    else if (strength === "MEDIUM") {

        strengthText.style.color =
            "#ffc857";

        strengthFill.style.background =
            "#ffc857";

        strengthFill.style.boxShadow =
            "0 0 15px rgba(255,200,87,0.6)";

    }

    else {

        strengthText.style.color =
            "#00e676";

        strengthFill.style.background =
            "#00e676";

        strengthFill.style.boxShadow =
            "0 0 15px rgba(0,230,118,0.6)";

    }


    // =========================
    // SUGGESTIONS
    // =========================

    if (isCommon) {

        suggestionText.textContent =
            "⚠️ This password meets complexity rules but is commonly used. Choose a unique password.";

    }

    else if (!hasLength) {

        suggestionText.textContent =
            "Use at least 8 characters.";

    }

    else if (!hasUppercase) {

        suggestionText.textContent =
            "Add an uppercase letter to improve security.";

    }

    else if (!hasLowercase) {

        suggestionText.textContent =
            "Add a lowercase letter to improve security.";

    }

    else if (!hasNumber) {

        suggestionText.textContent =
            "Add at least one number.";

    }

    else if (!hasSpecial) {

        suggestionText.textContent =
            "Add a special character such as !, @, # or $.";

    }

    else if (!hasLongLength) {

        suggestionText.textContent =
            "Good start! Try making your password 12+ characters.";

    }

    else {

        suggestionText.textContent =
            "Excellent! Your password meets all basic requirements.";

    }

}


// =========================
// LIVE ANALYSIS
// =========================

passwordInput.addEventListener(
    "input",
    () => {

        analyzePassword(
            passwordInput.value
        );

    }
);