import React from "react";
import MainLayout from "../components/MainLayout";
import { Typography } from "@mui/material";
import Loader from '../components/Loader'
import instance from '../API';
import { useState, useEffect } from "react";
import CarouselMy from "../components/CarouselMy";



function about() {

  const [about, setAbout] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
      instance.get('/api/brom/about_page').then((res) => {
          if (res.status === 200) {
              setAbout(res.data);
              setLoading(false);
          }
      });
  }, []);

  if (loading) {
    return <Loader />;
}


  return (
    <MainLayout>
      <div style={{ marginTop: "100px" }}>
        <Typography variant="h2" align="center" gutterBottom>
          About us!
        </Typography>
        <Typography
            component="div"
            variant="h6"
            dangerouslySetInnerHTML={{ __html: about.text }}
        />
      <br/>
   <CarouselMy/>
      </div>
    </MainLayout>
  );
}

export default about;
