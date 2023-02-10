console.log("123");

var name = "MIKAAAAA";
var name = "mikazuki satoh";
let age = 16;
age = age + 1;
console.log(age);
let btnChangeImg = document.getElementById("change-img-btn");
const changeImage = () => {
  var imgElement = document.getElementById("my-img");
  imgElement.src = "https://images3.memedroid.com/images/UPLOADED818/6365d96cec41b.jpeg";
};
btnChangeImg.addEventListener("click", () => {
  console.log("clicked");
  changeImage();
});
