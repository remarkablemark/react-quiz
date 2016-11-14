'use strict';

/**
 * Module dependencies.
 */
import React from 'react';
import {
    CardActions,
    CardText,
    CardTitle
} from 'material-ui/Card';
import {
    RadioButton,
    RadioButtonGroup
} from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';

/**
 * Quiz component.
 */
class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDialogOpen: false
        };
        this._handleChange = this._handleChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
        this._handleClose = this._handleClose.bind(this);
    }

    _handleChange(event, value) {
        this.setState({ value });
    }

    _handleSubmit() {
        const { state, props } = this;
        if (state.value === props.answer) {
            this.setState({
                dialogText: 'Correct',
                isDialogOpen: true
            });
        } else {
            this.setState({
                dialogText: 'Incorrect',
                isDialogOpen: true
            });
        }
    }

    _handleClose() {
        this.setState({
            isDialogOpen: false
        });
    }

    render() {
        const {
            props,
            state,
            _handleChange,
            _handleSubmit,
            _handleClose
        } = this;

        const {
            id,
            question,
            choices,
            submit,
        } = props;

        const {
            isDialogOpen,
            dialogText
        } = state;

        return (
            <div>
                <CardTitle title={question} />
                <CardText>
                    <RadioButtonGroup name={id} onChange={_handleChange}>
                        {choices.map((choice, index) => {
                            return (
                                <RadioButton
                                    label={choice.text}
                                    value={choice.id}
                                    key={index}
                                />
                            );
                        })}
                    </RadioButtonGroup>
                </CardText>
                <CardActions>
                    <RaisedButton
                        label={submit}
                        onTouchTap={_handleSubmit}
                    />
                </CardActions>
                <Dialog open={isDialogOpen}
                        title={dialogText}
                        onRequestClose={_handleClose}>
                    <RaisedButton
                        label='Close'
                        onTouchTap={_handleClose}
                    />
                </Dialog>
            </div>
        );
    }
}

/**
 * Quiz props.
 */
Quiz.propTypes = {
    id: React.PropTypes.string.isRequired,
    question: React.PropTypes.string,
    choices: React.PropTypes.array,
    submit: React.PropTypes.string
};

Quiz.defaultProps = {
    submit: 'Submit'
};

export default Quiz;
