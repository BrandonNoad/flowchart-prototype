import { QUESTIONNAIRE_SECTION_ID_VFSS, LABEL_ID_TRANSPARENCY, LABEL_ID_RIGOR } from './constants';

export default {
    id: QUESTIONNAIRE_SECTION_ID_VFSS,
    title: 'Videofluoroscopic Swallow Study (VFSS)',
    questionGroups: [
        {
            questions: [
                {
                    question: 'Was barium or contrast material used?',
                    labels: [],
                    responseOptions: ['Yes', 'No'],
                    questionGroups: [
                        {
                            filter: 0,
                            questions: [
                                {
                                    question:
                                        'Were details regarding name/brand/type of barium (or other contrast) reported?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question:
                                        'Were details regarding barium (or other contrast) concentration reported?',
                                    labels: [LABEL_ID_TRANSPARENCY],
                                    responseOptions: ['Yes', 'No'],
                                },
                                {
                                    question:
                                        'Was the same concentration of barium used across trials?',
                                    labels: [LABEL_ID_RIGOR],
                                    responseOptions: ['Yes', 'No'],
                                },
                            ],
                        },
                    ],
                },
                {
                    question:
                        'Were details regarding recording settings reported (specifically signal acquisition rate/frame rate)?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question:
                        'Was the timing of ratings reported on (e.g., at the time of evaluation versus after the evaluation)?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No'],
                    questionGroups: [
                        {
                            filter: 0,
                            questions: [
                                {
                                    question:
                                        'Were ratings of the recorded signals made at the time of evaluation or after the evaluation?',
                                    labels: [LABEL_ID_RIGOR],
                                    responseOptions: ['Yes', 'No'],
                                },
                            ],
                        },
                    ],
                },
                {
                    question:
                        'Were standard definitions used (i.e. well-defined measures/parameters)?',
                    labels: [LABEL_ID_RIGOR],
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question:
                        'Were the tool(s)/method/standard protocol used reported (i.e. MBSImP, ASPEKT, DIGEST)?',
                    labels: [LABEL_ID_RIGOR],
                    responseOptions: ['Yes', 'No'],
                },
            ],
        },
        {
            heading: 'Assessment of Safety',
            questions: [
                {
                    question: 'Was a validated penetration-aspiration scale used for VFSS?',
                    labels: [LABEL_ID_RIGOR],
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question:
                        'If a non-validated scale was utilized, were procedures described for reproducibility?',
                    labels: [LABEL_ID_TRANSPARENCY, LABEL_ID_RIGOR],
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question:
                        'Was application of the safety rating scale described in a reproducible manner (i.e., bolus level, swallow level, worst versus mean/median, etc.)?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question: 'Was the frequency of safety impairment during VFSS acknowledged?',
                    labels: [LABEL_ID_RIGOR],
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question:
                        'Was timing of safety impairment (I.e., before, during or after the swallow) acknowledged?',
                    labels: [LABEL_ID_RIGOR],
                    responseOptions: ['Yes', 'No'],
                },
            ],
        },
        {
            heading: 'Assessment of Efficiency',
            questions: [
                {
                    question: 'Was a validated residue scale used for VFSS?',
                    labels: [LABEL_ID_RIGOR],
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question:
                        'If a non-validated scale was utilized, were procedures described for reproducibility?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No'],
                },
                {
                    question:
                        'Was application of residue rating scale described in a reproducible manner (i.e., bolus level, swallow level, region, etc.)?',
                    labels: [LABEL_ID_TRANSPARENCY],
                    responseOptions: ['Yes', 'No'],
                },
            ],
        },
    ],
};
