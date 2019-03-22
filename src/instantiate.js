import isListener from './utils/isListener';
import isAttribute from './utils/isAttribute';
import updateDomProperties from './updateDomProperties';

import { TEXT_ELEMENT } from './constants';

export default function instantiate(element) {
  const { type, props = {} } = element;

  // Create DOM element
  const isTextElement = type === TEXT_ELEMENT;
  const dom = isTextElement
    ? document.createTextNode('')
    : document.createElement(type);

  updateDomProperties(dom, [], props);

  // Add event listeners
  Object.keys(props)
    .filter(isListener)
    .forEach((name) => {
      const eventType = name.toLowerCase().substring(2);
      dom.addEventListener(eventType, props[name]);
    });

  // Set properties
  Object.keys(props)
    .filter(isAttribute)
    .forEach((name) => {
      dom[name] = props[name];
    });

  // Instantiate and append children
  const childElements = props.children || [];
  const childInstances = childElements.map(instantiate);
  const childDoms = childInstances.map((childInstance) => childInstance.dom);
  childDoms.forEach((childDom) => {
    dom.appendChild(childDom);
  });

  const instance = { dom, element, childInstances };
  return instance;
}
