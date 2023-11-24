import MyNavBar from '../components/MyNavBar'
import ShowCase from '../components/ShowCase'
import MediaCard from '../components/MediaCard';

const MainPage = () => {
  return (
    <>
      <MyNavBar></MyNavBar>
      <ShowCase MediaCard={MediaCard}></ShowCase>
    </>
  );
};

export default MainPage;
