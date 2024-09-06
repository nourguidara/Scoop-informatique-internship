document.querySelectorAll('button[type="button"]').forEach(button => {
    button.addEventListener('click', function() {
        // Determine the form associated with the button
        const form = button.closest('form'); // Get the nearest form element

        // Collect answers from the form
        const formData = new FormData(form);

        // Add formId to the data
        formData.append('formId', form.getAttribute('id')); // Assuming form id is 'Travail' or 'Gaming'

        // Prepare data for submission
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Submit form data via AJAX
        fetch('/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(data).toString()
        })
        .then(response => response.text())
        .then(html => {
            document.open();
            document.write(html);
            document.close();
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});
