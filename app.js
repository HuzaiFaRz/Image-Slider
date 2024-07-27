const sliderInnner = document.querySelector(".slider-inner");
const sliderNextButton = document.querySelector(".slider-next-btn");
const sliderPrevButton = document.querySelector(".slider-prev-btn");
let sliderImagesIndex = 0;

// const imagesArray = ["2-Img.jpg", "3-Img.jpg", "4-Img.jpg", "5-Img.jpg"];

// for (let i = 0; i < imagesArray.length; i++) {
//   let slideDiv = document.createElement("div");
//   let imagediv = document.createElement("img");
//   slideDiv.classList.add("slider-item");
//   imagediv.classList.add("slider-img");
//   slideDiv.appendChild(imagediv);
//   sliderInnner.appendChild(slideDiv);
//   imagediv.setAttribute("src", `${imagesArray[i]}`);
// }

const sliderNextButtonDisable = () => {
  gsap.to(sliderNextButton, {
    cursor: "not-allowed",
    opacity: 0.5,
    duration: 0.3,
    ease: Expo.easeInOut,
  });
};
const sliderNextButtonEnable = () => {
  gsap.to(sliderNextButton, {
    cursor: "pointer",
    opacity: 1,
    duration: 0.3,
    ease: Expo.easeInOut,
  });
};

const sliderPrevButtonDisable = () => {
  gsap.to(sliderPrevButton, {
    cursor: "not-allowed",
    opacity: 0.5,
    duration: 0.3,
    ease: Expo.easeInOut,
  });
};
const sliderPrevButtonEnable = () => {
  gsap.to(sliderPrevButton, {
    cursor: "pointer",
    opacity: 1,
    duration: 0.3,
    ease: Expo.easeInOut,
  });
};

const sliderImages = document.querySelectorAll(".slider-img");

const nextSlideImg = () => {
  sliderImagesIndex++;
  if (sliderImagesIndex < sliderImages.length) {
    sliderImages.forEach((e) => {
      gsap.to(e, {
        x: `${sliderImagesIndex * -100}%`,
        duration: 0.5,
        ease: Expo.easeInOut,
      });
    });
  } else {
    sliderImagesIndex = sliderImages.length - 1;
  }
};

sliderNextButton.addEventListener("click", nextSlideImg);

const prevSlideImg = () => {
  sliderImagesIndex--;
  if (sliderImagesIndex >= 0) {
    console.log(true);
    sliderImages.forEach((e) => {
      gsap.to(e, {
        x: `${sliderImagesIndex * -100}%`,
        duration: 0.5,
        ease: Expo.easeInOut,
      });
    });
  } else {
    sliderImagesIndex = sliderImages.length - 1;
  }
};

sliderPrevButton.addEventListener("click", prevSlideImg);

// const prevSlideImg = () => {
//   sliderImagesIndex--;
//   if (sliderImagesIndex >= 0) {
//     sliderImages.forEach((e) => {
//       gsap.to(e, {
//         x: `${sliderImagesIndex * -100}%`,
//         duration: 0.5,
//         ease: Expo.easeInOut,
//       });
//     });
//   } else {
//     sliderImagesIndex = sliderImages.length - 1;
//     sliderImages.forEach((e) => {
//       gsap.to(e, {
//         x: `${sliderImagesIndex * -100}%`,
//         duration: 0.5,
//         ease: Expo.easeInOut,
//       });
//     });
//   }
// };
