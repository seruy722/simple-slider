"use strict";

let btnLeft = document.getElementById("left");
let carousel = document.getElementsByClassName("carousel");
let btnRight = document.getElementById("right");
let pagination = document.querySelectorAll(".pagination>li");
let activeImg;
let activePag;
let images = document.querySelectorAll(".carousel>li");

btnRight.onclick = () => {
  for (let i = 0; i < images.length; i++) {
    if (images[i].style.display === "none") {
      continue;
    } else {
      activeImg = images[i];
      activePag = pagination[i];
    }
  }

  //Change images
  let nextPag = activePag.nextElementSibling;
  let nextImg = activeImg.nextElementSibling;
  let previousPag = activePag.previousElementSibling;
  let previousImg = activeImg.previousElementSibling;
  activeImg.style.display = "none";
  if (nextImg) {
    nextImg.style.display = "block";
    activePag.classList.remove("active");
    nextPag.classList.add("active");
  } else {
    images[0].style.display = "block";
    activePag.classList.remove("active");
    pagination[0].classList.add("active");
  }
};

btnLeft.onclick = () => {
  for (let i = 0; i < images.length; i++) {
    if (images[i].style.display === "none") {
      continue;
    } else {
      activeImg = images[i];
      activePag = pagination[i];
    }
  }

  let nextPag = activePag.nextElementSibling;
  let nextImg = activeImg.nextElementSibling;
  let previousPag = activePag.previousElementSibling;
  let previousImg = activeImg.previousElementSibling;
  activeImg.style.display = "none";
  if (previousImg) {
    previousImg.style.display = "block";
    activePag.classList.remove("active");
    previousPag.classList.add("active");
  } else {
    images[images.length - 1].style.display = "block";
    activePag.classList.remove("active");
    pagination[images.length - 1].classList.add("active");
  }
};
