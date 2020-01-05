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
        });
    }
    
    const checkbox = () => {
        const checkbox = document.querySelectorAll(".checkbox");
        checkbox.forEach( (check) => {
            check.addEventListener("change", (e) => {
                if (e.target.checked) {
                    e.target.nextSibling.classList.add("checked");
                }
                else if (!e.target.checked) {
                    e.target.nextSibling.classList.remove("checked");
                }
            });
        });
    }

    return { checkbox, removeBtn }
})();

export { buttons }