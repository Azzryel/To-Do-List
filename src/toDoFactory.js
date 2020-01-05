const toDoFactory = (title, dueDate, priority) => {
    let checkValue = false;

    const check = (checkbox) => {
        checkbox ? checkValue = false : checkValue = true
    } 

    return { title, dueDate, priority, check, checkValue }
}

export { toDoFactory }