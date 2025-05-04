import React from 'react'
import {socialImgs} from './constants.js'
const Footer = () => {
  return (
    <footer className = "footer">
        <div className ="footer-container">
            <div className = "socials flex flex-row justify-center items-center">
                {socialImgs.map((img) =>(
                    <a className = "icon target= _blank" href = {img.url} key = {img.url}>
                        <img src={img.imgPath} alt="" />
                    </a>
                ))}
            </div>
            <div className = "flex flex-col justify-center">
                <p className = "text-center md:text-end">
                ©{new Date().getFullYear()} Shubham Negi
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer