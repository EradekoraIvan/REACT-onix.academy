import React from "react";
import NewsView from "./NewsView";



class News extends React.Component {

    state = {
        array: [],
    }

    componentDidMount() {
        fetch(' https://api.thenewsapi.com/v1/news/top?api_token=8HM974pyYtJ5JfOIpxnaXJCShh2D2zlO98m4zATL')
            .then((response) => {
                return response.json();
            })
            .then((data) => {

                this.setState({
                    array: data.data
                })
            });
    }

    formatDate = () => {
        const formatDate = [...this.state.array];

        for (let i = 0; i < formatDate.length; i++) {
            const temp = new Date(formatDate[i].published_at);
            let year = temp.getFullYear()
            let month = temp.getMonth()
            if (month < 10) month = '0' + month
            let date = temp.getDate()
            if (date < 10) date = '0' + date
            let result = date + '.' + month + '.' + year;
            formatDate[i].published_at = result;
            console.log(formatDate)
        }

        /*this.setState({
            array: formatDate
        })*/
    }
    render() {

        const newsarray = this.state.array.map((item, pos) => {

            return (

                <NewsView
                    formatDate={this.formatDate()}
                    key={item.uuid}
                    image={item.image_url}
                    published_at={item.published_at}
                    h4={item.title}
                    newsText={item.snippet}
                />
            )
        })

        return (
            <>
                {newsarray}
            </>
        )
    }
}



export default News;