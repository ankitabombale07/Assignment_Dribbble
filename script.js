
//First page
function validateForm() {
  console.log('Validation started...');
  var name = document.getElementById('name').value;
  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  if (name === '' || username === '' || email === '' || password === '') {
    console.log('Form validation failed: All fields must be filled out');
    document.getElementById('message').innerText = 'All fields must be filled out';
    return false;
  }
  console.log('Form submitted successfully!');
  document.getElementById('message').innerText = 'Form submitted successfully!';
  return true;
}


//Second page
document.addEventListener("DOMContentLoaded", function() {
  const button = document.querySelector(".button1");
  const displayImage = document.getElementById("display_image");
  const displayImage1 = document.getElementById("display_image1");
button.addEventListener("click", function() {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*";
      input.click();
      input.addEventListener("change", function() {
          const file = this.files[0];
          if (file) {
              const reader = new FileReader();
              reader.onload = function(event) {
                  const imageUrl = event.target.result;
                  displayImage.style.backgroundImage = `url('${imageUrl}')`;
                  displayImage1.style.backgroundImage = `url('${imageUrl}')`;
              };
              reader.readAsDataURL(file);
          }
      });
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const inputField = document.querySelector('.input-box input');
  const submitButton = document.getElementById('submitButton');
  inputField.addEventListener('input', function() {
      if (this.value.trim() !== '') {
          submitButton.disabled = false; 
      } else {
          submitButton.disabled = true; 
      }
  });
  submitButton.addEventListener('click', function() {
      const location = inputField.value.trim();
      if (location !== '') {
          alert('Location entered: ' + location);
      } else {
          alert('Please enter a location.');
      }
  });
});


//third page
const checkboxes = document.querySelectorAll('.checkbox-input');
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', function() {
        const label = checkbox.nextElementSibling; 
        if (checkbox.checked) {
            label.style.borderColor = '#f70656'; 
            label.style.backgroundColor = '#f70656';
        } else {
            label.style.borderColor = '#999'; 
            label.style.backgroundColor = 'transparent';
        }
        checkboxes.forEach((cb) => {
            if (cb !== checkbox) {
                const otherLabel = cb.nextElementSibling;
                otherLabel.style.borderColor = '#999';
                otherLabel.style.backgroundColor = 'transparent';
                cb.checked = false;
            }
        });
    });
});


//fourth page
