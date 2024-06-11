const websitePrefix = 'codefez.github.io'; // Replace with your actual website name

function getColorScheme() {
  // Try to get the color scheme preference from the cookie
  const cookieValue = document.cookie.match(new RegExp(`(^|;) ${websitePrefix}-colorScheme=([^;]*)`));
  return cookieValue ? cookieValue[2] : 'emerald'; // Default to 'light' if no cookie found
}

function setColorScheme(scheme) {
  // Set the cookie with the chosen color scheme and website prefix
  document.cookie = `${websitePrefix}-colorScheme=${scheme}; path=/;`;
  // Update the document's body class to reflect the chosen scheme
  document.body.classList.remove('emerald', 'dark');
  document.body.classList.add(scheme);
}
