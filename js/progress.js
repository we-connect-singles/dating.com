let currentStep = 0;
const steps = document.querySelectorAll('.question-step');
const progressBar = document.getElementById('progress-bar');

function showStep(step) {
    steps.forEach((s, index) => {
        s.classList.toggle('active', index === step);
    });
    document.getElementById('prevBtn').style.display = step === 0 ? 'none' : 'inline';
    document.getElementById('nextBtn').innerText = step === steps.length - 1 ? 'Submit' : 'Next';
    updateProgressBar(step);
}

function updateProgressBar(step) {
    const percent = ((step + 1) / steps.length) * 100;
    progressBar.style.width = percent + '%';
}

function nextPrev(n) {
    // Validate current step (optional)
    if (n === 1 && !validateForm()) return false;

    currentStep += n;

    if (currentStep >= steps.length) {
        // Submit form
        submitForm();
        return false;
    }

    showStep(currentStep);
}

function validateForm() {
    const inputs = steps[currentStep].querySelectorAll('input, select, textarea');
    for (let input of inputs) {
        if (!input.checkValidity()) {
            input.reportValidity();
            return false;
        }
    }
    return true;
}

function submitForm() {
    // Collect data (optional: send to Google Form or backend)
    const data = {
        fullname: document.getElementById('fullname').value,
        age: document.getElementById('age').value,
        gender: document.getElementById('gender').value,
        lookingFor: document.getElementById('lookingFor').value,
        ageRange: document.getElementById('ageRange').value,
        interests: document.getElementById('interests').value,
        description: document.getElementById('description').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value
    };

    console.log('Form submitted:', data);

    // Redirect to WhatsApp or Thanks page
    // Example: redirect to WhatsApp
    const waMessage = encodeURIComponent(`Hello, I have completed the dating questionnaire. My details: ${JSON.stringify(data)}`);
    window.location.href = `https://wa.me/message/IQU6CTYPM7KIB1?text=${waMessage}`;

    // Alternatively, redirect to a local thanks page
    // window.location.href = 'thanks.html';
}

// Initialize first step
showStep(currentStep);
