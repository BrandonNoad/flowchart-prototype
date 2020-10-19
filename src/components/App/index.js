import React from 'react';
import { Router, Redirect } from '@reach/router';

import QuestionnaireBuilder from '../QuestionnaireBuilder';
import QuestionnaireContainer from '../QuestionnaireContainer';

const App = () => (
    <Router basepath="/app">
        <QuestionnaireBuilder path="/" />
        <QuestionnaireContainer path="/reporting-standards" />
        <Redirect from="*" to="/app" noThrow />
    </Router>
);

export default App;
