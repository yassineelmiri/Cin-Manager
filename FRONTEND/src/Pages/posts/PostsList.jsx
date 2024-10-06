import React from "react";
import img1 from '../../assets/img/card/1.png';
import img2 from '../../assets/img/card/2.png';
import img3 from '../../assets/img/card/3.png';
import PostItem from './PostItem';  // Import du composant PostItem

const PostsList = () => {
  const cards = [
    {
      id: 1,
      imgSrc: img1,
      rating: 8.3,
      title: "The Good Lord Bird",
      list: ["Free", "Action", "2019"],
    },
    {
      id: 2,
      imgSrc: img2,
      rating: 8.1,
      title: "The Dictator",
      list: ["Free", "Comedy", "2012"],
    },
    {
      id: 3,
      imgSrc: img3,
      rating: 7.9,
      title: "Another Movie",
      list: ["Free", "Drama", "2021"],
    },
    {
        id: 2,
        imgSrc: img2,
        rating: 8.1,
        title: "The Dictator",
        list: ["Free", "Comedy", "2012"],
      },
      {
        id: 3,
        imgSrc: img3,
        rating: 7.9,
        title: "Another Movie",
        list: ["Free", "Drama", "2021"],
      },{
        id: 2,
        imgSrc: img2,
        rating: 8.1,
        title: "The Dictator",
        list: ["Free", "Comedy", "2012"],
      },
      {
        id: 3,
        imgSrc: img3,
        rating: 7.9,
        title: "Another Movie",
        list: ["Free", "Drama", "2021"],
      },{
        id: 2,
        imgSrc: img2,
        rating: 8.1,
        title: "The Dictator",
        list: ["Free", "Comedy", "2012"],
      },
      {
        id: 3,
        imgSrc: img3,
        rating: 7.9,
        title: "Another Movie",
        list: ["Free", "Drama", "2021"],
      },{
        id: 2,
        imgSrc: img2,
        rating: 8.1,
        title: "The Dictator",
        list: ["Free", "Comedy", "2012"],
      },
      {
        id: 3,
        imgSrc: img3,
        rating: 7.9,
        title: "Another Movie",
        list: ["Free", "Drama", "2021"],
      },
  ];

  return (
    <div className="row row--grid">
      {cards.map((card) => (
        <div key={card.id} className="col-6 col-sm-4 col-lg-3 col-xl-2">
          <PostItem
            imgSrc={card.imgSrc}
            rating={card.rating}
            title={card.title}
            list={card.list}
            id={card.id}
          />
        </div>
      ))}
    </div>
  );
};

export default PostsList;
