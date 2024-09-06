function displayform() {
    document.getElementById('form').style.display = 'block';

    document.getElementById('Welcome').style.display = 'none';
}

function displayTravail() {
    document.getElementById('Travail').style.display = 'block';

    document.getElementById('Gaming').style.display = 'none';
    
    /*document.getElementById('intro').style.display = 'none';*/
}

function displayGaming() {
    document.getElementById('Gaming').style.display = 'block';

    document.getElementById('Travail').style.display = 'none';

    /*document.getElementById('intro').style.display = 'none';*/
}

function validateForm(formId, errorMessageId) {
    let form = document.getElementById(formId);
    let valid = true;
    let questionGroups = {};
  
    // Gather all checkbox groups
    Array.from(form.elements).forEach(function (element) {
      if (element.type === 'checkbox') {
        let questionName = element.name;
        if (!questionGroups[questionName]) {
          questionGroups[questionName] = [];
        }
        questionGroups[questionName].push(element);
      }
    });
  
    // Check if exactly one checkbox is selected for each question group
    for (let questionName in questionGroups) {
      let checkboxes = questionGroups[questionName];
      let checkedCount = checkboxes.filter(el => el.checked).length;
      if (checkedCount !== 1) {
        valid = false;
      }
    }
  
    if (!valid) {
      event.preventDefault(); // Prevent form submission
      document.getElementById(errorMessageId).style.display = 'block'; // Show error message
    } else {
      document.getElementById(errorMessageId).style.display = 'none'; // Hide error message
    }
  }
  
  document.getElementById('form1').addEventListener('submit', function (event) {
    validateForm('form1', 'form1-error-message');
  });
  
  document.getElementById('form2').addEventListener('submit', function (event) {
    validateForm('form2', 'form2-error-message');
  });



