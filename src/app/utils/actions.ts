const getItemsFromStorage = localStorage.getItem('tasks');

// bellow this variable is used for find index of the array. When you update an data then this data will not change index in that array.
let titleForUpdate = '';

const addTask = (item: {}) => {
        let storedTask = [];
        if (getItemsFromStorage) {
                storedTask = JSON.parse(getItemsFromStorage);
        }

        storedTask.push(item);
        localStorage.setItem('tasks', JSON.stringify(storedTask));
}

const getSingleTask = (title: string) => {
        if (getItemsFromStorage) {
                titleForUpdate = title
                const storedTask = JSON.parse(getItemsFromStorage);
                const found = storedTask.find((task: any) => task.title === title)
                return found
        }
}

const editAndUpdate = (task: {}) => {
        let storedTask = [];
        if (getItemsFromStorage) {
                storedTask = JSON.parse(getItemsFromStorage);
        }
        const index = storedTask.map((object: any) => object.title).indexOf(titleForUpdate);
        storedTask.splice(index, 1, task);
        localStorage.setItem('tasks', JSON.stringify(storedTask));
}

const deleteTask = (title: string) => {
        let remainingTasks = [];
        if (getItemsFromStorage) {
                const storedTask = JSON.parse(getItemsFromStorage);
                remainingTasks = storedTask.filter((task: any) => task.title !== title)
        }
        localStorage.setItem('tasks', JSON.stringify(remainingTasks));
        return true;
}

export { addTask, deleteTask, getSingleTask, editAndUpdate };