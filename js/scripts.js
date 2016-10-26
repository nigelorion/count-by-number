$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var intervalSpeed = parseInt($("#countSpeed").val());
    var countBy = $("#countBy").val();
    var countTo = $("#countTo").val();
    var countedNumbers = [];
    if (errorCheck(countBy, countTo)) {
      countedNumbers = countByNumber(countBy, countTo);
      var i = 0;
      var n = countedNumbers.length;
      setInterval(function() { i++; if (i <= n) { displayCount(countedNumbers[i-1]); } }, intervalSpeed); }
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
    // $(".count").fadeIn(1).delay(1).fadeOut(1);
    $(".count").show();
};
