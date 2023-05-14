// init Isotope
var $grid = $('.collection-list').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on('click', 'button', function () {
  var filterValue = $(this).attr('data-filter');
  resetFilterBtns();
  $(this).addClass('active-filter-btn');
  $grid.isotope({
    filter: filterValue
  });
});

var filterBtns = $('.filter-button-group').find('button');

function resetFilterBtns() {
  filterBtns.each(function () {
    $(this).removeClass('active-filter-btn');
  });
}
var lowerSlider = document.querySelector('#lower');
var upperSlider = document.querySelector('#upper');

document.querySelector('#two').value = upperSlider.value;
document.querySelector('#one').value = lowerSlider.value;

var lowerVal = parseInt(lowerSlider.value);
var upperVal = parseInt(upperSlider.value);

upperSlider.oninput = function () {
  lowerVal = parseInt(lowerSlider.value);
  upperVal = parseInt(upperSlider.value);

  if (upperVal < lowerVal + 4) {
    lowerSlider.value = upperVal - 4;
    if (lowerVal == lowerSlider.min) {
      upperSlider.value = 4;
    }
  }
  document.querySelector('#two').value = this.value
};

lowerSlider.oninput = function () {
  lowerVal = parseInt(lowerSlider.value);
  upperVal = parseInt(upperSlider.value);
  if (lowerVal > upperVal - 4) {
    upperSlider.value = lowerVal + 4;
    if (upperVal == upperSlider.max) {
      lowerSlider.value = parseInt(upperSlider.max) - 4;
    }
  }
  document.querySelector('#one').value = this.value
};

window.addEventListener('resize', function () {
  var testimonials = document.querySelectorAll('.testimonial');
  var containerWidth = document.querySelector('.testimonials-container').offsetWidth;
  var testimonialWidth = testimonials[0].offsetWidth;
  var numTestimonialsPerRow = Math.floor(containerWidth / testimonialWidth);
  var numRows = Math.ceil(testimonials.length / numTestimonialsPerRow);
  var containerHeight = numRows * testimonialWidth;
  document.querySelector('.testimonials-container').style.height = containerHeight + 'px';
});