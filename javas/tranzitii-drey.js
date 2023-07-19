// Get the container and the element to add the class to for container-dn-ceo
const containerE1 = document.querySelector(".container-actiune-elemente");
const elementE1 = document.querySelector(".container-actiune-el-2");

// Calculate the middle point of the container with a slight delay to ensure that all elements are fully rendered for container-dn-ceo
setTimeout(() => {
  const containerMiddleE1 = containerE1.offsetTop + containerE1.offsetHeight / 1;

  // Add a scroll event listener to the window for container-dn-ceo
  window.addEventListener("scroll", () => {
    // Check if the middle point of the container is visible in the viewport for container-dn-ceo
    if (window.pageYOffset + window.innerHeight >= containerMiddleE1) {
      // Add the class to the element for container-dn-ceo
      elementE1.classList.add("dn-efect-titlu");
    }
  });

  // Check if the middle point of the container is already in view on page load for container-dn-ceo
  if (window.pageYOffset + window.innerHeight >= containerMiddleE1) {
    elementE1.classList.add("dn-efect-titlu");
  }
}, 100);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////


