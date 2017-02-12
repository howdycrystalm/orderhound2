var app = require('../index')
var db = app.get('db');


module.exports = {
  initial_add_po: function(req, res, next) {
    var date = new Date(); //format when have time
    //console.log(Number(req.body.ponumber))
    db.purchase_orders.add_po([date, Number(req.body.ponumber), req.user.id, req.user.checkpoint_id], function(err, response) { //gets from homeService.js
      if (err) {
        console.log("Registration err: ", err);
        return res.status(401).send(err);
      }
      res.status(200).send('Order added successfully!');
    })
  }
};
