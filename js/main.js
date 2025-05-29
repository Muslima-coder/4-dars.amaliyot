let elForm = document.querySelector(".site-form ")
// let elInput = document.querySelector(".form-input ")
// let elBtn = document.querySelector(".form-btn ")
// let elList = document.querySelector(".site-list ")

let todos =[]

//create todo
elForm.addEventListener("submit", function (evt) {
    evt.preventDefault()
    let todo = {
        id: todos[todos.length -1]?.id ? todos[todos.length -1].id +1 : 1,
        title: evt.target.todo.value,
        isComplated: false
    }
    todos.push(todo)
    evt.target.reset()
    renderTodos(todos, elForm.nextElementSibling)

})

//Render Todos
  function renderTodos(arr, list){
   list.innerHTML = ``
   arr.forEach((item,index) =>{
    let elItem = document.createElement("li")
        elItem.className = `${item.isComplated ? "line-through opacity-[70%] cursor-not-allowed" : "" } duration-300 p-5  flex items-center justify-between`
        elItem.innerHTML = `
        <div class=" flex flex-col gap-3">
         <div class="text-center">
        <strong class="font-semibold text-white " >${item.title}</strong>
        </div>
        <div class="flex items-center gap-2">
        <label>
        <input id="complate" class="hidden" type="checkbox" >
        <div onclick="handleChekcClick(${item.id})"  id="complate"  class="w-[20px] relative flex items-center justify-center h-[20px] rounded-full border-[1px]  border-slate-500">
        <div id="complate" class="${item.isComplated ? "bg-red-500" : ""} absolute inset=[1.2px] rounded-full "></div>
        </div>
        </label>
        <strong class="font-semibold text-white">${index +1}.</strong>
        <button id="edit"  class="bg-green-600 text-white p-2 rounded-md w-[100px]" >Edit</button>
        <button id="delete" class="bg-red-600 text-white p-2 rounded-md w-[100px]"  >Delete</button>
        </div>
        </div>
         `
         list.appendChild(elItem)

         elItem.addEventListener("click", function (e) {
            if(e.target.id == "delete"){
                todos.splice(index, 1)
                renderTodos(todos, elForm.nextElementSibling)
            }

            else if(e.target.id == "edit"){
                if(!item.isComplated){
                    let newValue = prompt(item.title)
                    todos[index].title = newValue
                    renderTodos(todos, elForm.nextElementSibling)
                }
            }

         })   

    })
  }


  //Check part 
  function handleChekcClick(id){
    let findObj = todos.find(item => item.id == id)
    findObj.isComplated = !findObj.isComplated
    renderTodos(todos, elForm.nextElementSibling)
  }
