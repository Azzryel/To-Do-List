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
        let toDoPlace = 0;
        projectCollection[place].toDoTasks.forEach( (e) => {
            createTemplate.toDoTemplate(e, toDoPlace);
            toDoPlace++;
        })
    }

    const renderLastProject = (project, place) => {
        createTemplate.projectTemplate(project, place);
    }

    const renderLastToDo = (toDo, toDoPlace) => {
        createTemplate.toDoTemplate(toDo, toDoPlace)
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
        const element = document.querySelector(`[data-place = "${place}"]`);
        element.parentNode.removeChild(element);
    }

    const renderDefaultHeader = () => {
        createTemplate.projectDefaultHeader();
    }

    return { render, renderProjectHeader, renderToDo, renderLastProject, renderLastToDo, renderDefaultHeader, remove, removeProject }
})();

export { display }