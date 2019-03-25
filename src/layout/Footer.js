import React from 'react';
import {Route} from 'react-router-dom';
import '../style/Footer.css'

const Footer = () => {
    return ( 
        <div>
            <h2>Footer</h2>
            <Route path="/" exact render={(props) => {
                return (
                    <p>
                        You are in <span>Head page</span>
                    </p>
                )
            }}/>
            <Route path="/:page" render={(props) => {
                return (
                    <>
                        <p>You are in <span>{props.match.params.page}</span></p>
                        <p>You are in <span>{props.match.url}</span></p>
                        <p>You are in <span>{props.match.path}</span></p>
                    </>
                )
            }}/>
            <Route path="/:page/:idProduct" render={(props) => {
                return (
                    <>
                        <p>You are in <span>{props.match.params.idProduct}</span></p>
                        <p>You are in <span>{props.match.url}</span></p>
                        <p>You are in <span>{props.match.path}</span></p>
                    </>
                )
            }}/>
        </div>
     );
}
 
export default Footer;