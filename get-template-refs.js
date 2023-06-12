/**
 * Finds all elements with id attribute.
 * @param {HTMLElement} element
 * @returns {string|HTMLElement}
 */
export default function getTemplateRefs(element) {
  return new Proxy({}, {
    get(target, refName) {
      if (!target[refName]) {
        const ref = element.querySelector(`[id=${refName}]`);
        target[refName] = ref instanceof HTMLTemplateElement ? ref.content.cloneNode(true) : ref;
      }
      return target[refName];
    }
  })
};
