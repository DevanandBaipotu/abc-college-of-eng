import React, { FunctionComponent, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import openSocket from "socket.io-client";
import { getBuyer, getIncome, getHighlight, getCountry } from "../store/actions/actions";
import { Navigation, Container } from '../components';
import { WelcomePageBlocks } from '../Types';
import { domain } from '../domain/domain';

export const Welcome: FunctionComponent = () => {
    const state = useSelector((state: WelcomePageBlocks | any) => state);
    const dispatch = useDispatch();
    useLayoutEffect(() => {
        getAllApiData()
        const socket = openSocket(`${domain.domainURL}/`, { transports: ['websocket'] });
        socket.on("REFRESH_DATA", data => {
            switch (data.FLAG) {
                case 'INCOME':
                    dispatch(getIncome());
                    break;
                case 'BUYERS':
                    dispatch(getBuyer());
                    break;
                case 'HIGHLIGHTS':
                    dispatch(getHighlight());
                    break
                case 'COUNTRIES':
                    dispatch(getCountry());
                    break;
                case 'ALL':
                    getAllApiData();

            }
        });
        socket.on('connect_error', function() {
            socket.disconnect();
            alert("check your internet connection")
         })
        // eslint-disable-next-line
    },[]);
    const getAllApiData = () => {
        dispatch(getBuyer());
        dispatch(getIncome());
        dispatch(getCountry());
        dispatch(getHighlight());
    }
    return (
        <div>
            <Navigation></Navigation>
            <div>
            {
                    (Object.keys(state).length || "") && Object.keys(state).map((data) => {
                        return (
                            <Container {...state[data]} key={state[data].time} name={data}></Container>
                        )
                    })
                }
            </div>
        </div>
    )
}