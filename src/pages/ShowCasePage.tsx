import MyNavBar from '../components/MyNavBar'
import ShowCase from '../components/ShowCase'
import MediaCard from '../components/MediaCard';

const ShowCasePage = () => {
  return (
    <>
      <MyNavBar></MyNavBar>
      <ShowCase MediaCard={MediaCard}></ShowCase>
    </>
  );
};

export default ShowCasePage;
