import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Land from '../landimg.png';
import Visa from '../visa.png';
import Master from '../mastercard.png';
import Paypal from '../Paypal.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Divider } from '@material-ui/core';

const plus = <FontAwesomeIcon icon={faPlusCircle} />
const arrow = <FontAwesomeIcon icon={faArrowRight} />

function Landing() {
    return (
        <div>
            <Container>
                <div className="float-left land-txt pad-top pad-left display-inline">
                    <p className="topic">Trade Stocks, {plus} earn bonus shares. Enjoy.</p>
                    <div className="display-inline">
                        <p className="content">Being in control of your funds is the</p>
                        <p className="content">same as owning life. We help you</p>
                        <p className="content">efficientyly manage your portfolio</p>
                    </div>
                    <div className="display-inline">
                        <Button className="bg-icn display-inline">{arrow}</Button>
                    </div>
                    <Divider className="divider" variant="middle" />
                    <img src={Visa} width="48" height="30" className="pay-2" alt="" />
                    <img src={Master} width="50" height="30" className="pay-2" alt="" />
                    <img src={Paypal} width="100" height="30" className="pay-img" alt="" />
                </div>
                <img src={Land} width="600" height="580" className="float-right pad-right pad-left display-inline" alt="" />
            </Container>
        </div>
    )
}

export default Landing;