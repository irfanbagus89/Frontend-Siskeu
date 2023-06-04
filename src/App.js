import Sidebar from './view/component/sidebar/sidebar';
import './output.css';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import ProfileSec from './view/component/profile/profileSec';
import DasboardSec from './view/component/dasboard/dasboardSec';
import PemasukanSec from './view/component/pemasukan/pemasukanSec';
import PengeluaranSec from './view/component/pengeluaran/pengeluaranSec';
import HutangSec from './view/component/hutang/hutangSec';
import LaporanSec from './view/component/laporan/laporanSec';

function App() {
  return (
    <Router>
      <div className="App w-full h-full flex">
        <Sidebar/>
        <Routes>
          <Route exact path='/dasboard' element={<DasboardSec/>}/>
          <Route exact path='/profile' element={<ProfileSec/>}/>
          <Route exact path='/pemasukan' element={<PemasukanSec/>}/>
          <Route exact path='/pengeluaran' element={<PengeluaranSec/>}/>
          <Route exact path='/hutang' element={<HutangSec/>}/>
          <Route exact path='/laporan' element={<LaporanSec/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
