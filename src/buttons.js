import { projectCollection } from "./projectFactory"
import { display } from "./display"

const buttons = ( () => {

    const removeBtn = (place) => {
        const removeBtn = document.querySelector(`#remove-project-${place}`);
        removeBtn.addEventListener("click", (e) => {
            const number = e.target.getAttribute("data-remove");
            delete projectCollection[number];
            display.removeProject(number);
            display.remove();
            display.renderDefaultHeader();
            document.getElementById("to-do-form").style.display = "none";
        });
    }
    
    const checkbox = (projectPlace) => {
        const checkbox = document.querySelectorAll(".checkbox");
        checkbox.forEach( (check) => {
            check.addEventListener("change", (e) => {
                const check = e.target.getAttribute("data-todoplace");
                if (e.target.checked) {
                    e.target.nextSibling.classList.add("checked");
                    e.target.parentNode.lastChild.classList.add("checked");
                    projectCollection[projectPlace].toDoTasks[check].checkValue = "true";
                    if (e.target.parentNode.lastChild.previousSibling.className == "priority priority-high"){
                    e.target.parentNode.lastChild.previousSibling.classList.add("grey");
                    }
                }
                else if (!e.target.checked) {
                    e.target.nextSibling.classList.remove("checked");
                    e.target.parentNode.lastChild.classList.remove("checked");
                    projectCollection[projectPlace].toDoTasks[check].checkValue = "false";
                    if (e.target.parentNode.lastChild.previousSibling.className == "priority priority-high grey"
                        || e.target.parentNode.lastChild.previousSibling.className == "priority grey priority-high"){
                        e.target.parentNode.lastChild.previousSibling.classList.remove("grey");
                        }
                }
            });
        });
    }

    const form = () => {
        const formBtn = document.getElementById("display-form");
        formBtn.addEventListener("click", () => {
            document.getElementById("to-do-form").style.display = "block";
    });
    }

    return { checkbox, removeBtn, form }
})();

export { buttons }