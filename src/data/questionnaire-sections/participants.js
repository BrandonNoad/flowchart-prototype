import { QUESTIONNAIRE_SECTION_ID_PARTICIPANTS } from './constants';

export default {
    id: QUESTIONNAIRE_SECTION_ID_PARTICIPANTS,
    title: 'Participants',
    questionGroups: [
        {
            questions: [
                {
                    question:
                        'Did the study report any of the following items relevant to the participant characteristics?',
                    isMultipleResponsesAllowed: true,
                    responseOptions: [
                        'Sex',
                        'Gender',
                        'Age',
                        'Race',
                        'Ethnicity',
                        'Socioeconomic status',
                        'Living status',
                        'Primary language spoken',
                    ],
                },
                { question: 'Was there a control group?', responseOptions: ['Yes', 'No'] },
                {
                    question: 'Was the number of participants reported?',
                    responseOptions: ['Yes', 'No'],
                },
                { question: 'Were inclusion criteria defined?', responseOptions: ['Yes', 'No'] },
                {
                    question: 'Was a diagnosis of dysphagia required for entry into this study?',
                    responseOptions: ['Yes', 'No'],
                    questionGroups: [
                        {
                            filter: 0,
                            questions: [
                                {
                                    question:
                                        'Was the definition of dysphagia related to the study described?',
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question: 'Was the method of confirming dysphagia described?',
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question:
                                        'Were citations regarding validity of the assessment method provided?',
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question: 'Was the reliability of assessment reported?',
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question: 'Was dysphagia severity and duration described?',
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question:
                                        'Was baseline diet or method of nutritional intake reported (e.g., IDDSI range including food level and drink level)?',
                                    responseOptions: ['Yes', 'No'],
                                },
                            ],
                        },
                    ],
                },
                { question: 'Were exclusion criteria defined?', responseOptions: ['Yes', 'No'] },
                {
                    question: 'Did the study involve healthy participants?',
                    responseOptions: ['Yes', 'No'],
                    questionGroups: [
                        {
                            filter: 0,
                            questions: [
                                {
                                    question: 'Were the criteria for health reported and defined?',
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question:
                                        'If there were subgroups within the healthy participants, were these described?',
                                    responseOptions: ['Yes', 'No'],
                                },
                            ],
                        },
                    ],
                },
                {
                    question: 'Did the study involve patient participants?',
                    responseOptions: ['Yes', 'No'],
                    questionGroups: [
                        {
                            filter: 0,
                            questions: [
                                {
                                    question: 'Did the patients have dysphagia?',
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question: 'Were the details of patient diagnosis reported?',
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question: 'Was the primary medical diagnosis reported?',
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question: 'Was the time since diagnosis reported?',
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question: 'Was the stage or severity of disease reported?',
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question:
                                        'Were the criteria for disease characterization identified?',
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question: 'Were medications reported?',
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question: 'Were other comorbid medical diagnoses reported?',
                                    responseOptions: ['Yes', 'No'],
                                },
                            ],
                        },
                    ],
                },
                {
                    question: 'Were there more than one group of patient participants?',
                    responseOptions: ['Yes', 'No'],
                    questionGroups: [
                        {
                            filter: 0,
                            questions: [
                                {
                                    question:
                                        'Were the characteristics distinguishing these groups described?',
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
