import '../../../output.css';

const Tabel = () => {

    return(
        <div className="w-full h-auto">
            <table  className='w-full h-auto text-center border'>
                    <thead className='border-spacing-0 bg-slate-100'>
                        <tr>
                            <th className='border'>Id</th>
                            <th className='border'>Nama</th>
                            <th className='border'>Tanggal</th>
                            <th className='border'>Jumlah</th>
                            <th className='border'>Keterangan</th>
                            <th className='border'>Jatuh Tempo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='border'>1</td>
                            <td className='border'>afa</td>
                            <td className='border'>27 November 2023</td>
                            <td className='border'>Rp 3.000.000</td>
                            <td className='border'>Produksi</td>
                            <td className='border'>27 Desember 2023</td>
                        </tr>
                    </tbody>
            </table>
            <br />
            <div className="w-full text-center flex justify-center flex-wrap">
                <div className="w-[120px] h-[40px] rounded-tl-xl border"><p>Kembali</p></div> 
                <div className="w-[40px] h-[40px} border"><p>1</p></div>
                <div className="w-[120px] h-[40px] rounded-tr-xl border"><p>Selanjutnya</p></div>
            </div>
        </div>
    )
}

export default Tabel;