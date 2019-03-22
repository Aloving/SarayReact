import isListener from './utils/isListener';
import isAttribute from './utils/isAttribute';

export default function updateDomProperties(dom, prevProps = {}, nextProps = {}) {
  // Remove event listeners
  Object.keys(prevProps)
    .filter(isListener)
    .forEach((name) => {
      const eventType = name.toLowerCase().substring(2);
      dom.removeEventListener(eventType, prevProps[name]);
    });

  // Remove attributes
  Object.keys(prevProps)
    .filter(isAttribute)
    .forEach((name) => {
      dom[name] = null;
    });

  // Set attributes
  Object.keys(nextProps)
    .filter(isAttribute)
    .forEach((name) => {
      dom[name] = nextProps[name];
    });

  // Add event listeners
  Object.keys(nextProps)
    .filter(isListener)
    .forEach((name) => {
      const eventType = name.toLowerCase().substring(2);
      dom.addEventListener(eventType, nextProps[name]);
    });
}
