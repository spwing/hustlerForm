window.onload = function() {
  document.getElementById('linkForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    var form = event.target;
    var formData = new FormData(form);

    fetch('https://backend.hustlerform.com/api/add-contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: formData.get('email'),
        oldLink: formData.get('oldLink')
      })
    })
     .then(function(response) {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error adding contact');
        }
      })
      .then(function(data) {
        console.log(data.message); // Success message from the server
        // Clear the form fields if needed
        form.reset();
      })
      .catch(function(error) {
        console.error('Error:', error.message);
        // Handle the error and display an error message to the user
      });
  });
};
