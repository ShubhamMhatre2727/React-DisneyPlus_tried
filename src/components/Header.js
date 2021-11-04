import React, { useState, useEffect  } from 'react'
import styled from 'styled-components'
import { auth, provider } from '../firebase';
import {  signInWithPopup, signOut } from "firebase/auth";
import { useHistory } from 'react-router';
const Header = () => {

    if (localStorage.getItem("userInfo")===null){
        localStorage.setItem("userInfo", JSON.stringify(null))
    }

    const [User, setUser] = useState(JSON.parse(localStorage.getItem("userInfo")))
    const history = useHistory()
       
    useEffect(() => {
        localStorage.setItem("userInfo", JSON.stringify(User))
        // console.log(localStorage.getItem("userInfo"))
    }, [User])


    const handelAuth = () =>{
        if(!User) {

            signInWithPopup(auth, provider)
            .then((result) => {
                setUser({
                    'user': result.user,
                    'email': result.user.email,
                    'photoUrl': result.user.photoURL,
                });

                history.push("/home")
                // console.log(User.email)
            }).catch((error) => {
                console.log(error)
            });
        }else if(User) {
            signOut(auth).then(() =>{
                setUser(null)

                history.push("/")
            })
        }
    }

    return (
        <Nav>
            <Logo>
                <img src='/images/logo.svg' alt=''/>
            </Logo>
            {
                User? 
                <>
                    <NavMenu>
                    <a href='/home'>
                        <img src='/images/home-icon.svg' alt=''/>
                        <span>HOME</span>
                    </a>
                    <a href='/home'>
                        <img src='/images/search-icon.svg' alt=''/>
                        <span>SEARCH</span>
                    </a>
                    <a href='/home'>
                        <img src='/images/watchlist-icon.svg' alt=''/>
                        <span>WHATCHLIST</span>
                    </a>
                    <a href='/home'>
                        <img src='/images/original-icon.svg' alt=''/>
                        <span>ORIGINALS</span>
                    </a>
                    <a href='/home'>
                        <img src='/images/movie-icon.svg' alt=''/>
                        <span>MOIVES</span>
                    </a>
                    <a href='/home'>
                        <img src='/images/series-icon.svg' alt=''/>
                        <span>SERIES</span>
                    </a>
                    </NavMenu>
                    <SignOut>
                    <Photo>
                        <img src={User.photoUrl} alt={User.email}/>
                    </Photo> 
                    <DropDown>
                        <span onClick={handelAuth}>Sign Out</span>
                    </DropDown>
                    </SignOut>
                </>
                : <Login onClick={handelAuth}>Login</Login>
            }
            
        </Nav>
    )
}

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 3;
`

const Logo = styled.a`
    padding: 0;
    width: 80px;
    margin-top: 4px;
    max-height: 70px;
    font-size: 0;
    display: inline-block;

    img{
        display: block;
        width: 100%;
    }
`

const NavMenu = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
    position: relative;
    margin-right: auto;
    margin-left: 25px;

    a{
        display: flex;
        align-items: center;
        padding: 0 12px;

        img{
            height: 20px;
            min-width: 20px;
            width: 20px;
            z-index: auto;
        }

        span{
            color: rgb(249, 249, 249);
            font-size: 13px;
            letter-spacing: 1.42px;
            line-height: 1.08;
            padding: 2px 0;
            white-space: nowrap;
            position: relative;
        }
        

    }
    
    @media (max-width: 768px){
        display: none;
    }
`
const Login = styled.a`
    background-color: rgba(0, 0, 0, 0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    transition: all 0.2s ease 0s;

    &:hover{
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }
`

const Photo = styled.a`
    img{
        width: 100%;
        border-radius: 50%;
    }
`

const DropDown = styled.div`
    position: absolute;
    top: 48px;
    right: 0;
    background-color: rgb(19, 19, 19);
    border: 1px solid rgb(151, 151, 151);
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
    padding: 8px;
    font-size: 14px;
    letter-spacing: 3px;
    width: 100px;
    opacity: 0;
    `

const SignOut = styled.div`
    position: relative;
    height: 48px;
    width: 48px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;

    &:hover{
        ${DropDown}{
            opacity: 1;
            transition-duration: 1s;
        }
    }
    `

export default Header