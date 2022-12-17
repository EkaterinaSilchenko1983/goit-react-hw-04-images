import { ThreeDots } from 'react-loader-spinner';
import { LoaderGallery } from './Loader.styled';

export const Loader = () => (
  <LoaderGallery>
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#4fa94d"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  </LoaderGallery>
);
