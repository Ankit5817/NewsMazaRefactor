import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { listNews } from "../Redux/reducer";

export default function Card() {
  const dispatch = useDispatch();
  const [loading, setloading] = useState(true);
  const news = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(listNews());
  }, []);

  useEffect(() => {
    console.log(news);
  }, [news]);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {news.isLoading ? (
        <div className='d-flex align-items-center' style={{height: '80vh'}}>
          <div
            class="spinner-border text-primary"
            role="status"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        news?.data?.articles?.map((itm) => (
          <div
            key={itm.url}
            className="card my-5 mx-5 p-1"
            style={{
              width: "18rem",
              boxShadow: "0px 0px 15px #dbe0fd",
              border: "3px solid black",
            }}
          >
            <img
              src={
                itm.urlToImage
                  ? itm.urlToImage
                  : "https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"
              }
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{itm.title}</h5>
              <p className="card-text">{itm.description}</p>
              <a href={itm.url} className="btn btn-primary">
                Read more
              </a>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
