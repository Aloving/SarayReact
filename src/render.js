import { TEXT_ELEMENT } from './constants';
import isListener from './utils/isListener';
import isAttribute from './utils/isAttribute';

export default function render(element, parentDom) {
  const { type, props } = element;
  const isTextElement = type === TEXT_ELEMENT;
  const dom = isTextElement
    ? document.createTextNode('')
    : document.createElement(type);

  Object.keys(props)
    .filter(isListener)
    .forEach((name) => {
      const eventType = name.toLowerCase().substring(2);
      dom.addEventListener(eventType, props[name]);
    });

  Object.keys(props)
    .filter(isAttribute)
    .forEach((name) => {
      dom[name] = props[name];
    });

  const childElements = props.children || [];
  childElements.forEach((childElement) => {
    render(childElement, dom);
  });

  parentDom.appendChild(dom);
}
