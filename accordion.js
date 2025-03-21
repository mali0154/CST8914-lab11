const accordionBtns = document.querySelectorAll(".accordion");

document.querySelectorAll('.accordion-content p').forEach(p => {
  p.setAttribute('aria-hidden', 'true');
});

accordionBtns.forEach((accordion, index) => {

  accordion.onclick = function () {
    this.classList.toggle("is-open");

    let content = this.nextElementSibling; // Get the next sibling element
    let child = content ? content.firstElementChild : null; // Get the first child of the next sibling (if it exists)
    console.log(child);

    if (content.style.maxHeight) {
      // this is if the accordion is open
      content.style.maxHeight = null;

      if (child) {
        child.setAttribute('aria-hidden', 'true'); // Set aria-hidden to true when the accordion is closed
      }

      // Remove the role and aria-labelledby when accordion is closed
      content.removeAttribute('role');
      content.removeAttribute('aria-labelledby');

    } else {
      // if the accordion is currently closed
      content.style.maxHeight = content.scrollHeight + "px";
      console.log(content.style.maxHeight);

      if (child) {
        child.setAttribute('aria-hidden', 'false'); // Set aria-hidden to false when the accordion is open
      }

      // Add role="region" and aria-labelledby attribute to the content when the accordion is opened
      content.setAttribute('role', 'region');
      content.setAttribute('aria-labelledby', `accordion${index + 1}id`);
    }
  };
});
