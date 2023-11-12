import { ReactElement, ReactNode, createElement, Fragment } from "react";

type Component<P extends {}> = Parameters<typeof createElement<P>>[0];

export default function compose<P extends { children: ReactNode }>(
  ...components: Component<P>[]
) {
  return function ComposedComponent(props: P): ReactElement | null {
    const { children, ...restProps } = props;
    if (components.length === 0) {
      return createElement(Fragment, restProps, children);
    }

    return components.slice(0, -1).reduceRight((acc, Comp) => {
      return createElement<P>(Comp, restProps as P, acc);
    }, createElement(components[components.length - 1], restProps as P, children));
  };
}
