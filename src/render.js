import reconcile from './reconsile';

let rootInstance = null;

export default function render(element, container) {
  const prevInstance = rootInstance;
  const nextInstance = reconcile(container, prevInstance, element);
  rootInstance = nextInstance;
}
