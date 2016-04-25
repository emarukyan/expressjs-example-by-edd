// var $, $, ga

$(document).ready(function () {
  $('.selectpicker').selectpicker()
  $('#deadline_range').daterangepicker()
  $('#event_range').daterangepicker()
})

// /
// /
// /
// /
// /
// /

$(document).ready(function ($) {
  var check_view = true
  $('#tab_added_on').on('click', function () {
    if (check_view) {
      ga('send', 'event', 'TabClick', 'Clicked on Newsfeed  Tab')
    }
  })

  $('#tab_ddl').on('click', function () {
    if (check_view) {
      ga('send', 'event', 'TabClick', 'Clicked on DDL Tab')
    }
  })

  $('#tab_event_start').on('click', function () {
    if (check_view) {
      ga('send', 'event', 'TabClick', 'Clicked on Events Tab')
    }
  })

  $('.favorite_add').on('click', function () {
    if (check_view) {
      ga('send', 'event', 'Save', 'Save Btn Click')
    }
  })

  $('.search_widget_title').on('click', function () {
    if (check_view) {
      ga('send', 'event', 'Advanced Search', 'Clicked on Advanced Search')
    }
  })

  $(document).on('click', '#scroll_widget a[rel="bookmark"]', function () {
    if (check_view) {
      ga('send', 'event', 'Announcement Clicked', 'Clicked on Announcement From newsfeed')
    }
  })

  $(document).on('click', '#popular_posts a[rel="bookmark"]', function () {
    if (check_view) {
      ga('send', 'event', 'Announcement Clicked', 'Clicked on Announcement From Popular posts')
    }
  })

  $(document).on('click', '#featured_posts a[rel="bookmark"]', function () {
    if (check_view) {
      ga('send', 'event', 'Announcement Clicked', 'Clicked on Announcement From Featured block')
    }
  })
})
