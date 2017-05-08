import { get, find } from 'lodash';

// page getters
export function getSelectedPage(state) {
  return get(state, 'transient.selectedPage');
}

export function getPages(state) {
  return get(state, 'persistent.workpad.pages');
}

export function getPageById(state, id) {
  return find(getPages(state), { id });
}

// element getters
export function getSelectedElement(state) {
  return get(state, 'transient.selectedElement');
}

export function getElements(state, pageId = null) {
  const id = pageId || getSelectedPage(state);
  if (!id) return [];

  const page = getPageById(state, id);
  return (!page) ? [] : page.elements;
}

export function getElementById(state, id) {
  return find(getElements(state), { id });
}

export function getResolvedArgs(state, elementId) {
  if (!elementId) return null;
  return get(state, ['transient', 'resolvedArgs', elementId]);
}

export function getSelectedResolvedArgs(state) {
  return getResolvedArgs(state, state.transient.selectedElement);
}
