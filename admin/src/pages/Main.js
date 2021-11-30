/*
 * @Author: wangtao
 * @Date: 2021-11-25 14:27:57
 * @LastEditors: 汪滔
 * @LastEditTime: 2021-12-01 07:55:03
 * @Description: file content
 */
import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Login from './Login'
import AdminIndex from './AdminIndex'
function Main(){
    return (
        <Router>      
            {/* <Route path="/" exact component={Login} /> */}
            <Route path="/login/" exact component={Login} />
            <Route path="/index/"  component={AdminIndex} />
        </Router>
    )
}
export default Main