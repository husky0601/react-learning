# React之组件(Component)

#### 组件的声明方式   

**1、函数式组件**    
```
//封装倒计时组件--函数式组件方法
function Clock (props) {
    return (
        <div>
            <h1>Hello React!</h1>
            <h2>Now, it is {props.date.toLocaleTimeString()}</h2>
        </div>
    )
}
function tick() {
    //渲染DOM
    ReactDOM.render(
        <Clock date={new Date()} />,
        document.getElementById('example')
    )
}
setInterval(tick, 1000)
```  
函数式组件是通过`function`创建一个函数名称`Clock`（函数名称首字母必须大写），此函数接收一个`props`参数，并返回一个React元素，这个就是一个JavaScript函数 

 **2、类组件**   
 ```
// 封装倒计时组件--类组件方法
class Clock extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello React!</h1>
                <h2>Now, it is {this.props.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

function tick() {
    //渲染DOM
    ReactDOM.render(
        <Clock date={new Date()} />,
        document.getElementById('example')
    )
}
setInterval(tick, 1000)
 ```  
 而类组件是通过创建一个继承 `React.Component`类的[ES6 class](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes)同名类。然后在此类中添加一个`render()`空方法，并返回React元素，因为`reader()`在`Clock`类中形成闭包，所以需要使用`this`指向父类中的参数`props`。  
 类组件允许添加本地状态（state）和生命钩子