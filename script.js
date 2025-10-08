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
    alert('Jiunge na Magroup yetu ya Whatsapp kwa msaada zaidi. Bonyeza okay kuendelea');
    window.location.href = '/games.html';
  } else {
    errorMessage.textContent = data.message || 'PIN SIO SAHIHI!';
  }
} catch (error) {
  console.error('Fetch error:', error);
  errorMessage.textContent = 'Something went wrong: ' + error.message;
}
}

