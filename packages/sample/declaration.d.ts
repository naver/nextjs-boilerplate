declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.gql' {
  import { DocumentNode } from 'graphql';

  const content: DocumentNode;
  export default content;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.gif';
