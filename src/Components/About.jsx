/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/background.jpg";

const imageAltText = "White abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm an AI student studying at Sindh Madressatul Islam University. I love solving problems in creative ways, it makes me test my thinking paradigms. I have expertise in...";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Data Science",
  "Machine Learning",
  "Deep Learning",
  "Big Data Analytics",
  "NLP (Natural Language Processing)",
  "Computer Vision",
  "SQL Databases",
  "Statistical Modelling",
  "Python Programming",
  "Communication",
  "Leadership",
  "Critical Thinking",
  "Problem Solving",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  'My life Philosophy: "The Greatest lesson I have learned in life is that I still have a lot to learn."';

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "light-gray",
          width: "50%",
          padding: "8.5rem",
          margin: "4.5rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
