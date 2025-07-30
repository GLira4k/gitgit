import React from 'react';
import {Container, Sidebar, Main} from './styles';
import Filter from './Filter/Filter';
import Profile from './Profile/ProfileIndex';

function ReposPage() {
    return(
        <Container>
            <Sidebar>
                <Profile />
                <Filter />
            </Sidebar>
            <Main>
                <h1>Main</h1>
            </Main>
        </Container>
    )
}

export default ReposPage;