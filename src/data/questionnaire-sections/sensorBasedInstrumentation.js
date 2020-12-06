import {
    QUESTIONNAIRE_SECTION_ID_SENSOR_BASED_INSTRUMENTATION,
    LABEL_ID_TRANSPARENCY,
    LABEL_ID_RIGOR,
} from './constants';

export default {
    id: QUESTIONNAIRE_SECTION_ID_SENSOR_BASED_INSTRUMENTATION,
    title: 'Other Sensor-Based Instrumentation',
    questionGroups: [
        {
            questions: [
                {
                    question:
                        'Was the placement and orientation of the device and sensor(s) described?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question:
                        'Were the following aspects of lubrication described (select all that apply)?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    isMultipleResponsesAllowed: true,
                    responseOptions: [
                        'Type (e.g., water-based, petroleum-based, etc.)',
                        'Brand or Manufacturer',
                        'Concentration',
                        'Quantity',
                        'Application process',
                        'No lubrication or nasal decongestant were utilized.',
                    ],
                },
                {
                    question:
                        'Were the following aspects of topical anesthetic described (select all that apply)?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    isMultipleResponsesAllowed: true,
                    responseOptions: [
                        'Type (e.g., water-based, petroleum-based, etc.)',
                        'Brand or Manufacturer',
                        'Concentration',
                        'Quantity',
                        'Application process',
                        'No topical anesthetic was utilized.',
                    ],
                },
                {
                    question:
                        'Were the following aspects of measurement report (select all that apply)?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    isMultipleResponsesAllowed: true,
                    responseOptions: [
                        'Signal frequencies',
                        'Sampling rate',
                        'Units of measurement',
                    ],
                },
                {
                    question:
                        'Was the task performed by the participant during data collection described?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question: 'Were data normalized to a reference value?',
                    labels: [LABEL_ID_RIGOR],
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question: 'Were signal processing protocols described?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question:
                        'Were operational definitions stated for every measurement that is recorded?',
                    labels: [LABEL_ID_TRANSPARENCY, LABEL_ID_RIGOR],
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question: 'Was sensor placement reported as a potential source of error?',
                    labels: [LABEL_ID_RIGOR],
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question:
                        'Was there transparent reporting of any artifact or outlier data and how it was handled?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No'],
                },
            ],
        },
    ],
};
