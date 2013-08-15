
config = require('./config');
var id0 = config.ID;

function queryBindList(client) {
  var opt = {
    user_id: id0
  }
  client.queryBindList(opt, function(err, result) {
    if (err) {
      console.log(err);
      return;
    }
    console.log(JSON.stringify(result));
  })
}

function pushMsg(client) {
  var opt = {
    push_type: 1,
    user_id: id0,
    messages: JSON.stringify(["hello, push0", "hello, push1", "hello, push2"]),
    msg_keys: JSON.stringify(["key0", "key1", "key2"])
  };

  client.pushMsg(opt, function(err, result) {
    if (err) {
      console.log(err);
      return;
    }

    console.log(result);
  });
}

function setTag(client) {
    var opt = {
        user_id: id0,
        tag: 'test_tag',
    }

    client.setTag(opt, function (err, result) {
        if (err) {
            console.log(err);
            return ;
        }

        console.log(result);
    });
}

function queryUserTags(client) {
    var opt = {
        user_id: id0
    };

    client.queryUserTags(opt, function (err, result) {
        if (err) {
            console.log(err);
            return ;
        }

        console.log(JSON.stringify(result));
    });
}

var Push = require('../index');
(function() {
  var opt = {
   ak: config.AK,
   sk: config.SK 
  };

  var client = new Push(opt);
  queryBindList(client);
  //pushMsg(client);
  //setTag(client);
  //queryUserTags(client);
})()
