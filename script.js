let spinning = false;

document.getElementById('product-image').addEventListener('mouseover', function() {
 if (!spinning) {
    spinning = true;
    let currentRotation = 0;
    const rotationStep = 1;
    const maxRotation = 180;
    const flipDuration = 1000;
    const flipInterval = setInterval(() => {
      currentRotation += rotationStep;
      document.querySelector('.front').style.transform = `rotateY(${currentRotation}deg)`;
      document.querySelector('.back').style.transform = `rotateY(${180 + currentRotation}deg)`;
      if (currentRotation >= maxRotation) {
        clearInterval(flipInterval);
        spinning = false;
      }
    }, flipDuration / maxRotation);
 }
});