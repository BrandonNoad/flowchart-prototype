import {
    QUESTIONNAIRE_SECTION_ID_PARTICIPANTS,
    QUESTIONNAIRE_SECTION_ID_GENERAL_INSTRUMENTATION,
    QUESTIONNAIRE_SECTION_ID_VFSS,
    QUESTIONNAIRE_SECTION_ID_FEES,
    QUESTIONNAIRE_SECTION_ID_SENSOR_BASED_INSTRUMENTATION,
    QUESTIONNAIRE_SECTION_ID_IMAGING_BASED_INSTRUMENTATION,
    QUESTIONNAIRE_SECTION_ID_PROM,
    QUESTIONNAIRE_SECTION_ID_TREATMENT,
} from './questionnaireSections';

export default {
    question: 'Does the study use human subjects to investigate normal or disordered swallowing?​',
    isResponseRequired: true,
    isMultipleResponsesAllowed: false,
    responseOptions: ['Yes', 'No'],
    questionnaireSections: [{ filter: 0, id: QUESTIONNAIRE_SECTION_ID_PARTICIPANTS }],
    questionGroups: [
        {
            filter: 0,
            questions: [
                {
                    question: 'Does the study use instrumentation?​',
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
                    question: 'Does the study use PROM?​',
                    isResponseRequired: true,
                    isMultipleResponsesAllowed: false,
                    responseOptions: ['Yes', 'No'],
                    questionnaireSections: [{ filter: 0, id: QUESTIONNAIRE_SECTION_ID_PROM }],
                    questionGroups: [],
                },
                {
                    question: 'Does the study investigate a type of swallowing treatment?​​',
                    isResponseRequired: true,
                    isMultipleResponsesAllowed: false,
                    responseOptions: ['Yes', 'No'],
                    questionnaireSections: [{ filter: 0, id: QUESTIONNAIRE_SECTION_ID_TREATMENT }],
                    questionGroups: [],
                },
            ],
        },
    ],
};
