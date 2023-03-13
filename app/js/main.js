$(function () {
  $('.price__btn:first-child').addClass('active')
  var activeFilter = $('.price__btn.active').attr('data-filter')

  var mixer = mixitup('.price__inner', {
    animation: {
      duration: 800,
      effects: 'fade scale',
      easing: 'ease-in-out',
    },
    load: {
      filter: activeFilter,
    },
  })

  $('.price__btn').click(function () {
    $(this).addClass('active').siblings().removeClass('active')
    var filterValue = $(this).attr('data-filter')
    mixer.filter(filterValue)
  })
  $('.price__btn').click(function () {
    $(this).addClass('active').siblings().removeClass('active')
  })

  $('.questions__item-title').on('click', function () {
    if ($('.questions__content').hasClass('one-open')) {
      $('.questions__item-title').not($(this)).removeClass('active')
      $('.questions__item-text').not($(this).next()).slideUp(300)
    }
    $(this).toggleClass('active').next().slideToggle(300)
  })

  $('.comments__inner').slick({
    dots: false,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    prevArrow:
      '<button type="button" class="slick-prev"><svg width="34" height="16" viewBox="0 0 34 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292892 7.29289C-0.0976295 768342 -0.0976295 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM34 7L1 7V9L34 9V7Z" fill="#E93123"/></svg></button>',
    nextArrow:
      '<button type="button" class="slick-next"><svg width="34" height="16" viewBox="0 0 34 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M33.7071 7.29289C34.0976 7.68342 34.0976 8.31658 33.7071 8.70711L27.3431 15.0711C26.9526 15.4616 26.3195 15.4616 25.9289 15.0711C25.5384 14.6805 25.5384 14.0474 25.9289 13.6569L31.5858 8L25.9289 2.34315C25.5384 1.95262 25.5384 1.31946 25.9289 0.928932C26.3195 0.538408 26.9526 0.538408 27.3431 0.928932L33.7071 7.29289ZM0 7L33 7V9L0 9L0 7Z" fill="#E93123"/></svg></button>',
  })

  $('.photo__inner').slick({
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    speed: 500,
    prevArrow:
      '<button type="button" class="slick-prev"><svg width="34" height="16" viewBox="0 0 34 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292892 7.29289C-0.0976295 768342 -0.0976295 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM34 7L1 7V9L34 9V7Z" fill="#E93123"/></svg></button>',
    nextArrow:
      '<button type="button" class="slick-next"><svg width="34" height="16" viewBox="0 0 34 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M33.7071 7.29289C34.0976 7.68342 34.0976 8.31658 33.7071 8.70711L27.3431 15.0711C26.9526 15.4616 26.3195 15.4616 25.9289 15.0711C25.5384 14.6805 25.5384 14.0474 25.9289 13.6569L31.5858 8L25.9289 2.34315C25.5384 1.95262 25.5384 1.31946 25.9289 0.928932C26.3195 0.538408 26.9526 0.538408 27.3431 0.928932L33.7071 7.29289ZM0 7L33 7V9L0 9L0 7Z" fill="#E93123"/></svg></button>',
  })
})
