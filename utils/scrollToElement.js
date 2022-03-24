import getOffset from './getOffset';
import { NAVIGATION_HEIGHT } from './constants';

const scrollToElement = elementId => {
  const domElement = document.getElementById(elementId);
  const { top } = getOffset(domElement);

  const clearedTop = top - NAVIGATION_HEIGHT;
  event.preventDefault();
  window.scrollTo(0, clearedTop);
};

export default scrollToElement;
