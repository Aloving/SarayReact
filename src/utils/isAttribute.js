import isListener from './isListener';

const isAttribute = name => !isListener(name) && name !== 'children';

export default isAttribute;
