
var tableData = require("../data/friends");


module.exports = function(app) {
  
  app.get("/api/friends", function(req, res) {
    res.json(tableData);
  });


  // push new data to the table. 
  app.post("/api/friends", function(req, res) {
      console.log(req.body.scores);
  });

  
};
