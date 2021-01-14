import React, { Component } from 'react'
import './SearchBar.css'
class SearchBar extends Component {
    render() {
        return (
            <div className="dFlex">
                <p className="blanc">Search: </p>
                <input type="text"/>
                <button className="riche">Go</button>
                    
                
            </div>
        )
    }
}

export default SearchBar
