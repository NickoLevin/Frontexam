import React from 'react';
import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
} from '@mui/material';

const ApartmentsCard = ({ data }) => {
    console.log(data);
    return (
        <Card sx={{ maxWidth: 345, minHeight: 410 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="150"
                    image="https://demo-api.vsdev.space/storage/brom/home_img.jpg"
                    alt="apartments"
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        style={{ minHeight: '95px', maxHeight: '95px' }}
                    >
                        Квартира - {data.city}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {data.city}, {data.address}
                        <br />
                        Кол-во комнат: {data.rooms}
                        <br />
                        Общая площадь: {data.square}
                        <br />
                        Номер телефона: {data.phone}
                        <br />
                        Цена:{data.price}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default ApartmentsCard;