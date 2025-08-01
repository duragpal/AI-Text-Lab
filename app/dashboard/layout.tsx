"use client";
import React from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";
import { TotalUsageContext } from "../(context)/TotalUsageContext";
import { UpdateCreditUsageContext } from "../(context)/UpdateCreditUsageContext";
function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [usage, setUsage] = React.useState<Number>(0);
  const [updateCreditUsage, setUpdateCreditUsage] = React.useState<any>(0);

  return (<TotalUsageContext.Provider value={{usage, setUsage}}>
    
    <UpdateCreditUsageContext.Provider value={{updateCreditUsage, setUpdateCreditUsage}}>
    

    <div className="bg-slate-100 h-screen">
      <div className="md:w-64 hidden md:block fixed">
        <SideNav></SideNav>
      </div>
      <div className="md:ml-64">
        <Header />
        {children}
      </div>
    </div>
     </UpdateCreditUsageContext.Provider>
    </TotalUsageContext.Provider>
  );
}

export default layout;
