const { createElement } = require('react');
const  { Modal } = require('remax/one');

export default function createPortal(element) {
  console.log(Modal);
  return createElement(Modal, null, element);
}
