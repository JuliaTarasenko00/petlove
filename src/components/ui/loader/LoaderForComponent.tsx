import { ColorRing } from 'react-loader-spinner';

export const LoaderForComponents = () => {
  return (
    <ColorRing
      visible={true}
      height="30"
      width="30"
      wrapperStyle={{}}
      colors={['#f6b83d', '#f6b83d', '#f6b83d', '#f6b83d', '#f6b83d']}
    />
  );
};
