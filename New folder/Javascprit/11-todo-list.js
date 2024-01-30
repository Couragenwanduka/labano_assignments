const todolist =[];

function addTodo(){
 const inputElement = document.querySelector('.js-name-input');
 const name= inputElement.value
 
 todolist.push(name);
 console.log(todolist);

 inputElement.value =''
}

/*function handlecostkeydown(event){
  console.log(event.key);
if (event.key === 'Enter'){
addTodo();
}*/