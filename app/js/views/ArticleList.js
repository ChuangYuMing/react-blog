/**
 * @jsx React.DOM
 */

var datas = [
  {date: 'aaa', content: 'content1'},
  {date: 'bbb', content: 'content2'},
  {date: 'ccc', content: 'content3'}
]

var ArticleList = React.createClass({
  getInitialstate: function() {
    
  },
  handleContentSubmit: function(content) {    
    console.log(content); 

  },
  render: function() {
    return (
      <ArtivleForm onContentSubmit={this.handleContentSubmit} />
    );
  }
})
