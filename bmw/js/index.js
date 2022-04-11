let banner = document.querySelector('.partical-img ')





window.addEventListener('resize', function () {
  if (window.innerWidth > 992) {
    banner.src='upload/banner.jpg'
  } else {
    banner.src='upload/banner-m.jpg'
  }
})
