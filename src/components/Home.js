import React from 'react'
import styled from 'styled-components'
import ImageSlider from './ImageSlider'
import Recommends from './Recommends'
import Viewers from './Viewers'

const Home = () => {
    return (
        <Container>
            <ImageSlider/>
            <Viewers/>
            <Recommends/>
        </Container>
    )
}

const Container = styled.main`
    position: relative;
    /* background-image: url('/images/home-background.png'); */
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vh + 5px);

    &::before{
        /* background: url('/images/home-background.png') center no-repeat fixed; */
        content: '';
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }
`

export default Home
