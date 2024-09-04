import React, { useContext } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import { type } from '@testing-library/user-event/dist/type';

function Header() {
    const {userData, updateUserData} = useContext(UserContext);
    const handleLogout = () =>{
        updateUserData({type: "LOGOUT"});
    };
    return (
        <HeaderContainer>
            <Logo src={require("../../../../src/assets/images/suitcase2-fill.svg").default} alt="logo" />
            <RightContainer>
                {userData ? (
                    <LoginButton onClick={() => handleLogout()}>Logout</LoginButton>
                ) : (
                    <LoginButton to="/auth/login/">Login</LoginButton>
                )}
            </RightContainer>
        </HeaderContainer>
    );
}

const HeaderContainer = styled.div`
    display: flex;
    justify-content:space-between;
    padding: 30px 0;
    margin: 0 auto;
    width: 90%;
`;
const Logo = styled.img`
    width: 80px;
    display:block;
`;
const RightContainer = styled.div`
    display:flex;
    align-items:center;
`;

const SearchForm = styled.form`
    &::after{
        content: "";
        width: 16px;
        height: 16px;
        background: url(${require("../../../assets/images/search.svg").default});
        display: inline-block;
        position: absolute;
        left: 10px;
        top: 15px;
    }
    position: relative;
    margin-right: 20px;
`;

const SearchInput = styled.input`
    padding: 15px 35px;
    width: 250px;
    outline: none;
    border: none;
    appearance: none;
    background: #f5f5f5;
    border-radius: 4px;
    font-size: 16px;
`;

const LoginButton = styled(Link)`
    background-color:#046bf7;
    border-radius:4px;
    padding: 13px 45px;
    border:none;
    color:white;
    font-size: 18px;
    font-weight: bold;
    text-decoration: none;
`;

export default Header;
