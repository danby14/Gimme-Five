const router = require('express').Router();

var Datastore = require('nedb'),
  db = new Datastore({ filename: 'neDB/newsHeadlines', autoload: true });

const got = require('got');

const TestApiKey = process.env.NEWS_API_KEY;

router.get('/', async (req, res) => {
  try {
    res.send('this one works');
  } catch {}
});

// Got
router.get('/data', async (req, res) => {
  try {
    let response = await got(
      `http://newsapi.org/v2/top-headlines?country=us&apiKey=${TestApiKey}`,
      { responseType: 'json' }
    );
    let articles = response.body.articles.map(article => article.title);
    db.remove({}, { multi: true }, function (err, numRemoved) {
      db.persistence.compactDatafile();
    });
    db.insert({ articles }, function (err, newDoc) {});
    res.send(articles);
  } catch (error) {
    console.log(error.response.body);
  }
});

// Got tester with unlimited free Api requests
router.get('/data2', async (req, res) => {
  try {
    let response = await got('https://jsonplaceholder.typicode.com/users', {
      responseType: 'json',
    });
    res.send(response.body.map(user => user.name));
  } catch (error) {
    console.log(error.response.body);
  }
});

// Got tester with save to db with unlimited free Api requests
router.get('/data3', async (req, res) => {
  try {
    let response = await got('https://jsonplaceholder.typicode.com/users', {
      responseType: 'json',
    });
    let userNames = await response.body.map(user => user.name);
    await db.remove({}, { multi: true }, function (err, numRemoved) {
      db.persistence.compactDatafile();
    });
    await db.insert({ userNames }, function (err, newDoc) {});
    res.send(userNames);
  } catch (error) {
    console.log(error.response.body);
  }
});

// Query neDB
// Get length, randomly pick one of those, and then send to frontend for news headlines
router.get('/db2', (req, res) => {
  db.find({}, function (err, docs) {
    res.send(docs[0].articles);
  });
  // res.send('crap');
});

module.exports = router;
