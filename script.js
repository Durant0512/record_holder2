'use strict'

var text = document.querySelector('#entertxt');
var btn = document.querySelector('#btn');
var delBtn = document.querySelector('#clear-all');
var container = document.querySelector('#list');

btn.onclick = function ( ) {
  
   var list = document.createElement('p');
   
   list.innerHTML = text.value;

   container.appendChild(list);
}

delBtn.onclick = function(){
    container.remove();
}





/*btn.onclick = function ( ) {

    var line = document.createElement('p');

    line.innerHTML = text.value;

    container.appendChild(line);
}*/
