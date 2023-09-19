import Head from 'next/head';
import { Chrono } from "react-chrono";

import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export default function Home({ allPostsData }) {

  const items = [{
    title: "November 2020",
    cardTitle: "Doctoralia adventure ",
    cardDetailedText: "I join one of the best teams I've ever worked on 🚀",
    media: {
      type: "IMAGE",
      source: {
        url: "/images/FBBpUXuVEAshf4X.jpeg"
      }
    }
  },
  {
    title: "November 2021",
    cardTitle: "Work on my Sagrada Familia begins",
    cardDetailedText: "Once the pandemic was coming to an end, I felt I was bored and bought an apartment that turned out to be a disaster. My motivation was very high so I started to rebuild it again. 🚧 Still WIP 🚧",
    media: {
      type: "IMAGE",
      source: {
        url: "/images/PXL_20230114_161730589.jpg"
      }
    }
  },
  {
    title: "Many times during 2022",
    cardTitle: "🍻 Doctoralia special meetings 🍻",
    cardDetailedText: "There were many intense after-hours meetings, long, late-night sessions full of good times.",
    media: {
      type: "IMAGE",
      source: {
        url: "/images/giphy.gif"
      }
    }
  },
  {
    title: "",
    cardTitle: "'My Next Big Project' in 1, 2...",
  },
  {
    title: "December 2023",
    cardTitle: "A New Baby is Coming! 🍼",
    cardDetailedText: ["It wasn't enough with my Sagrada Familia, I've started a new project with my partner. We are so happy!!","P.S. Any experienced recommendation is welcome."],
    media: {
      type: "IMAGE",
      source: {
        url: "/images/PXL_20230625_112727730.jpg"
      }
    }
  }];

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <div style={{ width: "100%", height: "95vh" }}>
          <Chrono 
            items={items} 
            mode="VERTICAL_ALTERNATING"
            cardHeight={200}
            mediaHeight={400}
            hideControls
            theme={{
              primary: '#00C3A6',
              secondary: '#00C3A6',
              cardBgColor: 'white',
              cardTitle: '#00C3A6',
              titleColor: 'black',
              titleColorActive: 'white',
            }} 
            fontSizes={{
              cardSubtitle: '1rem',
              cardText: '1rem',
              cardTitle: '1.5rem',
              title: '1rem',
            }}
          />
        </div>
        
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
