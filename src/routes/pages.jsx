import React from "react";
import {MainMenu, AboutMenu} from "./main-menu";
import {Route} from "react-router-dom";
import PropTypes from "prop-types";

export const PageTemplate = ({children}) => {
    return (
        <div className="page">
            <MainMenu/>
            {children}
        </div>
    );
};

PageTemplate.propTypes = {
    children: PropTypes.func
};

export const Home = () => 
    <PageTemplate>
        <section className="home">
        </section>
    </PageTemplate>;

export const About = ({match}) => 
    <PageTemplate>
        <section className = "about">
            <Route component={AboutMenu}/>
            <Route exact path="/about" component={Company}/>
            <Route path="/about/team" component={Team}/>
            <Route path="/about/location" component={Location}/>
        </section>
    </PageTemplate>;

About.propTypes = {
    match: PropTypes.object
};

export const Events = () =>
    <PageTemplate>
        <section className = "events">
            <h1>[Events Calender]</h1>
        </section>
    </PageTemplate>;

export const Contact = () =>
    <PageTemplate>
        <section className="contact">
            <h1>[Contact Us]</h1>
        </section>
    </PageTemplate>;

export const Team = () =>
    <section className="teams">
        <h2>Our Team</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
            Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
            Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
            sodales ligula in libero.
        </p>
    </section>;

export const Location = () =>
    <section className="location">
        <h2>Location</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
            Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
            Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
            sodales ligula in libero. 
        </p>
    </section>;

export const Company = () => 
    <section className="company">
        <h2>About the Company</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
            Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
            Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
            sodales ligula in libero. 
        </p>
    </section>;

export const Whoops404 = ({location}) =>
    <div className="whoops-404">
        <h1>Resource not found at "{location.pathname}"</h1>
    </div>;

Whoops404.propTypes = {
    location: PropTypes.object
};