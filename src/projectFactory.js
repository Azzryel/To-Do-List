const projectFactory = (title) => {
    let toDoTasks = [];

    const addToDo = (toDo) => {
        toDoTasks.push(toDo);
    }

    return { title, addToDo, toDoTasks };
};

let projectCollection = [];

export { projectFactory, projectCollection }