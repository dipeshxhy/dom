const addBtn = document.querySelector("#addBtn");
const input = document.getElementById('itemInput');
const itemContainer = document.getElementById('itemList');

function createElement(tag){
  return document.createElement(tag);
}

addBtn.addEventListener('click',()=>{
  const itemText = input.value.trim();
  if(!itemText){
    alert("Please enter an item");
    return;
  }
  const listItem = createElement('li');
  const span = createElement('span');
  span.textContent = itemText;
  listItem.appendChild(span);


  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener('click',()=>{
    itemContainer.removeChild(listItem);
  })
  deleteBtn.classList.add('delete-btn')
  listItem.appendChild(deleteBtn);
  itemContainer.appendChild(listItem);
  input.value = '';

  span.addEventListener('click',(e)=>{
   if(e.target.tagName !== 'BUTTON'){
    const listItem = e.target;
    const currText = listItem.innerText;

    const input = document.createElement('input');
    input.type = 'text';
    input.value = currText;
    listItem.textContent = '';
    listItem.appendChild(input);
    input.focus();
    const updateItem = () =>{
      const newText = input.value.trim();
      if(newText){
        listItem.textContent = newText;
      }else{
        // alert("Item cannot be empty");
        listItem.textContent = currText;
      }

    }
    input.addEventListener('blur',updateItem);
    input.addEventListener('keydown',(e)=>{
      if(e.key === 'Enter'){
        updateItem();
      }
    })
   }
  })

})

