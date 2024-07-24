const sliderNextButton = document.querySelector(".slider-next-btn");
const sliderPrevButton = document.querySelector(".slider-prev-btn");
const sliderImages = document.querySelectorAll(".slider-img");
let sliderImagesIndex = 0;

const nextSlideImg = () => {
  Array.from(sliderImages).forEach((elem) => {
    // if (sliderImagesIndex < sliderImages.length) {
    gsap.to(elem, {
      x: "-100%",
      duration: 0.5,
      ease: Power4.easeInOut,
    });
    //     } else if (sliderImagesIndex === sliderImages.length) {
    //       console.log("complted");
    //       sliderImagesIndex = 0;
    //       gsap.to(elem, {
    //         x: "100%",
    //       });
    //     }
  });
};

const prevSlideImg = () => {
  Array.from(sliderImages).forEach((elem) => {
    // if (sliderImagesIndex < sliderImages.length) {
    gsap.to(elem, {
      x: "0%",
      duration: 0.5,
      ease: Power4.easeInOut,
    });
    //     } else if (sliderImagesIndex === sliderImages.length) {
    //       console.log("complted");
    //       sliderImagesIndex = 0;
    //       gsap.to(elem, {
    //         x: "100%",
    //       });
    //     }
  });
};

sliderNextButton.addEventListener("click", () => {
  nextSlideImg();
  sliderImagesIndex++;
});

sliderPrevButton.addEventListener("click", () => {
  prevSlideImg();
  sliderImagesIndex--;
});

// sliderNextButton.addEventListener("click", () => {
//   if (sliderImagesIndex >= 0) {
//     gsap.to(sliderImages[sliderImagesIndex], {
//       x: "-=100%",
//     });
//     sliderImagesIndex++;
//     gsap.to(sliderImages[sliderImagesIndex], {
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
//   gsap.to(sliderImages[sliderImagesIndex], {
//     x: "-100%",
//   });
// });
