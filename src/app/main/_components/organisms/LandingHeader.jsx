'use clinet';

// Next
import Image from 'next/image';

// Components
import { Button } from '@/main/_components/atoms/Button';
import { Navbar } from '@/main/_components/organisms/Navbar';

// Images
import LandingHeaderImage from '@/main/_assets/images/landing-header-image.png';
import LandingHeaderImageMobile from '@/main/_assets/images/landing-header-image-mobile.png';

// Icons
import { PlayCircleIcon } from '@heroicons/react/24/solid';

export const LandingHeader = () => {
  return (
    <div className="container-fluid">
      <div className="landing-header">
        <Navbar />
        <div className="landing-header-image">
          <Image
            src={LandingHeaderImage}
            height={LandingHeaderImage.height}
            width={LandingHeaderImage.width}
            alt="Landing Image"
          />{' '}
          <Image
            src={LandingHeaderImageMobile}
            height={LandingHeaderImageMobile.height}
            width={LandingHeaderImageMobile.width}
            alt="Landing Image"
          />
        </div>
        <div className="landing-header-content ">
          <h1>Lyndem Edutainment</h1>
          <h4>
            Is an educational service provider that engenders learning through the art of interactive play using
            educational games and activities
          </h4>
          <ul>
            <li>
              <Button>What We Do</Button>
            </li>
            <li>
              <Button>
                <PlayCircleIcon />
                Play Video
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
