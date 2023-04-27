function includeHTML() {
    const elements = [
      { elId: "header", file: "partials/header.html" },
      { elId: "nav", file: "partials/nav.html" },
      { elId: "footer", file: "partials/footer.html" }
    ];
  
    elements.forEach(element => {
      const el = document.getElementById(element.elId);
      if (el) {
        fetch(element.file)
          .then(response => response.text())
          .then(data => {
            el.innerHTML = data;
          });
      }
    });
  }
  
  document.addEventListener("DOMContentLoaded", includeHTML);
  