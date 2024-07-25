const sliderImages = document.querySelectorAll(".slider-img");
const sliderNextButton = document.querySelector(".slider-next-btn");
const sliderPrevButton = document.querySelector(".slider-prev-btn");
let sliderImagesIndex = 1;

const nextSlideImg = () => {
  if (sliderImagesIndex <= sliderImages.length) {
    gsap.to(sliderImages, {
      x: `${sliderImagesIndex * -100}%`,
      duration: 0.3,
      ease: Expo.easeInOut,
      onComplete: function () {
        gsap.set(this._targets[0], {
          x: `${this._targets[0] * 100}%`,
        });
      },
    });

    sliderImagesIndex++;
  } else {
    sliderImagesIndex = 1;
    // sliderImages.forEach((e) => {
    //   gsap.to(e, {
    //     x: 0,
    //     duration: 0.3,
    //     ease: Expo.easeInOut,
    //   });
    // });
  }
};
sliderNextButton.addEventListener("click", () => {
  nextSlideImg();
});
