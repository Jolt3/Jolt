import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";

export const DashboardThree = ({ title, description, imgUrl }) => {
    return (
        <Col sm={6} md={4}>
            <div className='dashThree'>
                <h4 className="dashThree-title">{title}</h4>
                <span className='dashThree-desc'>{description}</span>
                <div className='dashThree-img'>
                    <img src={imgUrl} alt="img"/>
                </div>
            </div>
        </Col>
    )
}
