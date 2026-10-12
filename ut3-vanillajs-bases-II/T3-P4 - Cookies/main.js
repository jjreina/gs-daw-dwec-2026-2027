// Selecting the buttons from the DOM
const lightBtn = document.querySelector("#light");
const darkBtn = document.querySelector("#dark");

/**
 * Applies a theme to the page.
 * @param {String} theme
 */
function applyTheme(theme) {
  if (theme === "dark") {
    document.body.style.backgroundColor = "#222"; // Sets the background color to dark
    document.body.style.color = "white"; // Sets the text color to white so it is readable on the dark background
  } else {
    document.body.style.backgroundColor = "white"; // Sets the background color to light
    document.body.style.color = "black"; // Sets the text color to black so it is readable on the light background
  }
}
/**
 * Gets the value of a cookie by its name.
 * @param {String} name - The cookie name.
 * @returns {String|null} - The cookie value, or null if it is not found.
 */
function getCookie(name) {
  const foundCookie = document.cookie
    .split("; ")
    .find((cookie) => cookie.split("=")[0] === name);

  return foundCookie ? foundCookie.split("=")[1] : null;
}

/**
 * Sets the value of a cookie.
 * @param {String} name - The cookie name.
 * @param {String} value - The cookie value.
 */
darkBtn.addEventListener("click", () => {
  applyTheme("dark");

  document.cookie = "theme=dark;";
});

/**
 * Sets the value of a cookie.
 * @param {String} name - The cookie name.
 * @param {String} value - The cookie value.
 */
lightBtn.addEventListener("click", () => {
  applyTheme("light");

  document.cookie = "theme=light;";
});

// Check if a theme is saved in the cookies and apply it. First time.
const savedTheme = getCookie("theme");

if (savedTheme !== null) {
  applyTheme(savedTheme);
}
