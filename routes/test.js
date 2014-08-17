module.exports = {
  index: function(req, res){
    console.log('index');
    var json = {
      "msg": "Get Request OK",
      "num": 1
    };
    res.send(JSON.stringify(json));
  },
  new: function(req, res){
    console.log('new');
  },
  create: function(req,res){
    console.log("create");
    res.send(JSON.stringify(req.body));
  },
  show: function(req, res){
    console.log('show');
  },
  edit: function(req, res){
    console.log('edit');
  },
  update: function(req, res){
    console.log('edit');
  },
  destroy: function(req, res){
    console.log('edit');
  }
};
