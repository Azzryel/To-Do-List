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

    const toDoTemplate = (e, toDoPlace) => {
        const toDoList = document.querySelector("#to-do-list");
        const toDoContent = document.createElement("div");
        toDoContent.className = "to-do-content";
        toDoContent.setAttribute("data-todoplace", `${toDoPlace}`);
        const toDoCheck = document.createElement("input");
        toDoCheck.setAttribute("type", "checkbox");
        toDoCheck.className = "checkbox";
        toDoCheck.setAttribute("data-todoplace", `${toDoPlace}`);
        const span = document.createElement("span");
        span.setAttribute("data-todoplace", `${toDoPlace}`);
        span.textContent = `${e.title}`;
        const priority = document.createElement("div");
        priority.setAttribute("data-todoplace", `${toDoPlace}`);
        priority.textContent = "!";

        
        if (e.checkValue == "true") {
            span.classList.add("checked");
            toDoCheck.checked = true;   
        }
        
        toDoList.appendChild(toDoContent);
        toDoContent.appendChild(toDoCheck);
        toDoContent.appendChild(span);

        if (e.priority == "true") {
            priority.classList.add("priority-high");
            toDoContent.appendChild(priority);
        }
    }

    const projectTitleHeader = (place) => {
        const projectTitle = document.querySelector("#project-title-header");
        const projectHeader = document.createElement("div");
        projectHeader.id = "header-title";
        const titleH2 = document.createElement("h2");
        titleH2.textContent = `${projectCollection[place].title}`;
        const projectRemove =document.createElement("button");
        projectRemove.className = "remove-projects";
        projectRemove.id = `remove-project-${place}`;
        projectRemove.setAttribute("data-remove", `${place}`);
        projectRemove.textContent = "Remove project";


        projectTitle.appendChild(projectHeader);
        projectHeader.appendChild(titleH2);
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