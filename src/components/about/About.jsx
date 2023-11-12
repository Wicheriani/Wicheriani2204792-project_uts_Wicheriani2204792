function About() {
  return (
    <div className="bg3 pt-[100px]">
      <div className="flex flex-col justify-center text-center">
        <h1 className="text-2xl font-semibold text-white">About Me</h1>
        <p className="text-white">
          Berikut adalah informasi lain tentang saya
        </p>
      </div>
      <div className="py-10 mx-10 md:flex-row md:flex">
        <div className="flex-col my-5 md:w-1/2 md:mx-5 md:p-5">
          <div className="bg2 text-white p-3 web md:pb-5">
            <h3 className="font-semibold flower">Riwayat Pendidikan</h3>
            <p>SMA: SMA Darul Falah (2019 - 2022)<br/> 
            SMP: SMP Darul Falah (2016 - 2019)<br/> 
            SD: SDN 3 Purabaya (2010 - 2016)</p>
          </div>
        </div>
        <div className="flex-col my-5 md:w-1/2 md:mx-5 md:p-5">
          <div className="bg2 text-white p-3 web pb-5">
            <h3 className="font-semibold profile">Biodata Singkat</h3>
            <p>Nama: Wicheriani Galuh Desduipa <br/>
            TTL: Jakarta, 30 Desember 2004<br/>
            Alamat: Bentang Padalarang Regency C9/8</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About