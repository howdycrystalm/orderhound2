/*allows users to add the po, aka 'check-in' the po they're working on*/
var app = require('./../index')
var moment = require('moment');
var db = app.get('db');

module.exports = {
  update_po_location: function(req, res, next) {


    var date = moment().format('MMMM Do YYYY, h:mm:ss a');
    db.track_po.initial_add_po([date, Number(req.body.ponumber), req.user.name, req.user.checkpoint, req.user.photo], function (err, response) {//gets from homeService.js

      // db.doespoexist([Number(req.body.ponumber)], function (err, response) {//gets from homeService.js
      //   //if it exists, update base on parameters
      //   //else if it doesn't exist, create it
      //
      //   if(response[0].ponumber) {
      //
      //   }
      //   if(err) {
      //     res.json(err)
      //   }
      //   res.status(200).json(response)//this talks to the front end, and the front end then decides what to show the client
      // })


      (err) ? res.send(err) : res.send('itsa success!') // (err) ? is the if part, and : is the else part

    })
  },
  get_po_location: function(req, res, next) {
    // db.track_po.find_po([0], function (err, response) {
    db.track_po.find_po([req.params.poNum], function (err, response) {
      console.log(response);
      (err) ? res.status(400).send(err) : res.status(200).send(response)

    })
  }



};
