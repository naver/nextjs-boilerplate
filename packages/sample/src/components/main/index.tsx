/*
nextjs-boilerplate
Copyright 2020-present NAVER Corp.
MIT license
 */

import Link from 'next/link';

interface IProps {
  name: string;
}
const SampleMain = (props: IProps) => {
  const { name } = props;

  return (
    <div className="jumbotron">
      <h1 className="display-4">Hello, {name}!</h1>
      <p className="lead">This is next.js boilerplate</p>
      <hr className="my-4" />
      <p>
        you can use react, typescript, graphql, yarn workspace in this
        boilerplate
      </p>
      <Link href="/list" as="/list">
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Go to sample list page
        </a>
      </Link>
    </div>
  );
};

export default SampleMain;
