import React, { Component } from 'react'
import './Article.css'

class Article extends Component {
    render() {

        return (
            <div className="diFlex">
                <div id="flex">
                    <img src={this.props.img} alt=""/>
                </div>
                <div id="cFlec">
                    <h1>{this.props.titre}</h1>
                    <p>{this.props.texte}</p>
                </div>


            </div>
        )
    }
}

export default Article
