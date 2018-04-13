import 'fullpage.js/dist/jquery.fullpage.css'
import $ from 'jquery'
import 'fullpage.js/dist/jquery.fullpage.js'

$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['welcome', 'contact', 'works'],
    sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['welcome', 'contact', 'works'],
  })
})
