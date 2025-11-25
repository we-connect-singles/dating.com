// progress.js

// This script updates a dynamic progress bar for the questionnaire form

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.questionnaire-form');
    const questions = document.querySelectorAll('.question');
    const progressBar = document.getElementById('progress-bar');

    let currentQuestion = 0;

    function updateProgress() {
        const progressPercent = ((currentQuestion + 1) / questions.length) * 100;
        progressBar.style.width = progressPercent + '%';
    }

    questions.forEach((question, index) => {
        const inputElements = question.querySelectorAll('input, select, textarea');

        inputElements.forEach(input => {
            input.addEventListener('input', () => {
                // Only count as complete if value is filled
                if (input.value.trim() !== '') {
                    if (index > currentQuestion) {
                        currentQuestion = index;
                        updateProgress();
                    }
                }
            });
        });
    });

    // Initialize progress bar
    updateProgress();
});
