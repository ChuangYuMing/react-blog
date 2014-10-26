/**
 * @jsx React.DOM
 */

var datas = [
  {title: 'title1', date: 'aaa', content: 'content1'},
  {title: 'title2', date: 'bbb', content: 'content2'},
  {title: 'title3', date: 'ccc', content: 'content3'}
]

var ArticleList = React.createClass({displayName: 'ArticleList',
  getInitialstate: function() {
    return {data: []};
  },
  componentWillMount: function() {
    var that = this;
    this.setState({data: datas});
    // $.ajax({
    //   url: this.props.url,
    //   dataType: 'json',
    // })
    // .done(function(res){
    //   console.log(res);
    //   that.setState({data: res});
    // })
  },
  render: function() {
    var length = this.state.data.length;
    var listItems = this.state.data.map(function(data, index){
      return ListItem({key: index, title: data.title, content: data.content, date: data.date})  
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
