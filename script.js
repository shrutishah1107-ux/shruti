/**
 * Shruti Shah - Portfolio Interactive Scripts
 * Handles mobile navigation, scrollspy, contact form validation, toast feedback, and resume modal.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
      });
    });
  }

  // 2. Active Navigation ScrollSpy (About, Skills, Projects, Education, Contact)
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const highlightNavOnScroll = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightNavOnScroll, { passive: true });

  // 3. Contact Form Validation & Toast Notification
  const contactForm = document.getElementById('contactForm');
  const toast = document.getElementById('toastNotification');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim()) {
        nameError.textContent = 'Please enter your name.';
        nameInput.classList.add('invalid');
        isValid = false;
      } else {
        nameError.textContent = '';
        nameInput.classList.remove('invalid');
      }

      // Validate Email
      if (!emailInput.value.trim() || !validateEmail(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        emailInput.classList.add('invalid');
        isValid = false;
      } else {
        emailError.textContent = '';
        emailInput.classList.remove('invalid');
      }

      // Validate Message
      if (!messageInput.value.trim() || messageInput.value.trim().length < 8) {
        messageError.textContent = 'Please write a message with at least 8 characters.';
        messageInput.classList.add('invalid');
        isValid = false;
      } else {
        messageError.textContent = '';
        messageInput.classList.remove('invalid');
      }

      if (isValid) {
        // Show success toast
        toast.classList.remove('hidden');
        contactForm.reset();

        setTimeout(() => {
          toast.classList.add('hidden');
        }, 5000);
      }
    });
  }

  // 4. Resume Modal Controls (Navbar, Hero, Mobile buttons)
  const resumeModal = document.getElementById('resumeModal');
  const modalClose = document.getElementById('modalClose');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalDismiss = document.getElementById('modalDismiss');

  const resumeButtons = [
    document.getElementById('navResumeBtn'),
    document.getElementById('heroResumeBtn'),
    document.getElementById('mobileResumeBtn')
  ];

  const openResumeModal = (e) => {
    if (e) e.preventDefault();
    if (resumeModal) resumeModal.classList.add('active');
    if (mobileNav) mobileNav.classList.remove('open');
  };

  const closeResumeModal = () => {
    if (resumeModal) resumeModal.classList.remove('active');
  };

  resumeButtons.forEach(btn => {
    if (btn) btn.addEventListener('click', openResumeModal);
  });

  if (modalClose) modalClose.addEventListener('click', closeResumeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeResumeModal);
  if (modalDismiss) modalDismiss.addEventListener('click', closeResumeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && resumeModal && resumeModal.classList.contains('active')) {
      closeResumeModal();
    }
  });

  // 5. Friendly Resume Download Helper
  const directDownloadBtn = document.getElementById('directDownloadBtn');
  if (directDownloadBtn) {
    directDownloadBtn.addEventListener('click', (e) => {
      // Check if file can be accessed or notify the user
      fetch('resume.pdf', { method: 'HEAD' })
        .then(res => {
          if (!res.ok) {
            alert('Notice: To enable this download, place your actual "resume.pdf" file into the portfolio folder!\n\nPath: C:\\Users\\shrut\\.gemini\\antigravity\\scratch\\portfolio\\resume.pdf');
          }
        })
        .catch(() => {
          alert('Notice: To enable this download, place your actual "resume.pdf" file into the portfolio folder!\n\nPath: C:\\Users\\shrut\\.gemini\\antigravity\\scratch\\portfolio\\resume.pdf');
        });
    });
  }
});
