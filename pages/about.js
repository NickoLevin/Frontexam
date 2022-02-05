import React from "react";
import MainLayout from "../components/MainLayout";
import { Typography } from "@mui/material";
import Loader from '../components/Loader'
import { Container } from "@mui/material";

function about() {
  return (
    <MainLayout>
      <div style={{ marginTop: "100px" }}>
        <Typography variant="h2" align="center" gutterBottom>
          About us!
        </Typography>
          <Container maxWidth="sm" style={{ marginTop: "50px", backgroundImage: './home_page_img.jpg'}} >
            <Typography variant="h6" align="center" gutterBottom>
            Таким образом реализация намеченных плановых заданий позволяет оценить значение новых предложений.
             Таким образом новая модель организационной деятельности способствует подготовки и реализации систем массового участия. 
             С другой стороны укрепление и развитие структуры обеспечивает участие в формировании систем массового участия.
            </Typography>
            <Typography variant="h6" align="center" gutterBottom>
            Равным образом постоянный количественный рост и сфера нашей активности играет важную роль в формировании системы обучения кадров,
             соответствует насущным потребностям. Повседневная практика показывает, 
             что реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития.
            </Typography>
            <Typography variant="h6" align="center" gutterBottom>
            Товарищи! сложившаяся структура организации представляет собой интересный эксперимент проверки направлений прогрессивного развития.
             Разнообразный и богатый опыт консультация с широким активом обеспечивает широкому кругу. 
             Таким образом новая модель организационной деятельности способствует подготовки и реализации систем массового участия.
            </Typography>


          </Container>
  
      </div>
    </MainLayout>
  );
}

export default about;
