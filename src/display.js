import { projectCollection } from "./projectFactory";
import { createTemplate } from "./createTemplate";

const display = ( () => {

    const render = () => {
        projectCollection.forEach( (e) => {
            let place = projectCollection.indexOf(e);
            createTemplate.projectTemplate(e, place);
        });
    }

    return { render }
})();

export { display }