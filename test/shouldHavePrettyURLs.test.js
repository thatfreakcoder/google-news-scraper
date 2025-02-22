const expect = require('expect.js');
const gns = require('../index.js');

test('Should have prettyURLs', async () => {
  const articles = await gns({
    searchTerm: "xrp",
    queryVars: {
      hl:"en-US",
      gl:"US",
      ceid:"US:en"
    },
    prettyURLs: true,
    timeframe: "1h",
    puppeteerArgs: [
      '--no-sandbox',
      '--disable-setuid-sandbox'
    ]
  })
  expect(articles[0].link).to.not.contain('news.google.com/articles');
}, 60000)