import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    newArtists: function(e) {
      e.preventDefault();
      var id = this.get('model.id');
      var name = this.get('artistName');
      this.transitionToRoute('artists');

      var promise = $.ajax({
        type: 'post',
        url: 'http://itp-api.herokuapp.com/api/artists',
        data: {
          id: id,
          name: name,


        }
      });

      // var controller = this;
      // // console.log('controller', this);
      // promise.then(function() {
      //   // alert('yay');
      //   // console.log('inside funciton', this);
      //   controller.set('songName', null);
      //   controller.set('price', null);
      //   controller.set('createdBy', null);
      // }, function() {
      //   alert('error');
      // });

      // OR
      promise.then((response) => {
        this.set('id', null);
        this.set('artistName', null);

        var artists = this.get('model.artists');
        // console.log(response);
        // songs.pushObject(response.song);
        //
        // OR
        //
        var newArtists = artists.concat(response.artist);
        this.set('model.artists', newArtists);
      }, function() {
        alert('error');
      });
    }
  }
});

// Array.prototype.pushObject = function() {
//   // notify ember that data has changed so that it can rerender
//   array.push(value)
// }




// $('form').on('submit', function(e) {
//   e.preventDefault();
// })
