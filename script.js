// script.js

  // Hide loader when page fully loads
  window.addEventListener('load', function () {
    document.getElementById('loader').style.display = 'none';
  });


// Smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Simple form validation
document.querySelector('form').addEventListener('submit', function (e) {
  const name = document.getElementById('name').value.trim();
  const mobile = document.getElementById('mobile').value.trim();
  const location = document.getElementById('location').value.trim();
  const address = document.getElementById('address').value.trim();

  if (!name || !mobile || !location || !address) {
    alert('Please fill in all fields before submitting.');
    e.preventDefault(); // Stop form from submitting
  } else if (!/^[0-9]{10}$/.test(mobile)) {
    alert('Please enter a valid 10-digit mobile number.');
    e.preventDefault();
  }
});
