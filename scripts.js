//variables
const $signatureChoice = $('.signature-choice');
const $schoolChoice = $('.school-choice');
const $banner = $('.cta');
const $signatureButton = $('.signature-box');
const $schoolButton = $('.school-box');

//functions




//DOM setup
$signatureChoice.hide();
$schoolChoice.hide();


//show school section when button is clicked
$schoolButton.click(function() {
  $schoolChoice.show();
  $('.main-grid').hide();
});

//hide school section when return is clicked
$('.return').click(function() {
  $schoolChoice.hide();
  $signatureChoice.hide();
  $('.main-grid').show();
});

//show signature section when button is clicked
$signatureButton.click(function() {
  $signatureChoice.show();
  $('.main-grid').hide();
});


/*----Signature Choice----*/
var $signatureQuantity = $('#quantity-signature');
var $signatureQuote = $('#quote-signature');
var expectedProfit = 1000;
var $signatureMinimum = $('#signature-minimum');
var $signatureRecommended = $('#signature-recommended');
var $signaturePriceSet = $('#price-set');
var $signatureProfit = $('#signature-profit');


//Step One
$('#signature-submit').click(function() {
  var minimum = parseInt($signatureQuote.val()) / parseInt($signatureQuantity.val());
  var recommended = (parseInt($signatureQuote.val()) + parseInt(expectedProfit)) / parseInt($signatureQuantity.val());
  
  $signatureMinimum.text('Minimum: ' + '$' + minimum);
  $signatureRecommended.text('Recommended: ' + '$' + recommended);
});

//Step Two
$('#signature-price').click(function() {
  var customProfit = parseInt($signatureQuantity.val() * $signaturePriceSet.val()) - parseInt($signatureQuote.val());
  $signatureProfit.text('Profit: $' + customProfit);
});

//Reset button
$('#signature-reset').click(function() {
  $signatureQuantity.val('');
  $signatureQuote.val('');
  $signatureMinimum.text('Minimum:');
  $signatureRecommended.text('Recommended:');
  $signaturePriceSet.val('');
  $signatureProfit.text('Profit:');
});


/*----School Choice----*/
var $pageCount = $('#page-count'),
    $schoolQuantity = $('#school-quantity'),
    $schoolDateInput = $('#date'),
    $schoolQuote = $('#school-quote-range'),
    $schoolDueDate = $('#school-due-date'),
    $schoolSubmit = $('#school-submit');

//step one



//step two




//Reset Button
$('#school-reset').click(function() {
  $pageCount.val('');
  $schoolQuantity.val('');
  $schoolDateInput.val('');
  $schoolQuote.text('Price quote range:');
  $schoolDueDate.text('Due date:');
});



















