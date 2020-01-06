import { projectCollection } from "./projectFactory";
//import getDate from `date-fns/get_date`;

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
        const toDoDate = document.createElement("span");
        toDoDate.className = "to-do-date";
        toDoDate.setAttribute("data-todoplace", `${toDoPlace}`);
        toDoDate.textContent = `${e.dueDate}`;
        const priority = document.createElement("div");
        priority.className = "priority";
        priority.setAttribute("data-todoplace", `${toDoPlace}`);
        priority.textContent = "!";

        
        if (e.checkValue == "true") {
            span.classList.add("checked");
            toDoCheck.checked = true;
            priority.classList.add("grey"); 
            toDoDate.classList.add("checked");  
        }
        
        toDoList.appendChild(toDoContent);
        toDoContent.appendChild(toDoCheck);
        toDoContent.appendChild(span);

        if (e.priority == "true") {
            priority.classList.add("priority-high");
            toDoContent.appendChild(priority);
        }
        toDoContent.appendChild(toDoDate);
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
        const addTask =document.createElement("button");
        addTask.id = "display-form";
        addTask.textContent = "Add tasks";


        projectTitle.appendChild(projectHeader);
        projectHeader.appendChild(titleH2);
        projectHeader.appendChild(projectRemove);
        projectHeader.appendChild(addTask);
    }

    const projectDefaultHeader = () => {
        const projectTitle = document.querySelector("#project-title-header");
        const projectHeader = document.createElement("div");
        projectHeader.id = "header-title";
        const titleSpan = document.createElement("span");
        titleSpan.textContent = `Default`;

        projectTitle.appendChild(projectHeader);
        projectHeader.appendChild(titleSpan);

        const toDoList = document.querySelector("#to-do-list");
        const toDoContent = document.createElement("div");
        toDoContent.className = "to-do-content";
        const para1 = document.createElement("p");
        para1.textContent = "Pick or create a project";

        toDoList.appendChild(toDoContent);
        toDoContent.appendChild(para1);
    }

    return { projectTemplate, toDoTemplate, projectTitleHeader , projectDefaultHeader }
})();

export { createTemplate }