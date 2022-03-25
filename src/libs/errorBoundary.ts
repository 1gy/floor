import { createElement } from "react";
import {
  Component,
  ComponentType,
  PropsWithChildren,
  PropsWithRef,
} from "react";

export type FallbackProps = {
  error: Error;
};

type ErrorBoundaryProps = {
  fallback: ComponentType<FallbackProps>;
};

type ErrorBoundaryState = {
  error: Error | null;
};

const initialState: ErrorBoundaryState = { error: null };

export class ErrorBoundary extends Component<
  PropsWithRef<PropsWithChildren<ErrorBoundaryProps>>,
  ErrorBoundaryState
> {
  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  state = initialState;

  render() {
    const { error } = this.state;
    const { fallback } = this.props;

    if (error != null) {
      return createElement(fallback, { error }, null);
    }
    return this.props.children;
  }
}
