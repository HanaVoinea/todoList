const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search =document.querySelector('.search input');


const genTemplate = todo => {
const html = `
   <li class="list-group-item d-flex justify-content-between align-item-center">
  	<span>${todo}</span>
  	<i class="far fa-trash-alt delete"></i>
  </li>

  `; 

  list.innerHTML += html;

};


addForm.addEventListener('submit', e => {

	e.preventDefault();

	const todo = addForm.add.value.trim();

    if(todo.length){

     genTemplate(todo);
     addForm.reset();
  }

});

// delete item

list.addEventListener('click', e => {

	if(e.target.classList.contains('delete')){
		e.target.parentElement.remove();
	}
});


// function to filter items

const filterTodo = (term) => {
	Array.from(list.children)
	     .filter((todos) => !todos.textContent.toLowerCase().includes(term))
	     .forEach((todos) => todos.classList.add('filtered'));

	Array.from(list.children)
	     .filter((todos) => todos.textContent.toLowerCase().includes(term))
	     .forEach((todos) => todos.classList.remove('filtered'));

};

// search an item 

search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodo(term);
    

});