// script.js

(function(){
  emailjs.init("OiT3U7kR8txef7ceo"); // Replace with your EmailJS public key
})();

document.getElementById('skillForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const loading = document.getElementById('loading');
  const successMessage = document.getElementById('successMessage');

  loading.style.display = 'block';

  emailjs.send("service_f5zed3v", "template_d16dwuv", {
    fullName: document.getElementById('fullName').value,
    college: document.getElementById('college').value,
    major: document.getElementById('major').value,
    whatsapp: document.getElementById('whatsapp').value,
    skillsHave: document.getElementById('skillsHave').value,
    skillsWant: document.getElementById('skillsWant').value
  })
  .then(function(response) {
    loading.style.display = 'none';
    successMessage.style.display = 'block';
    document.getElementById('skillForm').reset();
  }, function(error) {
    loading.style.display = 'none';
    alert('Failed to send. Please try again later.');
  });
});
