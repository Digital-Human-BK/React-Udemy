import { MongoClient } from 'mongodb';
import Head from 'next/head';

import MeetupList from '../components/meetups/MeetupList';

const Home = (props) => {
  return (
    <>
      <Head>
        <title>NextJS APP</title>
        <meta name='description' content='Browse my first NextJS APP'/>
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   //fetch data from API...
//   return {
//     props: {},
//   };
// }

export async function getStaticProps() {
  const client = new MongoClient(process.env.MONGODB);

  try {
    const db = client.db('next-app');
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find().toArray();

    return {
      props: {
        meetups: meetups.map((meetup) => ({
          title: meetup.title,
          address: meetup.address,
          image: meetup.image,
          id: meetup._id.toString(),
        })),
      },
      revalidate: 10,
    };
  } catch (error) {
    console.log(error.message);
  } finally {
    await client.close();
  }
}

export default Home;
