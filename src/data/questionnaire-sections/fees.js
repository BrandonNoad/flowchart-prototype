import { QUESTIONNAIRE_SECTION_ID_FEES } from './constants';

export default {
    id: QUESTIONNAIRE_SECTION_ID_FEES,
    title: 'Fiberoptic Endoscopic Evaluation of Swallowing (FEES)',
    questionGroups: [
        {
            heading: 'Assessment of Secretions',
            questions: [
                {
                    question: 'Was a validated secretion scale used?',
                    responseOptions: ['Yes', 'No'],
                },
            ],
            questionGroups: [
                {
                    filter: 1,
                    questions: [
                        {
                            question:
                                'Was application of non-validated secretion scale described in a reproducible manner?',
                            responseOptions: ['Yes', 'No'],
                        },
                    ],
                },
            ],
        },
        {
            heading: 'Dye',
            questions: [
                {
                    question:
                        'Was coloring method for bolus trials described for reproducible preparation (i.e., color type, brand, mixture method, amount, etc.)?',
                    responseOptions: ['Yes', 'No'],
                },
            ],
        },
        {
            heading: 'Lubrication',
            questions: [
                {
                    question:
                        'Were the following aspects of lubrication and/or nasal decongestant described (select all that apply)?',
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
                    question: 'Was the protocol for describing anatomical abnormalities reported?',
                    responseOptions: ['Yes', 'No'],
                },
            ],
        },
        {
            heading: 'Assessment of Safety',
            questions: [
                {
                    question: 'Was a validated penetration-aspiration scale used for FEES?',
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question:
                        'If a non-validated scale was utilized, were procedures described for reproducibility?',
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question:
                        'Was application of the safety rating scale described in a reproducible manner (i.e., bolus level, swallow level, worst verse mean, etc.)?',
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question:
                        'Was timing of safety impairment (I.e., before, during or after the swallow) acknowledged?',
                    responseOptions: ['Yes', 'No'],
                },
            ],
        },
        {
            heading: 'Assessment of Efficiency',
            questions: [
                {
                    question: 'Was a validated residue scale used for FEES?',
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question:
                        'If a non-validated scale was utilized, were procedures described for reproducibility?',
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question:
                        'Was application of residue rating scale described in a reproducible manner (i.e., bolus level, swallow level, region, etc.)?',
                    responseOptions: ['Yes', 'No'],
                },
            ],
        },
    ],
};
