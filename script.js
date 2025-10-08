const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


async function checkPin() {
const pin = document.getElementById('pinInput').value;
const errorMessage = document.getElementById('errorMessage');

try {
  const response = await fetch('/api/checkPin', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ pin })
  });

  const data = await response.json();

  if (data.success) {
    // ✅ Access granted
    window.location.href = '/secure-page.html';
  } else {
    errorMessage.textContent = data.message || 'Incorrect PIN!';
  }
} catch (error) {
  console.error('Fetch error:', error);
  errorMessage.textContent = 'Something went wrong: ' + error.message;
}
}


// function checkPin() {
// const pin = document.getElementById('pinInput').value;
// const errorMsg = document.getElementById('errorMessage');
      
// if (pin === '1010') {
//   alert('Jiunge na Magroup yetu ya Whatsapp kwa msaada zaidi. Bonyeza okay kuendelea');
//   window.location.href="games.html"
//   errorMsg.style.display = 'none';
// } else {
//   errorMsg.textContent = 'Wrong PIN';
//   errorMsg.style.display = 'block';
//   document.getElementById('pinInput').value = ''; // Clear input
// }
// }

// function logout() {
//   document.getElementById('loginForm').style.display = 'block';
//   document.getElementById('pageTwo').style.display = 'none';
//   document.getElementById('pinInput').value = '';
//   document.getElementById('errorMessage').style.display = 'none';
// }