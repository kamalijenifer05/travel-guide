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
                <PlaceCardlink>
                    <PlaceImage src={place.image} alt={place.image} />
                    <PlaceBottomContainer>
                        <PlaceTitle>{place.name}</PlaceTitle>
                        <Location>
                            <LocationIcon
                                src='' alt='image'
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

const TopContainer = styled.div``;

const Heading = styled.h1``;
const Paragraph = styled.p``;
const PlacesContainer = styled.ul``;
const PlaceCard = styled.li``;
const PlaceCardlink = styled(Link)``;
const PlaceImage = styled.img``;
const PlaceBottomContainer = styled.div``;
const PlaceTitle = styled.h3``;
const Location = styled.div``;
const LocationIcon = styled.img``;
const LocationName = styled.span``;

export default Places;
