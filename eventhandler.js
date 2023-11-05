document.addEventListener("DOMContentLoaded", function() {
    // Get the H1 element by its ID
    var title = document.getElementById("headimage");
    
    // Add a click event listener to the H1 element
    title.addEventListener("click", function() {
        // Redirect to the homepage (change the URL to your actual homepage)
        window.location.href = "index.html";
    });
});
