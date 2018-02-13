//variables
const $signatureChoice = $('.signature-choice');
const $schoolChoice = $('.school-choice');
const $banner = $('.max-width');
const $signatureButton = $('.signature-box');
const $schoolButton = $('.school-box');
const correctPassword = 'arnold4121';
const $overlay = $('.overlay');
const $doors = $('.doors');

const $password = $('#password');
var $passwordDiv = $('.password');
const $signaturePasswordButton = $('#signature-password-button');

//functions
//reset modal message
function modalMessageReset() {
  $passwordDiv.children('h2').text('Please, enter your password:');
  $password.val('');
}

function addSlideAnimation() {
  $('.school-step-one').addClass('slide');
  $('.signature-step-one').addClass('slide');
  $('.school-step-two').addClass('slide');
  $('.signature-step-two').addClass('slide');
  $('.last-step').addClass('slide');
}

function removeSlideAnimation() {
  $('.school-step-one').removeClass('slide');
  $('.signature-step-one').removeClass('slide');
  $('.school-step-two').removeClass('slide');
  $('.signature-step-two').removeClass('slide');
  $('.last-step').removeClass('slide');
}

//DOM setup
$signatureChoice.hide();
$schoolChoice.hide();
$overlay.hide();


//banner returns to home
$('.spacer').click(function() {
  $signatureButton.removeClass('active');
  $schoolButton.removeClass('active');
  $doors.css('pointer-events', 'all');
  setTimeout(function() {
    $schoolChoice.hide();
    $signatureChoice.hide();
    removeSlideAnimation();
  }, 500);
  modalMessageReset();
});

//show school section when button is clicked
$schoolButton.click(function() {
  $signatureButton.addClass('active');
  $schoolButton.addClass('active');
  $schoolChoice.show();
  addSlideAnimation();
  $doors.css('pointer-events', 'none');
});

//hide school section when return is clicked
$('.return').click(function() {
  $signatureButton.removeClass('active');
  $schoolButton.removeClass('active');
  $doors.css('pointer-events', 'all');
  setTimeout(function() {
    $schoolChoice.hide();
    $signatureChoice.hide();
    removeSlideAnimation();
  }, 500);
  modalMessageReset();
});

/********show signature section when button is clicked********/
//show modal box
$signatureButton.click(function() {
  $overlay.show();
  $passwordDiv.addClass('is-active');
  $('.lock-icon').addClass('is-active');
});

//After correct password, show signature section
$signaturePasswordButton.click(function() {
  if ($password.val() == correctPassword) {
    $passwordDiv.removeClass('is-active');
    $('.lock-icon').removeClass('is-active');
    $signatureButton.addClass('active');
    $schoolButton.addClass('active');
    $signatureChoice.show();
    addSlideAnimation();
    $doors.css('pointer-events', 'none');
    $overlay.hide()
  }
  else {
    $passwordDiv.children('h2').text('Incorrect, please try again:');
    $password.val('');
  }
});

//click overlay to hide overlay and password prompt
$overlay.click(function() {
  $overlay.hide();
  $passwordDiv.removeClass('is-active');
  $('.lock-icon').removeClass('is-active');
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

//disable button by default
$schoolSubmit.prop('disabled', true);
//test to see if proper fields are filled in
function disableButton() {
  if ($pageCount.val() == '' || $schoolQuantity.val() == '') {
    $schoolSubmit.prop('disabled', true);
  } else {
    $schoolSubmit.prop('disabled', false);
  }
}


$pageCount.on('keyup', function() {
  disableButton();
});

$schoolQuantity.on('keyup', function() {
  disableButton();
});


$schoolSubmit.click(function() {
  if (!($pageCount.val() % 4 == 0)) {
    alert('page count must be a multiple of four');
  }
  else {
    var schoolAverage = (parseFloat($pageCount.val()) * parseFloat($schoolQuantity.val()) *     pageAverageCost + 1000) / parseFloat($schoolQuantity.val()) ,
        schoolMin = (parseFloat($pageCount.val()) * parseFloat($schoolQuantity.val()) * pageMinCost + 1000) / parseFloat($schoolQuantity.val()),
        schoolMax = (parseFloat($pageCount.val()) * parseFloat($schoolQuantity.val()) * pageMaxCost + 1000) / parseFloat($schoolQuantity.val());
    
    $schoolQuote.html('<p>Price quote range (per book):</p>' + '<p>' + 'Min: $' + parseInt(schoolMin) + '</p>' + '<p>' + 'Max: $' + parseInt(schoolMax) + '</p>' + '<p>' + 'Average: $' + parseInt(schoolAverage));
  }
});


//Reset Button
$('#school-reset').click(function() {
  $pageCount.val('');
  $schoolQuantity.val('');
  $schoolQuote.html('<p>Price quote range (per book):</p>');
});



















