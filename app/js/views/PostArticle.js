/**
 * @jsx React.DOM
 */

var PostArticle = React.createClass({
  handleContentSubmit: function(content) {    
    console.log(content); 
    var that =this;
    $.ajax({
      url: 'http://140.123.175.91:3000/api/articles',
      dataType: 'json',
      method: 'POST',
      data: content
    })
    .done(function(res){
      console.log(res);
      that.setState({data: res});
    })
  },
  render: function() {
    return (
      <ArtivleForm onContentSubmit={this.handleContentSubmit} />
    );
  }
})

var ArtivleForm = React.createClass({
  handleSubmit: function() {
    var title = this.refs.title.getDOMNode().value;
    var content = this.refs.content.getDOMNode().value;
    var date = new Date().toISOString();
    // console.log(date);
    this.props.onContentSubmit({Title: title, Content: content, OnCreate: date});
    return false;
  },
  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <span>Title:</span>
        <input type="text" ref='title'></input><br />
        <span>Content:</span>
        <textarea ref='content'></textarea>
        <input type='submit' value='Post' />
      </form>
    );
  }
})

React.renderComponent(
  <PostArticle />,
  document.getElementById('postArticle')
);
