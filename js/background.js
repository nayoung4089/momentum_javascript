const images = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`; // <img src = "img/2.jpg"> 이런 식으로 생성됨
document.body.appendChild(bgImage); // body에 child로 넣는다는 말!
