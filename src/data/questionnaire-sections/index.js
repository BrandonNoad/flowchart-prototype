import { LABEL_ID_TRANSPARENCY, LABEL_ID_RIGOR } from './constants';
import fees from './fees';
import generalInstrumentation from './generalInstrumentation';
import imagingBasedInstrumentation from './imagingBasedInstrumentation';
import nonInstrumentalAssessmentAndScreening from './nonInstrumentalAssessmentAndScreening';
import participants from './participants';
import prom from './prom';
import sensorBasedInstrumentation from './sensorBasedInstrumentation';
import treatment from './treatment';
import universallyApplicableQuestions from './universallyApplicableQuestions';
import vfss from './vfss';

export const labels = [
    {
        id: LABEL_ID_TRANSPARENCY,
        label: 'Transparency',
    },
    {
        id: LABEL_ID_RIGOR,
        label: 'Rigor',
    },
];

export default [
    fees,
    generalInstrumentation,
    imagingBasedInstrumentation,
    nonInstrumentalAssessmentAndScreening,
    participants,
    prom,
    sensorBasedInstrumentation,
    treatment,
    universallyApplicableQuestions,
    vfss,
];
