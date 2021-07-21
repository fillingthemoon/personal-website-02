import Head from 'next/head'
import experienceData from '../data/experience'

const Experience = (props) => {
  return (
    <div>
      <Head>
        <title>experience</title>
      </Head>
      {experienceData.map((experience, i) => (
        <div className="experience-item" key={i}>
          <h2>{experience.position}</h2>
          <h3>{experience.company}</h3>
          <h4>{experience.duration}</h4>
        </div>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      experienceData,
    },
    revalidate: 3600,
  }
}

export default Experience
