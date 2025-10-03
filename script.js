const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


function checkPin() {
const pin = document.getElementById('pinInput').value;
const errorMsg = document.getElementById('errorMessage');
      
if (pin === '1425') {
  window.location.href="games.html"
  errorMsg.style.display = 'none';
} else {
  errorMsg.textContent = 'Wrong PIN';
  errorMsg.style.display = 'block';
  document.getElementById('pinInput').value = ''; // Clear input
}
}

function logout() {
  document.getElementById('loginForm').style.display = 'block';
  document.getElementById('pageTwo').style.display = 'none';
  document.getElementById('pinInput').value = '';
  document.getElementById('errorMessage').style.display = 'none';
}