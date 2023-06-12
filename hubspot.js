window.onload = function() {
  document.getElementById('linkForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    var form = event.target;
    var formData = new FormData(form);

    // Make API request to HubSpot
    fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${HUBSPOT_ACCESS_TOKEN}` 
      },
      body: JSON.stringify({
        properties: [
          {
            name: 'oldlink',
            value: formData.get('oldlink')
          },
          {
            name: 'email',
            value: formData.get('email')
          }
        ]
      })
    })
    .then(function(response) {
      if (response.ok) {
        console.log('Contact added successfully');
      } else {
        console.error('Error adding contact');
      }
    })
    .catch(function(error) {
      console.error('Error:', error);
    });
  });
}
