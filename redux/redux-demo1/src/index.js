// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
// const createStore = require('./store')

function createStore (state, stateChanger) {
    const listeners = []
    const subscribe = (listener) => listeners.push(listener)
    const getState = () => state
    const dispatch = (action) => {
      stateChanger(state, action)
      listeners.forEach((listener) => listener())
    }
    return { getState, dispatch, subscribe }
}

// 渲染函数
function renderApp(appState) {
    renderTitle(appState.title)
    renderContent(appState.content)
}

function renderTitle(title) {
    const titleDOM = document.getElementById('title')
    titleDOM.innerHTML = title.text
    titleDOM.style.color = title.color
}

function renderContent(content){
    const contentDOM = document.getElementById('content')
    contentDOM.innerHTML = content.text
    contentDOM.style.color = content.color
}

// 添加应用状态
const appState ={
    title: {
        text: 'React.js 小书',
        color:'red',
    },
    content: {
        text: 'React.js 小书内容',
        color: 'blue'
    }
}
// 定义一个专门负责数据的修改的函数
// 所有对数据的操作必须通过dispatch函数
function stateChanger(state, action) {
    console.log('action', action)
    switch(action.type){
        case 'UPDATE_TITLE_TEXT':
            appState.title.text = action.text
            break
        case 'UPDATE_TITLE_COLOR':
            appState.title.color = action.color
            break
        default:
            break
    }
}



const store = createStore(appState, stateChanger)  // 创建实例
store.subscribe(() => renderApp(store.getState())) //监听数据的变化

renderApp(store.getState()) // 首次渲染页面
// console.log('appState',appState)

// dispatch相当于一个中间人，所有的数据修改必须通过它
// 并且必须使用action来告诉它要修改什么，只有它允许的才能修改
store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》' }) // 修改标题文本
store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' }) // 修改标题颜色
// debugger

// 把新的数据渲染到页面上
// renderApp(store.getState())
