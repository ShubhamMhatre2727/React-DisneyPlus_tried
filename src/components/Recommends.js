import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const Recommends = () => {
    return (
        <Container>
            <h2>Recomended</h2>
            <Conent>
                <Wrap>
                    <Link to='/'>
                        <img src='/images/slider-badging.jpg' alt=''/>
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to='/'>
                        <img src='/images/slider-scale.jpg' alt=''/>
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to='/'>
                        <img src='/images/slider-scales.jpg' alt=''/>
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to='/'>
                        <img src='/images/slider-badag.jpg' alt=''/>
                    </Link>
                </Wrap>
            </Conent>
        </Container>
    )
}

const Container = styled.div`

`

const Conent = styled.div`
    padding: 0 0 26px;
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`
const Wrap = styled.div`
    padding-top: 56.25%;
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 25ms cubic-cubic-cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border: 3px solid rgb(249, 249, 249, 0.1);

    img {
        inset: 0px;
        display: block;
        height: 100%;
        object-fit: cover;
        opacity: 1;
        position: absolute;
        transition: opacity 500ms ease-in-out 0s;
        width: 100%;
        z-index: 1;
        top: 0;
    }

    &:hover {
        transform: scale(1.05);
        border-color: rgb(249, 249, 249, 0.8);
    }
`

export default Recommends