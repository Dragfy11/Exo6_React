import React, { Component } from 'react'
import Navigation from './Navigation'
import SearchBar from './SearchBar'
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <Navigation/>
                    <SearchBar/>
                </header>
            </div>
        )
    }
}

export default Header
