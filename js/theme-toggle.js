// const langButtons = document.querySelectorAll('.lang-btn');
//   const themeButtons = document.querySelectorAll('.theme-btn');
//   const variablesLink = document.getElementById('variables-css');

//   let currentLang = 'arabic';
//   let currentTheme = 'light';

//   function updateVariables() {
//     variablesLink.href = `css/variables-${currentLang}-${currentTheme}.css`;
//   }

//   langButtons.forEach(btn => {
//     btn.addEventListener('click', () => {
//       currentLang = btn.getAttribute('data-lang');
//       langButtons.forEach(b => b.classList.remove('active'));
//       btn.classList.add('active');
//       updateVariables();
//     });
//   });

//   themeButtons.forEach(btn => {
//     btn.addEventListener('click', () => {
//       currentTheme = btn.getAttribute('data-theme');
//       themeButtons.forEach(b => b.classList.remove('active'));
//       btn.classList.add('active');
//       updateVariables();
//     });
//   });

const variablesLink = document.getElementById("variables-css");
let currentLang = "english"; // default
let currentTheme = "light"; // default

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    currentLang = btn.getAttribute("data-lang");

    document.documentElement.setAttribute(
      "lang",
      currentLang === "arabic" ? "ar" : "en"
    );

    // Load correct CSS
    variablesLink.href = `css/variables-${currentLang}-${currentTheme}.css`;

    // Update active buttons
    document
      .querySelectorAll(".lang-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

document.querySelectorAll(".theme-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    currentTheme = btn.getAttribute("data-theme");

    // Load correct CSS
    variablesLink.href = `css/variables-${currentLang}-${currentTheme}.css`;

    // Update active buttons
    document
      .querySelectorAll(".theme-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});
