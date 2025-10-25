const sliderInnner = document.querySelector(".slider-inner");
const sliderNextButton = document.querySelector(".slider-next-btn");
const sliderPrevButton = document.querySelector(".slider-prev-btn");
let imageIndex = 0;
const imagesArray = [
  "./images/1-Img.jpg",
  "./images/2-Img.jpg",
  "./images/3-Img.jpg",
  "./images/4-Img.jpg",
  "./images/5-Img.jpg",
];
for (let i = 0; i < imagesArray.length; i++) {
  let slideDiv = document.createElement("div");
  let imagediv = document.createElement("img");
  slideDiv.classList.add("slider-item");
  imagediv.classList.add("slider-img");
  slideDiv.appendChild(imagediv);
  sliderInnner.appendChild(slideDiv);
  imagediv.setAttribute("src", `${imagesArray[i]}`);
}

const sliderImages = document.querySelectorAll(".slider-img");

sliderNextButton.addEventListener("click", () => {
  if (imageIndex >= sliderImages.length - 1) {
    imageIndex = 0;
  } else {
    imageIndex++;
  }
  Array.from(sliderImages).forEach((sliderImagesElem) => {
    sliderImagesElem.style.transform = `translateX(-${imageIndex * 100}%)`;
  });
});

sliderPrevButton.addEventListener("click", () => {
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
});
