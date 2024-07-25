const sliderImages = document.querySelectorAll(".slider-img");
const sliderNextButton = document.querySelector(".slider-next-btn");
const sliderPrevButton = document.querySelector(".slider-prev-btn");
let sliderImagesIndex = 0;

const nextSlideImg = () => {
  if (sliderImagesIndex < sliderImages.length) {
    sliderImages.forEach((e) => {
      gsap.to(e, {
        x: `${sliderImagesIndex * -100}%`,
        duration: 0.3,
        ease: Expo.easeInOut,
      });
    });
  } else {
    sliderImagesIndex = 0;
    sliderImages.forEach((e) => {
      gsap.to(e, {
        x: 0,
        duration: 0.3,
        ease: Expo.easeInOut,
      });
    });
  }
};
sliderNextButton.addEventListener("click", () => {
  sliderImagesIndex++;
  nextSlideImg();
});

const prevSlideImg = () => {
  if (sliderImagesIndex < sliderImages.length) {
    sliderImages.forEach((e) => {
      gsap.to(e, {
        x: `${sliderImagesIndex * 100}%`,
        duration: 0.3,
        ease: Expo.easeInOut,
      });
    });
  } else {
    sliderImagesIndex = 0;
    sliderImages.forEach((e) => {
      gsap.to(e, {
        x: `${sliderImagesIndex * -100}%`,
        duration: 0.3,
        ease: Expo.easeInOut,
      });
    });
  }
};
sliderPrevButton.addEventListener("click", () => {
  sliderImagesIndex--;
  prevSlideImg();
});
