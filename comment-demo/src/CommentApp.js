import React, {Component} from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

// 定义CommentApp组件
class CommentApp extends Component{
    constructor(){
        super()
        this.state = {
            comments: []
        }
    }
    //DOM渲染前加载评论内容
    componentWillMount(){
        this._loadComment()
    }

    //保存评论至浏览器中
    _loadComment(){
        let comments = localStorage.getItem('comments')
        if(comments){
            this.setState({ 
                comments: JSON.parse(comments)
            })
        }
        console.log(this.state.comments)
    }
    _saveComment(comments){
        localStorage.setItem('comments',JSON.stringify(comments))
    }
    
    // 获取评论内容
    handleSubmitComment(comment) {
        if(!comment) return
        if(!comment.username) return alert('请输入用户名')
        if(!comment.content) return alert('请输入评论内容')
        const comments = this.state.comments
        comments.push(comment)
        this.setState({ comments })
        this._saveComment(comments)
    }

    render() {
        return (
            <div className="wrapper">
                <CommentInput  onSubmit={this.handleSubmitComment.bind(this)}/>
                <CommentList comments={this.state.comments} />
            </div>
        )
    }
}

export default CommentApp