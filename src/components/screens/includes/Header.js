import React from 'react';
import styled from "styled-components";

function Header() {
    return (
        <HeaderContainer>
            <Logo src=""  alt="logo" />

            <RightBox>
                <Button>Login</Button>
            </RightBox>

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
    width: 150px;
    display:block;
`;
const RightBox = styled.div`
    display:flex;
    align-items:center;
`;
const Button = styled.button`
    background-color:#046bf7;
    border-radius:4px;
    padding: 13px 45px;
    border:none;
    color:white;
    font-size: 18px;
    font-weight: bold;
`;

export default Header;
