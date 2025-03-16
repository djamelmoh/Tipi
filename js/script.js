document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  const currentYearElements = document.querySelectorAll("#current-year")
  currentYearElements.forEach((element) => {
    element.textContent = new Date().getFullYear()
  })

  // Mobile menu toggle
  const menuToggle = document.querySelector(".mobile-menu-toggle")
  const mobileMenu = document.querySelector(".mobile-menu")

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("active")

      // Change hamburger to X
      const spans = menuToggle.querySelectorAll("span")
      if (mobileMenu.classList.contains("active")) {
        spans[0].style.transform = "rotate(45deg) translate(5px, 5px)"
        spans[1].style.opacity = "0"
        spans[2].style.transform = "rotate(-45deg) translate(5px, -5px)"
      } else {
        spans[0].style.transform = "none"
        spans[1].style.opacity = "1"
        spans[2].style.transform = "none"
      }
    })
  }

  // Contact form handling
  const contactForm = document.getElementById("contact-form")
  const formSuccess = document.getElementById("form-success")
  const sendAnother = document.getElementById("send-another")

  if (contactForm && formSuccess) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Simulate form submission
      setTimeout(() => {
        contactForm.style.display = "none"
        formSuccess.classList.remove("hidden")
      }, 1000)
    })
  }

  if (sendAnother && contactForm && formSuccess) {
    sendAnother.addEventListener("click", () => {
      formSuccess.classList.add("hidden")
      contactForm.style.display = "grid"
      contactForm.reset()
    })
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href")

      if (href !== "#") {
        e.preventDefault()

        const targetElement = document.querySelector(href)
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          })
        }
      }
    })
  })

  // Add active class to current page in navigation
  const currentPage = window.location.pathname.split("/").pop()
  const navLinks = document.querySelectorAll(".main-nav a, .mobile-menu a")

  navLinks.forEach((link) => {
    const linkHref = link.getAttribute("href")
    if (linkHref === currentPage || (currentPage === "" && linkHref === "index.html")) {
      link.classList.add("active")
    }
  })
})

