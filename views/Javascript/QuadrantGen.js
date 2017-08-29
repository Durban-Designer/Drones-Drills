/* Contents Key
0 = empty space
x = stone
i = iron
a = aluminum
s = silicon
g = gold
w = solid water
*/
var quadrant = new Array();
function QuadrantGen() {
  $(".box").html("");
  var size = $(".size").val();
  var richness = $(".richness").val();
  var x = 0;
  var y = 0;
  while ( y < size ){
    quadrant[y] = new Array();
    while ( x < size) {
      //generate random item for contents
      var random = Math.floor(Math.random() * richness);
      var item;
      if (random < 1) {
        item = 0;
      }
      if (random < 2 && random >= 1) {
        item = "x";
      }
      if (random < 3 && random >= 2) {
        item = "w";
      }
      if (random < 4 && random >= 3) {
        item = "i";
      }
      if (random < 5 && random >= 4) {
        item = "a";
      }
      if (random < 6 && random >= 5) {
        item = "s";
      }
      if (random < 7 && random >= 6) {
        item = "g";
      }
      //push onto array
      quadrant[y].push(item);
      //iterate the loop
      x++;
    }
    $(".box").append('<div class="quadrant">"[' + quadrant[y] + ']",</div>');
    x = 0;
    y++;
  }
  $(".quadrant:last").html('"[' + quadrant[y-1] + ']"')
}

function post() {
  var newQuadrant = {
    "name": $(".name").val(),
    "location": $(".location").val(),
    "size": $(".size").val(),
    "contents": "[" + $(".box").val() + "]",
    "empire": $(".empire").val()
  }
  // Use AJAX to post the object to our quadrant service
  $.ajax({
      type: 'POST',
      data: newQuadrant,
      url: '/quadrants',
      dataType: 'JSON'
  }).done(function( response ) {

      // Check for successful (blank) response
      if (response.msg === '') {
        // Clear the form inputs
          $(".name").val("");
          $(".location").val("");
          $(".size").val("");
          $(".box").val("");
          $(".empire").val("");
      }
      else {

          // If something goes wrong, alert the error message that our service returned
          alert('Error: ' + response.msg);

      }
  });
}
