// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/* Nav Bar */
const menuIcon = document.getElementById('menu-icon');
  const navLinks = document.getElementById('nav-links');

  menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuIcon.innerHTML = navLinks.classList.contains('active') 
      ? '<i class="fas fa-times"></i>' 
      : '<i class="fas fa-bars"></i>';
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



  
