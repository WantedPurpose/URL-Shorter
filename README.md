<h1 align="center">URL Shorter</h1>

## Configuration
`1` Go to **[bitly][https://bitly.com/]** and click the "**Sign Up**".

`2` In your Bitly account dashboard, go to the "**Settings**" page.

`3` On the Settings page, click the "**API**" tab.

`4` Click on "**Generate token**" Button.

`5` Replace the token

```js
var accessToken = 'TOKEN'
```

`6` Replace your URL
```js
var data = {
  "long_url": longUrl
};
```

`7` Run with `node main.js` command.
