import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";

export const ExpensesJr = ({ title, description }) => {
    return (
        <Col sm={6} md={4}>
            <div className='expenseThree'>
                <h4 className="expenseThree-title">{title}</h4>
                <span className='expenseThree-desc'>{description}</span>
            </div>
        </Col>
    )
}