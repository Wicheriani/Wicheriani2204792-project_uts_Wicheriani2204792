import Water from "../../assets/socialize.jpg";
import Code from "../../assets/hati.jpg";
import Android from "../../assets/jam.jpg";

function Detail() {
  return (
    <div className="bg p-5 md:py-[100px]">
      <div className="bg2 rounded-lg flex flex-col justify-center text-center p-5 lg:mx-[50px]">
          <h1 className="primary text-2xl font-semibold">What I am Great At</h1>
          <p className="text-white">
            Berikut beberapa soft skill yang saya (cukup) kuasai
          </p>
        <div className="sm:flex sm:flex-row sm:justify-center">
          <div className="sm:flex-col sm:m-5">
            <div className="justify-center flex flex-col m-5 br-sq p-10 sm:m-2 sm:p-6">
              <img src={Water} alt="dropwater" style= {{width:'150px', height:'150px'}} className="m-5 mt-2" />
              <h3 className="primary-h font-semibold text-xl">Adaptation</h3>
            </div>
            <div class=" bg-gray-200 h-2 mx-5 rounded-lg my-5 md:mx-3">
              <div class="bg-primary h-2 w-[90%] rounded-lg"></div>
            </div>
          </div>
          <div className="sm:flex-col sm:m-5">
            <div className="justify-center flex flex-col m-5 br-sq p-10 sm:m-2 sm:p-6">
              <img src={Code} alt="dropwater" style= {{width:'150px', height:'150px'}} className="m-5 mt-2" />
              <h3 className="primary-h font-semibold text-xl">Empathy</h3>
            </div>
            <div class=" bg-gray-200 h-2 mx-5 rounded-lg my-5 md:mx-3">
              <div class="bg-primary h-2 w-[70%] rounded-lg"></div>
            </div>
          </div>
          <div className="sm:flex-col sm:m-5">
            <div className="justify-center flex flex-col m-5 br-sq p-10 sm:m-2 sm:p-6">
              <img src={Android} alt="dropwater" style= {{width:'150px', height:'150px'}} className="m-5 mt-2" />
              <h3 className="primary-h font-semibold text-xl">Time Management</h3>
            </div>
            <div class=" bg-gray-200 h-2 mx-5 rounded-lg my-5 md:mx-3">
              <div class="bg-primary h-2 w-[60%] rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
