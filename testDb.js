express = require('express')
var ejsLayouts = require('express-ejs-layouts')
var db = require('./models')
// var moment = require('moment')
// var rowdy = require('rowdy-logger')
var app = express()

db.comment.create({
    commenter_name: 'Paul Allen',
    content: 'This is really neat! Thanks for posting.',
    articleId: 1
  })
  .then(function(comment) {
    console.log(comment.get())
  })

// db.article.findOne({
//     where: { id: 1 },
//     include: [db.comment]
//   }).then(article => {
    // by using eager loading, the article model should have a comments key
  //   console.log(article.comments[0].id)
  // })

// db.article.findOne({
//     where: {id:1}
//     include: [db.comment] 
// }).then(article => {
//     console.log(article.get())
// })