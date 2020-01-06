import { toDoFactory } from "./toDoFactory"
import { projectFactory, projectCollection } from "./projectFactory"
import { createTemplate } from "./createTemplate"
import { display } from "./display"
import { buttons } from "./buttons" 
import { validate } from "./validate"

let test = toDoFactory ("title", "", "false");
let test1 = toDoFactory ("name", "", "false");
let test2 = toDoFactory ("2", "", "true");

let proTest = projectFactory ("Title");
proTest.addToDo(test);
proTest.addToDo(test1);
let proTest2 = projectFactory ("HuaHua");
proTest2.addToDo(test2);

projectCollection.push(proTest)
projectCollection.push(proTest2)
console.log(test)
console.log("Test5")
console.log(proTest)
console.log(proTest.toDoTasks)
console.log(projectCollection)
display.render();
display.renderDefaultHeader();

const projectAddBtn = document.querySelector("#input-btn");
projectAddBtn.addEventListener("click", () => {
    let title = document.getElementById("project-title").value;

    if (title.trim() == "") return false;

    let project = projectFactory(`${title}`);
    let place = projectCollection.length;
    projectCollection.push(project);
    display.renderLastProject(project, place);

    document.getElementById("project-title").value = "";

    const projectsList = document.querySelectorAll(".projects");
    projectsList.forEach( (project) => {
    project.addEventListener("click", (e) => {
        let place = e.target.getAttribute("data-place");
        placeNumber = place;
        display.remove();
        display.renderProjectHeader(place);
        display.renderToDo(place);

        buttons.removeBtn(place);
        buttons.checkbox(place);
        buttons.form();
    });

    project.addEventListener("mouseenter", (e) => {
        e.target.classList.add("project-hover");
    });

    project.addEventListener("mouseleave", (e) => {
        e.target.classList.remove("project-hover");
    });
});
});

let placeNumber = 0;
const toDoAddBtn = document.querySelector("#addToDo-btn");
toDoAddBtn.addEventListener("click", () => {
    let title = document.getElementById("to-do-title").value;
    let toDoDate = document.getElementById("to-do-date").value;
    let priority = document.getElementById("priority-checkbox").checked;

    if (title.trim() == "") return false;

    let toDo = toDoFactory(`${title}`, `${toDoDate}`, `${priority}`);
    let toDoPlace = projectCollection[placeNumber].toDoTasks.length

    projectCollection[placeNumber].addToDo(toDo);
    display.renderLastToDo(toDo, toDoPlace);

    buttons.checkbox(placeNumber);

    document.getElementById("to-do-title").value = "";
    document.getElementById("to-do-date").value = "";
    document.getElementById("priority-checkbox").checked = false;
});

const projectsList = document.querySelectorAll(".projects");
projectsList.forEach( (project) => {
    project.addEventListener("click", (e) => {
        let place = e.target.getAttribute("data-place");
        placeNumber = place;
        display.remove();
        display.renderProjectHeader(place);
        display.renderToDo(place);
        

        buttons.removeBtn(place);
        buttons.checkbox(place);
        buttons.form();
    });

    project.addEventListener("mouseenter", (e) => {
        e.target.classList.add("project-hover");
    });

    project.addEventListener("mouseleave", (e) => {
        e.target.classList.remove("project-hover");
    });
});

const cancelFormBtn = document.querySelector("#cancel-btn");
cancelFormBtn.addEventListener("click", () => {
    document.getElementById("to-do-form").style.display = "none";
});
