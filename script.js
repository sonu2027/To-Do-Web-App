let inputTag = document.getElementById("inputTag");
let pendingTask = document.getElementById("pendingTask");
const htwo = document.getElementsByClassName("htwo");

let straightLine=document.getElementsByTagName("hr")
let count = 0;
let totalNoOfTask = 0;
let taskCompleted=0
let workDone=100
let workDoneTimes=-1

function addTask() {
  straightLine[0].style.display="block"
  straightLine[1].style.display="block"
  if(workDone==0){
    let hurrah=document.getElementsByClassName("demo")
    hurrah[workDoneTimes].style.display="none"
  }
  if (inputTag.value == "") {
    alert("Please enter your task first");
  } else {
    // Keeping display none of h2 tag (Pending task and task completed)
    htwo[0].style.display = "block";
    htwo[1].style.display = "block";

    // Creating class attribute
    let classAttribute = document.createAttribute("class");

    // Giving the value of class attribute
    classAttribute.value = "democlass";

    // Creating div element
    let createDiv = document.createElement("div");

    // Setting attribute on div element
    createDiv.setAttributeNode(classAttribute);

    // Appending the div element on pending task
    pendingTask.appendChild(createDiv);

    console.log("woking");

    // creating a new paragrap element with name x
    let x = document.createElement("p");
    x.innerText = inputTag.value;
    createDiv.appendChild(x);

    // Giving the class name of paragraph x
    let y = document.createAttribute("class");
    y.value = "editingClass";
    x.setAttributeNode(y);

    // Setting the styling of paragraph x
    x.style.padding = "5px 0 5px 0";
    x.style.margin = "5px 0 5px 0";
    x.style.backgroundColor = "rgb(205, 202, 202)";
    x.style.width = "16rem";
    x.style.textAlign = "center";
    x.style.borderRadius = "10px";
    x.style.border = "1px solid grey";

    //Creating operation button
    let button1 = document.createElement("button");
    let button2 = document.createElement("button");
    let button3 = document.createElement("button");

    // Creating button1 attribute(class)
    let button1Attribute = document.createAttribute("class");
    button1Attribute.value = "button1Class";
    button1.setAttributeNode(button1Attribute);

    // Creating button1 attribute(onclick)
    button1Attribute = document.createAttribute("onclick");
    button1Attribute.value = `edit(${count})`;
    button1.setAttributeNode(button1Attribute);

    // Creating button2 attribute(class)
    let button2Attribute = document.createAttribute("class");
    button2Attribute.value = "button2Class";
    button2.setAttributeNode(button2Attribute);

    // Creating button2 attribute(onclick)
    button2Attribute = document.createAttribute("onclick");
    button2Attribute.value = `deleteButton(${count})`;
    button2.setAttributeNode(button2Attribute);

    // Creating button3 attribute(class)
    let button3Attribute = document.createAttribute("class");
    button3Attribute.value = "button3Class";
    button3.setAttributeNode(button3Attribute);

    // Creating button3 attribute(onclick)
    button3Attribute = document.createAttribute("onclick");
    button3Attribute.value = `markCompletedButton(${count})`;
    button3.setAttributeNode(button3Attribute);

    // Putting the innertext on operation button
    button1.innerText = "Edit";
    button2.innerText = "Remove";
    button3.innerText = "Mark Completed";

    // Appending the operation button on createDiv element
    createDiv.appendChild(button1);
    createDiv.appendChild(button2);
    createDiv.appendChild(button3);

    inputTag.value = "";

    count++;
    totalNoOfTask++;
    htwo[0].innerText=`${totalNoOfTask} Pending task`
    htwo[1].innerText=`${taskCompleted} Task completed`
  }
}

function edit(s) {
  let execute = 0;
  console.log("clicked edit");
  let edit = document.getElementById("edit");
  edit.style.display = "block";

  let update = document.getElementById("updateButton");
  let editTask = document.getElementById("editTask");
  let editingClass = document.getElementsByClassName("editingClass");
  update.addEventListener("click", function () {
    if (execute == 0 && editTask.value != "") {
      editingClass[s].innerText = editTask.value;
      edit.style.display = "none";
      execute++;
    }
  });

  let cancel = document.getElementById("cancelButton");
  cancel.addEventListener("click", function () {
      edit.style.display = "none";
  });
}

function deleteButton(s) {
  democlass = document.getElementsByClassName("democlass");
  democlass[s].style.display = "none";
  totalNoOfTask--;
  htwo[0].innerText=`${totalNoOfTask} Pending task`
  htwo[1].innerText=`${taskCompleted} Task completed`
  if (totalNoOfTask == 0 && taskCompleted!=0) {
     // Creating class attribute
     let classAttribute = document.createAttribute("class");

     // Giving the value of class attribute
     classAttribute.value = "demo";
 
     // Creating div element
     let createDiv = document.createElement("div");
 
     // Setting attribute on div element
     createDiv.setAttributeNode(classAttribute);
 
     // Appending the div element on pending task
     pendingTask.appendChild(createDiv);
 
     // let hurrah=document.getElementsByClassName("demo")
     // hurrah[0].style.display="block"
 
     // creating a new paragrap element with name x
     let x = document.createElement("p");
     x.innerText = "Hurrah, 😍 you have completed your all task 🤞✌️🥳";
    //x.innerText = "You haven't completed any task 😴, add some task to continue";
     createDiv.appendChild(x);
 
     // Giving the class name of paragraph x
     let y = document.createAttribute("class");
     y.value = "classEditing";
     x.setAttributeNode(y);
 
     // Setting the styling of paragraph x
     x.style.padding = "5px 0 5px 0";
     x.style.margin = "5px 0 5px 0";
     x.style.backgroundColor = "rgb(205, 202, 202)";
     x.style.width = "16rem";
     x.style.textAlign = "center";
     x.style.borderRadius = "10px";
     x.style.border = "1px solid grey";
 
     htwo[0].style.display="none"
     workDone=0
     workDoneTimes++
  }
  if (taskCompleted==0 && totalNoOfTask == 0) {
    // Creating class attribute
    let classAttribute = document.createAttribute("class");

    // Giving the value of class attribute
    classAttribute.value = "demo";

    // Creating div element
    let createDiv = document.createElement("div");

    // Setting attribute on div element
    createDiv.setAttributeNode(classAttribute);

    // Appending the div element on pending task
    pendingTask.appendChild(createDiv);

    // let hurrah=document.getElementsByClassName("demo")
    // hurrah[0].style.display="block"

    // creating a new paragrap element with name x
    let x = document.createElement("p");
   x.innerText = "You haven't completed any task 😶, add some task to continue";
    createDiv.appendChild(x);

    // Giving the class name of paragraph x
    let y = document.createAttribute("class");
    y.value = "classEditing";
    x.setAttributeNode(y);

    // Setting the styling of paragraph x
    x.style.padding = "5px 0 5px 0";
    x.style.margin = "5px 0 5px 0";
    x.style.backgroundColor = "rgb(205, 202, 202)";
    x.style.width = "16rem";
    x.style.textAlign = "center";
    x.style.borderRadius = "10px";
    x.style.border = "1px solid grey";

    htwo[0].style.display="none"
    workDone=0
    workDoneTimes++
 }
}
let deleteButtonOnclickValue=0
function markCompletedButton(s){
  let editingClass=document.getElementsByClassName("editingClass")
  let completedTask=document.getElementById("completedTask")
  let div=document.createElement("div")
  let x=document.createElement("p")
  let deleteElement=document.createElement("button")
  deleteElement.innerText="Remove"
  x.innerText=editingClass[s].innerText
  div.appendChild(x)
  div.appendChild(deleteElement)
  completedTask.appendChild(div)

  //Delete element styling
  div.style.textAlign="center"
  deleteElement.style.borderRadius="4px"
  deleteElement.style.border="none"
  deleteElement.style.padding="3px 8px"
  deleteElement.style.margin="6px 0px 6px 0px"
  deleteElement.style.backgroundColor="rgb(232, 22, 22)"
  deleteElement.style.color="#fff"

  let deleteElementOnclickAtr=document.createAttribute("onclick")
  deleteElementOnclickAtr.value=`remove(${deleteButtonOnclickValue})`
  deleteButtonOnclickValue++
  deleteElement.setAttributeNode(deleteElementOnclickAtr)

  let deleteElementClassAtr=document.createAttribute("class")
  deleteElementClassAtr.value="deleteElementClassAtr"
  div.setAttributeNode(deleteElementClassAtr)





   // Setting the styling of paragraph x
   x.style.padding = "5px 0 5px 0";
   x.style.backgroundColor = "rgb(205, 202, 202)";
   x.style.width = "16rem";
   x.style.textAlign = "center";
   x.style.borderRadius = "10px";
   x.style.border = "1px solid grey";

  democlass = document.getElementsByClassName("democlass");
  democlass[s].style.display = "none";

  taskCompleted++
  totalNoOfTask--
  console.log("Total no of task", totalNoOfTask);
  htwo[0].innerText=`${totalNoOfTask} Pending task`
  htwo[1].innerText=`${taskCompleted} Task completed`


  completedTask.style.display="flex"
/*
  // Adding deleting feature in task completed
  let eachTask=document.createElement("div")
  let eachTaskClass=document.createAttribute("class")
  eachTaskClass.value="eachTaskClass"
  eachTask.setAttributeNode(eachTaskClass)
  eachTask.appendChild(x)
  completedTask.appendChild(eachTask)

  //Adding delete button in deleting feature
  let deleteButton=document.createElement("button")
  deleteButton.innerText="Unmarked"
  eachTask.appendChild(deleteButton)

  // Creating attribute for delete button
  let deleteButtonClassAttribute=document.createAttribute("class")
  deleteButtonClassAttribute.value="deleteButtonToUnmarked"
  deleteButton.setAttributeNode(deleteButtonClassAttribute)

  let deleteButtonOnclickAttribute=document.createAttribute("onclick")
  deleteButtonOnclickAttribute.value=`unmarkedTask(${s}, ${taskCompleted-1})`
  deleteButton.setAttributeNode(deleteButtonOnclickAttribute)
  */


  if(totalNoOfTask==0){
    // Creating class attribute
    let classAttribute = document.createAttribute("class");

    // Giving the value of class attribute
    classAttribute.value = "demo";

    // Creating div element
    let createDiv = document.createElement("div");

    // Setting attribute on div element
    createDiv.setAttributeNode(classAttribute);

    // Appending the div element on pending task
    pendingTask.appendChild(createDiv);

    // let hurrah=document.getElementsByClassName("demo")
    // hurrah[0].style.display="block"

    // creating a new paragrap element with name x
    let x = document.createElement("p");
    x.innerText = "Hurrah, 😍 you have completed your all task 🤞✌️🥳";
    createDiv.appendChild(x);

    // Giving the class name of paragraph x
    let y = document.createAttribute("class");
    y.value = "classEditing";
    x.setAttributeNode(y);

    // Setting the styling of paragraph x
    x.style.padding = "5px 0 5px 0";
    x.style.margin = "5px 0 5px 0";
    x.style.backgroundColor = "rgb(205, 202, 202)";
    x.style.width = "16rem";
    x.style.textAlign = "center";
    x.style.borderRadius = "10px";
    x.style.border = "none";

    htwo[0].style.display="none"
    workDone=0
    workDoneTimes++
 }
}

function remove(s){
  let deleteElementClassAtr=document.getElementsByClassName("deleteElementClassAtr")
  deleteElementClassAtr[s].style.display="none"
  taskCompleted--
  // totalNoOfTask--
  htwo[0].innerText=`${totalNoOfTask} Pending task`
  htwo[1].innerText=`${taskCompleted} Task completed`
  if(taskCompleted==0 && totalNoOfTask==0){
    let classEditing=document.getElementsByClassName("classEditing")
    classEditing[0].innerText="You haven't completed any task 😶, add some task to continue";
  }
}