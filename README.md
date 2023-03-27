<h1 align="center">URL Shorter</h1>

When you run this code, it should log the shortened URL to the console. Alternatively, you can run this code in a browser console to see the result in the browser console

## Configuration
`1` Go to **[Bitly](https://bitly.com/a/sign_up)** and try to "**Sign Up**"

`2` In your Bitly account dashboard, go to the "**Settings**" page

`3` On the Settings page, click the "**API**" tab

`4` Click on "**Generate token**" Button

`5` Copy the token and Replace it :

```js
const accessToken = 'TOKEN'
```

`6` Replace your URL :
```js
const longUrl = 'YOUR_URL'
```

`7` Run with `node main.js` command
