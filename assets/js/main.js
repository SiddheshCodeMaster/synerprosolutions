function updateYear() {
    const span = document.getElementById("year");
    if (span) {
        span.textContent = new Date().getFullYear();
    }
}

async function importComponent(id, file) {
            const response = await fetch(file);
            const html = await response.text();
            document.getElementById(id).innerHTML = html;

            // return so we can chain .then()
            return true;
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Scroll reveal for elements
const scrollElements = document.querySelectorAll('.scroll-reveal');

const elementInView = (el, offset = 0) => {
    const elementTop = el.getBoundingClientRect().top;
    return elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset;
};

const displayScrollElement = (element) => {
    element.classList.add('visible');
};

const hideScrollElement = (element) => {
    element.classList.remove('visible');
};

const handleScrollAnimation = () => {
    scrollElements.forEach(el => {
        if (elementInView(el, 100)) {
            displayScrollElement(el);
        } else {
            hideScrollElement(el);
        }
    });
};

window.addEventListener('scroll', () => {
    handleScrollAnimation();
});

// Trigger once on load in case element is already in view
handleScrollAnimation();

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});

// KPI Counter Animation
const counters = document.querySelectorAll('.counter');
const speed = 1000; // Lower = faster

counters.forEach(counter => {
  const start = +counter.innerText; // Start from 108
  const target = +counter.getAttribute('data-target');
  const increment = (target - start) / speed;

  const updateCount = () => {
    const count = +counter.innerText;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});
