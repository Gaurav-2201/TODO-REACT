import React, { useState } from "react";
import { Button, Card, Input, Modal } from "antd";
import Data from "./Data.js";
const TodoLayout = () => {

    const [isModalVisible, setIsModalVisible] =useState(false);
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [showCard, setShowCard] = useState(true);

    const showModal = () => {
        setIsModalVisible(true);
    }

    const handleOk = () => {
        setIsModalVisible(false);
        setShowCard(true);
    }

    const handleCancel = () => {
        setIsModalVisible(false);
    }

    const handleInputChange = (e, inputNumber) => {
        const value = e.target.value;
        if (inputNumber === 1){
            setInputValue1(value);
        }
        else if (inputNumber === 2) {
            setInputValue2(value);
        }
    }

    Data.map((curElem) => {
        const {id, inputField1, inputField2} = curElem;
        console.log(id, inputField1, inputField2);
    return(
        <>
        <div>
        <h3>Welcome to TODO page</h3>
        <Button type = "primary" onClick={showModal}>Click to create a task</Button>

        <Modal
        title = "TODO Tasks"
        open = {isModalVisible}
        onOk = {handleOk}
        onCancel = {handleCancel}
        >
            <Input type = "primary" placeholder="Enter the task to do" value={inputValue1} onChange={(e) => handleInputChange(e, 1)}></Input>
            <Input type = "primary" placeholder="Enter a brief description of the task" value={inputValue2} onChange={(e) => handleInputChange(e, 2)}></Input>
        </Modal>
        {showCard && (
            <Card key = {id} title="Input Values">
                <p>Task: {curElem.inputField1}</p> 
                <p>Description: {curElem.inputField2}</p>
            </Card>
        )}
        </div>
        </>
    );
        }
    );
};

export default TodoLayout;