// Function to show and hide sections based on navigation
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    
    // Hide all sections
    sections.forEach(section => {
      section.style.display = 'none';
    });
    
    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';
  }
  