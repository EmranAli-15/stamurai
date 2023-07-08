const addTask = (item: {}) => {
        let storedTask = [];

        const getItemsFromStorage = localStorage.getItem('tasks');
        if (getItemsFromStorage) {
                storedTask = JSON.parse(getItemsFromStorage);
        }

        storedTask.push(item);
        localStorage.setItem('tasks', JSON.stringify(storedTask));
}

export { addTask };