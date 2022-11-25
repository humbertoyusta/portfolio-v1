/**
 * Auxiliar constants
 */

const vw = Math.max(
  document.documentElement.clientWidth || 0,
  window.innerWidth || 0
);

/**
 * Auxiliar functions
 */

function textAnimation(timeline, element) {
  timeline.from(element, {
    duration: 0.4,
    y: 20,
    opacity: 0,
    ease: Power2.easeInOut
  });
}

function textFromRightAnimation(timeline, element) {
  timeline.from(element, {
    x: 50,
    opacity: 0,
    duration: 0.4,
    ease: Power2.easeOut
  });
}

function textSingleAnimation(element) {
  gsap.from(element, {
    duration: 0.8,
    x: -50,
    opacity: 0,
    ease: Power2.easeInOut,
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      toggleActions: "play reverse play reverse"
    }
  });
}

/**
 * Navbar
 */

let navbarButton = document.querySelector(".navbar-button");
let navbarWrapper = document.querySelector(".navbar-wrapper");
let navbar = document.querySelector(".navbar");
let navbarItems = document.querySelectorAll(".navbar a");

navbarButton.addEventListener("click", toggleNavbar);

for (let i = 0; i < navbarItems.length; i++) {
  navbarItems[i].addEventListener("click", toggleNavbar);
}

function toggleNavbar() {
  navbarWrapper.classList.toggle("visible");
  navbar.classList.toggle("visible");
}

/*
gsap.from(navbarWrapper, {
  x: 20,
  y: -50,
  duration: 1,
  opacity: 0
});
*/

/**
 * Navbar animation
 */

if (vw >= 900) {
  let navbarTimeline = gsap.timeline();
  navbarTimeline.from(navbarWrapper, {
    opacity: 0,
    x: 50,
    duration: 1,
    ease: Power2.easeInOut
  });
}

/**
 * Animations for the first part (About and photo card)
 */

let photo = document.querySelector(".my-photo");
let photoCard = document.querySelector(".photo-card");
let name = document.querySelector(".photo-card h1");
let career = document.querySelector(".photo-card h2");
let aboutMeHeader = document.querySelector(".about-me h3");
let aboutMeText = document.querySelector(".about-me p");

let firstTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: photo,
    toggleActions: "play reverse play reverse"
  }
});
let secondTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: aboutMeHeader,
    toggleActions: "play reverse play reverse"
  }
});

firstTimeline.from(photo, {
  opacity: 0,
  y: -100,
  duration: 1
});
firstTimeline.from(photoCard, {
  opacity: 0,
  y: 100,
  duration: 1,
  ease: Power2.easeOut
});
firstTimeline.from(name, {
  opacity: 0,
  duration: 0.3
});
firstTimeline.from(career, {
  opacity: 0,
  duration: 0.3
});

if (vw >= 600) {
  textFromRightAnimation(firstTimeline, aboutMeHeader);
  textFromRightAnimation(firstTimeline, aboutMeText);
} else {
  textFromRightAnimation(secondTimeline, aboutMeHeader);
  textFromRightAnimation(secondTimeline, aboutMeText);
}

/**
 * Animations for the second part
 */

let experienceHeader = document.querySelector(".experience h3");
textSingleAnimation(experienceHeader);

let logoBoxes = document.querySelectorAll(".logo-box");
let headers4 = document.querySelectorAll(".experience h4");
let headers5 = document.querySelectorAll(".experience h5");
let paragraphs = document.querySelectorAll(".experience p");

for (let i = 0; i < logoBoxes.length; i++) {
  let dist = -100;
  if (i & 1) dist = 100;

  let experienceTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: headers4[i],
      toggleActions: "play reverse play reverse"
    }
  });

  experienceTimeline.from(logoBoxes[i], {
    duration: 1.5,
    x: dist,
    ease: Power2.easeOut
  });
  textAnimation(experienceTimeline, headers4[i]);
  textAnimation(experienceTimeline, headers5[i]);
  textAnimation(experienceTimeline, paragraphs[i]);
}

/**
 * Animations for the third part
 */

let projectsHeader = document.querySelector(".third-part h3");
textSingleAnimation(projectsHeader);

let projects = document.querySelectorAll(".project");

for (let i = 0; i < projects.length; i++) {
  let projectTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: projects[i],
      toggleActions: "play reverse play reverse"
    }
  });
  projectTimeline.from(projects[i], {
    duration: 1.2,
    y: 100,
    opacity: 0,
    ease: Power2.easeInOut
  });
}

/**
 * Animations for the fourth part (Education)
 */

let educationHeader = document.querySelector(".fourth-part h3");
textSingleAnimation(educationHeader);

let educationCard = document.querySelector(".hs");

gsap.from(educationCard, {
  scrollTrigger: {
    trigger: educationCard,
    toggleActions: "play reverse play reverse"
  },
  duration: 2,
  x: -200,
  opacity: 0,
  ease: Power2.easeInOut
});

/**
 * Animations for the fifth part (Contact)
 */

let contactElements = document.querySelectorAll(".contact-element");

for (let i = 0; i < contactElements.length; i++) {
  gsap.from(contactElements[i], {
    scrollTrigger: {
      trigger: contactElements[i],
      toggleActions: "play reverse play reverse"
    },
    duration: 0.8,
    x: -40,
    opacity: 0,
    ease: Power2.easeOut
  });
}
