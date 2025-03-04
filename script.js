// Example: Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Smooth scrolling for navbar links
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
// Highlight active navbar link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 70; // Adjust for navbar height
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        const targetId = `#${section.getAttribute('id')}`;
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === targetId) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  // Smooth scrolling for "Learn More" button
document.querySelector('.header .btn').addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });


// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Validate form
  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    return;
  }

  // Simulate form submission (replace with actual backend integration)
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

  // Show success message
  alert('Your message has been sent!');
  document.getElementById('contact-form').reset();
});