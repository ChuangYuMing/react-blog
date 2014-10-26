/**
 * @jsx React.DOM
 */

var PostArticle = React.createClass({
  handleContentSubmit: function(content) {    
    console.log(content); 

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
    this.props.onContentSubmit({title: title, content: content, date: date});
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
