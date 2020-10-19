export const QUESTION_GROUP_ID_PARTICIPANTS = 1;
export const QUESTION_GROUP_ID_GENERAL_INSTRUMENTATION = 2;
export const QUESTION_GROUP_ID_VFSS = 3;
export const QUESTION_GROUP_ID_FEES = 4;
export const QUESTION_GROUP_ID_SENSOR_BASED_INSTRUMENTATION = 5;
export const QUESTION_GROUP_ID_IMAGING_BASED_INSTRUMENTATION = 6;
export const QUESTION_GROUP_ID_PROM = 7;
export const QUESTION_GROUP_ID_TREATMENT = 8;

const participants = {
    id: QUESTION_GROUP_ID_PARTICIPANTS,
    title: 'Participants',
    questions: [
        'Were the details regarding the demographic information of participants/patients reported? (sex/gender, age, race/ethnicity, socioeconomic status, living status, language spoken)',
        'Were the number of participants reported?',
        'Were the participant eligibility criteria reported?',
    ],
};

const generalInstrumentation = {
    id: QUESTION_GROUP_ID_GENERAL_INSTRUMENTATION,
    title: 'General Instrumentation',
    questions: [
        'Was equipment fully reporting in a way that can be reproduced including all testing and archiving equipment used with manufacturer specifications?',
        'Was degree of experience reported?',
        'Was number of raters reported?',
        'Was a validated penetration-aspiration scale used?',
        'If a non-validated scale was utilized, were procedures described adequately for reproducibility?',
    ],
};

const vfss = {
    id: QUESTION_GROUP_ID_VFSS,
    title: 'VFSS',
    questions: [
        'Were details regarding recording settings reported (specifically signal acquisition rate/frame rate)?',
        'Were standard definitions used (i.e. well-defined measures/parameters)?',
    ],
};

const fees = {
    id: QUESTION_GROUP_ID_FEES,
    title: 'FEES',
    questions: [
        'Was a validated secretion scale used?',
        'Was application of non-validated secretion scale described in reproducible manner? ',
        'Was coloring method for bolus trials described for reproducible preparation (i.e., color type, brand, mixture method, amount, etc.)? ',
        'Was type, concentration and quantity of lubrication and/or nasal decongestant described?',
    ],
};

const sensorBasedInstrumentation = {
    id: QUESTION_GROUP_ID_SENSOR_BASED_INSTRUMENTATION,
    title: 'Other Sensor-Based Instrumentation',
    questions: [
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo nulla unde debitis, accusantium, voluptatum expedita rerum aut autem officiis, et sapiente distinctio reiciendis obcaecati a amet dolorem quaerat laboriosam eligendi?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sint tenetur, amet dignissimos rem commodi distinctio quibusdam iure cumque quam, nemo doloremque quas temporibus. Fugit enim voluptates debitis voluptas unde?',
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae rem veniam dolorem laborum ducimus ab voluptas aperiam saepe, numquam optio recusandae voluptates incidunt minus vero sequi iure magni inventore autem?',
    ],
};

const imagingBasedInstrumentation = {
    id: QUESTION_GROUP_ID_IMAGING_BASED_INSTRUMENTATION,
    title: 'Other Imaging-Based Instrumentation',
    questions: [
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo nulla unde debitis, accusantium, voluptatum expedita rerum aut autem officiis, et sapiente distinctio reiciendis obcaecati a amet dolorem quaerat laboriosam eligendi?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sint tenetur, amet dignissimos rem commodi distinctio quibusdam iure cumque quam, nemo doloremque quas temporibus. Fugit enim voluptates debitis voluptas unde?',
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae rem veniam dolorem laborum ducimus ab voluptas aperiam saepe, numquam optio recusandae voluptates incidunt minus vero sequi iure magni inventore autem?',
    ],
};

const prom = {
    id: QUESTION_GROUP_ID_PROM,
    title: 'PROM',
    questions: [
        'Was cognitive competency of the population required to complete the PROM described?',
        'Were literacy/language barriers and/or cultural barriers related to completing the PROM described?',
        'Was the method of PROM completion described? (i.e. telephone/mail/in person)',
        'Was the method of PROM administration described? (i.e. Self/interviewer /by proxy /medical staff administered)',
        'Was timing of the PROM completion relative to study intervention described?',
        'Was blinding of subject/interviewer described?',
        'Has the PROM used in the study been validated?',
    ],
};

const treatment = {
    id: QUESTION_GROUP_ID_TREATMENT,
    title: 'Treatment',
    questions: [
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo nulla unde debitis, accusantium, voluptatum expedita rerum aut autem officiis, et sapiente distinctio reiciendis obcaecati a amet dolorem quaerat laboriosam eligendi?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sint tenetur, amet dignissimos rem commodi distinctio quibusdam iure cumque quam, nemo doloremque quas temporibus. Fugit enim voluptates debitis voluptas unde?',
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae rem veniam dolorem laborum ducimus ab voluptas aperiam saepe, numquam optio recusandae voluptates incidunt minus vero sequi iure magni inventore autem?',
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
