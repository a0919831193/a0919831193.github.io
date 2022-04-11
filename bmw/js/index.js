let banner = document.querySelector('.partical-img ')






window.addEventListener('resize', function () {
  console.log(window.innerWidth)
  if (window.innerWidth > 992) {
    banner.src='upload/banner.jpg'
  } else {
    banner.src='upload/banner-m.jpg'
  }
})
