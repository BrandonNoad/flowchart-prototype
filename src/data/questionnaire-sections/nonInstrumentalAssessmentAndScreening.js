import { QUESTIONNAIRE_SECTION_ID_NON_INSTRUMENTAL_ASSESSMENT_AND_SCREENING } from './constants';

export default {
    id: QUESTIONNAIRE_SECTION_ID_NON_INSTRUMENTAL_ASSESSMENT_AND_SCREENING,
    title: 'Non-Instrumental Assessment and Screening',
    questionGroups: [
        {
            questions: [
                {
                    question:
                        'Was the non-instrumental swallowing assessment or screening tool validated?',
                    responseOptions: ['Yes', 'No'],
                    questionGroups: [
                        {
                            filter: 0,
                            questions: [
                                {
                                    question: 'Was the validation study referenced in the text?',
                                    responseOptions: ['Yes', 'No'],
                                },
                            ],
                        },
                        {
                            filter: 1,
                            questions: [
                                {
                                    question:
                                        'Was the bolus protocol of the assessment procedure described?',
                                    responseOptions: ['Yes', 'No'],
                                },
                            ],
                        },
                    ],
                },
                {
                    question: 'Was inter and intra-rater reliability reported?',
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question: 'Were outcomes validated with instrumentation?',
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question: 'Was sensitivity/specificity data reported?',
                    responseOptions: ['Yes', 'No', 'N/A'],
                },
                {
                    question: 'Were all outcomes of the tool listed and described?',
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question: 'Was the scale, metric, or criteria for each outcome described?',
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question: 'Was training of raters described?',
                    responseOptions: ['Yes', 'No'],
                },
            ],
        },
    ],
};
