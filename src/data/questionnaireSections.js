export const QUESTIONNAIRE_SECTION_ID_PARTICIPANTS = 1;
export const QUESTIONNAIRE_SECTION_ID_GENERAL_INSTRUMENTATION = 2;
export const QUESTIONNAIRE_SECTION_ID_VFSS = 3;
export const QUESTIONNAIRE_SECTION_ID_FEES = 4;
export const QUESTIONNAIRE_SECTION_ID_SENSOR_BASED_INSTRUMENTATION = 5;
export const QUESTIONNAIRE_SECTION_ID_IMAGING_BASED_INSTRUMENTATION = 6;
export const QUESTIONNAIRE_SECTION_ID_PROM = 7;
export const QUESTIONNAIRE_SECTION_ID_TREATMENT = 8;

const participants = {
    id: QUESTIONNAIRE_SECTION_ID_PARTICIPANTS,
    title: 'Participants',
    questionGroups: [
        {
            questions: [
                {
                    question:
                        'Were details regarding the characteristics of participants/patients reported (i.e., sex, gender, age, race, ethnicity, socioeconomic status, living status, (primary) language spoken)?',
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question: 'Did you know you can select multiple responses?',
                    responseOptions: ['Of course!', 'I was not sure', 'Nope'],
                    isMultipleResponsesAllowed: true,
                },
                {
                    question: 'Was the number of participants reported?',
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question: 'Were the participant eligibility criteria reported?',
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question: 'Did the study involve healthy participants?',
                    responseOptions: ['Yes', 'No', 'N/A'],
                    questionGroups: [
                        {
                            filter: 0,
                            questions: [
                                {
                                    question: 'Were the criteria for health reported and defined?',
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question:
                                        'If there were subgroups within the healthy participants, were these described?',
                                    responseOptions: ['Yes', 'No'],
                                },
                            ],
                        },
                    ],
                },
                {
                    question: 'Did the study involve patient participants?',
                    responseOptions: ['Yes', 'No'],
                    questionGroups: [
                        {
                            filter: 0,
                            questions: [
                                {
                                    question: 'Were the details of patient diagnosis reported?',
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question: 'Was the primary medical diagnosis reported?',
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question: 'Was the time since diagnosis reported?',
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question: 'Did the patients have dysphagia?',
                                    responseOptions: ['Yes', 'No'],
                                    questionGroups: [
                                        {
                                            filter: 0,
                                            questions: [
                                                {
                                                    question:
                                                        'Was the definition of dysphagia related to the study described?',
                                                    responseOptions: ['Yes', 'No'],
                                                },
                                                {
                                                    question:
                                                        'Was the method of confirming dysphagia described?',
                                                    responseOptions: ['Yes', 'No'],
                                                },
                                                {
                                                    question:
                                                        'Were citations regarding validity of the assessment method provided?',
                                                    responseOptions: ['Yes', 'No'],
                                                },
                                                {
                                                    question:
                                                        'Was dysphagia severity and duration described?',
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
            ],
        },
    ],
};

const generalInstrumentation = {
    id: QUESTIONNAIRE_SECTION_ID_GENERAL_INSTRUMENTATION,
    title: 'General Instrumentation',
    questionGroups: [
        {
            questions: [
                {
                    question:
                        'Was equipment fully reporting in a way that can be reproduced including all testing and archiving equipment used with manufacturer specifications?',
                    responseOptions: ['Yes', 'No'],
                },
                { question: 'Was degree of experience reported?', responseOptions: ['Yes', 'No'] },
                { question: 'Was number of raters reported?', responseOptions: ['Yes', 'No'] },
                {
                    question: 'Was a validated penetration-aspiration scale used?',
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question:
                        'If a non-validated scale was utilized, were procedures described adequately for reproducibility?',
                    responseOptions: ['Yes', 'No'],
                },
            ],
        },
    ],
};

const vfss = {
    id: QUESTIONNAIRE_SECTION_ID_VFSS,
    title: 'VFSS',
    questionGroups: [
        {
            questions: [
                {
                    question:
                        'Were details regarding recording settings reported (specifically signal acquisition rate/frame rate)?',
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question:
                        'Were standard definitions used (i.e. well-defined measures/parameters)?',
                    responseOptions: ['Yes', 'No'],
                },
            ],
        },
    ],
};

const fees = {
    id: QUESTIONNAIRE_SECTION_ID_FEES,
    title: 'FEES',
    questionGroups: [
        {
            questions: [
                {
                    question: 'Was a validated secretion scale used?',
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question:
                        'Was application of non-validated secretion scale described in reproducible manner? ',
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question:
                        'Was coloring method for bolus trials described for reproducible preparation (i.e., color type, brand, mixture method, amount, etc.)? ',
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question:
                        'Was type, concentration and quantity of lubrication and/or nasal decongestant described?',
                    responseOptions: ['Yes', 'No'],
                },
            ],
        },
    ],
};

const sensorBasedInstrumentation = {
    id: QUESTIONNAIRE_SECTION_ID_SENSOR_BASED_INSTRUMENTATION,
    title: 'Other Sensor-Based Instrumentation',
    questionGroups: [
        {
            questions: [
                {
                    question:
                        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo nulla unde debitis, accusantium, voluptatum expedita rerum aut autem officiis, et sapiente distinctio reiciendis obcaecati a amet dolorem quaerat laboriosam eligendi?',
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question:
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sint tenetur, amet dignissimos rem commodi distinctio quibusdam iure cumque quam, nemo doloremque quas temporibus. Fugit enim voluptates debitis voluptas unde?',
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question:
                        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae rem veniam dolorem laborum ducimus ab voluptas aperiam saepe, numquam optio recusandae voluptates incidunt minus vero sequi iure magni inventore autem?',
                    responseOptions: ['Yes', 'No'],
                },
            ],
        },
    ],
};

const imagingBasedInstrumentation = {
    id: QUESTIONNAIRE_SECTION_ID_IMAGING_BASED_INSTRUMENTATION,
    title: 'Other Imaging-Based Instrumentation',
    questionGroups: [
        {
            questions: [
                {
                    question:
                        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo nulla unde debitis, accusantium, voluptatum expedita rerum aut autem officiis, et sapiente distinctio reiciendis obcaecati a amet dolorem quaerat laboriosam eligendi?',
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question:
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sint tenetur, amet dignissimos rem commodi distinctio quibusdam iure cumque quam, nemo doloremque quas temporibus. Fugit enim voluptates debitis voluptas unde?',
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question:
                        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae rem veniam dolorem laborum ducimus ab voluptas aperiam saepe, numquam optio recusandae voluptates incidunt minus vero sequi iure magni inventore autem?',
                    responseOptions: ['Yes', 'No'],
                },
            ],
        },
    ],
};

const prom = {
    id: QUESTIONNAIRE_SECTION_ID_PROM,
    title: 'PROM',
    questionGroups: [
        {
            questions: [
                {
                    question:
                        'Was cognitive competency of the population required to complete the PROM described?',
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question:
                        'Were literacy/language barriers and/or cultural barriers related to completing the PROM described?',
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question:
                        'Was the method of PROM completion described? (i.e. telephone/mail/in person)',
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question:
                        'Was the method of PROM administration described? (i.e. Self/interviewer /by proxy /medical staff administered)',
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question:
                        'Was timing of the PROM completion relative to study intervention described?',
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question: 'Was blinding of subject/interviewer described?',
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question: 'Has the PROM used in the study been validated?',
                    responseOptions: ['Yes', 'No'],
                },
            ],
        },
    ],
};

const treatment = {
    id: QUESTIONNAIRE_SECTION_ID_TREATMENT,
    title: 'Treatment',
    questionGroups: [
        {
            questions: [
                {
                    question:
                        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo nulla unde debitis, accusantium, voluptatum expedita rerum aut autem officiis, et sapiente distinctio reiciendis obcaecati a amet dolorem quaerat laboriosam eligendi?',
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question:
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sint tenetur, amet dignissimos rem commodi distinctio quibusdam iure cumque quam, nemo doloremque quas temporibus. Fugit enim voluptates debitis voluptas unde?',
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question:
                        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae rem veniam dolorem laborum ducimus ab voluptas aperiam saepe, numquam optio recusandae voluptates incidunt minus vero sequi iure magni inventore autem?',
                    responseOptions: ['Yes', 'No'],
                },
            ],
        },
    ],
};

export default [
    participants,
    generalInstrumentation,
    vfss,
    fees,
    sensorBasedInstrumentation,
    imagingBasedInstrumentation,
    prom,
    treatment,
];
