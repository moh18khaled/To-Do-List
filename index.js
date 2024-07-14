
const Create=()=>{
    
const createTask = document.getElementById("createTask");
const todoList = document.getElementById("todoList");

    if(createTask.value===''){
        alert("Enter a task first");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML=createTask.value;

    const editbutton = document.createElement("button");
    editbutton.innerHTML="Edit";
    editbutton.id="edit";
    editbutton.addEventListener("click", () => edit(li));

    li.appendChild(editbutton);

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML="delete";
    deleteButton.id="delete";
    deleteButton.addEventListener("click", () => Delete(li));
    li.appendChild(deleteButton);

    const finishedButton = document.createElement("button");
    finishedButton.innerHTML="finished";
    finishedButton.id="finished";
    finishedButton.addEventListener("click", () => Finished(li));
    li.appendChild(finishedButton);

    todoList.appendChild(li);
    createTask.value = '';
} 

const Delete=(li)=>{
    li.remove();
}

const edit = (li) => {

    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.disabled = true;
    });

    
    const form = document.createElement("form");
    const h1 = document.createElement("h1");
    h1.innerHTML="Enter your task";
    form.appendChild(h1);
    const input = document.createElement("input");
    input.type = "text";
    input.value = li.childNodes[0].textContent.trim(); 
    input.required = true;
    form.appendChild(input);

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Save";

    form.onsubmit = () => {
        li.childNodes[0].textContent = input.value; 
        document.body.removeChild(form); 
        buttons.forEach(button => {

            button.disabled = false;
        });
    };

    form.appendChild(submitButton);
    document.body.appendChild(form);
    input.focus(); 
}

const Finished = (li) => {


    let finishedList = document.getElementById("finishedList");
    console.log(finishedList);

    // when the first task is added (create the list)
    if(finishedList==null){
        const div = document.createElement("div");
        div.className="finished";
        const ul = document.createElement("ul");
        ul.id="finishedList";
        finishedList=ul;
        const h1 = document.createElement("h1");
        h1.innerHTML="Finished";
        div.appendChild(h1);
        div.appendChild(ul);
        document.body.appendChild(div);
    }

    const finishedItem = document.createElement("li");
    finishedItem.textContent = li.childNodes[0].textContent.trim();

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML="delete";
    deleteButton.id="finishedSectionDelete";

    deleteButton.addEventListener("click", () => {

    const li = document.querySelectorAll('button');

    if(finishedList.children.length==1){    // If this is the last task remove the whole div
        Div= document.querySelector(".finished");
        Div.remove();
    }
    else
        Delete(finishedItem);

    });

    finishedItem.appendChild(deleteButton);
    finishedList.appendChild(finishedItem);
    Delete(li);
}