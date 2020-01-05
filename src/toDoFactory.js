const toDoFactory = (title, dueDate, priority) => {
    let checkValue = false;

    return { title, dueDate, priority, checkValue }
}

export { toDoFactory }