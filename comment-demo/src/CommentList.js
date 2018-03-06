import React, {Component} from 'react'
import Comment from './Comment'

class CommentList extends Component {
    // 防止comments不传入
    static defaultProps = {
        comments: []
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
                    <Comment comment={comment} key={index}/>
                )}
            </div>
        )
    }
}
export default CommentList