import React from 'react';
import './contact.sass';
import { ContactProps } from '../../declarations';
import BackgroundImage from "../../images/background-contact.jpg";
import MeImage from "../../images/me 2.png";
import Navbar from "../navbar/navbar";

function ContactMe(props: ContactProps): JSX.Element {

    return(
        <div className="contact">

            <img src={BackgroundImage} className="backgroundImage backgroundImageContact" alt="background wing view"></img>

            <Navbar page={props.page} />

            <div className="contactContent flex-col">

                <div className="flex-row contactDesc">

                    <div className='meImageWrapper flex-row flex-jc-center'>
                        <img src={MeImage} className="meImage" alt="myself" style={{"scale": String(0.925)}}></img>
                    </div>

                    <div className="flex-col contactDescText">
                        <h2 className="contactDescTextHeader">Feel like contacting me?</h2>
                        <div className="contactDescTextDecorator"></div>
                        <p className="contactDescTextPara">
                            Click on any of the links below to send a message and I'll get back to you as soon as I can!
                            <br></br>
                            <br></br>
                            Shoot an email or drop a text on telegram for a faster response :)
                            <br></br>
                            <br></br>
                        </p>
                    </div>

                </div>

            </div>

            <div className="contactInfo flex-row flex-jc-space-e">

                <div className="contactInfoEach contactInfoEach1 flex-row" onClick={() => {window.open("https://t.me/InfinityTwo", '_blank')}}>
                    <svg className="telegramLogo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240"><defs><linearGradient id="linear-gradient" x1="120" y1="240" x2="120" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1d93d2"/><stop offset="1" stop-color="#38b0e3"/></linearGradient></defs><title>Telegram_logo</title><circle cx="120" cy="120" r="120" fill="url(#linear-gradient)"/><path d="M81.229,128.772l14.237,39.406s1.78,3.687,3.686,3.687,30.255-29.492,30.255-29.492l31.525-60.89L81.737,118.6Z" fill="#c8daea"/><path d="M100.106,138.878l-2.733,29.046s-1.144,8.9,7.754,0,17.415-15.763,17.415-15.763" fill="#a9c6d8"/><path d="M81.486,130.178,52.2,120.636s-3.5-1.42-2.373-4.64c.232-.664.7-1.229,2.1-2.2,6.489-4.523,120.106-45.36,120.106-45.36s3.208-1.081,5.1-.362a2.766,2.766,0,0,1,1.885,2.055,9.357,9.357,0,0,1,.254,2.585c-.009.752-.1,1.449-.169,2.542-.692,11.165-21.4,94.493-21.4,94.493s-1.239,4.876-5.678,5.043A8.13,8.13,0,0,1,146.1,172.5c-8.711-7.493-38.819-27.727-45.472-32.177a1.27,1.27,0,0,1-.546-.9c-.093-.469.417-1.05.417-1.05s52.426-46.6,53.821-51.492c.108-.379-.3-.566-.848-.4-3.482,1.281-63.844,39.4-70.506,43.607A3.21,3.21,0,0,1,81.486,130.178Z" fill="#fff"/></svg>
                    <div className="flex-col contactInfoTextWrapper">
                        <p className="contactInfoEachText">Telegram</p>
                        <p className="contactLinks">t.me/InfinityTwo</p>
                    </div>
                </div>

                <div className="contactInfoEach contactInfoEach2 flex-row" onClick={() => {window.open("mailto:2poh.junkang@gmail.com", '_blank')}}>
                    <svg className="mailLogo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><path d="M6.625 33.333q-1.375 0-2.354-.979-.979-.979-.979-2.354V10q0-1.375.979-2.354.979-.979 2.354-.979h26.75q1.375 0 2.354.979.979.979.979 2.354v20q0 1.375-.979 2.354-.979.979-2.354.979ZM20 21.083 6.083 12.167V30q0 .208.146.354t.396.146h26.75q.25 0 .396-.146.146-.146.146-.354V12.167Zm0-2.791L33.792 9.5H6.25ZM5.875 12.167V9.5 30q.167.208.333.354.167.146.417.146h-.75V30Z"/></svg>
                    <div className="flex-col contactInfoTextWrapper">
                        <p className="contactInfoEachText">Email</p>
                        <p className="contactLinks">2poh.junkang@gmail.com</p>
                    </div>
                </div>

                <div className="contactInfoEach contactInfoEach3 flex-row" onClick={() => {window.open("https://github.com/infinitytwo", '_blank')}}>
                    <svg className="githubLogo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 96"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#24292f"/></svg>
                    <div className="flex-col contactInfoTextWrapper">
                        <p className="contactInfoEachText githubText">Github</p>
                        <p className="contactLinks contactLinksGithub">github.com/infinitytwo</p>
                    </div>
                </div>

                <div className="contactInfoEach contactInfoEach3 flex-row" onClick={() => {window.open("https://www.linkedin.com/in/pohjunkang/", '_blank')}}>
                    <svg className="linkedInLogo" height="72" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z" fill="#007EBB"/><path d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z" fill="#FFF"/></g></svg>
                    {/* <svg className="githubLogo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 96"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#24292f"/></svg> */}
                    <div className="flex-col contactInfoTextWrapper">
                        <p className="contactInfoEachText linkedInText">LinkedIn</p>
                        <p className="contactLinks contactLinksLinkedIn">linkedin.com/in/pohjunkang/</p>
                    </div>
                </div>

            </div>
        
        </div>
    );

}

export default ContactMe;