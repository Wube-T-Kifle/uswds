import { Formio } from 'formiojs/formio.form.js';

/** HACK TO GET VIEWER TO WORK. **/
const Input = Formio.Components.components.input;
Input.prototype.isFirefox = function() {
  return typeof InstallTrigger !== 'undefined';
};

Input.prototype.isIE = function() {
  return /*@cc_on!@*/false || !!document.documentMode;
};

import USWDS from '@formio/uswds';
import VPAT from '@formio/vpat';
import Premium from '@formio/premium';

// Use modules.
Formio.use([USWDS, VPAT, Premium]);
Formio.Templates.framework = 'uswds';
