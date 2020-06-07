import React from "react";
import "../App.scss";
import Hero from "../components/Hero/Hero";
import Banner from "../components/Banner/Banner";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <Hero hero="aboutHero">
      <Banner
        title="About this application:"
        subtitle="This is a website which contains data on various species of animals. Also this is a PWR project"
      >
        <Link to="/register" className="btn-primary">
          Register now
        </Link>
      </Banner>
    </Hero>
  );
}
