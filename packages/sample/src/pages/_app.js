import { Fragment } from 'react';
import 'list/List.scss';
import 'bootstrap/dist/css/bootstrap.css';
import MetaHead from '@nextjs-boilerplate/common/src/components/metaHead';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <MetaHead
        title="sample"
        author="naver"
        description="nextjs boilerplate"
      />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
