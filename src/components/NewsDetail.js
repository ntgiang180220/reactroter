import React, { Component } from 'react';
import dl from './dulieu.json';
import NewsItem from './NewsItem';
import NewsRelated from './NewsRelated';


class NewsDetail extends Component {
    render() {

        console.log(this.props.match.params.id);
        console.log(typeof (this.props.match.params.id));

        // console.log(this.props);
        var dem = 0;
        return (

            <div>


                {
                    dl.map((value, key) => {
                        if (value.id == this.props.match.params.id) {
                            return (
                                <div className="container" key={key}>
                                    <h1>Trang chi tiết</h1>
                                    <div className="card">
                                        <div className="card-body">
                                            <img src={value.anh} className="card-img-top" />
                                            <div className="card-body">
                                                <p className="card-text">{value.tieuDe}</p>
                                                {
                                                    value.noiDung
                                                }

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })
                }

                <div className="text-center">
                    <h3>Tin tức liên quang </h3>
                </div>
                <div className="container">
                    <div className="row">
                        {

                            dl.map((value, key) => {
                                if (value.id != this.props.match.params.id) {
                                    if (dem <= 3) {
                                        dem++;
                                        return (
                                            <NewsRelated key={key}
                                                tinId={value.id}
                                                anh={value.anh}
                                                tieuDe={value.tieuDe}
                                                tricdan={value.trichDan} >
                                            </NewsRelated>
                                        )
                                    }
                                }

                            })
                        }

                    </div>





                </div>
            </div>

        );
    }
}

export default NewsDetail;