import React, { useState, useEffect } from 'react';
import Helmet from "react-helmet";
import Header from './includes/Header';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import axios from 'axios';
// import Place from './Place';
// import { render } from '@testing-library/react';

function Places() {

    const [places, setPlaces] = useState([]);
    useEffect(() => {
        axios
            .get("https://traveller.talrop.works/api/v1/places/")
            .then((response) => {
                setPlaces(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    const renderPlaces = () => {
        return places.map((place) => (
            <PlaceCard >
                <PlaceCardlink to={`/place/${place.id}`}>
                    <PlaceImage src={place.image} alt={place.image} />
                    <PlaceBottomContainer>
                        <PlaceTitle>{place.name}</PlaceTitle>
                        <Location>
                            <LocationIcon
                                src={require("../../assets/images/location.svg").default} alt='image'
                            />
                            <LocationName>{place.location}</LocationName>
                        </Location>
                    </PlaceBottomContainer>
                </PlaceCardlink>
            </PlaceCard>
        ));
    };


    return (
        <>
            <Helmet>
                <title>Places | Travel Guide</title>
            </Helmet>
            <Header />
            <TopContainer>
                <Heading>Welcome Kamali Jenifer</Heading>
                <Paragraph>Explore the world around you</Paragraph>
            </TopContainer>

            <PlacesContainer>{renderPlaces()}</PlacesContainer>
        </>
    );
}

const TopContainer = styled.div`
    width:90%;
    margin: 100px auto 0;
`;

const Heading = styled.h1`
    font-size: 36px;
    margin-bottom: 20px;
`;

const Paragraph = styled.p`
    font-size: 22px;
    color: #dfdfe2;
`;

const PlacesContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    margin: 50px auto 0;
    
`;

const PlaceCard = styled.li`
    list-style: none;;
    width: 23.5%;
    margin-right: 2%;
    margin-bottom: 25px;
    text-decoration: none;
    
    &:nth-child(4n){
        margin-right: 0;
    }
`;

const PlaceCardlink = styled(Link)`
    display: block;
    appearance: none;
    text-decoration: none;
    color: blue;
`;

const PlaceImage = styled.img`
    width: 100%;
    display: block;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
`;

const PlaceBottomContainer = styled.div`
    padding: 10px 15px;
`;

const PlaceTitle = styled.h3`
    margin-bottom: 10px;
    font-size: 20px;
`;

const Location = styled.div`
    display: flex;
`;
const LocationIcon = styled.img`
    margin-right: 10PX;
`;

const LocationName = styled.span`
    font-size: 18px;
`;

export default Places;
