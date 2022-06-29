import Header from '~/components/Layout/components/Header';
import Sizebar from './Sizebar';

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <Sizebar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
