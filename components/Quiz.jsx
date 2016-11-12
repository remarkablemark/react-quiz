'use strict';

/**
 * Module dependencies.
 */
import React from 'react';
import {
    Card,
    CardActions,
    CardText,
    CardTitle
} from 'material-ui/Card';
import {
    RadioButton,
    RadioButtonGroup
} from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';

/**
 * Quiz component.
 */
class Quiz extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            id,
            question,
            choices,
            submit
        } = this.props;

        return (
            <Card>
                <CardTitle title={question} />
                <CardText>
                    <RadioButtonGroup name={id}>
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
                    <RaisedButton label={submit} />
                </CardActions>
            </Card>
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