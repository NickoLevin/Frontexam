import React, { useEffect, useState } from 'react';
import Loader from '../../components/Loader';
import instance from '../../API';
import CarsCard from '../../components/CarsCard';
import ApartCard from '../../components/ApartmentsCard'
import MainLayout from '../../components/MainLayout';
import {Grid} from '@mui/material'

const Dealer = () => {
    const [dealers, setDealers] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        instance.get('/api/brom/sales').then((res) => {
            setDealers(res.data);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <MainLayout>
            <Grid container spacing={2}>
                {dealers.map((dealer) => {
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
        </MainLayout>
    );
};

export default Dealer;