import { useState } from 'react';
import './App.css';
import Todolist from './components/Todolist';

function App() {

  const [inputList, setInputList] = useState("")
  const [items, setItems] = useState([])

  const itemEvent = (event) => {
    setInputList(event.target.value)
  }

  const listOfItems = () => {

    setItems((oldItems) => {
      // Spread operator  -  ...oldItems  -  It will return all the previous items  and then we add the new item
      return [...oldItems, inputList]
    })
    setInputList("")
  }

  const deleteItem = (id) => {
    setInputList((oldItems) => {
      
      return oldItems.filter((arrElem, index) => {
        // Return all the elements except the one which we want to delete 
        // If the index of the element is not equal to the id passed
        return index !== id
      })
    })
  }

  return (
    <>
      <div className='main-div'>
        <div className='center-div'>
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type='text' placeholder='Add an item' onChange={itemEvent} value={inputList} />
          <button onClick={listOfItems}> + </button>

          <ol>
            {
              items.map((itemVal, index) => {
                return <Todolist key={index} id={index} text={itemVal} onSelect={deleteItem} />
              })
            }
          </ol>
        </div>
      </div>

    </>
  );
}

export default App;
