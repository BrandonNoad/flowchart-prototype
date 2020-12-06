import {
    QUESTIONNAIRE_SECTION_ID_IMAGING_BASED_INSTRUMENTATION,
    LABEL_ID_TRANSPARENCY,
    LABEL_ID_RIGOR,
} from './constants';

export default {
    id: QUESTIONNAIRE_SECTION_ID_IMAGING_BASED_INSTRUMENTATION,
    title:
        'Other Imaging-Based Instrumentation (MRI, fMRI, MEG, computed tomography, scintigraphy, ultrasound, etc.)',
    questionGroups: [
        {
            questions: [
                {
                    question:
                        'Was the task performed by the participant during data collection described?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question:
                        'Were the following aspects of any contrast material utilized described (select all that apply)?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    isMultipleResponsesAllowed: true,
                    responseOptions: [
                        'Dose',
                        'Type ',
                        'Brand or manufacturer',
                        'No contrast material was utilized.',
                    ],
                },
                {
                    question: 'Were participant’s traits for neuroimage exam described?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question: 'Were Regions of Interest (ROIs) localized and identified?',
                    labels: [],
                    responseOptions: ['Yes', 'No'],
                    questionGroups: [
                        {
                            filter: 0,
                            questions: [
                                {
                                    question: 'Were the definitions of ROIs described?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No'],
                                },
                            ],
                        },
                    ],
                },
                {
                    question: 'Was a transducer used?',
                    labels: [],
                    responseOptions: ['Yes', 'No'],
                    questionGroups: [
                        {
                            filter: 0,
                            questions: [
                                {
                                    question:
                                        'Were details regarding placement and calibration described?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No'],
                                },
                            ],
                        },
                    ],
                },
                {
                    question:
                        'Was the process for preparing images or data for post-collection analysis described (includes normalizing, standardizing, converting and/or modifying images and data)?',
                    labels: [],
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question:
                        'Were calculation/average/conversion to determine thresholds, baseline measurements, hemodynamic delays, signal values, etc. reported?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question: 'Were anatomic references/markers used to compare results?',
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
                        'Were number, duration, and type of the tasks/sessions/recordings reported?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question: 'Was the measurement scheme developed for the study reported?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No'],
                },
            ],
        },
    ],
};
