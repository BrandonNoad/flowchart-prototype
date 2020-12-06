import {
    QUESTIONNAIRE_SECTION_ID_TREATMENT,
    LABEL_ID_TRANSPARENCY,
    LABEL_ID_RIGOR,
} from './constants';

export default {
    id: QUESTIONNAIRE_SECTION_ID_TREATMENT,
    title: 'Treatment',
    questionGroups: [
        {
            questions: [
                {
                    question: 'Was the rationale for providing treatment reported?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question: 'Were primary outcomes identified prior to treatment?',
                    labels: [LABEL_ID_TRANSPARENCY, LABEL_ID_RIGOR],
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question: 'Were secondary outcomes identified prior to treatment?',
                    labels: [LABEL_ID_RIGOR],
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question:
                        'Were characteristics of swallowing physiology for the participant group(s) described?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question: 'Was a device/tool utilized to facilitate treatment?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No'],
                    questionGroups: [
                        {
                            filter: 0,
                            questions: [
                                {
                                    question: 'Was biofeedback offered as part of treatment?',
                                    labels: [],
                                    responseOptions: ['Yes', 'No'],
                                    questionGroups: [
                                        {
                                            filter: 0,
                                            questions: [
                                                {
                                                    question:
                                                        'Was the type of biofeedback reported?',
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
                },
                {
                    question: 'Were treatment targets for the participant group(s) described?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question: 'Were therapy sessions conducted in groups?',
                    labels: [],
                    responseOptions: ['Yes', 'No'],
                    questionGroups: [
                        {
                            filter: 0,
                            questions: [
                                {
                                    question: 'Was the number of participants per group described?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question:
                                        'Was the ratio of clinicians and/or aides to participants reported?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No'],
                                },
                            ],
                        },
                    ],
                },
                {
                    question:
                        'Did the study report any of the following items related to treatment regimen?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    isMultipleResponsesAllowed: true,
                    responseOptions: [
                        'Repetitions',
                        'Frequency',
                        'Intensity',
                        'Duration',
                        'Resistance Load (as applicable)',
                    ],
                },
                {
                    question:
                        'Were the methods for determining resistance load described (i.e., average, maximum values, or duration across a specified number of trials)?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question:
                        'Was participant adherence to the clinician schedule and/or treatment plan reported?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No'],
                    questionGroups: [
                        {
                            filter: 0,
                            questions: [
                                {
                                    question:
                                        'Was the method of recording and tracking patient adherence to the clinician schedule and/or treatment plan reported (i.e., device recorded vs patient reported)?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No'],
                                },
                            ],
                        },
                    ],
                },
                {
                    question: 'Was content fidelity described?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question: 'Was process fidelity described?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question:
                        'Were the instructions that were provided to the participant(s) for completing the treatment described?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question:
                        'Did participants receive additional/concurrent therapies during the course of treatment in addition to the treatment being studied?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No'],
                    questionGroups: [
                        {
                            filter: 0,
                            questions: [
                                {
                                    question: 'Were the additional/concurrent therapies described?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No'],
                                },
                            ],
                        },
                    ],
                },
                {
                    question:
                        'Was there a home exercise component prescribed as part of treatment?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No'],
                    questionGroups: [
                        {
                            filter: 0,
                            questions: [
                                {
                                    question:
                                        'Was participant adherence to their home program measured/reported?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No'],
                                },
                            ],
                        },
                    ],
                },
                {
                    question:
                        'Was the consistency of the treating clinician or trainer for sessions reported?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No'],
                },
            ],
        },
    ],
};
