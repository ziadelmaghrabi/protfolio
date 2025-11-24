// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});


// Typing Animation
const text =
"My name is Ziad Ayman Abdalla Elmaghraby, a passionate Front-End Developer skilled in HTML, CSS, JavaScript, and React. I also have strong experience in C++, Java, Python, and OOP.";

let i = 0;
const typingText = document.getElementById("typing-text");
const aboutSection = document.querySelector(".about-container");
let started = false;

function type() {
  if (i < text.length) {
    typingText.textContent += text[i];
    i++;
    setTimeout(type, 25);
  }
}

aboutSection.addEventListener("mouseenter", () => {
  if (!started) {
    started = true;
    type();
  }
});

 const img = document.querySelector('.profile-img');
    img.addEventListener('mousemove', function(e) {
        const rect = img.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        img.style.transform = `rotateY(${x / 20}deg) rotateX(${-y / 20}deg) scale(1.05)`;
        img.style.transition = 'transform 0.1s';
        img.style.boxShadow = `0 8px 40px 0 #4fc3f7, 0 6px 24px rgba(0,0,0,0.8)`;
    });
    img.addEventListener('mouseleave', function() {
        img.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1)';
        img.style.transition = 'transform 0.4s';
        img.style.boxShadow = '0 6px 24px rgba(0,0,0,0.8)';
    });


