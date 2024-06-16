import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../components/ui/button"; // Pastikan path import ini sesuai dengan struktur folder Anda
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="p-8 xl:p-12">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/">
          <h1 className="font-utama text-4xl font-semibold">
            Aditia<span className=" text-warna_utama">.</span>
          </h1>
        </NavLink>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <NavLink to="/contact">
            <Button variant="default" size="lg">
              Hire Me
            </Button>
          </NavLink>
        </div>
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
