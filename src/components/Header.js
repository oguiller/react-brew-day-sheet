import React from 'react'


const Header = (props) => {
    return ( 
    	<header className= "top" >
        <h1>
        	Dutch <span className="ofThe" >
        	<span className="of"> loving </span> 
        	<span className="the"> beer </span> 
        	</span>
        		Pain 
        </h1>
        <h3 className="tagline"> { props.tagline } 
        </h3> 
        </header>
    )
}

Header.propTypes = {
    tagline: React.PropTypes.string.isRequired
}

export default Header
