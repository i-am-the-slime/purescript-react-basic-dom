import ReactDOM from "react-dom";
const createRoot_ = ReactDOM.createRoot || ReactDOM.unstable_createRoot;
const createBlockingRoot =
  ReactDOM.createBlockingRoot || ReactDOM.unstable_createBlockingRoot;

export function createRoot(element) {
  return () => createRoot_(element);
}

export function createBlockingRoot(element) {
  return () => createBlockingRoot(element);
}

export function renderRoot(root) {
  return (jsx) => () => root.render(jsx);
}
