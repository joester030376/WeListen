import Chart from '../components/chart/Chart';
import Featured from '../components/featured/Featured';
import Navbar from '../components/navbar/Navbar';
import Widget from '../components/widget/Widget';
import Lists from '../components/table/Table';
import Sidebar from '../components/sidebar/Sidebar';
import Settings from '../components/settings/Settings';
import './home.scss';

const Home = () => {
  return (
    <div className="home">
     <Sidebar />
      <div className='homeContainer'>
        <Navbar />
        <div className="widgets">
          <Widget type="user"/>
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart aspect={2/1} title={"Last 6 Months (Revenue)"} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Lists />
        </div>
      </div>  
      <Settings />    
    </div>
  )
}

export default Home;