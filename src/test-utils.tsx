import * as React from 'react';
import ApolloClient from 'apollo-client';
import { InMemoryCache as Cache } from 'apollo-cache-inmemory';

import { ApolloProvider } from './index';
import { mockSingleLink } from './test-links';
export * from './test-links';

export class MockedProvider extends React.Component<any, any> {
  private client: any;

  constructor(props: any, context: any) {
    super(props, context);

    const link = mockSingleLink.apply(null, this.props.mocks);
    this.client = new ApolloClient({
      link,
      cache: new Cache({ addTypename: false }),
      defaultOptions: this.props.defaultOptions,
    });
  }

  render() {
    return <ApolloProvider client={this.client}>{this.props.children}</ApolloProvider>;
  }
}
