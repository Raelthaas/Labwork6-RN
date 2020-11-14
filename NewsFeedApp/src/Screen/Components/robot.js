 const newsFeed = async () => {

  return fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=5a4329eb0ffc4ea18bbcb64e8dabfa1e')
    .then((response) => response.json())
    .then((json) => {
      return json.articles;
    })
    .catch((error) => {
      console.error(error);
    });
 }

 const newsFeedSearch = async (searchinfos) => {

  var url = 'http://newsapi.org/v2/everything?' +
          'q='+searchinfos+'&' +
          'from=2020-11-14&' +
          'sortBy=popularity&' +
          'apiKey=5a4329eb0ffc4ea18bbcb64e8dabfa1e';

  return fetch(url)
    .then((response) => response.json())
    .then((json) => {
      return json.articles;
    })
    .catch((error) => {
      console.error(error);
    });
 }

export  {newsFeed, newsFeedSearch}