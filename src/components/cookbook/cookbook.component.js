import React, { Component } from 'react';
import CookBookListing from './cookbookListing';
import CookBookSteps from './cookbookSteps';

export default class CookBookComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: '1',
            name: '',
            stepsName: '',
            steps: [],
            list: [],
            selectedItem: {},
            disabledForm: true
        }

        this.selectedRecipe = this.selectedRecipe.bind(this);
        this.submit = this.submit.bind(this);

    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            this.checkForSubmit()
        })
    }

    checkForSubmit() {
        const { name, steps } = this.state;
        if (name !== '' && steps.length > 0) {
            this.setState({
                disabledForm: false,
            })
        } else {
            this.setState({
                disabledForm: true
            })
        }
    }

    submit(name, steps) {
        let data = {
            name: name,
            steps: steps,
        }
        this.setState({
            list: [...this.state.list, data],
            name: '',
            steps: []
        })
    }

    _handleKeyDown = (e) => {
        if (e.target.name === 'stepsName' && e.key === 'Enter' && e.target.value.length > 0) {
            this.setState({
                steps: [...this.state.steps, e.target.value],
                stepsName: ''
            }, () => {
                this.checkForSubmit();
            })
        }
    }



    selectedRecipe(index) {
        let data = this.state.list[index];
        data = { ...data, key: index }
        this.setState({
            selectedItem: data
        })
    }

    render() {
        const { submit, _handleKeyDown, onChange } = this;
        return (
            <div className='container mr-top-10'>
                <CookBookSteps state={this.state} onChange={onChange} submit={submit} _handleKeyDown={_handleKeyDown}></CookBookSteps>

                <CookBookListing state={this.state} selectedRecipe={this.selectedRecipe}></CookBookListing>
            </div >
        )
    }
}
