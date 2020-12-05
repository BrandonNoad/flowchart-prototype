import {
    QUESTIONNAIRE_SECTION_ID_PARTICIPANTS,
    QUESTIONNAIRE_SECTION_ID_UNIVERSALLY_APPLICABLE_QUESTIONS,
    QUESTIONNAIRE_SECTION_ID_TREATMENT,
    QUESTIONNAIRE_SECTION_ID_NON_INSTRUMENTAL_ASSESSMENT_AND_SCREENING,
    QUESTIONNAIRE_SECTION_ID_GENERAL_INSTRUMENTATION,
    QUESTIONNAIRE_SECTION_ID_VFSS,
    QUESTIONNAIRE_SECTION_ID_FEES,
    QUESTIONNAIRE_SECTION_ID_SENSOR_BASED_INSTRUMENTATION,
    QUESTIONNAIRE_SECTION_ID_IMAGING_BASED_INSTRUMENTATION,
    QUESTIONNAIRE_SECTION_ID_PROM,
} from './questionnaire-sections/constants';

export default [
    {
        question:
            'Is the study performed on human subjects investigating normal or disordered swallowing?​',
        isResponseRequired: true,
        isMultipleResponsesAllowed: false,
        responseOptions: ['Yes', 'No'],
        questionnaireSections: [
            { filter: 0, id: QUESTIONNAIRE_SECTION_ID_PARTICIPANTS },
            { filter: 0, id: QUESTIONNAIRE_SECTION_ID_UNIVERSALLY_APPLICABLE_QUESTIONS },
        ],
        questionGroups: [
            {
                filter: 0,
                questions: [
                    {
                        question: 'Did the study investigate a type of swallowing treatment?​​',
                        isResponseRequired: true,
                        isMultipleResponsesAllowed: false,
                        responseOptions: ['Yes', 'No'],
                        questionnaireSections: [
                            { filter: 0, id: QUESTIONNAIRE_SECTION_ID_TREATMENT },
                        ],
                        questionGroups: [],
                    },
                    {
                        question:
                            'Did the study utilize a non-instrumental swallowing assessment or screening tool?​​',
                        isResponseRequired: true,
                        isMultipleResponsesAllowed: false,
                        responseOptions: ['Yes', 'No'],
                        questionnaireSections: [
                            {
                                filter: 0,
                                id: QUESTIONNAIRE_SECTION_ID_NON_INSTRUMENTAL_ASSESSMENT_AND_SCREENING,
                            },
                        ],
                        questionGroups: [],
                    },
                    {
                        question: 'Did the study utilize instrumentation?​',
                        isResponseRequired: true,
                        isMultipleResponsesAllowed: false,
                        responseOptions: ['Yes', 'No'],
                        questionnaireSections: [
                            {
                                filter: 0,
                                id: QUESTIONNAIRE_SECTION_ID_GENERAL_INSTRUMENTATION,
                            },
                        ],
                        questionGroups: [
                            {
                                filter: 0,
                                questions: [
                                    {
                                        question:
                                            'Select the types of instrumentation used in the study?​',
                                        isResponseRequired: false,
                                        isMultipleResponsesAllowed: true,
                                        responseOptions: [
                                            'VFSS',
                                            'FEES',
                                            'Other sensor-based tool',
                                            'Other imaging-based tool',
                                        ],
                                        questionnaireSections: [
                                            {
                                                filter: 0,
                                                id: QUESTIONNAIRE_SECTION_ID_VFSS,
                                            },
                                            {
                                                filter: 1,
                                                id: QUESTIONNAIRE_SECTION_ID_FEES,
                                            },
                                            {
                                                filter: 2,
                                                id: QUESTIONNAIRE_SECTION_ID_SENSOR_BASED_INSTRUMENTATION,
                                            },
                                            {
                                                filter: 3,
                                                id: QUESTIONNAIRE_SECTION_ID_IMAGING_BASED_INSTRUMENTATION,
                                            },
                                        ],
                                        questionGroups: [],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        question:
                            'Was a patient-reported outcome measure utilized as part of the study?​',
                        isResponseRequired: true,
                        isMultipleResponsesAllowed: false,
                        responseOptions: ['Yes', 'No'],
                        questionnaireSections: [{ filter: 0, id: QUESTIONNAIRE_SECTION_ID_PROM }],
                        questionGroups: [],
                    },
                ],
            },
        ],
    },
];
