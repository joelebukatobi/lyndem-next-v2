// Components
import { SectionContent } from '@/main/_components/organisms/SectionContent';
import { SectionMedia } from '@/main/_components/molecules/SectionMedia';
import { SectionText } from '@/main/_components/molecules/SectionText';

// Image
import LandingMissionImage from '@/main/_assets/images/landing-mission-image.png';

export default function About() {
  return (
    <div className="about">
      <div className="container about-history">
        <p>
          The cafe was birthed in September 2013 as a result of her love for children and her desire to share her
          passion of fun learning with kids in her locality. It started off small with the games accumulated from her
          personal work with her first child, games being her go-to tool for learning. The cafe employs the use of table
          top games to introduce children to the world of fun-learning and gaming hence its motto 'learning made fun'.
        </p>

        <p>
          The cafe was initially patronised by only friends and family but has gradually grown to become a fun learning
          games cafe for kids in Abuja, Nigeria where its based as it is the first of its kind, specifically geared to
          the interest of children. The cafe caters to kids between the ages of 4 and 16. The lockdown in 2020 yielded
          an opportunity for growth as the owner became one of the recipients of the Indie Game Developers Network
          (IGDN) Sponsorship which brought her in connection with fellow gamers internationally. This connection brought
          a boost to the cafe as a wide collection of games were individually and collectively donated to foster the
          edugaming culture in Nigeria. The cafe is located at Suite A6, Kabom Court, Plot 104 Gado Nasko Road, Kubwa,
          Abuja.
        </p>
      </div>

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

      <div className="about-gallery"></div>
    </div>
  );
}
