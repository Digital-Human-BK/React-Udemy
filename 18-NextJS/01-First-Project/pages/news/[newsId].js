import { useRouter } from 'next/router';

const DetailsPage = () => {
  const router = useRouter();
  console.log(router.query.newsId);
  return <h2>Details Page</h2>;
};

export default DetailsPage;
