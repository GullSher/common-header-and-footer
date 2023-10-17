// Load and insert the footer
const footerContainer = document.getElementById('footer');
fetch('html/footer.html')
  .then(response => response.text())
  .then(data => {
    footerContainer.innerHTML = data;
  });
