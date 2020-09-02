/*
nextjs-boilerplate
Copyright 2020-present NAVER Corp.
MIT license
 */

import List from '../../components/list';
import { withApollo } from '../../config/apollo';

function ListPage() {
  return <List />;
}

// To use apollo client, wrap target page with withApollo function
export default withApollo(ListPage);
