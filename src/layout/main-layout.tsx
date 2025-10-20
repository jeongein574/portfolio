import { ReactNode } from "react";

import { Raleway } from "next/font/google";

import Navbar from "@/layout/navbar";
import Footer from "@/layout/footer";
import { routes } from "@/data/navigationRoutes";
import { classNames } from "@/utility/classNames";

const poppins = Raleway({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout(props: MainLayoutProps) {
  return (
    <>
      <div className={classNames("min-h-screen", poppins.className)}>
        <Navbar routes={routes} />
        <main>{props.children}</main>
      </div>
      <Footer />
    </>
  );
}
