// Next
import Image from 'next/image';

// Image
import EduGaming from '@/main/_assets/images/edugaming-service-image.png';
import GameSchooling from '@/main/_assets/images/game-schooling-service-image.png';
import PlayDates from '@/main/_assets/images/play-dates-service-image.png';
//
export default function OurServicesPage() {
  return (
    <div className="container services">
      <div className="services-section">
        <div className="caption">
          <div>
            <p>What We Do</p>
            <hr />
          </div>
          <h3>EduGaming Cafe </h3>
        </div>
        <div className="row">
          <div className="services-section-image">
            <Image src={EduGaming} height={EduGaming.height} width={EduGaming.width} alt="" />
          </div>
          <div className="services-section-text">
            <p>
              The Educational Games Cafe offers children a space to engage with board, card, and electronic educational
              games while connecting with like-minded peers. Guided by facilitators, activities are tailored to each
              child’s interests and intellectual abilities.
            </p>

            <p>Operating Hours</p>

            <ul>
              <li>
                <i>School Term:</i>
                <ul>
                  <li>Open for school visits: Monday to Friday, 10 AM – 2 PM. </li>
                  <li>Open for walk-ins: Friday and Saturday, 4 PM – 6 PM.</li>
                </ul>
              </li>
              <li>
                <i>Holidays:</i>
                <ul>
                  <li>Open weekdays only, 12 PM – 5 PM.</li>
                </ul>
              </li>
            </ul>

            <p>
              Sessions are two hours long, allowing parents to conveniently schedule times that suit their family’s
              needs. Each session costs N1000 per child.
            </p>
          </div>
        </div>
      </div>

      <div className="services-section">
        <div className="caption">
          <div>
            <p>What We Do</p>
            <hr />
          </div>
          <h3>Game Schooling </h3>
        </div>
        <div className="row">
          <div className="services-section-image">
            <Image src={GameSchooling} height={GameSchooling.height} width={GameSchooling.width} />
          </div>
          <div className="services-section-text">
            <p>
              Game Schooling is the intentional incorporation of carefully designed games into school lessons to teach
              specific skills and concepts. Unlike unstructured play, this approach uses games as powerful tools to make
              learning enjoyable, engaging, and effective. By transforming traditional lessons into dynamic experiences,
              children retain knowledge better and develop critical thinking skills. At the heart of Game Schooling is
              the belief that kids learn best when they enjoy the process. Games provide an interactive and stimulating
              environment where children can explore, collaborate, and solve problems in a way that feels both fun and
              meaningful.
            </p>

            <p>
              Lyndem Edutainment partners with schools and organizations to bring Game Schooling to life through
              interactive sessions, tailored workshops, and full-scale game days. These experiences are designed to
              inspire curiosity and foster a lifelong love for learning in every child.
            </p>
          </div>
        </div>
      </div>

      <div className="services-section">
        <div className="caption">
          <div>
            <p>What We Do</p>
            <hr />
          </div>
          <h3>Play Dates</h3>
        </div>
        <div className="row">
          <div className="services-section-image">
            <Image src={PlayDates} height={PlayDates.height} width={PlayDates.width} />
          </div>
          <div className="services-section-text">
            <p>
              Play Dates are exciting opportunities for children to socialize, learn, and have fun through engaging
              educational games. These events provide a relaxed and enjoyable setting where kids can build friendships
              and develop skills while playing together.
            </p>
            <p>
              Perfect for a variety of occasions, Play Dates can be part of birthdays, kids’ parties, funfairs, or
              school fairs. They bring an interactive and educational twist to celebrations, ensuring a memorable
              experience for all attendees.
            </p>
            <p>
              At Lyndem Edutainment, we offer fully customizable Play Dates tailored to suit your preferences. Whether
              hosted at our cafe or another location, our team works with you to create a unique and enriching
              experience for your child and their friends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
