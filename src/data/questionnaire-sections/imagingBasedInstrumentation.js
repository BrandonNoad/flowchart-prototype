import { QUESTIONNAIRE_SECTION_ID_IMAGING_BASED_INSTRUMENTATION } from './constants';

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
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question:
                        'Were the following aspects of any contrast material utilized described (select all that apply)?',
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
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question: 'Were Regions of Interest (ROIs) localized and identified?',
                    responseOptions: ['Yes', 'No'],
                    questionGroups: [
                        {
                            filter: 0,
                            questions: [
                                {
                                    question: 'Were the definitions of ROIs described?',
                                    responseOptions: ['Yes', 'No'],
                                },
                            ],
                        },
                    ],
                },
                {
                    question: 'Was a transducer used?',
                    responseOptions: ['Yes', 'No'],
                    questionGroups: [
                        {
                            filter: 0,
                            questions: [
                                {
                                    question:
                                        'Were details regarding placement and calibration described?',
                                    responseOptions: ['Yes', 'No'],
                                },
                            ],
                        },
                    ],
                },
                {
                    question:
                        'Was the process for preparing images or data for post-collection analysis described (includes normalizing, standardizing, converting and/or modifying images and data)?',
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question:
                        'Were calculation/average/conversion to determine thresholds, baseline measurements, hemodynamic delays, signal values, etc. reported?',
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question: 'Were anatomic references/markers used to compare results?',
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question: 'Were signal processing protocols described?',
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question:
                        'Were number, duration, and type of the tasks/sessions/recordings reported?',
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question: 'Was the measurement scheme developed for the study reported?',
                    responseOptions: ['Yes', 'No'],
                },
            ],
        },
    ],
};
