'use clinet';

// Next Image
import Image from 'next/image';

// Components
import { Navbar } from '@/main/_components/organisms/Navbar';

// Images
import BlogImageOne from '@/main/_assets/images/blog-image-one.png';

export const AboutHeader = () => {
  return (
    <div className="container-fluid about">
      <div className="about-header">
        <Navbar />
        <div className="container about-header-main">
          <div className="caption">
            <div>
              <p>About Us</p>
              <hr />
            </div>
            <h3>We are an interactive educational establishment. </h3>
          </div>
          <div className="about-header-text">
            <p>
              <strong>
                Lyndem Educational Games Cafe is a child-centred Cafe that engenders learning through the art of play.
                It is the brainchild of Mrs. Bassey Onwuanaku
              </strong>{' '}
              who wandered into and discovered the joy of board gaming in her search for ways to help her first child
              nurture her kinesthetic approach to learning.
            </p>
          </div>
          <div className="about-header-image">
            <Image src={BlogImageOne} height={BlogImageOne.height} width={BlogImageOne.width} />
          </div>
        </div>
      </div>
    </div>
  );
};
