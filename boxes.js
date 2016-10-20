'use strict';

// Exercise 2...

// Using short-hand document-ready (goes after DOM loads).
// $(function() {
//   // Step 1.
//   // alert('DOM is ready for manipulation!');
//   var $box = $('#secretBox');
//   var boxh1 = $('<h1>Secret box!</h1>');
//   $box.css('background-color', 'white');
//   $box.append(boxh1);
//
//   // Step 2.
//   var $firstRow = $('#row1');
//   $firstRow.children().attr('class', 'boxType3');
//
//   // Step 3.
//   var $lastChild = $('#row4').children().filter('div');
//   $lastChild.last().remove();
//
//   // Step 4.
//   var $redBoxes = $('.boxType1');
//   $redBoxes.css('background-color', 'white');
//
//   // Step 5.
//   var $row2FirstDiv = $('#row2').slice(0,1);
//   $row2FirstDiv.removeAttr("class");
//   $row2SecondDiv.removeAttr("class");
//
//   // Step 6.
//   // var $allDivs = $('#container').find('div').filter('.box').not('#secretBox');
//   // $allDivs.css('width', '2px');
// });

// Exercise 3...

$(function() {
  // Step 1.
  // $('#container').bind('click', function (event) {
  //   console.log(event.pageX + ", " + event.pageY);
  // });

  // Step 2.
  // $('.boxType1').bind('click', function () {
  //   $(this).css('background-color', 'white');
  // });

  // Step 3.
  var dogImg = $('<img src="http://freepngimages.com/wp-content/uploads/2015/12/cute-puppy-climbing.png" width="100%" height="100%" />');
  $('.box').append(dogImg.clone().hide());

  $('.box').bind('click', function () {
    $(this).children().toggle();
  });

  // Step 4.
  // $('div').not('.row').bind("click", function(event) {
  //   if($(event.target).is($('.box'))) {
  //     $(event.target).css('background-color', 'white');
  //     $('#container').css('background-color', 'black');
  //   }
  //   else {
  //     $(event.target).css('background-color', 'lime');
  //   }
  // });

  // Example Problem.
  // Steps: 1) Copy first row. 2) Append this to the bottom of the grid. 3) Console log the amount of divs with the class ".box".
  // function addRows(clonedRow, numRows) {
  //   clonedRow = clonedRow - 1;
  //   var newRow = $('.row').eq(clonedRow);
  //
  //   for(var i = 0; i < numRows; i++) {
  //     $('#container').append(newRow.clone());
  //   }
  //
  //   console.log($('.box').length);
  // }
  //
  // addRows(2, 1);
  // addRows(1, 4);

  // Make a variable for all divs with parent div of "row", console.log() true if the DIV has class of .boxType1, false otherwise.

  var theDivs = $('div').not('#container').not('.row');

  // theDivs.each(function() {
  //   if($(this).attr('class').includes('boxType1')) {
  //     console.log('true');
  //   } else {
  //     console.log('false');
  //   }
  // });

  // for(var i = 0; i < theDivs.length; i++) {
  //   console.log(theDivs[i]);
  //   if(theDivs.eq(i).attr('class').includes('boxType1')) {
  //     console.log('true');
  //   }
  //   else {
  //     console.log('false');
  //   }
  // }

  $('#secretBox').bind('click', function() {
    $('#container').append($('#secretBox'));
    $('#container').children().not('#secretBox').remove();
    $('#secretBox').animate({
    width: "100%",
    height: "100%",
    margin: "0",
    verticalAlign: "middle",
    textAlign: "center",
    padding: "0",
    fontSize: "3em",
    }, 2000);
    $('#secretBox').text('Animation Done!');
  });

});


// Exercise 1...

// Using long-hand window-ready (goes after ALL elements of the window loads).
// $(window).ready(function() {
//   // Step 1.
//   alert("DOM is ready for manipulation; window mode!");
// });
