import * as React from 'react';

interface ILoadingProps {
  isLoading: boolean
}

const Loading: React.FunctionComponent<ILoadingProps> = (props) => {
  return <div className="">Loading ...</div>;
};

export default Loading;
