/**
 * @jsx React.DOM
 */

var datas = [
  {title: 'title1', date: 'aaa', content: 'content1'},
  {title: 'title2', date: 'bbb', content: 'content2'},
  {title: 'title3', date: 'ccc', content: 'content3'}
]

var ArticleList = React.createClass({
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
      return <ListItem key={index} title={data.Title} content={data.Content} date={data.OnCreate} />  
    });
    return <div>{listItems}</div>
  }
})

var ListItem = React.createClass({
  render: function() {
    return (
      <div className='listItem'>
        <h1>{this.props.title}</h1>
        <div>{this.props.content}</div>
        <span>日期: {this.props.date}</span>
      </div>
    );
  } 
})

React.renderComponent(
  <ArticleList />,
  document.getElementById('articleList')
);
