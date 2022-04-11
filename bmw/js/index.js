let banner = document.querySelector('.partical-img ')
console.log(banner.src)

console.log(banner);
banner.addEventListener('click', function () {
  
})


window.addEventListener('resize', function () {
  console.log(window.innerWidth)
  if (window.innerWidth > 992) {
    banner.src='upload/banner.jpg'
  } else {
    banner.src='upload/banner-m.jpg'
  }
})
