document.addEventListener('DOMContentLoaded', () => {
  // Add click event listeners to navigation links
  document.getElementById('about-link').addEventListener('click', () => {
    console.log("About clicked");
    showSection('about');
  });
  
  document.getElementById('portfolio-link').addEventListener('click', () => {
    console.log("Portfolio clicked");
    showSection('portfolio');
  });

  // Handle URL hash on page load
  const hash = window.location.hash.substring(1); // Remove the `#` symbol
  if (hash) {
    showSection(hash);
  } else {
    showSection('about'); // Default section
  }
});

// Function to show and hide sections based on navigation
function showSection(sectionId) {
  const sections = document.querySelectorAll('.content-section');
  
  // Hide all sections
  sections.forEach(section => {
    section.style.display = 'none';
  });
  
  // Show the selected section
  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.style.display = 'block';
    console.log(`Showing section: ${sectionId}`);
  } else {
    console.error(`Section with ID ${sectionId} not found`);
  }

  // Update the browser history to track the current section
  history.pushState({ section: sectionId }, '', '#' + sectionId);
}

// Handle the back/forward navigation (popstate event) for portolio page that it retunrs to portfolio not home page 
window.addEventListener('popstate', (event) => {
  if (event.state && event.state.section) {
    showSection(event.state.section);
  } else {
    showSection('portfolio');  // Default back to the portfolio section, 
    // dont default back to portfolio section, rather the most recent page that was being used before that 
  }
});