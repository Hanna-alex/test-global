const flagsItem = document.querySelectorAll('.animate__flag');

function showFlag() {
  const flagsItem = document.querySelectorAll('.animate__flag');

  flagsItem.forEach(item => {
    item.style.scale = '1';
  })
}

function spinFlag() {
  const circle = document.querySelector('.animate__circle');
  const flagsImg = document.querySelectorAll('.animate__flag img')


  circle.style.animationName = 'spin';

  flagsImg.forEach(img => {
    img.style.animationName = 'spin-reverse';
  })
}

setTimeout(showFlag, 3000);


setTimeout(spinFlag, 5500);
