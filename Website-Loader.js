$.fn.UI = function(obj){
  if(typeof obj == 'string'){
    $(this).append(obj);
  }else if(obj.type in $.UI){
    $(this).append($.UI[obj.type](obj))
  }else{
    $(this).append($('<div></div>')[obj.type](obj))
  }
};
$.UI.accordion = function(obj){
  var items = obj.items;
  var $result = $('<div></div>');
  var item = [];
  for (var i = 0; i < items.length; i++) { 
    let j = i;
    items[i].title = $('<h3></h3>').text(items[i].title);
    items[i].content = typeof items[i].content === 'string' ? $(items[i].content) : $('<div></div>');
    $result.append(items[i].title, items[i].content);
    setTimeout(function(){
      items[j].content.UI(items[j]);
    },0)
  }
  return result;
};
