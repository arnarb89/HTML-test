window.onload = rotate;

var bannerCounter = 0;
var banner_images = new Array("assets/banner1.jpg","assets/banner2.jpg","assets/banner3.jpg");

function rotate() {
     bannerCounter++;
     if (bannerCounter == banner_images.length) {
        bannerCounter = 0;
     }
     document.getElementById("banner_id").src = banner_images[bannerCounter];

     setTimeout(rotate, 3 * 1000);
}