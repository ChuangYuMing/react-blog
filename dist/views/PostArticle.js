/**
 * @jsx React.DOM
 */

var PostArticle = React.createClass({displayName: 'PostArticle',
  handleContentSubmit: function(content) {    
    console.log(content); 

  },
  render: function() {
    return (
      ArtivleForm({onContentSubmit: this.handleContentSubmit})
    );
  }
})

var ArtivleForm = React.createClass({displayName: 'ArtivleForm',
  handleSubmit: function() {
    var content = this.refs.content.getDOMNode().value;
    var date = new Date().toDateString();
    console.log(date);
    this.props.onContentSubmit({content: content});
    return false;
  },
  render: function() {
    return (
      React.DOM.form({onSubmit: this.handleSubmit}, 
        React.DOM.textarea({ref: "content"}), 
        React.DOM.input({type: "submit", value: "Post"})
      )
    );
  }
})

React.renderComponent(
  PostArticle(null),
  document.getElementById('postArticle')
);
