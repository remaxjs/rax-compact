import * as React from 'react';

function traverseChildren(children: React.ReactChildren, result: any) {
  if (Array.isArray(children)) {
    for (let i = 0, l = children.length; i < l; i++) {
      traverseChildren(children[i], result);
    }
  } else {
    result.push(children);
  }
}

export default function flattenChildren(children: React.ReactChildren) {
  if (children == null) {
    return children;
  }
  const result: any = [];
  traverseChildren(children, result);

  // If length equal 1, return the only one.
  return result.length - 1 ? result : result[0];
}
