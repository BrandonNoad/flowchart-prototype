import { QUESTIONNAIRE_SECTION_ID_PROM } from './constants';

export default {
    id: QUESTIONNAIRE_SECTION_ID_PROM,
    title: 'Patient Reported Outcome Measures (PROM)',
    questionGroups: [
        {
            questions: [
                {
                    question:
                        'Was the cognitive competency of the population required to complete the PROM described?',
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question:
                        'Were literacy/language barriers related to completing the PROM described?',
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question: 'Were cultural barriers related to completing the PROM described?',
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question:
                        'Was the method of PROM completion described (i.e., telephone, mail, in person)? ',
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question:
                        'Was the method of PROM administration described (i.e., self, interviewer, by proxy, medical staff administered, etc.)? ',
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question:
                        'Was timing of the PROM completion relative to study intervention described? ',
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question: 'Has the PROM used in the study been validated?',
                    responseOptions: ['Yes', 'No'],
                    questionGroups: [
                        {
                            filter: 0,
                            questions: [
                                {
                                    question:
                                        'Was the questionnaire validated on the same population to which it was applied in the study?',
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question: 'Was the validation study referenced in the text?',
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question:
                                        'Was the PROM used in the study administered in the language it was validated in?',
                                    responseOptions: ['Yes', 'No'],
                                    questionGroups: [
                                        {
                                            filter: 1,
                                            questions: [
                                                {
                                                    question:
                                                        'Was the translation process described in detail?',
                                                    responseOptions: ['Yes', 'No'],
                                                },
                                                {
                                                    question:
                                                        'Was the translation process performed according to an accepted translation method? (e.g. International Society for Pharmacoeconomics and Outcome Research (ISPOR) Task Force for translation and cultural adaptation)',
                                                    responseOptions: ['Yes', 'No'],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            filter: 1,
                            questions: [
                                {
                                    question:
                                        'Was the full questionnaire provided in the manuscript?',
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question: 'Was internal consistency reported? (Reliability)',
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question:
                                        'Was test-retest reproducibility reported? (Reliability)',
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question: 'Was content validity reported? (Validity)',
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question: 'Was criterion validity reported? (Validity)',
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question: 'Was construct validity reported? (Validity)',
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question:
                                        'Was PROM development described in detail (e.g., question development, pilot testing, etc.)?',
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question: 'Was responsiveness data provided?',
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question: 'Were floor/ceiling effects addressed?',
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question:
                                        'Was clinical interpretability addressed (i.e., minimal clinically important difference)?',
                                    responseOptions: ['Yes', 'No'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
