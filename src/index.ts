import { createElement } from 'react';
import { Modal } from 'remax/one';
import flattenChildren from './flattenChildren';

export {
  Children,
  createRef,
  Component,
  PureComponent,
  createContext,
  forwardRef,
  lazy,
  memo,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useDebugValue,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
  Fragment,
  Profiler,
  StrictMode,
  Suspense,
  createElement,
  cloneElement,
  isValidElement,
  version,
  createFactory,
} from 'react';

export function render() {}

export const shared = {
  flattenChildren
};

export function createPortal(element: any) {
  return createElement(Modal, null, element);
}
