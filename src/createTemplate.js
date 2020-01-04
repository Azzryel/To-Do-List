import { projectCollection } from "./projectFactory";

const createTemplate = ( () => {

    const projectTemplate = (e, place) => {
        const projectList = document.querySelector("#project-list");
        const projectElement = document.createElement("div");
        projectElement.className = "projects";
        projectElement.setAttribute("data-place", `${place}`);
        const para = document.createElement("p");
        para.setAttribute("data-place", `${place}`);
        para.textContent = `${e.title}`

        projectElement.appendChild(para);
        projectList.appendChild(projectElement);
    }

    const toDoTemplate = (e) => {
        const toDoList = document.querySelector("#to-do-list");
        const toDoContent = document.createElement("div");
        toDoContent.className = "to-do-content";
        const toDoCheck = document.createElement("input");
        toDoCheck.setAttribute("type", "checkbox");
        toDoCheck.className = "checkbox";
        const span = document.createElement("span");
        span.textContent = `${e.title}`;

        
        toDoList.appendChild(toDoContent);
        toDoContent.appendChild(toDoCheck);
        toDoContent.appendChild(span);
    }

    const projectTitleHeader = (place) => {
        const projectTitle = document.querySelector("#project-title-header");
        const projectHeader = document.createElement("div");
        projectHeader.id = "header-title";
        const titleSpan = document.createElement("span");
        titleSpan.textContent = `${projectCollection[place].title}`;
        const projectRemove =document.createElement("button");
        projectRemove.className = "remove-projects";
        projectRemove.id = `remove-project-${place}`;
        projectRemove.setAttribute("data-remove", `${place}`);
        projectRemove.textContent = "Remove project";


        projectTitle.appendChild(projectHeader);
        projectHeader.appendChild(titleSpan);
        projectHeader.appendChild(projectRemove);
    }

    const projectDefaultHeader = () => {
        const projectTitle = document.querySelector("#project-title-header");
        const projectHeader = document.createElement("div");
        projectHeader.id = "header-title";
        const titleSpan = document.createElement("span");
        titleSpan.textContent = `Default Poject Title`;

        projectTitle.appendChild(projectHeader);
        projectHeader.appendChild(titleSpan);
    }

    return { projectTemplate, toDoTemplate, projectTitleHeader , projectDefaultHeader }
})();

export { createTemplate }