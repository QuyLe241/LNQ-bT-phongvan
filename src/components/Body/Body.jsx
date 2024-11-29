import React from "react";
import "./style.css";
import ImgRau from "../../assets/Img/imgRau.png";
import ImgThit from "../../assets/Img/imgThit.png";
import ImgSua from "../../assets/Img/imgSua.png";
import ImgKem from "../../assets/Img/imgKem.png";
import ImgBanh from "../../assets/Img/imgBanh.png";
import ImgDau from "../../assets/Img/imgDau.png";
import ImgGao from "../../assets/Img/imgGao.png";

const Body = () => {
  return (
    <div className="flex">
      <div className="content_left">
        <ul>
          <li className="flex item_product space-x-2 items-center py-2">
            <img src={ImgRau} alt="" />
            <p>Rau củ quả</p>
          </li>
          <li className="flex item_product space-x-2 items-center py-2">
            <img src={ImgThit} alt="" />
            <p>Rau củ quả</p>
          </li>
          <li className="flex item_product space-x-2 items-center py-2">
            <img src={ImgSua} alt="" />
            <p>Rau củ quả</p>
          </li>
          <li className="flex item_product space-x-2 items-center py-2">
            <img src={ImgKem} alt="" />
            <p>Rau củ quả</p>
          </li>
          <li className="flex item_product space-x-2 items-center py-2">
            <img src={ImgBanh} alt="" />
            <p>Rau củ quả</p>
          </li>
          <li className="flex item_product space-x-2 items-center">
            <img src={ImgDau} alt="" />
            <p>Rau củ quả</p>
          </li>
          <li className="flex item_product space-x-2 items-center py-2">
            <img src={ImgGao} alt="" />
            <p>Rau củ quả</p>
          </li>
          <li className="flex item_product space-x-2 items-center py-2">
            <img src={ImgRau} alt="" />
            <p>Rau củ quả</p>
          </li>
          <li className="flex item_product space-x-2 items-center py-2">
            <img src={ImgRau} alt="" />
            <p>Rau củ quả</p>
          </li>
          <li className="flex item_product space-x-2 items-center py-2">
            <img src={ImgRau} alt="" />
            <p>Rau củ quả</p>
          </li>
          <li className="flex item_product space-x-2 items-center py-2">
            <img src={ImgRau} alt="" />
            <p>Rau củ quả</p>
          </li>
        </ul>
      </div>
      <div className="content_right">
        <div className="carousel"></div>
        <div className="list1"></div>
        <div className="list2"></div>
        <div className="list3"></div>
      </div>
    </div>
  );
};

export default Body;
