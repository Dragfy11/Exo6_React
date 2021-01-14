import React, { Component } from 'react'
import './Navigation.css'


class Navigation extends Component {
    
    logger = (log) => {
            console.log(log)
        }
    render() {
        
        return (
            <div>
                
                <button className onClick={() =>this.logger("Accueil")}>Link 1</button>
                <button onMouseOver={()=> this.logger("Galerie")}>Like 2</button>
                <button onDoubleClick={()=> this.logger("Contact")}>Link 3</button>
                
                
            </div>
        )
    }
}

export default Navigation
