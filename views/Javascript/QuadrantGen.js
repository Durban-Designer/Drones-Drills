//purpose:To Generate Quadrants
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
