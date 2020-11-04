// //SWITCH LIGHT-DARK FUNCTIONALITY - based on the css var colors (switching the css vars)
// const toggleSwitch = document.querySelector('input[type ="checkbox"]');

// // Event Listener
// toggleSwitch.addEventListener("change", switchTheme);

// //Switch theme dinamically
// function switchTheme(event) {
//   if (event.target.checked) {
//     document.documentElement.setAttribute("data-theme", "dark");
//   } else {
//     document.documentElement.setAttribute("data-theme", "not defined");//not defined in css - don't need to
//   }
// }

//ENTIRE PROJECT (menubar and images changes)
const toggleSwitch = document.querySelector('input[type ="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

//Dark or Light Images
function imageMod(color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

//Dark Mode Styles
function darkMode() {
  nav.style.backgroundColor = "rgb(0 0 0 / 80%)";
  textBox.style.backgroundColor = "rgb(255 255 255 / 50%)";
  toggleIcon.children[0].textContent = "Dark Mode";
  toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
  imageMod("dark");
}

//Light Mode Styles
function lightMode() {
  nav.style.backgroundColor = "rgb(255 255 255 / 80%)";
  textBox.style.backgroundColor = "rgb(0 0 0  / 50%)";
  toggleIcon.children[0].textContent = "Light Mode";
  toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  imageMod("light");
}

//Switch theme dinamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    darkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "not defined"); // not defined value in css - don't need to
    localStorage.setItem("theme", "light");
    lightMode();
  }
}

// Event Listener
toggleSwitch.addEventListener("change", switchTheme);

//Check local storage for theme
//very important when working with local storage, must check if exist before try to retrieve it
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    darkMode();
  } else {
    lightMode();
  }
}
