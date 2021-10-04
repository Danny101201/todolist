import React from 'react'
import ListItems from './ListItem'
function Context({ setItems, items }) {

    const setAndSaveItem = ListItem=>{
        setItems(ListItem)
        localStorage.setItem('shoppingList', JSON.stringify(ListItem))
    }
    const handleClick = (id) => {
        const itemList = items.map(item => item.id === id ? { ...item, checked: !item.checked } : item)
        setAndSaveItem(itemList)
    }
    const handleDelete = (id) => {
        const itemList = items.filter(item => item.id !== id)
        setAndSaveItem(itemList)
    }
    return (
        <main>
            {items.length ? (
                <ul>
                    {
                        items.map(item => (
                            <ListItems key={item.id} item={item} handleClick={handleClick} handleDelete={handleDelete}></ListItems>
                        ))
                    }
                </ul>

            ) : (
                <p style={{ marginTop: '2rem' }}>沒有清單</p>
            )}
        </main>
    )
}

export default Context
