import {
    QUESTION_GROUP_ID_PARTICIPANTS,
    QUESTION_GROUP_ID_GENERAL_INSTRUMENTATION,
    QUESTION_GROUP_ID_VFSS,
    QUESTION_GROUP_ID_FEES,
    QUESTION_GROUP_ID_SENSOR_BASED_INSTRUMENTATION,
    QUESTION_GROUP_ID_IMAGING_BASED_INSTRUMENTATION,
    QUESTION_GROUP_ID_PROM,
    QUESTION_GROUP_ID_TREATMENT,
} from './questionGroups';

export default [
    {
        question:
            'Does the study use human subjects to investigate normal or disordered swallowing?​',
        isResponseRequired: true,
        isMultipleResponsesAllowed: false,
        responseOptions: ['Yes', 'No'],
        results: [{ filter: 0, id: QUESTION_GROUP_ID_PARTICIPANTS }],
        children: [
            {
                filter: 0,
                question: 'Does the study use instrumentation?​',
                isResponseRequired: true,
                isMultipleResponsesAllowed: false,
                responseOptions: ['Yes', 'No'],
                results: [{ filter: 0, id: QUESTION_GROUP_ID_GENERAL_INSTRUMENTATION }],
                children: [
                    {
                        filter: 0,
                        question: 'Select the types of instrumentation used in the study?​',
                        isResponseRequired: true,
                        isMultipleResponsesAllowed: true,
                        responseOptions: [
                            'VFSS',
                            'FEES',
                            'Other sensor-based tool',
                            'Other imaging-based tool',
                        ],
                        results: [
                            { filter: 0, id: QUESTION_GROUP_ID_VFSS },
                            { filter: 1, id: QUESTION_GROUP_ID_FEES },
                            { filter: 2, id: QUESTION_GROUP_ID_SENSOR_BASED_INSTRUMENTATION },
                            { filter: 3, id: QUESTION_GROUP_ID_IMAGING_BASED_INSTRUMENTATION },
                        ],
                        children: [],
                    },
                ],
            },
            {
                filter: 0,
                question: 'Does the study use PROM?​',
                isResponseRequired: true,
                isMultipleResponsesAllowed: false,
                responseOptions: ['Yes', 'No'],
                results: [{ filter: 0, id: QUESTION_GROUP_ID_PROM }],
                children: [],
            },
            {
                filter: 0,
                question: 'Does the study investigate a type of swallowing treatment?​​',
                isResponseRequired: true,
                isMultipleResponsesAllowed: false,
                responseOptions: ['Yes', 'No'],
                results: [{ filter: 0, id: QUESTION_GROUP_ID_TREATMENT }],
                children: [],
            },
        ],
    },
];
