import {
    QUESTIONNAIRE_SECTION_ID_PARTICIPANTS,
    LABEL_ID_TRANSPARENCY,
    LABEL_ID_RIGOR,
} from './constants';

export default {
    id: QUESTIONNAIRE_SECTION_ID_PARTICIPANTS,
    title: 'Participants',
    questionGroups: [
        {
            questions: [
                {
                    question:
                        'Did the study report any of the following items relevant to the participant characteristics?',
                    labels: [LABEL_ID_TRANSPARENCY],
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
                {
                    question: 'Was there a control group?',
                    labels: [],
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question: 'Was the number of participants reported?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question: 'Were inclusion criteria defined?',
                    labels: [],
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question: 'Was a diagnosis of dysphagia required for entry into this study?',
                    labels: [],
                    responseOptions: ['Yes', 'No'],
                    questionGroups: [
                        {
                            filter: 0,
                            questions: [
                                {
                                    question:
                                        'Was the definition of dysphagia related to the study described?',
                                    labels: [LABEL_ID_TRANSPARENCY, LABEL_ID_RIGOR],
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question: 'Was the method of confirming dysphagia described?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question:
                                        'Were citations regarding validity of the assessment method provided?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question: 'Was the reliability of assessment reported?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question: 'Was dysphagia severity and duration described?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question:
                                        'Was baseline diet or method of nutritional intake reported (e.g., IDDSI range including food level and drink level)?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No'],
                                },
                            ],
                        },
                    ],
                },
                {
                    question: 'Were exclusion criteria defined?',
                    labels: [],
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question: 'Did the study involve healthy participants?',
                    labels: [],
                    responseOptions: ['Yes', 'No'],
                    questionGroups: [
                        {
                            filter: 0,
                            questions: [
                                {
                                    question: 'Were the criteria for health reported and defined?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question:
                                        'If there were subgroups within the healthy participants, were these described?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No'],
                                },
                            ],
                        },
                    ],
                },
                {
                    question: 'Did the study involve patient participants?',
                    labels: [],
                    responseOptions: ['Yes', 'No'],
                    questionGroups: [
                        {
                            filter: 0,
                            questions: [
                                {
                                    question: 'Did the patients have dysphagia?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question: 'Were the details of patient diagnosis reported?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question: 'Was the primary medical diagnosis reported?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question: 'Was the time since diagnosis reported?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question: 'Was the stage or severity of disease reported?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question:
                                        'Were the criteria for disease characterization identified?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question: 'Were medications reported?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question: 'Were other comorbid medical diagnoses reported?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No'],
                                },
                            ],
                        },
                    ],
                },
                {
                    question: 'Was there more than one group of patient participants?',
                    labels: [],
                    responseOptions: ['Yes', 'No'],
                    questionGroups: [
                        {
                            filter: 0,
                            questions: [
                                {
                                    question:
                                        'Were the characteristics distinguishing these groups described?',
                                    labels: [LABEL_ID_TRANSPARENCY],
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
