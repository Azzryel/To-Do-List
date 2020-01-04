import { toDoFactory } from "./toDoFactory"
import { projectFactory, projectCollection } from "./projectFactory"
import { createTemplate } from "./createTemplate"
import { display } from "./display"

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

        const removeBtn = document.querySelector(`#remove-project-${place}`);
        removeBtn.addEventListener("click", (e) => {
            const number = e.target.getAttribute("data-remove");
            console.log(number)
            delete projectCollection[number];
            display.removeProject(number);
            display.remove();
            display.renderDefaultHeader();
            console.log(placeNumber)
        });
    });
});

});

let placeNumber = 0;
const toDoAddBtn = document.querySelector("#addToDo-btn");
toDoAddBtn.addEventListener("click", () => {
    let title = document.getElementById("to-do-title").value;
    let toDo = toDoFactory(`${title}`);
    console.log(placeNumber)

    projectCollection[placeNumber].addToDo(toDo);
    display.renderLastToDo(toDo);
});

const projectsList = document.querySelectorAll(".projects");
projectsList.forEach( (project) => {
    project.addEventListener("click", (e) => {
        let place = e.target.getAttribute("data-place");
        placeNumber = place;
        display.remove();
        display.renderProjectHeader(place);
        display.renderToDo(place);
        
        const removeBtn = document.querySelector(`#remove-project-${place}`);
        removeBtn.addEventListener("click", (e) => {
            const number = e.target.getAttribute("data-remove");
            console.log(number)
            delete projectCollection[number];
            display.removeProject(number);
            display.remove();
            display.renderDefaultHeader();
            console.log(placeNumber)
        });

        const checkbox = document.querySelectorAll(".checkbox");
        checkbox.forEach( (check) => {
            check.addEventListener("change", (e) => {
                console.log("check")
                alert(`${e.target.checked}`)
                if (e.target.checked) alert("Aloha")
            });
        });
    });
});

const checkbox = document.querySelectorAll(".checkbox");
        checkbox.forEach( (check) => {
            check.addEventListener("change", (e) => {
                console.log("check2")
                alert(`${e.target.checked}`)
                if (e.target.checked) alert("Aloha2")
            });
        });

const checking = document.querySelector("#checkbox");
    checking.addEventListener("change", () =>{
            alert("hi")
        });
