// Toggle visibility of a form based on its ID
function toggleForm(formId) {
    const form = document.getElementById(formId);
    // Toggle visibility: If it's already visible, hide it. If not, show it.
    form.style.display = (form.style.display === "none" || form.style.display === "") ? "block" : "none";
}

// Update the date and time in PH timezone
function updateDateTimePH() {
    const options = { 
        timeZone: 'Asia/Manila', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: 'numeric', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: true 
    };
    const dateTimePH = new Date().toLocaleString('en-PH', options);
    document.getElementById('dateTimePH').textContent = dateTimePH;
}
setInterval(updateDateTimePH, 1000);
updateDateTimePH();

// Toggle visibility of a form and animate the arrow icon on click
function toggleForm(formId, clickedElement) {
    const form = document.getElementById(formId);
    const isVisible = form.classList.contains("show");

    // Hide all other forms and reset icons
    document.querySelectorAll(".service-form").forEach(f => f.classList.remove("show"));
    document.querySelectorAll(".arrow-icon").forEach(icon => icon.classList.remove("rotate"));

    // Show only the clicked one
    if (!isVisible) {
        form.classList.add("show");
        clickedElement.querySelector(".arrow-icon").classList.add("rotate");
    }
}

// Change navigation bar style when scrolling
window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    nav.classList.toggle("scrolled", window.scrollY > 50);
});

// Handle form submission, show success message, and reset form
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page from refreshing

    // Check if the form is valid
    if (this.checkValidity()) {
        // Show success modal
        document.getElementById('successModal').style.display = 'block';

        // After 2 seconds, reset form and hide the modal
        setTimeout(function() {
            document.getElementById('myForm').reset(); // Optionally reset the form
            document.getElementById('successModal').style.display = 'none'; // Hide the modal
        }, 2000); // 2 seconds delay
    } else {
        alert('Please fill in all required fields.');
    }
});

// Function to close the success modal manually
function closeModal() {
    document.getElementById('successModal').style.display = 'none';
}
