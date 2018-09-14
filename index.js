const Wechat = require('wechat-jssdk');
var express = require('express');
var debug = require('debug');
var router = express.Router();

var app = express();

const wx = new Wechat({
  "wechatToken": "weixin", //same as "Token(令牌)" in the form above
  "appId": "wxd9de598a2e8ea592",
  "appSecret": "bad6a5b59572aea6c4ac92e14682a367"
});

app.get('/api/wechat', function(req, res){
    console.log("request query :"+req.query);
    if(wx.jssdk.verifySignature(req.query)) {
      res.send(req.query.echostr);
      return;
    }
    res.send("error");

  });



  module.exports = router;

  app.set('port', process.env.PORT || 1337);

  var server = app.listen(app.get('port'), function () {
      debug('Express server listening on port ' + server.address().port);
      console.log('Express server listening on port ' + server.address().port);
  });

  /*
exports.handle = function(event, context, callback) {
  console.log('processing event: %j', event);
  //console.log("Event information New:"+e.weixin);
  if(wx.jssdk.verifySignature(event.query)) {
        callback(null, event.query.echostr);
    }
    else
    {
        callback("error");
    }


}*/
