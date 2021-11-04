import React from 'react'
import { useHistory } from 'react-router';
import styled from 'styled-components'
const Login = () => {
    const history = useHistory()

    const Entrance = () =>{
        if (JSON.parse(localStorage.getItem("userInfo"))!==null){
            history.push("/home")
        }
    }

    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src='/images/cta-logo-one.svg' alt=''/>
                    <SignUp onClick={Entrance}>GET IT  ALL THERE</SignUp>
                    <Description>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut modi alias provident! Velit rem dicta laborum. Quibusdam ad quis enim ab? Aspernatur a ex quidem est nostrum veritatis laudantium omnis eaque</Description>
                    <CTALogoTwo src='/images/cta-logo-two.png' alt=''/>
                </CTA>
                <BgImage/>
            </Content>
        </Container>
    )
}

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`
const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`

const BgImage = styled.div`
    height: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/login-background.jpg");
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
`
const CTA = styled.div`
    max-width: 650px;
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
`

const CTALogoOne = styled.img`
    max-width: 600px;
    min-width: 1px;
    display: block;
    width: 100%;
    margin-bottom: 12px;
`

const SignUp = styled.a`
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063ef;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 16.5px 0;
    border: 1px solid transparent;
    border-radius: 4px;
    margin-bottom: 12px;

    &:hover{
        background-color: #0483ee;
    }
`
const Description = styled.p`
    color: hsla(0, 0%, 95.3%, 1);
    font-size: 11px;
    margin: 0 0 24px;
    line-height: 1.5;
    letter-spacing: 1.5px;
`
const CTALogoTwo = styled.img`
    max-width: 600px;
    min-width: 1px;
    display: block;
    width: 100%;
    margin-bottom: 20px;
    display: inline-block;
    width: 100%;
`

export default Login;
