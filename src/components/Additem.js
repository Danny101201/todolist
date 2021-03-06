import React, { useRef } from 'react'
import { FaPlus } from 'react-icons/fa';
function Additem({ newItem, setNewItem, handleSubmit }) {
    const inputRef = useRef()
    return (
        <form className="addForm" onSubmit={handleSubmit}>
            <label htmlFor="addItem">新增</label>
            <input
                autoFocus
                id="addItem"
                type="text"
                ref={inputRef}
                value={newItem}
                onChange={e => setNewItem(e.target.value)}
                placeholder="新增"
                required
            />
            <button
                type="submit"
                onClick={() => inputRef.current.focus()}
            >
                <FaPlus></FaPlus>
            </button>

        </form>
    )
}

export default Additem
