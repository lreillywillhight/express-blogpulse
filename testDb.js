express = require('express')
var ejsLayouts = require('express-ejs-layouts')
var db = require('./models')
// var moment = require('moment')
// var rowdy = require('rowdy-logger')
var app = express()
var db = require('./models')

// db.comment.create({
//     name: 'Paul Allen',
//     content: 'This is really neat! Thanks for posting.',
//     articleId: 1
//   })
//   .then(function(comment) {
//     console.log(comment.get())
//   })

db.article.findOne({
    where: { id: 1 },
    // include: [db.comment]
  }).then(article => {
    // by using eager loading, the article model should have a comments key
    console.log(article.comments[0].content)
  })

// db.article.findOne({
//     where: {id:1}
//     include: [db.comment] 
// }).then(article => {
//     console.log(article.get())
// })