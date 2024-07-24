const sliderNextButton = document.querySelector(".slider-next-btn");
const sliderPrevButton = document.querySelector(".slider-prev-btn");
const sliderImages = document.querySelectorAll(".slider-img");
let sliderImagesIndex = 1;
let sliderImagesAnimation = false;

const nextSlideImg = () => {
  if (sliderImagesIndex < sliderImages.length - 1) {
    gsap.to(sliderImages, {
      // x: `${sliderImagesIndex * -100}%`,
      x: "-=100%",
      duration: 0.5,
      ease: Expo.easeInOut,
      onComplete: function () {
        gsap.set(this._targets[0], {
          x: `100%`,
        });
      },
    });
    sliderImagesIndex++;
  } else if (sliderImagesIndex === sliderImages.length - 1) {
    sliderImagesIndex = 1;
  }
};
sliderNextButton.addEventListener("click", () => {
  nextSlideImg();
});

// sliderPrevButton.addEventListener("click", () => {
//   prevSlideImg();
// });
// const prevSlideImg = () => {

//     if (sliderImagesIndex < sliderImages.length) {
//       gsap.to(sliderImages, {
//         x: "0%",
//         duration: 0.5,
//         ease: Power4.easeInOut,
//       });
//       sliderImagesIndex--;
//     } else if (sliderImagesIndex === sliderImages.length) {
//       console.log("complted");
//       sliderImagesIndex = 0;
//       gsap.to(sliderImages, {
//         x: "100%",
//       });
//     }
//   });
// };

// sliderNextButton.addEventListener("click", () => {
//   if (sliderImagesIndex >= 0) {
//     gsap.to(elem, {
//       x: "-=100%",
//     });
//     sliderImagesIndex++;
//     gsap.to(elem, {
//       x: "-=100%",
//     });
//     sliderImagesIndex++;
//   }

//   if (sliderImagesIndex === sliderImages.length) {
//     console.log("complted");
//     sliderImagesIndex = 0;
//   }
// });

// console.log(sliderImagesIndex);

// sliderNextButton.addEventListener("click", () => {
//   sliderImagesIndex++;
//   gsap.to(elem, {
//     x: "-100%",
//   });
// });
