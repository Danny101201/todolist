import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa';

function ListItem({ item, handleClick, handleDelete }) {
    return (
        <>
            <li className="item" key={item.id}>
                <input
                    type="checkbox"
                    readOnly
                    onClick={() => handleClick(item.id)}
                    checked={item.checked}
                />
                <label
                    style={(item.checked) ? { textDecoration: 'line-through' } : null}
                    onDoubleClick={() => handleClick(item.id)}
                >{item.item}</label>
                <FaRegTrashAlt
                    onClick={() => handleDelete(item.id)}
                    role="button"
                    tabIndex="0"
                ></FaRegTrashAlt>
            </li>
        </>
    )
}

export default ListItem
