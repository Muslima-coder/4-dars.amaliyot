let elForm = document.querySelector(".site-form ")
let elInput = document.querySelector(".form-input ")
let elBtn = document.querySelector(".form-btn ")
let elList = document.querySelector(".site-list ")

let todos =[]

 elForm.addEventListener("submit", function(evt){
    evt.preventDefault()
    let newTodo = {
        id:todos.length + 1,
        value:elInput.value,
        isComplited: false
    }
    todos.push(newTodo)
    evt.target.reset()
    renderTodas(todos, elList)
    
 })

 function renderTodas(arr, list){
    list.innerHTML = ``
    arr.forEach(item => {
        let elItem = document.createElement("li")
        elItem.innerHTML = `
        <div class="text-center w-[150px]">
        <strong class="font-semibold text-white">${item.value}</strong>

        <div class="flex mt-[8px] gap-[10px]">
        <button onclick="handleEditBtn(${item.id})" class="w-[85px] py-1 px-2 rounded-md font-medium  bg-[#6C2BD9] text-white border-[2px] 
        border-[#6C2BD9]  hover:bg-transparent hover:text-[#A78BFA] hover:border-[#A78BFA] duration-400">Tahrirlash</button>

        <button onclick="handleDeleteBtn(${item.id})" class="w-[85px] py-1 px-2 rounded-md font-medium  bg-[#8B0000] text-white border-[2px] 
        border-[#8B0000]  hover:bg-transparent hover:text-[#F87171] hover:border-[#F87171] duration-400">O'chirish</button>
        </div>
        </div>

        `
        list.appendChild(elItem)

    })
 }


 //Edit va delete 
 function handleEditBtn(id) {
  let btn = todos.find(item => item.id === id)
  let newValue = prompt("Matnni tahrirlang:", btn.value)
  
   btn.value = newValue
    renderTodas(todos, elList)
}

function handleDeleteBtn(id) {
  todos = todos.filter(item => item.id != id);
  renderTodas(todos, elList); 
}
