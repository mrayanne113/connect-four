class RedChecker {
  constructor() {
    let img = new Image();   // Create new img element
    img.addEventListener('load', function () {
      context.drawImage(img, 0 ,0);
    }, false);
    img.src = '../img/redChecker.jpg'; // Set source path
  }
}