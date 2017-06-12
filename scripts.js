// scripts.js
//tytul pliku

//zadanie 9.6 


 var add = document.getElementById('addElem');
 var list = document.getElementById('list');
  add.addEventListener('click', function(e) {
  	
  	var element = document.createElement('li');
  	var children = list.children.length ++;
  	element.appendChild(document.createTextNode("item "+children));
  	list.appendChild(element);
});