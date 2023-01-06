import axios from 'axios';

const helpers = {
  makeThumbnailBoxes: function(thumbnails) {


    // let thumbnails = data.results[0].photos;


    let holder = [];
    let box = [];

    for (var i = 0; i < thumbnails.length; i++) {

      thumbnails[i].index = i;
      box.push(thumbnails[i]);

      if (box.length === 7) {
        holder.push(box);
        box = [];
      }

      if (i >= thumbnails.length - 1) {
        holder.push(box);
        box = [];
      }
      // console.log('box', box)
    }

    return holder;
  },
  getAverageRating: function(ratings) {

    let result = 0;

    for (let i = 0; i < ratings.length; i++) {
      result += ratings[i].rating;
    }

    return result / ratings.length;
  }
}

export default helpers;