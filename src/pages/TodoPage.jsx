import { Footer, Header, TodoCollection, TodoInput } from 'components';
import {useState} from 'react'

const dummyTodos = [
  {
    title: 'Learn react-router',
    isDone: true,
    id: 1,
  },
  {
    title: 'Learn to create custom hooks',
    isDone: false,
    id: 2,
  },
  {
    title: 'Learn to use context',
    isDone: true,
    id: 3,
  },
  {
    title: 'Learn to implement auth',
    isDone: false,
    id: 4,
  },
];

const TodoPage = () => {
  const [inputValue, setInputValue] = useState("")
  const [todos, setTodos] = useState(dummyTodos)
  const handleInput = (value) => {
    setInputValue(value);
  }
  const handleTodo = () => {
    // 確認有無輸入資料
    if(inputValue.length === 0) {
      return
    }
    // 新增輸入的資料 物件
    setTodos((prevTodos)=> {
      return [
        ...prevTodos,
        {
          id: Math.random()*100,
          title: inputValue,
          isDone: false
        }
      ]
    })
    // 輸入框清空
    setInputValue("")
  }
  return (
    <div>
      TodoPage
      <Header />
      <TodoInput inputValue={inputValue} onChange={handleInput} onAddTodo={handleTodo}/>
      <TodoCollection todos={todos} />
      <Footer />
    </div>
  );
};

export default TodoPage;
