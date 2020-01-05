import { toDoFactory } from "./toDoFactory"
import { projectFactory, projectCollection } from "./projectFactory"
import { createTemplate } from "./createTemplate"
import { display } from "./display"
import { buttons } from "./buttons" 

let test = toDoFactory ("title", "descr", "date", "priority");
let test1 = toDoFactory ("name", "descr", "date", "priority");
let test2 = toDoFactory ("2", "2", "2", "2");

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
display.renderToDo(0);
display.renderDefaultHeader();

const projectAddBtn = document.querySelector("#input-btn");
projectAddBtn.addEventListener("click", () => {
    let title = document.getElementById("project-title").value;
    let project = projectFactory(`${title}`);
    let place = projectCollection.length;
    projectCollection.push(project);
    display.renderLastProject(project, place);

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
    });
});

});

let placeNumber = 0;
const toDoAddBtn = document.querySelector("#addToDo-btn");
toDoAddBtn.addEventListener("click", () => {
    let title = document.getElementById("to-do-title").value;
    let toDo = toDoFactory(`${title}`);
    let toDoPlace = projectCollection[placeNumber].toDoTasks.length

    projectCollection[placeNumber].addToDo(toDo);
    display.renderLastToDo(toDo, toDoPlace);

    buttons.checkbox(placeNumber);
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

    });
});
