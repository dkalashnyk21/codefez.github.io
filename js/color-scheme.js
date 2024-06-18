const websitePrefix = 'codefez.github.io'; // Replace with your actual website name
const themeController = document.querySelector('.theme-controller');
function getColorScheme() {
  console.log("Get color Scheme called from JS file");
  
  // Try to get the color scheme preference from the cookie
  const cookieValue = document.cookie.match(new RegExp(`(^|;) ${websitePrefix}-colorScheme=([^;]*)`));
  //console.log(`Line 15 : ${cookieValue}`)
  // Check if a cookie value exists
  if (cookieValue) {
    try {
      // Attempt to parse the cookie value as JSON
      const parsedValue = cookieValue[2] //JSON.parse(cookieValue[2]);
      // If parsing is successful, return the color property from the parsed object
      return parsedValue || 'emerald'; // Default to 'emerald' if no color property found
    } catch (error) {
      // Handle potential parsing errors (e.g., invalid JSON format)
      console.error("Error parsing cookie value:", error);
      // Return a default value (e.g., 'emerald') in case of parsing error
      return 'emerald';
    }
  } else {
    // No cookie found, return default value
    console.log("no cookie found");
    return 'emerald'; // Default to 'emerald' if no cookie found
  }
  // const cookieValue = document.cookie.match(new RegExp(`(^|;) ${websitePrefix}-colorScheme=([^;]*)`));
  // return cookieValue ? cookieValue[2] : 'emerald'; // Default to 'light' if no cookie found
}

const colorScheme = getColorScheme();
if (colorScheme) {
  document.documentElement.setAttribute('data-theme', colorScheme);
}
function setColorScheme(scheme) {
  console.log("2. Set color scheme function called from JS file");
  // Set the cookie with the chosen color scheme and website prefix
  document.cookie = `${websitePrefix}-colorScheme=${scheme}; path=/;`;
  // Update the document's body class to reflect the chosen scheme
  document.body.classList.remove('emerald', 'dark');
  document.body.classList.add(scheme);
}

// getColorScheme() // calls the function to see if there is a value in cookies.