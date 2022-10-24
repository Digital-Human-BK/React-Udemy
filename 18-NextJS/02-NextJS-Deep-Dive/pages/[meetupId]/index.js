import Head from 'next/head';
import { MongoClient, ObjectId } from 'mongodb';

import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetails = (props) => {
  return (
    <>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name='Meetup name' content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        title={props.meetupData.title}
        address={props.meetupData.address}
        image={props.meetupData.image}
        description={props.meetupData.description}
      />
    </>
  );
};

export async function getStaticPaths() {
  const client = new MongoClient(process.env.MONGODB);

  try {
    const db = client.db('next-app');
    const meetupsCollection = db.collection('meetups');
    const meetups = meetupsCollection.find({}, { _id: 1 }).toArray();

    return {
      fallback: 'blocking',
      paths: (await meetups).map((meetup) => ({
        params: { meetupId: meetup._id.toString() },
      })),
    };
  } catch (error) {
    console.log(error.message);
  } finally {
    await client.close();
  }
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = new MongoClient(process.env.MONGODB);
  const db = client.db('next-app');
  const meetupsCollection = db.collection('meetups');
  const meetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) });

  console.log(meetup);

  await client.close();

  return {
    props: {
      meetupData: {
        id: meetup._id.toString(),
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        description: meetup.description,
      },
    },
  };
}

export default MeetupDetails;
