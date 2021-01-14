import React, { Component } from 'react'
import Article from './Article'
import Footer from './Footer'
import Hearder from './Header'
import './Body.css'

class Body extends Component {
    render() {
        return (
            
            <div>
                <body>
                    <Hearder/>
                    <Article img="./img/tartine.png" titre ="Mon premier Article" texte="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe commodi repudiandae nostrum, distinctio nisi dolor totam iste fugit delectus quos aperiam, corrupti sed rerum labore illo blanditiis sit obcaecati consequuntur?"/>
                    <Article img="./img/tartine.png" titre ="Mon premier Article" texte="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe commodi repudiandae nostrum, distinctio nisi dolor totam iste fugit delectus quos aperiam, corrupti sed rerum labore illo blanditiis sit obcaecati consequuntur?"/>
                    <Footer/>
                </body>
            </div>
        )
    }
}

export default Body
