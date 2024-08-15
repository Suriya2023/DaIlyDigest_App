import React, { useEffect, useState } from 'react'
import NewsItem from './Newsitem'
import PropTypes from 'prop-types'

import InfiniteScroll from "react-infinite-scroll-component"
function News(props) {
    const [articles, setArticle] = useState([]);
    const [loding, setLoding] = useState(false);
    const [Page, setPage] = useState(1);
    const [totalResults, settotalResults] = useState(0);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const UpadateNews = async (page) => {
        props.setProgress(10);


        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props
            .apiKey}&category=${props.category}&pageSize=${props.pageSize}&page=${page}`;
        setLoding(true);

        props.setProgress(30);
        let data = await fetch(url);
        props.setProgress(70);

        let parsedData = await data.json();
        console.log(parsedData);
        setArticle(parsedData.articles);
        settotalResults(parsedData.totalResults);
        setLoding(false);
        props.setProgress(100);

    }
    useEffect(() => {
        UpadateNews();
        document.title = `${capitalizeFirstLetter(props.category)}  - Dark Spark`;

    }, [])


    const fetchMoreData = async (page) => {

        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=fbaff53357234b11a80f2f4d1ef4afe7&category=${props.category}&pageSize=${props.pageSize}&page=${page}`;
        setPage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        setLoding(false);
        setArticle(parsedData.articles.concat(articles))
        settotalResults(parsedData.totalResults)

       

    };

    return (
        <div>
            <div className={'container news-haldelin'}>
                <h1 className='text-center'>Today's top Headlines  About {capitalizeFirstLetter(props.category)}  </h1>
                {/* <Lodar /> */}
                {
                    // loading && <Lodar />

                }

                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length < totalResults}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                >

                    <div className="container">
                        <div className='row my-3'>

                            {articles.map(
                                (element) => {
                                    return <div className='col-md-4' key={element.url}>

                                        <NewsItem title={element.title ? element.title.slice(0, 55) : " "} description={element.description ? element.description.slice(0, 88) : " "} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />

                                    </div>
                                }
                            )}



                        </div>
                    </div>
                </InfiniteScroll>

            </div>
        </div>
    )

}


News.defaultProps = {
    pageSize: 6,
    country: "us",
    category: "science"
}
News.propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string

}

export default News
