/*
nextjs-boilerplate
Copyright 2020-present NAVER Corp.
MIT license
 */

import { useQuery } from '@apollo/react-hooks';

const List = () => {
  /* You may fetch grapqhl query and apply results to the list html below */
  // const { data, loading, error } = useQuery(GET_SOMETHING, {
  //   variables: 'someVar',
  // });

  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">List Page</span>
      </nav>
      <ul className="list-group">
        <li className="list-group-item">data 1</li>
        <li className="list-group-item">data 2</li>
        <li className="list-group-item">data 3</li>
        <li className="list-group-item">data 4</li>
      </ul>
    </>
  );
};

export default List;
