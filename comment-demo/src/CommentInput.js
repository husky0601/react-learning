import React, {Component} from 'react'

class CommentInput extends Component {
    // 初始化username、content状态
    constructor(props){
        super()
        this.state = ({
            username: '',
            content:''
        })
    }
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
            const {username, content} = this.state
            this.props.onSubmit({username,content})
        }
        this.setState({content: ''})
    }

    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                       <input value={this.state.username} 
                              onChange={this.handleUsernameChange.bind(this)}/> 
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea value={this.state.content}
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