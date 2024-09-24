document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const formData = new FormData(this);
    const data = {
        name: formData.get("Name"),
        email: formData.get("Email"),
        message: formData.get("Message"),
        date: formData.get("date") // Corrected from 'fromdata.get'
    };

    // Send the data to the API
    fetch('http://127.0.0.1:8000/clintForm/', { // Replace with your actual API endpoint
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Specify the content type
        },
        body: JSON.stringify(data) // Convert data to JSON format
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json(); // Parse the JSON from the response
    })
    .then(data => {
        console.log('Success:', data); // Handle success
        alert("Form submitted successfully!");
        document.getElementById("contactForm").reset(); // Reset the form
    })
    .catch((error) => {
        console.error('Error:', error); // Handle error
        alert("There was an error submitting the form.");
    });
});
