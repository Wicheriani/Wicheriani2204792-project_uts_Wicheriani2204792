import ImageSatu from '../../assets/akur.png'
import { Link } from 'react-router-dom';
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid';
import Button from '../button/Button';

function Home() {
  return (
    <div className="bg pt-[50px]  flex justify-center min-w-min">
      <div className="container pt-[50px] md:flex lg:mx-[50px] lg:justify-between">
        <div className="mx-[30px] justify-center md:w-1/3 lg:pt-[50px]">
          <h4 className="text-2xl md:text-lg lg:text-2xl font-semibold primary">
            Hi!
          </h4>
          <h1 className="text-4xl md:text-2xl lg:text-4xl font-bold text-white tracking-wide">
            Get to
          </h1>
          <h1 className="text-4xl md:text-2xl lg:text-4xl font-bold text-white tracking-wide">
            Know me<span className="primary">.</span>
          </h1>
          <div className="flex flex-row mt-3 gap-1 text-white md:text-sm lg:text-base">
            <a href="https://www.instagram.com/wicheriani/">
              <p>Instagram</p>
            </a>
            <p>|</p>
            <a href= "https://letterboxd.com/LOAFGOOD/">
              <p>Letterboxd</p>
            </a>
          </div>
          <div className="flex flex-row gap-1 text-white md:text-sm lg:text-base">
            <a href= "https://wa.me/081221441978">
              <p>Whatsapp</p>
            </a>
            <p>|</p>
            <a href= "https://github.com/Wicheriani">
              <p>Github</p>
            </a>
          </div>
          <div className="mt-5">
            <Button />
          </div>
        </div>
        <div className="m-10 flex-col justify-center md:w-1/3 lg:m-0">
          <img src={ImageSatu} alt="me" className="m-auto" />
        </div>
        <div className="mx-[30px] md:w-1/3 lg:pt-[50px] pb-[50px]">
          <h4 className="text-2xl md:text-lg lg:text-2xl font-semibold primary">
            I am
          </h4>
          <h1 className="text-3xl md:text-2xl lg:text-4xl font-bold text-white tracking-wide">
            Cece ^^
          </h1>
          <p className="text-white md:text-sm lg:text-base">
          Saya merupakan mahasiswa yang penuh semangat dalam mengejar pengetahuan baru. 
          Terus berkembang dan mengeksplorasi dunia ilmu adalah hal yang saya nikmati
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home