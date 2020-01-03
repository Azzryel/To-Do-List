const projectFactory = (title) => {
    let toDoTasks = [];

    const addToDo = (toDo) => {
        toDoTasks.push(toDo);
    }

    return { title, addToDo, toDoTasks };
};

const projectCollection = [];

export { projectFactory, projectCollection }