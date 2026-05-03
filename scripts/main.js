import { initNavigation } from './navigation.js';
import { initStages, initSources, initFileBuilder, initChecklist, initResources, initAccordion } from './interactions.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initStages();
  initSources();
  initFileBuilder();
  initChecklist();
  initResources();
  initAccordion();
});
