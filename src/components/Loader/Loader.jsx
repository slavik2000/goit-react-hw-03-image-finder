import { RotatingSquare } from 'react-loader-spinner';
import { WrapperLoader } from './Loader.styled';

export const Loader = () => (
  <WrapperLoader>
    <RotatingSquare
      visible={true}
      height="100"
      width="100"
      color="#4fa94d"
      ariaLabel="rotating-square-loading"
      wrapperStyle={{}}
    />
  </WrapperLoader>
);
