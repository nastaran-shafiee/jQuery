// $(function () {
//   $("#text").fadeOut(2000);
// });

$("button").on("click", function () {
  $("#text1").fadeOut(3000);
});
$("#button1").on("click", function () {
  $("[textname*=text]").fadeOut(3000);
});
$("#button2").on("click", function () {
  $("[textname~=text]").fadeOut(3000);
});
$("#button3").on("click", function () {
  $("[textname$=value]").fadeOut(3000);
});
$("#button4").on("click", function () {
  $("[textname=nasi]").fadeOut(3000);
});
$("#button5").on("click", function () {
  $("[textname^=na]").fadeOut(3000);
});
$("#button6").on("click", function () {
  $(":text").fadeOut(3000);
});
$("#button7").on("click", function () {
  $("#parent > p ").fadeOut(3000);
});
