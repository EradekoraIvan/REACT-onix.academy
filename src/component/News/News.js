import React from 'react';
import NewsView from './NewsView';
import style from './News.module.css';

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    fetch(' https://api.thenewsapi.com/v1/news/top?api_token=8HM974pyYtJ5JfOIpxnaXJCShh2D2zlO98m4zATL')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          array: data.data
        });
      });
  }

  /* formatDate = () => {
    const { array } = this.state;
    const formatDate = [...array];

    for (let i = 0; i < formatDate.length; i + 1) {
      const temp = new Date(formatDate[i].published_at);
      const year = temp.getFullYear();
      let month = temp.getMonth();
      if (month < 10) month = `0${month}`;
      let date = temp.getDate();
      if (date < 10) date = `0${date}`;
      const result = `${date}.${month}.${year}`;
      formatDate[i].published_at = result;
    }

     this.setState({
            array: formatDate
        }) 
  };  */

  render() {
    const { array } = this.state;
    const newsarray = array.map((item) => {
      return (

        <NewsView
          /*  formatDate={this.formatDate()}  */
          key={item.uuid}
          image={item.image_url}
          publishedAt={item.published_at}
          h4={item.title}
          newsText={item.snippet}
        />
      );
    });

    return (
      <div className={style.wrapper}>
        {newsarray}
      </div>
    );
  }
}

export default News;
