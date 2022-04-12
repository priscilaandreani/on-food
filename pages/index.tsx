import type { NextPage } from 'next';
import { Header } from '@/components';

const Home: NextPage = () => {
  return (
    <div>
      <Header />

      <h1 className='underline decoration-dotted'>hello world</h1>
    </div>
  );
};

export default Home;
