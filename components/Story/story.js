import React from "react";
import story from "../../productsData/Stories";
import "./story.css";
import { v4 as uuidv4 } from "uuid";

function Story() {
  return (
    <>
      <p className="mid-heading-story" id="featured-part">
        Styles in storyline !
      </p>
      <div className="story-grid">
        {story.news.map((story) => (
          <div className="card-story" key={uuidv4()}>
            <img src={story.img} alt="" className="story-card-image" />
            <div className="flex-like">
              <p>&#10084; {story.like}</p>
              <p>{story.time} ago</p>
              <p className="author"># {story.by}</p>
            </div>

            <p className="details">{story.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Story;
