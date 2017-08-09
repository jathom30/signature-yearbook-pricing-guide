//variables
const $signatureChoice = $('.signature-choice');
const $schoolChoice = $('.school-choice');
const $banner = $('.cta');
const $signatureButton = $('.signature-box');
const $schoolButton = $('.school-box');
const correctPassword = 'signature';
const $overlay = $('.overlay');

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
$overlay.hide();


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
  $overlay.show();
  $passwordDiv.addClass('is-active');
});

//After correct password, show signature section
$signaturePasswordButton.click(function() {
  if ($password.val() == correctPassword) {
    $passwordDiv.removeClass('is-active');
    $('.main-grid').hide();
    $signatureChoice.show();
    $overlay.hide()
  }
  else {
    $passwordDiv.children('h2').text('Incorrect, please try again:');
    $password.val('');
  }
});

//hide modal if 'x' is clicked
$('.exit-modal').click(function() {
  $passwordDiv.removeClass('is-active');
  modalMessageReset();
  $overlay.hide();
});

$overlay.click(function() {
  $overlay.hide();
  $passwordDiv.removeClass('is-active');
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
    var schoolAverage = (parseFloat($pageCount.val()) * parseFloat($schoolQuantity.val()) *     pageAverageCost + 1000) / parseFloat($schoolQuantity.val()) ,
        schoolMin = (parseFloat($pageCount.val()) * parseFloat($schoolQuantity.val()) * pageMinCost + 1000) / parseFloat($schoolQuantity.val()),
        schoolMax = (parseFloat($pageCount.val()) * parseFloat($schoolQuantity.val()) * pageMaxCost + 1000) / parseFloat($schoolQuantity.val());
    
    $schoolQuote.html('<p>Price quote range (per book):</p>' + '<p>' + 'Min: $' + parseInt(schoolMin) + '</p>' + '<p>' + 'Max: $' + parseInt(schoolMax) + '</p>' + '<p>' + 'Average: $' + parseInt(schoolAverage));
  }
});


//step two
//$selectedMonth = $('#month');
//$selectedYear = $('#year');
//$selectedDay = $('#day');
//
////adjust number of days in selected month
//
//
//$selectedMonth.mousedown(function() {
//  $selectedDay.children('option').remove();
////  populateDays($selectedMonth.val())
//});
//
//$selectedMonth.mouseleave(
//  populateDays($selectedMonth.val())
//);
//
//
//function populateDays(month) {
//  
//  var daysInMonth;
//  
//  if (month === 'January' || month === 'March' || month === 'May' || month === 'July' || month === 'August' || month === 'October' || month === 'December') {
//    daysInMonth = 31;
//  } else if (month === 'April' || month === 'June' || month === 'September' || month === 'November' ) {
//    daysInMonth = 30;
//  } else {
//  // If month is February, calculate whether it is a leap year or not
//    var year = $selectedYear.value;
//    (year - 2016) % 4 === 0 ? dayNum = 29 : dayNum = 28;
//  }
//  
//  // inject the right number of new <option> elements into the day <select>
//  for(i = 1; i <= daysInMonth; i++) {
//    var option = document.createElement('option');
//    option.textContent = i;
//    $selectedDay.append(option);
//  }
//  
//}
// define variables
var nativePicker = document.querySelector('.nativeDatePicker');
var fallbackPicker = document.querySelector('.fallbackDatePicker');
var fallbackLabel = document.querySelector('.fallbackLabel');

var yearSelect = document.querySelector('#year');
var monthSelect = document.querySelector('#month');
var daySelect = document.querySelector('#day');

// hide fallback initially
//fallbackPicker.style.display = 'none';
//fallbackLabel.style.display = 'none';

// test whether a new date input falls back to a text input or not
var test = document.createElement('input');
test.type = 'date';
// if it does, run the code inside the if() {} block
if(test.type === 'text') {
  // hide the native picker and show the fallback
//  nativePicker.style.display = 'none';
//  fallbackPicker.style.display = 'block';
//  fallbackLabel.style.display = 'block';

  // populate the days and years dynamically
  // (the months are always the same, therefore hardcoded)
  populateDays(monthSelect.value);
  populateYears();
}

function populateDays(month) {
  // delete the current set of <option> elements out of the
  // day <select>, ready for the next set to be injected
  while(daySelect.firstChild){
    daySelect.removeChild(daySelect.firstChild);
  }
  
  // Create variable to hold new number of days to inject
  var dayNum;

  // 31 or 30 days?
  if(month === 'January' | month === 'March' | month === 'May' | month === 'July' | month === 'August' | month === 'October' | month === 'December') {
    dayNum = 31;
  } else if(month === 'April' | month === 'June' | month === 'September' | month === 'November') {
    dayNum = 30;
  } else {
  // If month is February, calculate whether it is a leap year or not
    var year = yearSelect.value;
    (year - 2016) % 4 === 0 ? dayNum = 29 : dayNum = 28;
  }

  // inject the right number of new <option> elements into the day <select>
  for(i = 1; i <= dayNum; i++) {
    var option = document.createElement('option');
    option.textContent = i;
    daySelect.appendChild(option);
  }

  // if previous day has already been set, set daySelect's value
  // to that day, to avoid the day jumping back to 1 when you
  // change the year
  if(previousDay) {
    daySelect.value = previousDay;

    // If the previous day was set to a high number, say 31, and then
    // you chose a month with less total days in it (e.g. February),
    // this part of the code ensures that the highest day available
    // is selected, rather than showing a blank daySelect
    if(daySelect.value === "") {
      daySelect.value = previousDay - 1;
    }

    if(daySelect.value === "") {
      daySelect.value = previousDay - 2;
    }

    if(daySelect.value === "") {
      daySelect.value = previousDay - 3;
    }
  }
}

function populateYears() {
  // get this year as a number
  var date = new Date();
  var year = date.getFullYear();

  // Make this year, and the 100 years before it available in the year <select>
  for(var i = 0; i <= 100; i++) {
    var option = document.createElement('option');
    option.textContent = year-i;
    yearSelect.appendChild(option);
  }
}

// when the month or year <select> values are changed, rerun populateDays()
// in case the change affected the number of available days
yearSelect.onchange = function() {
  populateDays(monthSelect.value);
}

monthSelect.onchange = function() {
  populateDays(monthSelect.value);
}

//preserve day selection
var previousDay;

// update what day has been set to previously
// see end of populateDays() for usage
daySelect.onchange = function() {
  previousDay = daySelect.value;
}

const months = {'January': 31,
                'February': 31,
                'March': 28,
                'April': 31,
                'May': 30,
                'June': 31, 
                'July': 30, 
                'August': 31, 
                'September': 31, 
                'October': 30, 
                'November': 31, 
                'December': 30
               };

$schoolDateSubmit.click(function() {
  var dayNum = months[monthSelect.value];  
  var dueDay = daySelect.value - 30;
  var dueMonth;
  
  if (monthSelect === 'January') {
    dueMonth = 'December';
  } else if (monthSelect.value === 'February') {
    dueMonth = 'January';
  } else if (monthSelect.value === 'March') {
    dueMonth = 'February';
  } else if (monthSelect.value === 'April') {
    dueMonth = 'March';
  } else if (monthSelect.value === 'May') {
    dueMonth = 'April';
  } else if (monthSelect.value === 'June') {
    dueMonth = 'May';
  } else if (monthSelect.value === 'July') {
    dueMonth = 'June';
  } else if (monthSelect.value === 'August') {
    dueMonth = 'July';
  } else if (monthSelect.value === 'September') {
    dueMonth = 'August';
  } else if (monthSelect.value === 'October') {
    dueMonth = 'September';
  } else if (monthSelect.value === 'November') {
    dueMonth = 'October';
  } else if (monthSelect.value === 'December') {
    dueMonth = 'November';
  }
  
  if (dueDay <=0) {
    dueDay +=dayNum;
  }
    
  $schoolDueDate.text('Due date: ' + dueMonth + ' ' + dueDay + ', ' + yearSelect.value);
  
});




//Reset Button
$('#school-reset').click(function() {
  $pageCount.val('');
  $schoolQuantity.val('');
  $schoolDateInput.val('');
  $schoolQuote.html('<p>Price quote range (per book):</p>');
  $schoolDueDate.text('Due date:');
});



















