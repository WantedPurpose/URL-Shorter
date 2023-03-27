const longUrl = 'YOUR_URL';

const accessToken = 'TOKEN';

const apiUrl = `https://api-ssl.bitly.com/v4/shorten`;

const headers = {
  'Authorization': `Bearer ${accessToken}`,
  'Content-Type': 'application/json',
};

const body = {
  long_url: longUrl,
};

fetch(apiUrl, {
  method: 'POST',
  headers: headers,
  body: JSON.stringify(body),
})
.then(response => response.json())
.then(data => {
  const shortUrl = data.link;
  console.log(shortUrl);
});
