import { Footer, Header, TodoCollection, TodoInput } from 'components';
import { useState } from 'react';

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
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState(dummyTodos);
  const handleChange = (value) => {
    setInputValue(value);
  };
  const handleAddTodo = () => {
    // 確認有無輸入資料
    if (inputValue.length === 0) {
      return;
    }
    // 新增輸入的資料 物件
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: Math.random() * 100,
          title: inputValue,
          isDone: false,
        },
      ];
    });
    // 輸入框清空
    setInputValue('');
  };
  const handleKeyDown = () => {
    // 確認有無輸入資料
    if (inputValue.length === 0) {
      return;
    }
    // 新增輸入的資料 物件
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: Math.random() * 100,
          title: inputValue,
          isDone: false,
        },
      ];
    });
    // 輸入框清空
    setInputValue('');
  };
  //從todoItem 傳上來被點擊的todo id
  const handleToggleDone = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        // 用被點擊的todo id 找todo
        if (todo.id === id) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        }
        return todo;
      });
    });
  };
  return (
    <div>
      TodoPage
      <Header />
      <TodoInput
        inputValue={inputValue}
        onChange={handleChange}
        onAddTodo={handleAddTodo}
        onKeyDown={handleKeyDown}
      />
      <TodoCollection todos={todos} onToggleDone={handleToggleDone} />
      <Footer />
    </div>
  );
};

export default TodoPage;
