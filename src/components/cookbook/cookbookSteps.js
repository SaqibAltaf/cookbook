import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from "react-bootstrap";

export default function CookBookSteps(props) {
    const { submit } = props;
    const [name, setName] = useState('');
    const [stepsName, setStepsName] = useState('');
    const [disabledForm, setDisabledForm] = useState(true);
    const [steps, setSteps] = useState([]);

    const _handleKeyDown = (e) => {
        let val = e.target.value;
        if (e.target.name === 'stepsName' && e.key === 'Enter' && e.target.value.length > 0) {
            setSteps(steps => [...steps, val])
            setStepsName('')
        }
    }

    useEffect(() => {
        checkForSubmit();
    })

    function checkForSubmit() {
        if (name !== '' && steps.length > 0) {
            setDisabledForm(false)
        } else {
            setDisabledForm(true)
        }
    }


    const onSubmit = e => {
        e.preventDefault();
        submit(name, steps);
        setName('');
        setSteps([]);
    };

    return (
        <Row>
            <Col>
                <label>Recipe-Name: </label>
                <input type="text" name="name" className='form-control' onChange={(e) => setName(e.target.value)} value={name} />

                <label>Steps: (Press Enter to Add Step)</label>
                <input type="text" name="stepsName" className='form-control' onChange={(e) => setStepsName(e.target.value)} onKeyDown={_handleKeyDown} value={stepsName} />

                <Button variant="primary" className='mr-top-10' disabled={disabledForm} onClick={onSubmit}>Save</Button>
                <ul>
                    {
                        steps.length > 0 ? steps.map((val, key) => {
                            return (
                                <li key={key}>{val}</li>
                            )
                        }) : null
                    }
                </ul>
            </Col>
            <Col></Col>
        </Row>
    )
}
