export const queryTVMazeAPI = (query, callback) => {
  // fill url in with a URL based on the example at:
  // https://www.tvmaze.com/api#show-search
  // replace a part of the example URL with the user input, which you can
  // assume will be the parameter of this function, `query`
  const url = 'http://api.tvmaze.com/search/shows?q=' + query;
  fetch(url)
    .then((response) => {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        var listToPlace = [];
        // console.log(data);
        for (var i = 0; i < data.length; i++) {
          let nameFromResults = data[i].show.name.toLowerCase();
          if (nameFromResults.includes(query) === true) {
            listToPlace.push(data[i].show.name);
          }
        }
        // console.log(listToPlace);

        callback(listToPlace);
        // console.log(data[0].show.name); //make sure to return something
      });
      // .then((res) => {
      //   console.log(res);
      //   // return res;
      // });
    })
    .catch((err) => {
      console.log('Fetch Error :-S', err);
    });
};
