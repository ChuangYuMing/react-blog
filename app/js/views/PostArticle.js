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
    var content = this.refs.content.getDOMNode().value;
    var date = new Date().toDateString();
    console.log(date);
    this.props.onContentSubmit({content: content});
    return false;
  },
  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
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
