import Layout from "../../src/components/layout/layout";
import Courses from "../../src/components/Courses/Courses";
import Mentors from "../../src/components/Mentors/Mentors";

const About = () => {
  return (
    <>
      <Layout>
        <Courses />
        <Mentors />
      </Layout>
    </>
  );
};

export default About;
