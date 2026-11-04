// Bundle entry shared by all JavaScript hosts. The build script generates `__generated__/scripts.js`
// (vBook scripts after the async transform) and aliases it here.
import { VBookEngine } from '../runtime/engine.js';
import { META, SCRIPTS } from '__generated__/scripts.js';

export { META };
export function create(host) { return new VBookEngine({ meta: META, scripts: SCRIPTS, host }); }
