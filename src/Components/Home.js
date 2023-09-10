import React from "react";
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  return (
    <div>
      <Card />
      {/* <Footer /> */}
    </div>
  );
}
