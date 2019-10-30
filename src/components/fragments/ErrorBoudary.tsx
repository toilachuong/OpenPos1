import React, { Component } from 'react';

interface IErrorBoundaryProps {}
interface IErrorBoundaryState {
  hasError: Boolean;
}

export class ErrorBoundary extends Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: {}) {
    super(props);
    this.state = {
      hasError: false
    };
  }
  public componentDidCatch(error: any, info: any) {
    console.log('FOUND ERROR!', [error, info]);
    this.setState({
      hasError: true
    });
  }
  public render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Sorry, something went wrong!</h1>
          <div>Please Refresh Your Page To Reload</div>
        </div>
      );
    }
    return this.props.children;
  }
}
