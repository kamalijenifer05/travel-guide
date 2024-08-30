import React from 'react';
import styled from "styled-components";

function Header() {
    return (
        <HeaderContainer>
                <Logo src={require("../../../assets/images/logo.svg").default} />

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
const LeftBox = styled.div``;
const LogoImage = styled.img``;
const RightBox = styled.div``;
const Button = styled.button``;

export default Header;
