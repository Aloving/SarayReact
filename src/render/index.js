import isListener from './isListener';
import isAttribute from './isAttribute';

export default function render(element, parentDom) {
  const { type, props } = element;
  const isTextElement = type === 'TEXT ELEMENT';
  const dom = isTextElement
    ? document.createTextNode('')
    : document.createElement(type);

  Object.keys(props).filter(isListener).forEach((name) => {
    const eventType = name.toLowerCase().substring(2);
    dom.addEventListener(eventType, props[name]);
  });

  Object.keys(props).filter(isAttribute).forEach((name) => {
    dom[name] = props[name];
  });

  const childElements = props.children || [];
  childElements.forEach(childElement => render(childElement, dom));

  parentDom.appendChild(dom);
}
