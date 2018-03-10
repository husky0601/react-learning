import React, {Component} from 'react'
import PropType from 'prop-types'

class CommentInput extends Component {
    // static类属性，验证组件传入参数的类型
    static propType ={
        onSubmit: PropType.func
    }

    // 构造函数（constructor）初始化username、content状态
    constructor(props){
        super()
        this.state = ({
            username: '',
            content:''
        })
    }

    // 生命周期
    // 在组件渲染完成后对textarea自动对焦
    componentDidMount() {
        this.textarea.focus()
    }
    componentWillMount(){
        this._loadUsername()
    }

    // 私有方法（以‘_‘开头）
    // 保存用户姓名至浏览器的localStorage中
    _saveUsername(username) {
        localStorage.setItem('username', username)
    }
    // 加载用户数据信息
    _loadUsername(){
        const username = localStorage.getItem('username')
        if(username){
            this.setState({username})
        }
    }

    // 事件监听方法（前缀为’handle‘）
    // 监听输入框中的值的变化
    handleUsernameChange(event) {
        this.setState({
            username: event.target.value
        })
    }
    handleContentChange(event){
        this.setState({
            content: event.target.value
        })
    }
    //点击提交CommentInput组件向CommentApp组件提交更改的状态
    handleSubmit(){
        if(this.props.onSubmit){
            // const {username, content} = this.state
            this.props.onSubmit({
                username: this.state.username,
                content: this.state.content,
                createdTime: +new Date()
            })
        }
        this.setState({content: ''})
    }
    //当用户失去焦点的时候，将用户输入的内容保存在localStorage中 
    handleUsernameBlur(event){
        this._saveUsername(event.target.value)
    }

    // render()方法
    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                       <input value={this.state.username} 
                              onBlur={this.handleUsernameBlur.bind(this)}
                              onChange={this.handleUsernameChange.bind(this)}/> 
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea ref={(textarea) => this.textarea = textarea}
                                  value={this.state.content}
                                  onChange={this.handleContentChange.bind(this)} />
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={this.handleSubmit.bind(this)}>发布</button>
                </div>
            </div>
        )
    }
}
export default CommentInput