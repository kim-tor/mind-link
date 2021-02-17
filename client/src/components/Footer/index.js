import React from "react";
import "./style.css";

function Footer() {
    return (
        <nav className="navbar fixed-bottom navbar-dark bg-dark">
            <h2>Helpful Resources</h2>
            <a className="navbar-brand" href="https://www.wannatalkaboutit.com/" target="_blank">
                wannatalkaboutit
            </a>
            <a className="navbar-brand" href="https://www.mentalhealth.gov/basics/what-is-mental-health" target="_blank">
                What is mental health?
            </a>
            <a className="navbar-brand" href="https://www.mentalhealth.gov/" target="_blank">
                MentalHealth.gov
            </a>
            <a className="navbar-brand" href="https://healthymindsphilly.org/" target="_blank">
                Healthy Minds Philly
            </a>
        </nav>
    );
}

export default Footer;
