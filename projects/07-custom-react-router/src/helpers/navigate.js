import { EVENTS } from '../constants/events';
export function navigate(href) {
  window.history.pushState({}, '', href);
  //custom event
  const navigationEvent = new Event(EVENTS.PUSH_PATH);
  window.dispatchEvent(navigationEvent);
}
