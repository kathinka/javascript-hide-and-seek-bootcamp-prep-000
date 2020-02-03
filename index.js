function getFirstSelector(selector){
  let result = document.querySelector(selector);
  return result;
}

function nestedTarget(){
  let result = document.getElementById('nested').querySelector('div.target');
  return result;  
  
}

function increaseRankBy(n){
  //let parsedN = parseInt(n, 10);
 const list = document.getElementById('app').querySelectorAll('ul.ranked-list li');
for (let i=0; i<list.length; i++){
 const p = document.getElementsByTagName('p')[0];
 let number = list[i].innerHTML; 
 let temp = parseInt(number, 10);
 let update = temp + n;
 list[i].innerHTML = update.toString();
}
return list;
}

function deepestChild(){
  let result = document.getElementById('grand-node').querySelector('div#grand-node')[3];
// for(let i=0; i<result.length; i++){
  // const d = document.getElementById('grand-node')[3];
  // result[i].innerHTML = d.toString();
  //}
  return result;
}

function test(){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = (i + 1).toString();
}
return lis;
}