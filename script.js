// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Customize Furniture Feature
const furnitureType = document.getElementById('furniture-type');
const furnitureColor = document.getElementById('furniture-color');
const furnitureSize = document.getElementById('furniture-size');

const customizeButton = document.querySelector('.customize-tool .btn');
customizeButton.addEventListener('click', () => {
    alert(`Customized Furniture:
    Type: ${furnitureType.value}
    Color: ${furnitureColor.value}
    Size: ${furnitureSize.value}`);
});

    document.addEventListener('DOMContentLoaded', function () {
        const buttons = document.querySelectorAll('.option-card button');

        buttons.forEach(button => {
            button.addEventListener('click', function () {
                alert('Customization options are coming soon!');
                // You can redirect to a detailed customization page or open a modal
            });
        });
    });

    document.addEventListener('DOMContentLoaded', function () {
        const faqQuestions = document.querySelectorAll('.faq-question');
    
        faqQuestions.forEach(question => {
            question.addEventListener('click', function () {
                const answer = this.nextElementSibling;
    
                // Toggle the display of the answer
                if (answer.style.display === 'block') {
                    answer.style.display = 'none';
                } else {
                    // Hide all answers
                    document.querySelectorAll('.faq-answer').forEach(ans => ans.style.display = 'none');
                    // Show the selected answer
                    answer.style.display = 'block';
                }
            });
        });
    });
    

