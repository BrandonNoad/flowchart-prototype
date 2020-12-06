import { QUESTIONNAIRE_SECTION_ID_PROM, LABEL_ID_TRANSPARENCY, LABEL_ID_RIGOR } from './constants';

export default {
    id: QUESTIONNAIRE_SECTION_ID_PROM,
    title: 'Patient Reported Outcome Measures (PROM)',
    questionGroups: [
        {
            questions: [
                {
                    question:
                        'Was the cognitive competency of the population required to complete the PROM described?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question:
                        'Were literacy/language barriers related to completing the PROM described?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question: 'Were cultural barriers related to completing the PROM described?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question:
                        'Was the method of PROM completion described (i.e., telephone, mail, in person)? ',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question:
                        'Was the method of PROM administration described (i.e., self, interviewer, by proxy, medical staff administered, etc.)? ',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question:
                        'Was timing of the PROM completion relative to study intervention described? ',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question: 'Has the PROM used in the study been validated?',
                    labels: [],
                    responseOptions: ['Yes', 'No'],
                    questionGroups: [
                        {
                            filter: 0,
                            questions: [
                                {
                                    question:
                                        'Was the questionnaire validated on the same population to which it was applied in the study?',
                                    labels: [LABEL_ID_RIGOR],
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question: 'Was the validation study referenced in the text?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question:
                                        'Was the PROM used in the study administered in the language it was validated in?',
                                    labels: [LABEL_ID_RIGOR],
                                    responseOptions: ['Yes', 'No'],
                                    questionGroups: [
                                        {
                                            filter: 1,
                                            questions: [
                                                {
                                                    question:
                                                        'Was the translation process described in detail?',
                                                    labels: [LABEL_ID_TRANSPARENCY],
                                                    responseOptions: ['Yes', 'No'],
                                                },
                                                {
                                                    question:
                                                        'Was the translation process performed according to an accepted translation method? (e.g. International Society for Pharmacoeconomics and Outcome Research (ISPOR) Task Force for translation and cultural adaptation)',
                                                    labels: [LABEL_ID_RIGOR],
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
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question: 'Was internal consistency reported? (Reliability)',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question:
                                        'Was test-retest reproducibility reported? (Reliability)',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question: 'Was content validity reported? (Validity)',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question: 'Was criterion validity reported? (Validity)',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question: 'Was construct validity reported? (Validity)',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question:
                                        'Was PROM development described in detail (e.g., question development, pilot testing, etc.)?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question: 'Was responsiveness data provided?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question: 'Were floor/ceiling effects addressed?',
                                    labels: [LABEL_ID_RIGOR],
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question:
                                        'Was clinical interpretability addressed (i.e., minimal clinically important difference)?',
                                    labels: [LABEL_ID_RIGOR],
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
