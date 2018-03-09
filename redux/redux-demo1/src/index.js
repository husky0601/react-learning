// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
// const createStore = require('./store')

function createStore(reducer) {
    let state = null
    const listeners = []
    const subscribe = (listener) => listeners.push(listener)
    const getState = () => state
    const dispatch = (action) => {
        state = reducer(state, action) // 覆盖原对象
        listeners.forEach((listener) => listener())
    }
    dispatch({}) // 初始化state
    return { getState, dispatch, subscribe }
}

// 渲染函数
function renderApp(newAppState, oldAppState = {}) { // 防止oldAppState没有传入，所以加入了默认参数oldAppState = {}
    if (newAppState === oldAppState) return //防止重新渲染
    console.log('render app...')
    renderTitle(newAppState.title, oldAppState.title)
    renderContent(newAppState.content, oldAppState.content)
}

function renderTitle(newTitle, oldTitle = {}) {
    if (newTitle === oldTitle) return
    console.log('render title')
    const titleDOM = document.getElementById('title')
    titleDOM.innerHTML = newTitle.text
    titleDOM.style.color = newTitle.color
}

function renderContent(newContent, oldContent = {}) {
    if (newContent === oldContent) return
    console.log('render content')
    const contentDOM = document.getElementById('content')
    contentDOM.innerHTML = newContent.text
    contentDOM.style.color = newContent.color
}

// 添加应用状态
// const appState = {
//     title: {
//         text: 'React.js 小书',
//         color: 'red',
//     },
//     content: {
//         text: 'React.js 小书内容',
//         color: 'blue'
//     }
// }
// 新建新的newAppState
// let newState = {
//     ...appState, // 复制appState里面的内容，对象的解构
//     title:{  // 用一个新的对象覆盖原来的title属性
//         ...appState.title, // 复制原来title里面的内容
//         text: '《React.js 小书》' // 覆盖原来的text属性
//     }
// }
// console.log(newState !== appState) 
// 定义一个专门负责数据的修改的函数
// 所有对数据的操作必须通过dispatch函数, reducer是一个纯函数，只能初始化和计算新的state
function reducer(state, action) {
    // 如果不存在state，就初始化state
    if(!state) {
        return {
            title: {
                text: 'React.js 小书',
                color: 'red',
            },
            content: {
                text: 'React.js 小书内容',
                color: 'blue'
            }
        }
    }
    switch (action.type) {
        case 'UPDATE_TITLE_TEXT':
            return { // 构建新的对象并且返回
                ...state,
                title: {
                    ...state.title,
                    text: action.text
                }
            }
        case 'UPDATE_TITLE_COLOR':
            return {
                ...state,
                title: {
                    ...state.title,
                    color: action.color
                }
            }
        default:
            return state  // 没有修改，返回原来的对象
    }
}



const store = createStore(reducer)  // 创建实例
let oldState = store.getState() // 缓存旧的state
store.subscribe(() => {  //订阅者模式
    let newState = store.getState() //数据可能变化，获取新的state
    renderApp(newState, oldState) //监听数据的变化
    oldState = newState  // 渲染完后，将新的变成旧的，以便下次调用
})

renderApp(store.getState()) // 首次渲染页面
// console.log('appState',appState)

// dispatch相当于一个中间人，所有的数据修改必须通过它
// 并且必须使用action来告诉它要修改什么，只有它允许的才能修改
store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》' }) // 修改标题文本
store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' }) // 修改标题颜色
// debugger

// 把新的数据渲染到页面上
// renderApp(store.getState())
