import React, { useEffect, useState } from "react";
import CardList from "../components/CardList";
import axios from "axios";

const Posts = () => {
  const [card, setCard] = useState([]);
  const [page, setPage] = useState(1);

  const token = localStorage.getItem("token");

  const fetchPosts = async () => {
    const res = await axios.get(
      `http://localhost:8080/api/users/postlist?filter=${page}`,
      {
        headers: {
          authorization: token,
        },
      }
    );

    const data = res.data.data;
    setCard((prev) => [...prev, ...data]);
    console.log("res data data : ", res.data.data);
  };

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const handleInfiniteScroll = async () => {
    // console.log('scrollHeight', document.documentElement.scrollHeight);
    // console.log('innerHeight', window.innerHeight);
    // console.log('scrollTop' , document.documentElement.scrollTop);
    // if scrollHeight === innerHeight + scrollTop , then load more data
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 10 >=
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  return (
    <>
      <CardList CardsInfo={card} />
    </>
  );
};

export default Posts;
