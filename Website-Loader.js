$.fn.UI = function(obj){
  if(typeof obj == 'string'){
    $(this).append(obj);
  }else if(obj.content&&!obj.type){
    $(this).append(obj.content)
  }else if(obj.type in $.UI){
    $(this).append($.UI[obj.type](obj))
  }else{
    $(this).append($('<div></div>')[obj.type](obj))
  }
  return this;
};
$.UI = {};
$.UI.accordion = function(obj){
  var items = obj.items;
  var $result = $('<div></div>');
  var item = [];
  for (var i = 0; i < items.length; i++) { 
    let j = i;
    let $title = $('<h3></h3>').text(items[i].title);
    let $content = $('<div></div>');
    $content.UI(items[j]);
    $result.append($title, $content);
  }
  $result.accordion(obj);
  return $result;
};
