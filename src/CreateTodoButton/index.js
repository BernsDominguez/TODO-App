import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(props){
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
        props.switchCloseButton();
    };

    return (
        <button 
            className="CreateTodoButton"
            id="addButton"
            onClick={onClickButton}
        >
            +
        </button>
    );
}

export { CreateTodoButton };