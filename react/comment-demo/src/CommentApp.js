import React, { Component } from "react";
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";
import { element } from "./C:/Users/SYT/AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/prop-types";

// 定义CommentApp组件
class CommentApp extends Component {
  constructor() {
    super();
    this.state = {
      comments: []
    };
  }
  //DOM渲染前加载评论内容
  componentWillMount() {
    this._loadComment();
  }

  //保存评论至浏览器中
  _loadComment() {
    if (window.localStorage) {
      let comments = localStorage.getItem("comments");
      if (comments) {
        this.setState({
          comments: JSON.parse(comments)
        });
      }
    } else {
        console.warn('当前浏览器不支持localStorage')
    }
  }
  _saveComment(comments) {
    localStorage.setItem("comments", JSON.stringify(comments));
  }

  // 获取评论内容
  handleSubmitComment(comment) {
    if (!comment) return;
    if (!comment.username) return alert("请输入用户名");
    if (!comment.content) return alert("请输入评论内容");
    const comments = this.state.comments;
    comments.push(comment);
    this.setState({ comments });
    this._saveComment(comments);
  }

  // 删除评论
  handleDeleteComment(index) {
    const comments = this.state.comments;
    comments.splice(index, 1);
    this.setState({ comments });
    this._saveComment();
  }

  render() {
    return (
      <div className="wrapper">
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
        <CommentList
          comments={this.state.comments}
          onDeleteComment={this.handleDeleteComment.bind(this)}
        />
      </div>
    );
  }
}

export default CommentApp;
