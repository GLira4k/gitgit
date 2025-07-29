import React from 'react';
import {Container, Sidebar, Main} from './styles';

function ReposPage() {
    return(
        <Container>
            <Sidebar>
                <h1>Sidebar</h1>
            </Sidebar>
            <Main>
                <h1>Main</h1>
            </Main>
        </Container>
    )
}

export default ReposPage;