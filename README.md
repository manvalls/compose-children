# Compose Children

Compose for react components:

```javascript
import composeChildren from "compose-children";

type ComposedComponentProps = Component1Props &
  Component2Props &
  Component3Props;

const ComposedComponent = composeChildren<ComposedProps>(
  Component1,
  Component2,
  Component3,
);
```

The above is equivalent to:

```javascript
type ComposedComponentProps = Component1Props &
  Component2Props &
  Component3Props;

const ComposedComponent = ({ children, ...props }: ComposedProps) => (
  <Component1 {...props}>
    <Component2 {...props}>
      <Component3 {...props}>{children}</Component3>
    </Component2>
  </Component1>
);
```
