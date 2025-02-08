'use clinet';

// Next
import Image from 'next/image';
import Link from 'next/link';

// Icons
import { CalendarDaysIcon, UserIcon } from '@heroicons/react/24/solid';

// Components
import { Button } from '@/main/_components/atoms/Button';

export const BlogCard = ({ src, alt, author, date, title, text }) => {
  return (
    <figure className="blog-landing-card">
      <div className="blog-landing-card--image">
        <Image src={src} height={src.height} width={src.width} alt={alt} />
      </div>
      <div className="blog-landing-card--details">
        <div className="blog-landing-card--author">
          <UserIcon />
          <p>{author}</p>
        </div>
        <div className="blog-landing-card--date">
          <CalendarDaysIcon />
          <p>{date}</p>
        </div>
      </div>
      <figcaption className="blog-landing-card--text">
        <h5>{title}</h5>
        <p>
          {text}
          <Link href="#">...Learn More</Link>
        </p>
      </figcaption>
    </figure>
  );
};
