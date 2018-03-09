# Redux总结  
在React中父组件通过props将其数据传递给子组件，但是子组件传递给父组件需有传递事件，如果是两个子组件间传递数据，得靠离其最近的父组件进行传递数据，这样的组件间传递数据，效率大大降低，所以为了能够有更好的交互，使组件间更高效得传递数据，需要使用到Redux。Redux是将某个状态进行共享，也就是说redux定义的状态会作为全局的变量，供所有的组件进行共享，这样的话数据在组件间就能实现共享。  
但是如果共享的状态    

## 动机  
随着 JavaScript 单页应用开发日趋复杂，JavaScript 需要管理比任何时候都要多的 state （状态）。 这些 state 可能包括服务器响应、缓存数据、本地生成尚未持久化到服务器的数据，也包括 UI 状态，如激活的路由，被选中的标签，是否显示加载动效或者分页器等等。  
管理不断变化的 state 非常困难。如果一个 model 的变化会引起另一个 model 变化，那么当 view 变化时，就可能引起对应 model 以及另一个 model 的变化，依次地，可能会引起另一个 view 的变化。直至你搞不清楚到底发生了什么。state 在什么时候，由于什么原因，如何变化已然不受控制。 当系统变得错综复杂的时候，想重现问题或者添加新功能就会变得举步维艰。  


### 设计套路  
```
// 定义一个reducer 
function reducer(state, action) {
    /* 初始化 state 和 switch case */
}
 
// 生成 store
const store = createStore(reducer) 

// 监听数据变化，重新渲染页面
store.subscript(() => renderApp(store.getState()))

//首次渲染页面 
renderApp(store.getState())

// 更改数据 dispatch，页面自动更新
store.dispatch(...)
```