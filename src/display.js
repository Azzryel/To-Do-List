import { projectCollection } from "./projectFactory";
import { createTemplate } from "./createTemplate";

const display = ( () => {

    const render = () => {
        projectCollection.forEach( (e) => {
            let place = projectCollection.indexOf(e);
            createTemplate.projectTemplate(e, place);
        });
    }

    const renderProjectHeader = (e) => {
        createTemplate.projectTitleHeader(e);
    }

    const renderToDo = (place) => {
        projectCollection[place].toDoTasks.forEach( (e) => {
            createTemplate.toDoTemplate(e);
        })
    }

    const renderLastProject = (project, place) => {
        createTemplate.projectTemplate(project, place);
    }

    const renderLastToDo = (toDo) => {
        createTemplate.toDoTemplate(toDo)
    }

    const remove = () => {
        const elements = document.getElementsByClassName("to-do-content");
        while(elements.length > 0){
            elements[0].parentNode.removeChild(elements[0]);
        }

        const element = document.getElementById("header-title");
        element.parentNode.removeChild(element);
    }

    const removeProject = (place) => {
        console.log("hi")
        const element = document.querySelector(`[data-place = "${place}"]`);
        element.parentNode.removeChild(element);
    }

    const renderDefaultHeader = () => {
        createTemplate.projectDefaultHeader();
    }

    return { render, renderProjectHeader, renderToDo, renderLastProject, renderLastToDo, renderDefaultHeader, remove, removeProject }
})();

export { display }