import * as React from "react"
import "./About.css"
import {Sidebar} from "../Sidebar/Sidebar"
import {Navbar} from "../Navbar/Navbar"
import { Link } from "react-router-dom"
import Home from "../Home/Home"

export function About() {
    return (
        <div className="about">
            <Navbar />
            <Link to="/about" />
            <div className="about-card">
                <h1 className="about-header">About</h1>
                <p className="about-info">The codepath student store offers great products at great prices from a great team and for a great cause.</p>
                <p className="about-info"> We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.</p>
                <p className="about-info"> All proceeds go towards bringing high quality CS education to college students around the country.</p>
            </div>
        </div>
    )
}

export default About