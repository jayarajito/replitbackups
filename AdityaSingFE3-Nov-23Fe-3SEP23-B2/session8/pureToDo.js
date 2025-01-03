const todoDB = ['homework', 'play football', 'play fifa']

const addTodo = (arr, item, priority) => priority === "high" ? [item, ...arr] : [...arr, item]

const clearTodo = (arr, index) => {
  const newArr = [...arr]
  newArr[index] = null
  return newArr
}
  
const updateTodo = (arr, index, newItem) => {
  const newArr = [...arr]
  newArr[index] = newItem
  return newArr
}

const getTodo = (arr, index) => arr[index]

console.log(getTodo(todoDB, 2))