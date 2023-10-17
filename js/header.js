// Load and insert the header
const headerContainer = document.getElementById('header');
fetch('html/header.html')
  .then(response => response.text())
  .then(data => {
    headerContainer.innerHTML = data;
  });
