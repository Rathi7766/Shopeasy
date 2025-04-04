 // Toggle menu functionality
 const toggleButton = document.querySelector('.navbar .toggle');
 const navMenu = document.querySelector('.navbar ul');

 toggleButton.addEventListener('click', () => {
     navMenu.classList.toggle('active');
 });

 // Search functionality
 const searchButton = document.querySelector('.navbar .search button');
 const searchInput = document.querySelector('.navbar .search input');

 searchButton.addEventListener('click', () => {
     const query = searchInput.value;
     if (query) {
         alert(`Searching for: ${query}`);
     } else {
         alert('Please enter a search term.');
     }
 });


 