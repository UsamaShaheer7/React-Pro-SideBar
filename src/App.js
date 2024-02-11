import { useState } from "react";
import SideBar from "./SideBar";
import { ProSidebarProvider } from "react-pro-sidebar";
function App() {
  const [step, setStep] = useState(0);

  return (
    <>
      <div className="bg-[#F5F5FA] flex">
        <ProSidebarProvider>
          <SideBar />
        </ProSidebarProvider>
        <div className="  w-full">
          <div className="  w-full h-[100px] ml-[80px] lg:ml-0">
            {/* <AdminHeader /> */}header
          </div>
          <div className="p-[10px] ml-[80px] lg:p-0 lg:px-[30px] lg:ml-0 h-screen">
            {/* {children} */}children
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
