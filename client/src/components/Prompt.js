import React from 'react';
import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";

export const Prompt = () => {
    return (
        <Container className='master-prompt'>
            <div className='promt-container'>
                <h3 className='prompt-head'>Uh-Oh!</h3>
                <p className='prompt-body'>It looks like you haven't linked any of your accounts yet! Let us help with that.</p>
                <button className='prompt-button'>Link my account</button>
            </div>
        </Container>
    )
}

// Create CSS styling for this - TJ