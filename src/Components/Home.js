import React from "react";
import Header from "./Header";
import Card from "./Card";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  return (
    <div className="py-5">
      <Card />
    </div>
  );
}
