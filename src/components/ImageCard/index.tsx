import { BaseCard } from '../BaseCard';
import './styles.css';

type ImageCardProps = {
    title: string;
    imageUrl: string;
    linkUrl: string;
};

export const ImageCard = ({ title, imageUrl, linkUrl }: ImageCardProps) => (
    <BaseCard className="card-project-img" shadowDirection="right">
      <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="image-link">
        <img 
          src={imageUrl} 
          alt={title}
          className="project-image"
        />
      </a>
    </BaseCard>
  );


