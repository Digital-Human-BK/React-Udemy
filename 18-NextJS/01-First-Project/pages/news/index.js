import Link from 'next/link';

const NewsPage = () => {
  return (
    <>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href='/news/great-framework'>NextJS is great framework!</Link>
        </li>
        <li>
          <Link href='/news/basics'>Discover the basics</Link>
        </li>
        <li>
          <Link href='/news/advanced'>Advanced stuff</Link>
        </li>
      </ul>
    </>
  );
};

export default NewsPage;
