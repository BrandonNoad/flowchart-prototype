import { QUESTIONNAIRE_SECTION_ID_UNIVERSALLY_APPLICABLE_QUESTIONS } from './constants';

export default {
    id: QUESTIONNAIRE_SECTION_ID_UNIVERSALLY_APPLICABLE_QUESTIONS,
    title: 'Universally Applicable Questions',
    questionGroups: [
        {
            questions: [
                {
                    question:
                        'Was the swallowing bolus administration protocol for the instrumental assessment detailed?',
                    responseOptions: ['Yes', 'No'],
                    questionGroups: [
                        {
                            filter: 0,
                            questions: [
                                {
                                    question:
                                        'Was there a description of bolus consistencies (i.e., rheology, IDDSI level, other validated measure)?',
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question: 'Was there a description of bolus volume?',
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question:
                                        'Was there a description of number of trials per consistency & volume?',
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question:
                                        'Was there a description of method of administration (i.e. cup sip, spoon-delivered, straw, tube-placed, self- vs clinician administered)?',
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question: 'Was there a description of cueing and instruction?',
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question: 'Was the manufacturer of the stimuli described?',
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question: 'Was the order of bolus administration described?',
                                    responseOptions: ['Yes', 'No'],
                                },
                            ],
                        },
                    ],
                },
                {
                    question: 'Was there more than one rater?',
                    responseOptions: ['Yes', 'No'],
                    questionGroups: [
                        {
                            filter: 0,
                            questions: [
                                {
                                    question: 'Were inter-rater reliability statistics reported?',
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question: 'Were intra-rater reliability statistics reported?',
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question: 'Were discrepancy processes addressed?',
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question:
                                        'Were raters blinded to participant ID/group assignment?',
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question: 'Were raters blinded to timepoint/condition?',
                                    responseOptions: ['Yes', 'No'],
                                },
                            ],
                        },
                    ],
                },
                {
                    question: 'Were the participants blinded to their condition?',
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question: 'Was drop-out (attrition) rate reported?',
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question:
                        'Were the training and/or credentials of all individuals involved in data collection and/or analysis reported?',
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question:
                        'Were the statistical tests/methods used appropriately for the type of data collected (e.g. categorical, ordinal, continuous)?',
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question: 'Was the positioning of the participant described?',
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question: 'Were the environmental conditions reported?',
                    responseOptions: ['Yes', 'No'],
                },
            ],
        },
    ],
};
