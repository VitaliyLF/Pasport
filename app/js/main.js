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
})
