export const findItem = (array, id) => {
    //const index = toolsArray.findIndex(tool => tool.id === id);
    array.forEach(element => {
        if(element.id === id) {
            element.isFlipped = !element.isFlipped;
        }
            return element
    })
}
