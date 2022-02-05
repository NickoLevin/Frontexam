import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import Loader from '../components/Loader';
import instance from '../API';
import MainLayout from '../components/MainLayout';
import CarouselMy from '../components/CarouselMy';

function index() {
  const [text, setText] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    instance.get('/api/brom/home_page').then((res) => {
        if (res.status === 200) {
            setText(res.data);
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
   <Typography
                component="div"
                variant="h6"
                dangerouslySetInnerHTML={{ __html: text.text }}
            />
            <br/>
        <CarouselMy/>
       
        </div>
  </MainLayout>
  );
}

export default index;
