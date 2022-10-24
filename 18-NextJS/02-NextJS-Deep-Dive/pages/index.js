import MeetupList from '../components/meetups/MeetupList';

const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'First Meetup',
    image:
      'https://imageio.forbes.com/specials-images/imageserve/5eb6bb89170c9400064865a7/The-goal-is-for-people-to-be-engaged-and-even-look-forward-to-attending-meetings-/960x0.jpg?format=jpg&width=960',
    address: 'Some address 1, Some City 1',
    description: 'This is meetup number 1',
  },
  {
    id: 'm2',
    title: 'Second Meetup',
    image:
      'https://imageio.forbes.com/specials-images/dam/imageserve/1131714824/960x0.jpg?format=jpg&width=960',
    address: 'Some address 2, Some City 2',
    description: 'This is meetup number 2',
  },
  {
    id: 'm3',
    title: 'Third Meetup',
    image:
      'https://assets.entrepreneur.com/content/3x2/2000/20151002170856-controllers-business-people-working-papers-meeting.jpeg',
    address: 'Some address 3, Some City 3',
    description: 'This is meetup number 3',
  },
];

const Home = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_DATA,
    },
    revalidate: 10
  };
}

export default Home;
