/**
 * @jsx React.DOM
 */

var datas = [
  {title: 'title1', date: 'aaa', content: 'content1'},
  {title: 'title2', date: 'bbb', content: 'content2'},
  {title: 'title3', date: 'ccc', content: 'content3'}
]

var ArticleList = React.createClass({
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
      return <ListItem key={index} title={data.title} content={data.content} date={data.date} />  
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
