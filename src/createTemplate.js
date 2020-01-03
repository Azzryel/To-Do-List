const createTemplate = ( () => {

    const projectTemplate = (e, place) => {
        const projectList = document.querySelector("#project-list");
        const projectElement = document.createElement("div");
        projectElement.className = "projects";
        projectElement.setAttribute("data-place", `${place}`);
        const para = document.createElement("p");
        para.textContent = `${e.title}`

        projectElement.appendChild(para);
        projectList.appendChild(projectElement);
    }

    return { projectTemplate }
})();

export { createTemplate }