document.addEventListener("DOMContentLoaded", () => {
  const slideshows = document.querySelectorAll(".slideshow-container");

  slideshows.forEach((slideshow) => {
    let slides = slideshow.querySelectorAll(".slide");
    let prevBtn = slideshow.querySelector(".prev");
    let nextBtn = slideshow.querySelector(".next");
    let index = 0;

    // Show first slide
    slides[index].classList.add("active");

    // Next button
    nextBtn.addEventListener("click", () => {
      slides[index].classList.remove("active");
      index = (index + 1) % slides.length;
      slides[index].classList.add("active");
    });

    // Prev button
    prevBtn.addEventListener("click", () => {
      slides[index].classList.remove("active");
      index = (index - 1 + slides.length) % slides.length;
      slides[index].classList.add("active");
    });
  });
});
