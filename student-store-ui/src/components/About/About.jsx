import * as React from "react"
import "./About.css"
import {Sidebar} from "../Sidebar/Sidebar"
import {Navbar} from "../Navbar/Navbar"
import { Link } from "react-router-dom"
import Home from "../Home/Home"

export function About({}) {
    return (
        <div className="about">
            <h2 className="about-header">About</h2>
            <div className="about-card">
                <p className="about-info">The codepath student store offers great products at great prices from a great team and for a great cause.</p>
                <p className="about-info"> We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.</p>
                <p className="about-info"> All proceeds go towards bringing high quality CS education to college students around the country.</p>
            </div>
            <div className="contact">
                <h2 className="contact-header">Contact Us</h2>
                <div className="contact-card">
                    <p className="contact-info">
                        <span className="label">Email: </span>
                        <span>code@path.org</span>
                    </p>
                    <p className="contact-info">
                        <span className="label">Phone: </span>
                        <span>1-800-CODEPATH</span>
                    </p>
                    <p className="contact-info">
                        <span className="label">Address: </span>
                        <span>123 Fake Street, San Francisco, CA</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About