//variables
const $signatureChoice = $('.signature-choice');
const $schoolChoice = $('.school-choice');
const $banner = $('.cta');

//functions




//DOM setup
$signatureChoice.hide();
$schoolChoice.hide();


//show school section when button is clicked
$('.school-button').click(function() {
  $schoolChoice.show();
  $('.main-grid').hide();
});

//hide school section when reset is clicked
$('#school-reset').click(function() {
  $schoolChoice.hide();
  $('.main-grid').show();
});

//show signature section when button is clicked
$('.signature-button').click(function() {
  $signatureChoice.show();
  $('.main-grid').hide();
});

//hide signature section when reset is clicked
$('#signature-reset').click(function() {
  $signatureChoice.hide();
  $('.main-grid').show();
});