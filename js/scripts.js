$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var countBy = $("#countBy").val();
    var countTo = $("#countTo").val();
    if (errorCheck(countBy, countTo)) {
      countByNumber(countBy, countTo);
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
  for (i = countByNum; i <= countToNum; i += countByNum) {
    console.log(i);
  }
};
