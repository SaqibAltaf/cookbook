import React from 'react';
import { ListGroup, Row, Col } from "react-bootstrap";

export default function CookBookListing(props) {
    const { selectedRecipe, state } = props;
    return (
        <ListGroup as="ul">
            <Row>
                <Col>
                    {
                        state.list.map((val, key) => {
                            return (
                                <ListGroup.Item key={key} action as="li" active={key === state.selectedItem.key ? true : false} onClick={() => selectedRecipe(key)}>
                                    {val.name}
                                </ListGroup.Item>
                            )
                        })
                    }
                </Col>
                <Col>
                    {
                        Object.keys(state.selectedItem).length > 0 ?
                            <React.Fragment>
                                <label>Recipe Name : {state.selectedItem.name}</label>
                                <br></br>
                                <label>Steps</label>
                                <ul>
                                    {state.selectedItem.steps.map((val, key) => {
                                        return (
                                            <li key={key}>{val}</li>
                                        )
                                    })}
                                </ul>

                            </React.Fragment>
                            : null
                    }
                </Col>

            </Row>

        </ListGroup>
    )
}
