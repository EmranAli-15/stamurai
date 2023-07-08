const addTask = (item: {}) => {
        let storedTask = [];

        const getItemsFromStorage = localStorage.getItem('tasks');
        if (getItemsFromStorage) {
                storedTask = JSON.parse(getItemsFromStorage);
        }

        storedTask.push(item);
        localStorage.setItem('tasks', JSON.stringify(storedTask));
}

const deleteTask = (title: string) => {
        let remainingTasks = [];
        const getItemsFromStorage = localStorage.getItem('tasks');
        if (getItemsFromStorage) {
                const storedTask = JSON.parse(getItemsFromStorage);
                remainingTasks = storedTask.filter((task: any) => task.title !== title)
        }
        localStorage.setItem('tasks', JSON.stringify(remainingTasks));
        return true;
}

export { addTask, deleteTask };