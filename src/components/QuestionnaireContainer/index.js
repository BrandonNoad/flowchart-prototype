import React from 'react';
import { Redirect } from '@reach/router';
import _keyBy from 'lodash/keyBy';

import Questionnaire from '../Questionnaire';

import questionGroups from '../../data/questionGroups';
const questionGroupsIndexed = _keyBy(questionGroups, 'id');

const QuestionnaireContainer = ({ location }) => {
    if (!location.state || !location.state.results) {
        return <Redirect to="/app" noThrow />;
    }

    const questionGroupsForQuestionnaire = location.state.results.map(
        ({ id }) => questionGroupsIndexed[id]
    );

    return <Questionnaire questionGroups={questionGroupsForQuestionnaire} />;
};

export default QuestionnaireContainer;
