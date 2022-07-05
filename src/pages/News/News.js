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

  render() {
    const { array } = this.state;
    const newsarray = array.map((item) => {
      return (

        <NewsView
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
