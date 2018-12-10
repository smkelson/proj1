import React, { Component } from 'react';
import './footer.css'
import image from './baking pic.jpg'

function Footer() {
    
        return(
            <div className='footer'>
                <h4>Created by Sarah Kelson</h4>
                <img className='pic' src={image} alt=""/>
             </div>
        )
    
}
export default Footer;