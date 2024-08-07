const sliderInnner = document.querySelector(".slider-inner");
const sliderNextButton = document.querySelector(".slider-next-btn");
const sliderPrevButton = document.querySelector(".slider-prev-btn");
const sliderImages = document.querySelectorAll(".slider-img");
let imageIndex = 0;

const nextSlideImg = () => {
  if (imageIndex >= sliderImages.length - 1) {
    imageIndex = 0;
  } else {
    imageIndex++;
  }
  Array.from(sliderImages).forEach((sliderImagesElem) => {
    sliderImagesElem.style.transform = `translateX(-${imageIndex * 100}%)`;
  });
};
sliderNextButton.addEventListener("click", nextSlideImg);

const prevSlideImg = () => {
  if (imageIndex <= 0) {
    console.log(true);
    imageIndex = sliderImages.length - 1;
  } else {
    console.log(false);
    imageIndex--;
  }
  Array.from(sliderImages).forEach((sliderImagesElem) => {
    sliderImagesElem.style.transform = `translateX(-${imageIndex * 100}%)`;
  });
};
sliderPrevButton.addEventListener("click", prevSlideImg);

console.log(2 - 3);
