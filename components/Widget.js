import Head from "next/head";
import React from "react";
import Router from "next/router";
import { Typography, Button } from "@mui/material";
import Image from "next/image";
import { observer } from "mobx-react-lite";
import Loader from "./Loader";
import { useState, useEffect } from "react";

const Widget = observer(() => {
  const [data, setData] = React.useState();
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    setLoading(true);
    fetch("https://demo-api.vsdev.space/api/brom/left_widget")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loader</div>;
  }
  return (
    <div>
      <div style={{ margin: "0 auto" }}>
        Машин: {data.cars}<br/>
        Квартир: {data.apartments}<br/>
      </div>
    </div>
  );
});

export default Widget;
