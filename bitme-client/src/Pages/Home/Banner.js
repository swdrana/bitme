import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div class=" mx-5 lg:mx-20 mx-auto text-white">
        <div class="hero-content flex-col lg:flex-row">
          <div class="text-center lg:text-left">
            <h1 class="text-5xl font-bold">The space is made of bitme.</h1>
            <p class="py-6 text-xl text-slate-300">
              Trade, earn, and win crypto on the most popular decentralized
              platform in the galaxy.
            </p>
            <div className=" my-5">
              <Link
                to="/info"
                class="btn rounded-full border-0 text-white font-bold bg-gradient-to-r from-[#1d85ff] to-[#1daeff] hover:from-[#1daeff] hover:to-[#1d85ff]"
              >
                Connect Wallet
              </Link>

              <Link
                to="/trade"
                class=" ml-5 btn rounded-full border-0 text-white font-bold bg-gradient-to-r from-[#1d85ff] to-[#1daeff] hover:from-[#1daeff] hover:to-[#1d85ff]"
              >
                Trade Now
              </Link>
            </div>

            <div className=" flex flex-row justify-between text-center my-10">
              <div className="info">
                <h1 className="text-3xl font-bold text-neutral">$959B+</h1>
                <p>Trade Volume</p>
              </div>
              <div className="info text-center">
                <h1 className="text-3xl font-bold text-neutral">96M+</h1>
                <p>All Time Trades</p>
              </div>
              <div className="info text-center">
                <h1 className="text-3xl font-bold text-neutral">250+</h1>
                <p>Integrations</p>
              </div>
            </div>
          </div>
          <div class="card flex-shrink-0 w-full lg:w-1/2">
            <div class="card-body relative">
                <img className=" w-14 absolute" src="https://i.ibb.co/xXLXdYg/image.png" alt="" />
                <img className="w-11/12 mx-auto" src="https://i.ibb.co/TKcN3nC/image.png" alt="" />
                <img className=" w-14 absolute bottom-10 right-10" src="https://i.ibb.co/xXLXdYg/image.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
