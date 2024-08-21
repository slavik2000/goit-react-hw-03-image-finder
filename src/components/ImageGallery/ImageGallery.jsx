// import React, { Component } from 'react';
// import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
// import { Button } from '../Button/Button';
// import { Loader } from '../Loader/Loader';
// import css from './ImageGallery.module.css';

// export class ImageGallery extends Component {
//   handleLoadMore = () => {
//     this.props.onLoadMore();
//   };

//   render() {
//     const { images, isLoading, totalImages } = this.props;
//     const { query } = this.props;

//     return (
//       <div>
//         {images.length > 0 && (
//           <ul className={css.ImageGallery}>
//             {images.map(image => (
//               <ImageGalleryItem key={image.id} imageUrl={image.webformatURL} />
//             ))}
//           </ul>
//         )}

//         {isLoading && <Loader />}

//         {images.length > 0 && !isLoading && totalImages > images.length && (
//           <Button onClick={this.handleLoadMore}>Load more</Button>
//         )}

//         {query && images.length === 0 && !isLoading && (
//           <p className={css.Message}>
//             Sorry! No images were found. Try another keyword for what you are
//             seeking! <br />
//             😊
//           </p>
//         )}
//       </div>
//     );
//   }
// }

// ImageGallery.defaultProps = {
//   perPage: 12,
// };



import React from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from '../Button/Button';
import { Loader } from '../Loader/Loader';
import css from './ImageGallery.module.css';

export const ImageGallery = ({
  images,
  isLoading,
  totalImages,
  query,
  onLoadMore,
}) => {
  const handleLoadMore = () => {
    onLoadMore();
  };

  return (
    <div>
      {images.length > 0 && (
        <ul className={css.ImageGallery}>
          {images.map(image => (
            <ImageGalleryItem key={image.id} imageUrl={image.webformatURL} />
          ))}
        </ul>
      )}

      {isLoading && <Loader />}

      {images.length > 0 && !isLoading && totalImages > images.length && (
        <Button onClick={handleLoadMore}>Load more</Button>
      )}

      {query && images.length === 0 && !isLoading && (
        <p className={css.Message}>
          Sorry! No images were found. Try another keyword for what you are
          seeking! <br />
          😊
        </p>
      )}
    </div>
  );
};

ImageGallery.defaultProps = {
  perPage: 12,
};











// import React from 'react';
// import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
// import { Button } from '../Button/Button';
// import { Loader } from '../Loader/Loader';
// import css from './ImageGallery.module.css';

// export const ImageGallery = ({
//   images,
//   isLoading,
//   totalImages,
//   query,
//   onLoadMore,
// }) => {
//   const handleLoadMore = () => {
//     onLoadMore();
//   };

//   return (
//     <div>
//       {images.length > 0 && (
//         <ul className={css.ImageGallery}>
//           {images.map(image => (
//             <ImageGalleryItem key={image.id} imageUrl={image.webformatURL} />
//           ))}
//         </ul>
//       )}

//       {isLoading && <Loader />}

//       {images.length > 0 && !isLoading && totalImages > images.length && (
//         <Button onClick={handleLoadMore}>Load more</Button>
//       )}

//       {query && images.length === 0 && !isLoading && (
//         <p className={css.Message}>
//           Sorry! No images were found. Try another keyword for what you are
//           seeking! <br />
//           😊
//         </p>
//       )}
//     </div>
//   );
// };

// ImageGallery.defaultProps = {
//   perPage: 12,
// };




// import React from 'react';
// import PropTypes from 'prop-types';
// import { List } from './ImageGallery.styled';

// import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

// export const ImageGallery = ({ images }) => {
//   return (
//     <List>
//       {images.map(image => (
//         <ImageGalleryItem key={image.id} image={image} />
//       ))}
//     </List>
//   );
// };

// ImageGallery.propTypes = {
//   images: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//     })
//   ).isRequired,
// };

// export default ImageGallery;