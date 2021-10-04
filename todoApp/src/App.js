import { useState, useEffect } from 'react'
import Header from './components/Header'
import Context from './components/Context'
import Footer from './components/Footer'
import Additem from './components/Additem'
import Search from './components/Search'
function App() {
  const initionalValue = JSON.parse(localStorage.getItem('shoppingList')) || ''
  const [items, setItems] = useState(initionalValue);
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')
  useEffect(() => {
    localStorage.setItem('shoppingList', JSON.stringify(listItem))
  }, [items])
  
  const addItems = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const newItem = { id, checked: false, item }
    if (item.startsWith('http')) newItem.isLink = true
    const listItem = [...items, newItem]
    setItems(listItem)
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
        items={items ? items.filter(item => item.item.toLowerCase().includes(search.toLowerCase())) : ''}
        setItems={setItems}
      />
      <Footer lengths={items.length}></Footer>
    </div>
  );
}

export default App;
