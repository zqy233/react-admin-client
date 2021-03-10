import React from 'react'
import { Component } from "react"
import { Button , message } from 'antd'
import 'antd/dist/antd.less'
// 浏览器路由 路由实例  只匹配一个路由
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'
import Login from './pages/login/login'
import Admin from './pages/admin/admin'
// 应用的根组件
export default class App extends Component {
  handleClick = ()=>{
    message.success('success')
  }
  render(){
      return (
        <BrowserRouter>
          <Switch>
           <Route path='/' exact render={()=><Redirect to='/login'/>}></Route>
           <Route path='/login' component={Login}></Route>
           <Route path='/admin' component={Admin}></Route>
          </Switch>
        </BrowserRouter> 
      ) 
  }
}

