import React from "react";
import Logo from "../../assets/Img/logo.png";
import Content from "../../assets/Img/contentLogo.png";
import IconSearch from "../../assets/Img/iconSearch.png";
import { Link, NavLink } from "react-router-dom";
import "./style.css";

const Header = () => {
  return (
    <div className="flex">
      <a href="">
        <div className="logo flex items-center space-x-3">
          <div className="">
            <img className="img_logo" src={Logo} alt="logo" />
          </div>
          <div className="">
            <img src={Content} alt="content" />
          </div>
        </div>
      </a>
      <div className="search flex p-2" style={{ color: "#EDF2F7" }}>
        <form action="" className="flex items-center">
          <div className="">
            <img src={IconSearch} alt="" />
          </div>
          <div className="">
            <input type="text" className="w-full" placeholder="Tìm sản phẩm" />
          </div>
        </form>
      </div>
      <div className="">
        {/* <NavLink></NavLink> */}
        <a href="" style={{ fontSize: "14px" }}>
          Tạp chí
        </a>
      </div>
    </div>
  );
};

export default Header;
