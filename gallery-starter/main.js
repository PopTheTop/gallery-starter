var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

var images = ['images/pic1.png', 'images/pic2.png', 'images/pic3.png', 'images/pic4 (2).jpg', 'images/pic5.png']
/* Looping through images */

  images.forEach(x => { var newImage = document.createElement('img');
  newImage.setAttribute('src', x);
  newImage.onclick=function(){
    var src = this.getAttribute("src")
    document.querySelector(".displayed-img").setAttribute("src", src)
  };
  thumbBar.appendChild(newImage); });
