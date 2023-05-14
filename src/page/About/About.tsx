import { Button } from "../../components";
import { Container } from "../../Layout";
import "./About.css";

const About: React.FC = () => {
  return (
    <Container>
      <div className="about">
        <h2 className="about__title">E-commerce shop</h2>

        <p className="about__discription">
          <h2>CONTACT US</h2>
          42 swayam House, Tilak Road, India....... company@gmail.com
          456-456-4512 Nagpur City, India.
        </p>
      </div>
    </Container>
  );
};

export default About;
