import React, {Component} from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'

class CommentList extends Component {
    // 防止comments不传入
    static defaultProps = {
        comments: PropTypes.array,
        onDeleteComment: PropTypes.func
    }
    static defaultProps = {
        comment: []
    }

    // 作为一个传递信息的桥梁
    handleDeleteComment(index) {
        if(this.props.onDeleteComment) {
            this.props.onDeleteComment(index)
        }
    }

    render() {
        // const comments = [
        //     {username: 'Jack', content: 'This comment write by Jack'},
        //     {username: 'Lucy', content: 'This comment write by Lucy'},
        //     {username: 'Tom', content: 'This comment write by Tom'},
        //     {username: 'Husky', content: 'This comment write by Husky'},
        // ]

        return (
            <div>
                {this.props.comments.map((comment,index) =>
                    <Comment 
                        comment={comment} 
                        key={index}
                        index={index}
                        onDeleteComment={this.handleDeleteComment.bind(this)}
                    />
                )}
            </div>
        )
    }
}
export default CommentList