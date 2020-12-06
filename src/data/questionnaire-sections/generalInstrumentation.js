import {
    QUESTIONNAIRE_SECTION_ID_GENERAL_INSTRUMENTATION,
    LABEL_ID_TRANSPARENCY,
    LABEL_ID_RIGOR,
} from './constants';

export default {
    id: QUESTIONNAIRE_SECTION_ID_GENERAL_INSTRUMENTATION,
    title: 'General Instrumentation',
    questionGroups: [
        {
            heading: 'Participant/Protocol (Instrument-Specific)',
            questions: [
                {
                    question:
                        'Was positioning of the participant or any structures of interest, angles, method/accessories to control it described?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question:
                        'Were the following aspects of instrumentation-related positioning reported on (select all that apply)?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    isMultipleResponsesAllowed: true,
                    responseOptions: [
                        'Structures of interest',
                        'Angles',
                        'Method/accessories to control it',
                    ],
                },
                {
                    question:
                        'If the participant was able to visualize their physiology during utilization of instrumentation, was this reported on?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question: 'Were operational definitions for measurements/outcomes reported?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No'],
                },
            ],
        },
        {
            heading: 'Equipment',
            questions: [
                {
                    question:
                        'Was equipment described in a way that can be reproduced including all testing and archiving equipment used with manufacturer specifications?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question:
                        'Were the names and system requirements of any analysis software described?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question: 'Were the methods for calibration of all instrumentation described?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No'],
                },
            ],
        },
        {
            heading: 'Raters',
            questions: [
                {
                    question: 'Was number of raters reported?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question: 'Was more than 1 rater included?',
                    labels: [LABEL_ID_RIGOR],
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question: 'Was rater training reported?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question:
                        'Was the process of rating described relative to time of exam (i.e, real-time and/or post-hoc)?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No'],
                    questionGroups: [
                        {
                            filter: 0,
                            questions: [
                                {
                                    question: 'Were exams recorded and reviewed post-hoc?',
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
