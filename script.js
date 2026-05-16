const form = document.getElementById('contactForm');

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const message = document.getElementById('message');
const consent = document.getElementById('consent');

const toast = document.querySelector('.toast');

function showError(id, msg) {
  document.getElementById(id).textContent = msg;
}

function clearError(id) {
  document.getElementById(id).textContent = '';
}

function isEmailValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let valid = true;

  if (!firstName.value.trim()) {
    showError('firstNameError', 'This field is required');
    valid = false;
  } else clearError('firstNameError');

  if (!lastName.value.trim()) {
    showError('lastNameError', 'This field is required');
    valid = false;
  } else clearError('lastNameError');

  if (!email.value.trim()) {
    showError('emailError', 'This field is required');
    valid = false;
  } else if (!isEmailValid(email.value)) {
    showError('emailError', 'Please enter a valid email address');
    valid = false;
  } else clearError('emailError');

  if (!message.value.trim()) {
    showError('messageError', 'This field is required');
    valid = false;
  } else clearError('messageError');

  const query = document.querySelector('input[name="query"]:checked');
  if (!query) {
    showError('queryError', 'Please select a query type');
    valid = false;
  } else clearError('queryError');

  if (!consent.checked) {
    showError('consentError', 'To submit this form, please consent to being contacted');
    valid = false;
  } else clearError('consentError');

  if (valid) {
    form.reset();
    toast.classList.remove('hidden');

    setTimeout(() => {
      toast.classList.add('hidden');
    }, 3000);
  }
});