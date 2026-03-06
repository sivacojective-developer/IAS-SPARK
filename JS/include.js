function includeHTML() {

  let elements = document.querySelectorAll("[data-include]");

  elements.forEach(el => {

    let file = el.getAttribute("data-include");

    fetch(file)
      .then(response => response.text())
      .then(data => {

        el.innerHTML = data;

        // Run menu script AFTER header loads
        if (typeof initMenuToggle === "function") {
          initMenuToggle();
        }

      });

  });

}

document.addEventListener("DOMContentLoaded", includeHTML);