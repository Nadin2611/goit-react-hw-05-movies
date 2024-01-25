import { BASE_URL } from 'pages/MovieDetailsPage';
import { defaultImageActor } from 'service/defaultImages';

import {
  ActorImageContainer,
  ImageList,
  ImageItem,
  Image,
} from './ActorImages.styled';

const ActorImages = ({ images }) => {
  return (
    <ActorImageContainer>
      <h2>Gallery</h2>
      <ImageList>
        {images.map((image, index) => {
          const imageURL = `${BASE_URL}${image.file_path}`;
          return (
            <ImageItem key={index}>
              <Image
                src={image.file_path ? imageURL : defaultImageActor}
                alt="actor-foto"
                width="80"
                height="150"
              />
            </ImageItem>
          );
        })}
      </ImageList>
    </ActorImageContainer>
  );
};

export default ActorImages;
