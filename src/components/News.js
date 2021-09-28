import React, { Component } from 'react';
import NewsItem from './NewsItem';
import dl from './dulieu.json';



class News extends Component {


    render() {
        return (
            <div>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            dl.map((value, key) => {
                                return (
                                    <NewsItem key={key}
                                        tinId={value.id}
                                        anh={value.anh}
                                        tieuDe={value.tieuDe}
                                        tricdan={value.trichDan}>
                                    </NewsItem>
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        );
    }
}

export default News;