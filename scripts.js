//variables
const $signatureChoice = $('.signature-choice');
const $schoolChoice = $('.school-choice');
const $banner = $('.cta');
const $signatureButton = $('.signature-box');
const $schoolButton = $('.school-box');
const correctPassword = 'signature';

const $password = $('#password');
var $passwordDiv = $('.password');
const $signaturePasswordButton = $('#signature-password-button');

//functions
//reset modal message
function modalMessageReset() {
  $passwordDiv.children('h2').text('Please, enter your password:');
  $password.val('');
}



//DOM setup
$signatureChoice.hide();
$schoolChoice.hide();
$passwordDiv.hide();


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
  modalMessageReset();
});

/********show signature section when button is clicked********/
//show modal box
$signatureButton.click(function() {
  $passwordDiv.show();
});

//After correct password, show signature section
$signaturePasswordButton.click(function() {
  if ($password.val() == correctPassword) {
    $passwordDiv.hide();
    $('.main-grid').hide();
    $signatureChoice.show();
    console.log($passwordDiv.children('h2').text());
  }
  else {
    $passwordDiv.children('h2').text('Incorrect, please try again:');
    $password.val('');
  }
});

//hide modal if 'x' is clicked
$('.exit-modal').click(function() {
  $passwordDiv.hide();
  modalMessageReset();
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
    $schoolSubmit = $('#school-submit'),
    $schoolDateInput = $('#date'),
    $schoolQuote = $('#school-quote-range'),
    $schoolDueDate = $('#school-due-date'),
    $schoolDateSubmit = $('#school-date-submit'),
    pageAverageCost = 0.208058822510823,
    pageMinCost = 0.1195,
    pageMaxCost = 0.3775;

//step one
$schoolSubmit.click(function() {
  if (!($pageCount.val() % 4 == 0)) {
    alert('page count must be a multiple of four');
  }
  else {
    var schoolAverage = parseFloat($pageCount.val()) * parseFloat($schoolQuantity.val()) *     pageAverageCost,
        schoolMin = parseFloat($pageCount.val()) * parseFloat($schoolQuantity.val()) * pageMinCost,
        schoolMax = parseFloat($pageCount.val()) * parseFloat($schoolQuantity.val()) * pageMaxCost;
    
    $schoolQuote.html('<p>Price quote range:</p>' + '<p>' + 'Min: $' + parseInt(schoolMin) + '</p>' + '<p>' + 'Max: $' + parseInt(schoolMax) + '</p>' + '<p>' + 'Average: $' + parseInt(schoolAverage));
  }
});


//step two
$('.school-step-two').hide();



//Reset Button
$('#school-reset').click(function() {
  $pageCount.val('');
  $schoolQuantity.val('');
  $schoolDateInput.val('');
  $schoolQuote.html('<p>Price quote range:</p>');
  $schoolDueDate.text('Due date:');
});



















