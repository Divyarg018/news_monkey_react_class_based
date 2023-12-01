import React, { Component } from 'react'
import NewsItem from './NewsItem';

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: []
        }
    }

    componentDidMount() {
        fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=49a8ae182ee34c94a28ba734ad5c6a7b").then(res => res.json()).then(data => {
            this.setState({ articles: data.articles });
        })
    }
    render() {
        console.log(this.state.articles);
        return (
            <div className='container my-3'>
                <h2>NewsMonkey - Top Headlines</h2>
                <div className='row'>
                    <div className='col-md-4'>
                        <NewsItem title="myTitle" description="mydesc" />
                    </div>
                    <div className='col-md-4'>
                        <NewsItem title="myTitle" description="mydesc" />
                    </div>
                    <div className='col-md-4'>
                        <NewsItem title="myTitle" description="mydesc" />
                    </div>
                </div>
            </div>
        )
    }
}

export default News;