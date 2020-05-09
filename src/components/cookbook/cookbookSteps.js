import React from 'react';
import { Row, Col, Button } from "react-bootstrap";

export default function CookBookSteps(props) {
    const {onChange, submit, _handleKeyDown} = props;
    const {name, stepsName, steps, disabledForm} = props.state;
    return (
        <Row>
            <Col>
                <label>Recipe Name: </label>
                <input type="text" name="name" className='form-control' onChange={onChange} value={name} />

                <label>Steps: (Press Enter to Add Step)</label>
                <input type="text" name="stepsName" className='form-control' onChange={onChange} onKeyDown={_handleKeyDown} value={stepsName} />

                <Button variant="primary" className='mr-top-10' disabled={disabledForm} onClick={submit}>Save</Button>
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
