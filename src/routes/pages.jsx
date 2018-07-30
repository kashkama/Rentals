import React from "react";
import {MainMenu, AboutMenu} from "./main-menu";
import {Link} from "react-router-dom";

const PageTemplate = ({children}) => {
    return (
        <div className="page">
            <MainMenu/>
            {children}
        </div>
    );
};

export const Home = () => 
    <section className="home">
        <h1>[Home Page]</h1>
        <nav>
            <Link to="about">[About]</Link>
            <Link to="events">[Events]</Link>
            <Link to="rentals">[Rentals]</Link>
            <Link to="contact">[Contact Us]</Link>
        </nav>
    </section>;

export const About = () => 
    <PageTemplate>
        <section className = "events">
            <h1>[About the company]</h1>
        </section>
    </PageTemplate>;

export const Events = () =>
    <PageTemplate>
        <section className = "events">
            <h1>[Events Calender]</h1>
        </section>
    </PageTemplate>;

export const Rentals = () =>
    <PageTemplate>
        <section className = "rentals">
            <h1>[Rentals Catalog]</h1>
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

export const Whoops404 = ({location}) =>
    <div className="whoops-404">
        <h1>Resource not found at "{location.pathname}"</h1>
    </div>;