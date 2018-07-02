const ConstHash = require('./consistent-hashing');

var random_items = [];
for(var i = 0; i<10000; i++){
  random_items.push(Math.random().toString());
}

var getItems = (num) => {
  /*var _items = [];
  for(var i = 0; i<10000; i++){
    _items.push(getRandom().toString());
  }
  return _items[];*/
  return random_items.slice(0, num);
};

var getRandom = () => {
  return Math.random();
};

var getNodes = (num) => {
  var _nodes = [];
  for(var i = 0; i<num; i++){
    _nodes.push("node_"+(i+1));
  }
  return _nodes;
};

var generateConstHash = function(_nodes, _items){
  var data = {};
  var response = {};
  var nodes = getNodes(_nodes);
  var items = getItems(_items);

  var hashMap = new ConstHash(nodes);

  items.forEach(function(i){
    var node = hashMap.getNode(i);

    if(data[node]){
      data[node].push(i);
    }else{
      data[node] = [];
      data[node].push(i);
    }
  });

  var data_values = [];
  for(key in data){
    data_values.push(data[key].length);
  }
  console.log(data_values);
  response['items'] = items;
  response['data_values'] = data_values;
  return response;
};

module.exports = generateConstHash;
