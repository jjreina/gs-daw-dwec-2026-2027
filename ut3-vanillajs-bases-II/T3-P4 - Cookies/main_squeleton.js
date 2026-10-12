// Selecting the buttons from the DOM
const lightBtn = null;
const darkBtn = null;

/**
 * Applies a theme to the page.
 * @param {String} theme
 */
function applyTheme(theme) {}

/**
 * Gets the value of a cookie by its name.
 * @param {String} name - The cookie name.
 * @returns {String|null} - The cookie value, or null if it is not found.
 */
function getCookie(name) {}

/**
 * Sets the value of a cookie.
 * @param {String} name - The cookie name.
 * @param {String} value - The cookie value.
 */
darkBtn.addEventListener("click", () => {});

/**
 * Sets the value of a cookie.
 * @param {String} name - The cookie name.
 * @param {String} value - The cookie value.
 */
lightBtn.addEventListener("click", () => {});

// Check if a theme is saved in the cookies and apply it. First time.
const savedTheme = getCookie("theme");

if (savedTheme !== null) {
  applyTheme(savedTheme);
}
