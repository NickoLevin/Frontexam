import React, { useEffect, useState } from 'react';
import Loader from '../../components/Loader';
import instance from '../../API';
import CarsCard from '../../components/CarsCard';
import ApartCard from '../../components/ApartmentsCard'
import MainLayout from '../../components/MainLayout';
import {Grid} from '@mui/material'
import { Form } from '../../components/Form';
import axios from 'axios';
import Footer from "../../components/Footer";
import  Navbar  from "../../components/Navbar";
import { Container } from '@mui/material';

const Dealer = () => {
    const [adverts, setAdverts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get('https://demo-api.vsdev.space/api/brom/sales').then((res) => {
            setAdverts(res.data);
            setLoading(false);
            console.log(res.data);
        });
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <React.Fragment>
        <Navbar />
        <Container fixed style={{ paddingBottom: "64px" }}>
        
     
            <Grid container spacing={2}>
                {adverts.map((dealer) => {
                    return dealer.type === 'car' ? (
                        <Grid item xs={4} key={dealer.id}>
                            <CarsCard key={dealer.id} data={dealer} />
                        </Grid>
                    ) : dealer.type === 'apartment' ? (
                        <Grid item xs={4} key={dealer.id}>
                            <ApartCard key={dealer.id} data={dealer} />
                        </Grid>
                    ) : (
                        <div key={dealer.id}>asdasd</div>
                    );
                })}
            </Grid>
            <Form
            /></Container>

       <Footer />
    </React.Fragment>
    );
};

export default Dealer;