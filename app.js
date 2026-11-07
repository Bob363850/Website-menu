// 1. Grab all checkboxes that have the 'page-linker' class
const checkboxes = document.querySelectorAll('.page-linker');

// 2. Loop through each checkbox in the list
checkboxes.forEach(checkbox => {
    // 3. Listen for when this specific checkbox changes
    checkbox.addEventListener('change', (event) => {
        // 4. Only redirect if the user actually checked the box
        if (event.target.checked) {
            // 5. Read the specific page name from the 'data-target' attribute
            const destinationPage = event.target.getAttribute('data-target');
            
            // 6. Navigate to that page
            window.location.href = destinationPage;
        }
    });
});
