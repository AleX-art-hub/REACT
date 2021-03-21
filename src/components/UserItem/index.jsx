import React from 'react';
const UserItem = props => {
    const {
        onSelectUsers,
        isSelected,
        user:{id,fName, lName}} = props;
    return (
        <li>
            <span>UserID: "{id}" UserFullName: "{fName} {lName}"";</span>
            <button onClick={onSelectUsers}>Select</button>
        </li>
    );
};
export default UserItem;