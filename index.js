
const express = require('express')
const  articleRouter = require('./routes/articles') 
const mongoose = require('mongoose')
const Article = require('./modules/article')
const app = express();
const port = 3000;

 mongoose.connect('mongodb://127.0.0.1/blog',{ useNewUrlParser: true,
  useUnifiedTopology: true})
 
app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:false}))



app.get('/', async (req, res) => {
   
  const articles = await Article.find().sort({ creatDate: 'desc' })
  res.render('articles/parent', {articles: articles})
});
app.use('/articles', articleRouter)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
