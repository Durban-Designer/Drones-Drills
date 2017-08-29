function find() {
  var name = $(".name").val();
  $.get("/quadrants", name, function(data) {
    alert(data);
    var quadrant = data;
    $(".quadrant").html(quadrant);
  });
}
