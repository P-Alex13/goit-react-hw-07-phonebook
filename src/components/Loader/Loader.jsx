import ThreeDots from 'react-loader-spinner';

import { LoaderWrapp } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderWrapp>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#ff0d00"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </LoaderWrapp>
  );
};
export default Loader;
