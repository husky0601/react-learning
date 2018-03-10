import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Comment extends Component {
    // 在组件comment类组件中添加propType类属性, 参数验证
    static propTypes = {
        comment: PropTypes.object.isRequired,
        onDeleteComment:PropTypes.func,
        index:PropTypes.number
    }

    constructor() {
        super()
        this.state = {
            timeString: ''
        }
    }

    componentWillMount(){
        this._updateTimeString()
        this._timer = setInterval(
            this._updateTimeString.bind(this),
            10000
        )
    }
    // 删除某条评论后要清除其定时器
    componentWillUnmount(){
        clearInterval(this._timer)
    }

    // 更新发布的时间差
    _updateTimeString(){
        const comment = this.props.comment
        const duration = (+Date.now() - comment.createdTime) / 1000
        this.setState({
            timeString: duration > 60 ? `${Math.round(duration / 60)} 分钟前`
            :  `${Math.round(Math.max(duration, 1))} 秒前`
        })
    }

    // 删除评论：
    //上层传入的props.onDeleteComment函数告知上一层组件删除的消息，并且把评论下标index传出去
    handleDeleteComment() {
        if(this.props.onDeleteComment){
            this.props.onDeleteComment(this.props.index)
        }
    }


    render() {
        const { comment } =this.props
        return (
            <div className='comment'>
                <div className='comment-username'>
                    <span>{comment.username}: </span>
                </div>
                <p> {comment.content}</p>
                <span className='comment-createdtime'>{this.state.timeString}</span>
                <span 
                    onClick={this.handleDeleteComment.bind(this)}
                    className='comment-delete'>删除</span>
            </div>
        )
    }
}

export default Comment