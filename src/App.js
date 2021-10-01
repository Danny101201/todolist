import logo from './logo.svg';
import { useState } from 'react'
import Header from './components/Header'
import Context from './components/Context'
import Footer from './components/Footer'
import Additem from './components/Additem'
import Search from './components/Search'
function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')));
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')

  const addItems = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const newItem = { id, checked: false, item }
    const listItem = [...items, newItem]
    setItems(listItem)
    localStorage.setItem('shoppingList', JSON.stringify(listItem))
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (!newItem) return;
    addItems(newItem)
    setNewItem('')
  }
  return (
    <div className="App">
      <Header></Header>
      <Additem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Search
        search={search}
        setSearch={setSearch}
      />
      <Context 
        items={items.filter(item=>item.item.toLowerCase().includes(search.toLowerCase()))} 
        setItems={setItems}
      />
      <Footer lengths={items.length}></Footer>
    </div>
  );
}

export default App;
