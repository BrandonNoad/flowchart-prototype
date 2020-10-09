import React from 'react';
import { Router, Redirect } from '@reach/router';

import QuestionnaireBuilder from '../QuestionnaireBuilder';
import Questionnaire from '../Questionnaire';

const App = () => (
    <Router basepath="/app">
        <QuestionnaireBuilder path="/" />
        <Questionnaire path="/reporting-standards" />
        <Redirect from="*" to="/app" noThrow />
    </Router>
);

export default App;
