const todoDB = []

const addTodo = (arr, item, priority) => priority === "high" ? [item, ...arr] : [...arr, item]

const clearTodo = (arr, index) => {
  const arrCopy = [...arr];
  arrCopy[index] = null;
  return arrCopy;
}

const updateTodo = (arr, index, newItem) => {
  const arrCopy = [...arr];
  arrCopy[index] = newItem;
  return arrCopy;
}

const getTodo = (arr, index) => index ? arr[index] : arr

