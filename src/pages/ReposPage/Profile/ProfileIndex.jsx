import React from 'react';
import { TeamOutlined, GlobalOutlined, HomeOutlined, LinkOutlined } from '@ant-design/icons';
import userImg from '../../../assets/imgs/user-img.jpg';
import { Container, Header, Avatar, Login, Name, Inner, Data, Anchor} from './styles';

function Profile() {
    return (
        <Container>
                <Header>
                <Avatar src={userImg}/>
                <Login>Login</Login>
                <Name>Name</Name>
            </Header>
            <Inner>
                <Data>
                    <TeamOutlined />
                    30 Seguidores - 10 Seguindo
                </Data>
                <Data>
                    <GlobalOutlined />
                    Empresa LTDA.
                </Data>
                <Data>
                    <HomeOutlined />
                    Ipatinga - MG 
                </Data>
                <Data>
                    <LinkOutlined />
                    <Anchor href='https://github.com/GLira4k'>
                        github.com./GLira4k
                    </Anchor>
                </Data>
            </Inner>
        </Container>
    );
}

export default Profile;  