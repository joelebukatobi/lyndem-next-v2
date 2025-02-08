'use clinet';

// Next Image
import Image from 'next/image';

// Components
import { Navbar } from '@/main/_components/organisms/Navbar';

// Images
import ServicesHeaderImage from '@/main/_assets/images/services-header-image.png';

export const ServicesHeader = () => {
  return (
    <div className="container-fluid services">
      <div className="services-header">
        <Navbar />
        <div className="container services-header-main">
          <div className="caption">
            <div>
              <p>Our Services</p>
              <hr />
            </div>
            <h3>Discover the unique blend of fun and learning,</h3>
            <p>
              {`   through our curated offerings. We provide enriching experiences for kids that spark creativity & encourage
              social interaction. Explore our services below to find the perfect fit for your child's needs and
              interests.`}
            </p>
          </div>
          <div className="services-header-image">
            <Image
              src={ServicesHeaderImage}
              height={ServicesHeaderImage.height}
              width={ServicesHeaderImage.width}
              alt="desc"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
