import React from 'react'
import styled from 'styled-components';
import { MainLayoutProps } from '../../types'

const Container = styled.div`
    display: flex;
    flex: 1;
    color: white;

    min-height: 100vh;
    justify-content: center;
    align-items: center;
`;

function MainLayout({ children } : MainLayoutProps) {
    return (
        <Container>
            { children }
        </Container>
    )
}

export default MainLayout
