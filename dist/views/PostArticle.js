/**
 * @jsx React.DOM
 */

var PostArticle = React.createClass({displayName: 'PostArticle',
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
      ArtivleForm({onContentSubmit: this.handleContentSubmit})
    );
  }
})

var ArtivleForm = React.createClass({displayName: 'ArtivleForm',
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
      React.DOM.form({onSubmit: this.handleSubmit}, 
        React.DOM.span(null, "Title:"), 
        React.DOM.input({type: "text", ref: "title"}), React.DOM.br(null), 
        React.DOM.span(null, "Content:"), 
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
