# nextjs-boilerplate
Next.js boilerplate based on React, GraphQL, yarn workspace, typescript

## Features
- Next.js [Static Generation](https://nextjs.org/docs/basic-features/pages#static-generation-recommended)
- Next.js [SSR](https://nextjs.org/docs/basic-features/pages#server-side-rendering)
- Typescript
- GraphQL with [Apollo Client](https://www.apollographql.com/docs/react/v2.6)
- [Yarn workspace](https://classic.yarnpkg.com/en/docs/workspaces/)
- Sprite images with [webpack-spritesmith](https://www.npmjs.com/package/webpack-spritesmith)
- Scss
- ESLint

## Quickstart
```
yarn install
yarn sample
```

### Main page
> http://localhost:3000

### List page
> http://localhost:3000/list

### API call
> http://localhost:3000/api/monitor/l7check

## Use GraphQL
1. Pass page component as a parameter to withApollo function 

```tsx
import List from '../../components/list';
import { withApollo } from '../../config/apollo';

function ListPage() {
  return <List />;
}

export default withApollo(ListPage);
``` 

2. Use apollo react-hook and apply the result to the component  

```tsx
import { useQuery } from '@apollo/react-hooks';
import GET_SOMETHING from 'graphql/something.gql';

const List = () => {
  const { loading, error, data } = useQuery(GET_SOMETHING, {
    variables: { device: 'someVar' },
  });

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  const { result } = data;

  return result ? <>...</> : null;
};

export default List;

```

# License

```
MIT License

Copyright (c) 2020-present NAVER Corp.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
