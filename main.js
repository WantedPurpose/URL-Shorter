function shortenUrl(longUrl) {
  var accessToken = 'TOKEN';
  var apiUrl = 'https://api-ssl.bitly.com/v4/shorten';

  var request = new XMLHttpRequest();
  request.open('POST', apiUrl);
  request.setRequestHeader('Authorization', 'Bearer ' + accessToken);
  request.setRequestHeader('Content-Type', 'application/json');

  request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
      var response = JSON.parse(request.responseText);
      var shortUrl = response.link;
      console.log(shortUrl);
    }
  }

  var data = {
    "long_url": longUrl
  };

  request.send(JSON.stringify(data));
}
