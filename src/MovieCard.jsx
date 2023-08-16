import React from "react";

function MovieCard({ sampleMov }) {
  return (
    <div className="movie">
      <div>
        <p>{sampleMov.Year}</p>
      </div>
      <div>
        <img
          src={
            sampleMov.Poster !== "N/A"
              ? sampleMov.Poster
              : "https://thumbs.dreamstime.com/b/error-page-not-found-page-not-found-text-oops-looks-like-something-went-wrong-d-web-vector-illustrations-error-page-not-found-page-244614784.jpg"
            // "https://via.placeholder.com/400"
          }
          alt=""
        />
      </div>
      <div>
        <span className="type">{sampleMov.Type}</span>
        <h3 className="">{sampleMov.Title}</h3>
      </div>
      <span class="top"></span>
      <span class="right"></span>
      <span class="bottom"></span>
      <span class="left"></span>
    </div>
  );
}

export default MovieCard;
