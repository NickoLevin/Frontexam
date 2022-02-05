import React from 'react';
import { Typography } from '@mui/material';
import MainLayout from '../components/MainLayout';
import CarouselMy from '../components/CarouselMy';
import Loader from '../components/Loader';
import Widget from '../components/Widget';


function index() {

  return (
  <MainLayout>
   <div style={{ marginTop: "100px" }}>
        <Typography variant="h2" align="center" gutterBottom>
          Welcome to brom.ru
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
        Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности
         обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. 
         Повседневная практика показывает, что реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития.
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
        Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности обеспечивает широкому кругу 
        (специалистов) участие в формировании новых предложений. Идейные соображения высшего порядка, а также дальнейшее развитие различных форм 
        деятельности позволяет оценить значение новых предложений.
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
        С другой стороны постоянное информационно-пропагандистское обеспечение нашей 
        деятельности обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач. 
        С другой стороны рамки и место обучения кадров способствует подготовки и реализации модели развития.

        </Typography>
        <CarouselMy/>
       
        </div>
  </MainLayout>
  );
}

export default index;
