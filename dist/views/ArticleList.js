/**
 * @jsx React.DOM
 */

function(){
var ArticleList = React.createClass({displayName: 'ArticleList',
  getInitialState: function() {
    return {data: []};
  },
  componentWillMount: function() {
    var that = this;
    $.ajax({
      url: 'http://140.123.175.91:3000/api/articles',
      dataType: 'json',
    })
    .done(function(res){
      console.log(res);
      that.setState({data: res});
      // console.log(this.state);
    })
  },
  render: function() {
    var length = this.state.data.length;
    var listItems = this.state.data.map(function(data, index){
      return ListItem({key: index, title: data.Title, content: data.Content, date: data.OnCreate})  
    });
    return React.DOM.div(null, listItems)
  }
})

var ListItem = React.createClass({displayName: 'ListItem',
  render: function() {
    return (
      React.DOM.div({className: "listItem"}, 
        React.DOM.h1(null, this.props.title), 
        React.DOM.div(null, this.props.content), 
        React.DOM.span(null, "日期: ", this.props.date)
      )
    );
  } 
})

React.renderComponent(
  ArticleList(null),
  document.getElementById('articleList')
);
}()