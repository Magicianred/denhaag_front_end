import React from 'react'

const handleCategorySelect = () => {
    
}

const DropDownSearch: React.FC = () => {
    return(
    <select name='category selector' onChange={handleCategorySelect}>
        <option value='art'>Art</option>
        <option value='food'>Food</option>
        <option value='friends'>Friends</option>
        <option value='learning'>Learning</option>
        <option value='sport'>Sport</option>
        <option value='party'>Party</option>
        <option value='travel'>Travel</option>
    </select>
    )
}

export default DropDownSearch;