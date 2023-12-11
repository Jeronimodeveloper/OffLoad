import banner from '../assets/banner.jpg';
import ItemListContainer from './ItemListContainer';

const Home = () => {
return (
    <div className="d-flex flex-column align-items-center p-2">
    <img src={banner} alt="banner" className="img-fluid" ></img>
    <ItemListContainer/>
    </div>
)
}

export default Home
