import React from "react";
import {Button} from 'antd';
import { Link } from "react-router-dom";
const HomeLayout = () => {
    return(
        <>
        <h4>Welcome to the home page of ToDo List. Please click the button below to navigate to the main application</h4>
        <Button type = "link">
            <Link to = "todo">Click here to redirect</Link> </Button>
        </>

    )
};
export default HomeLayout;