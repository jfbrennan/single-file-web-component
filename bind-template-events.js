/**
 * Replaces descendents' `onevent` attributes with an event listener of the same type.
 * The event callback will be the `element`'s method as named by the onevent attribute.
 * If no method with that name is found, the event listener is not created and the onevent attribute will remain untouched.
 *
 * If `element` has a shadow DOM, its descendents will be searched instead.
 * @param {HTMLElement} element
 * @returns void
 */
export default function bindTemplateEvents(element) {
  for (const el of (element.shadowRoot || element).querySelectorAll('*')) {
    for (const attr of el.attributes) {
      if (attr.name.startsWith('on')) {
        if (!element[attr.value] || typeof element[attr.value] !== 'function') {
          console.error(`Failed to add event listener. Template sets event to unsupported method: ${attr.name}="${attr.value}"`);
          return
        }

        attr.ownerElement.addEventListener(attr.name.substring(2), e => element[attr.value](e));
        attr.ownerElement[attr.name] = undefined;
      }
    }
  }
}