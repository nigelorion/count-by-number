$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var countBy = $("#countBy").val();
    var countTo = $("#countTo").val();
    var countedNumbers = [];
    if (errorCheck(countBy, countTo)) {
      countedNumbers = countByNumber(countBy, countTo);
      console.log(countedNumbers);
      var i = 0;
      var n = countedNumbers.length;
      setInterval(function() { i++; if (i <= n) { displayCount(countedNumbers[i-1]); console.log(countedNumbers[i-1]); console.log(i); console.log(n); } }, 3000);

    }
  });
});


function errorCheck (countBy, countTo) {

  var countByNum = parseInt(countBy);
  var countToNum = parseInt(countTo);
  if (!countBy){
    alert("Enter a number to count by!");
    return false;
  } else if (!countTo){
    alert("Enter a number to count to!");
    return false;
  } else if (countByNum > countToNum) {
    alert("You can not count by " + countBy + " to " + countTo + "!");
    return false;
  } else if (countByNum < 0 || countToNum < 0) {
    alert("Please no negative numbers");
    return false;
  } else {
    return true;
  }
};

function countByNumber (countBy, countTo){
  var countByNum = parseInt(countBy);
  var countToNum = parseInt(countTo);
  var countedNumbers = [];
  for (i = countByNum; i <= countToNum; i += countByNum) {
    countedNumbers.push(i);
  }
  return countedNumbers;
};

function displayCount(displayNum) {
    $(".count h1").text(displayNum);
    console.log(displayNum);
    $(".count").fadeIn(800);
    $(".count").delay(800);
    $(".count").fadeOut(800);
};
