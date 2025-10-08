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
    alert('Jiunge na Magroup yetu ya Whatsapp kwa msaada zaidi. Bonyeza okay kuendelea');
    // ✅ Access granted
    window.location.href = '/games.html';
  } else {
    errorMessage.textContent = data.message || 'incorrect PIN!';
  }
} catch (error) {
  console.error('Fetch error:', error);
  errorMessage.textContent = 'Something went wrong: ' + error.message;
}
}


// counter service js

const counters = document.querySelectorAll('.counter');
const speed = 300; // smaller = faster

  const startCounting = () => {
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
  counter.innerText = Math.ceil(count + increment);
  setTimeout(updateCount, 20);
} else {
  counter.innerText = target + "+";
}
      };

      updateCount();
    });
  };

  // Use Intersection Observer so it starts only when visible
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startCounting();
        observer.disconnect(); // run once
      }
    });
  });

  observer.observe(document.querySelector('.stats-section'));
