// Next
import Image from 'next/image';

// Component
import { Button } from '@/main/_components/atoms/Button';
import { SectionContent } from '@/main/_components/organisms/SectionContent';
import { SectionMedia } from '@/main/_components/molecules/SectionMedia';
import { SectionText } from '@/main/_components/molecules/SectionText';
import { BlogCard } from '@/main/_components/organisms/BlogCard';

// Image
import LandingAboutImage from '@/main/_assets/images/landing-about-image.png';
import LandingMissionImage from '@/main/_assets/images/landing-mission-image.png';
import EduGamingCafe from '@/main/_assets/images/edugaming-cafe-image.png';
import GameSchooling from '@/main/_assets/images/game-schooling-image.png';
import PlayDates from '@/main/_assets/images/play-dates-image.png';
import BlogCardImage from '@/main/_assets/images/blog-image-one.png';

// Icons
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <>
      {/* Landing | About Us */}
      <div className="landing-about">
        <SectionContent>
          <SectionMedia src={LandingAboutImage} />
          <SectionText
            caption={`About Us`}
            heading={`We Are an Interactive Educational Establishment`}
            button={`Learn More`}
            text={`Where learning is engendered through the art of play. We stimulate children to discover their intellectual abilities by exposing them to educational table top games of different sorts. We take advantage of their innate desire to learn to stir up interests in a variety of topics.`}
          />
        </SectionContent>
      </div>

      {/* Landing | Our Mission */}
      <div className="our-mission">
        <SectionContent>
          <SectionText
            caption={`Our Mission`}
            heading={`Edutainment is the synthesis of learning and fun. `}
            text={`Our main purpose therefore is to infuse fun into the learning process, thus making it an enjoyable experience for kids so they become eager learners hence our motto "Learning Made Fun"`}
          />
          <SectionMedia src={LandingMissionImage} />
        </SectionContent>
      </div>

      {/* Landing | What We Do */}
      <div className="container wwd">
        <div className="caption">
          <div className="caption-top">
            <span>What We Do</span>
            <hr />
          </div>
          <h3>Our activities are designed to nurture intellectual growth</h3>
        </div>
        <div className="row">
          <div className="wwd-card">
            <div className="wwd-image">
              <Image src={EduGamingCafe} alt="desc" />
            </div>
            <div className="wwd-content">
              <h4>EduGaming Cafe</h4>
              <p>
                Our Educational Games Cafe affords kids the opportunity to interact with board, card, and electronic
                educational games and also like minded peers.
              </p>
              <Button>Learn More</Button>
            </div>
          </div>
          <div className="wwd-card">
            <div className="wwd-image">
              <Image src={GameSchooling} alt="desc" />
            </div>
            <div className="wwd-content">
              <h4>Gaming School</h4>
              <p>
                One of our services on offer is Game Schooling which incorporates games into school lessons. At Lyndem
                we're open to partnering with schools and organizations
              </p>
              <Button>Learn More</Button>
            </div>
          </div>
          <div className="wwd-card">
            <div className="wwd-image">
              <Image src={PlayDates} alt="desc" />
            </div>
            <div className="wwd-content">
              <h4>Play Dates</h4>
              <p>
                Play Dates are fun interaction sessions where kids bond with one another over educational games. We
                customize them to fit the respective needs of our clients including but not limited to birthdays, kid
                parties or school funfairs.
              </p>
              <Button>Learn More</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Landing | Testimonials */}
      <div className="testimonials"></div>

      {/* Landinf | Blog */}
      <div className="container blog">
        <div
          className="blog-landing"
          data-hs-carousel='{"loadingClasses": "opacity-0", "dotsItemClasses": "hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500"}'
        >
          <header className="row">
            <div className="caption">
              <div className="caption-top">
                <span>Latest Blog Posts</span>
                <hr />
              </div>
              <h3>Here are our recent blogposts</h3>
            </div>
            <ul>
              <li>
                <Button type="button" className="hs-carousel-prev hs-carousel-disabled:opacity-50 ">
                  <ChevronLeftIcon aria-hidden="true" />
                  <span className="sr-only">Previous</span>
                </Button>
              </li>
              <li>
                <Button type="button" className="hs-carousel-next hs-carousel-disabled:opacity-50">
                  <span className="sr-only">Next</span>
                  <ChevronRightIcon aria-hidden="true" />
                </Button>
              </li>
            </ul>
          </header>
          <div className="hs-carousel blog-carousel">
            <div className="hs-carousel-body">
              <div className="hs-carousel-slide">
                <BlogCard
                  src={BlogCardImage}
                  author="Esther Howard"
                  text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit explicabo quibusdam eius cumque placeat unde. Rerum eveniet distinctio saepe deserunt ipsa doloribus repudiandae accusantium eius doloremque. Eaque fugiat nihil eum?"
                  date="12 Sep 2021"
                  title="The Importance of Educational Games"
                  alt="Blog Image"
                />
              </div>
              <div className="hs-carousel-slide">
                <BlogCard
                  src={BlogCardImage}
                  author="Esther Howard"
                  text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit explicabo quibusdam eius cumque placeat unde. Rerum eveniet distinctio saepe deserunt ipsa doloribus repudiandae accusantium eius doloremque. Eaque fugiat nihil eum?"
                  date="12 Sep 2021"
                  title="The Importance of Educational Games"
                  alt="Blog Image"
                />
              </div>
              <div className="hs-carousel-slide">
                <BlogCard
                  src={BlogCardImage}
                  author="Esther Howard"
                  text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit explicabo quibusdam eius cumque placeat unde. Rerum eveniet distinctio saepe deserunt ipsa doloribus repudiandae accusantium eius doloremque. Eaque fugiat nihil eum?"
                  date="12 Sep 2021"
                  title="The Importance of Educational Games"
                  alt="Blog Image"
                />
              </div>
            </div>
          </div>

          <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2"></div>
        </div>
      </div>
    </>
  );
}
