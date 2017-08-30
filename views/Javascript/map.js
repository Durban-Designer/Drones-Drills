//purpose: To serve as Angular Map App main
angular.module("MyGame", []);

class MapController {
  constructor($http) {
              this.$http.get('/quadrants')
                  .then((response) => {
                      this.quadrants = response.data;
                  })
                  .catch((response) => {
                      console.error('Could not retrieve quadrants.');
                  });
          }
      }

      MapController.$inject = ['$http'];
angular.module("MyGame").controller("MapController", MapController);
