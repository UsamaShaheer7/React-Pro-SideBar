import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import { useEffect } from "react";
import "./style.css";
import Tooltip from "@mui/material/Tooltip";
import { FaHome } from "react-icons/fa";
function SideBar() {
  const { collapseSidebar } = useProSidebar();
  const toggleSidebarCollapse = () => {
    collapseSidebar();
  };
  useEffect(() => {
    collapseSidebar();
  }, [collapseSidebar]);

  return (
    <>
      <div className="sidebarWrapperCustom">
        <Sidebar className="h-[100vh]">
          <Menu>
            <MenuItem
              onMouseEnter={() => {
                toggleSidebarCollapse();
              }}
              style={{ textAlign: "center" }}
            >
              <div className="flex space-x-[14px] items-center">
                <img src="/image" alt="Logo" className="w-[40px] h-[40px]" />
                <div className="text-[38px] font-semibold  text-white">
                  Name
                </div>
              </div>
            </MenuItem>
            {/* when we want to add the image */}
            <Tooltip
              title="Dashboard"
              placement="right"
              arrow
              className="mt-[10px] "
            >
              <MenuItem>
                <div className="flex space-x-[14px] items-center">
                  <img
                    src="/images/icons/dashboard.png"
                    alt="Logo"
                    className="w-[24px] h-[24px] ml-5"
                  />
                  <div className="font-[600] text-white ">Dashboard</div>
                </div>
              </MenuItem>
            </Tooltip>
            {/* when we want to add the icon */}
            <Tooltip
              title="Employees"
              placement="right"
              arrow
              className="mt-[10px]"
            >
              <MenuItem icon={<FaHome />}>
                <div className="font-[600] text-white">Employees</div>
              </MenuItem>
            </Tooltip>
            <Tooltip
              title="Organization"
              placement="right"
              arrow
              className="mt-[10px]"
            >
              <SubMenu
                label="Organization"
                className=" text-white"
                icon={
                  <img
                    className="w-[24px] h-[24px ] ml-1"
                    src="/images/icons/department.png"
                  />
                }
              >
                <MenuItem
                  icon={
                    <img
                      className="w-[24px] h-[24px ] ml-1"
                      src="/images/icons/people.png"
                    />
                  }
                  className=" text-white"
                >
                  Department
                </MenuItem>
                <MenuItem
                  icon={
                    <img
                      className="w-[24px] h-[24px ] ml-1"
                      src="/images/icons/Designation.png"
                    />
                  }
                  className=" text-white"
                >
                  Designation
                </MenuItem>
                <MenuItem
                  // icon={
                  //   <GrProjects className=" text-white w-[20px] h-[20px] ml-1" />
                  // }
                  className=" text-white"
                >
                  Project
                </MenuItem>
                <MenuItem
                  icon={
                    <img
                      className="w-[24px] h-[24px ] ml-1"
                      src="/images/icons/ClockSidebar.png"
                    />
                  }
                  className=" text-white"
                >
                  Work Sheet
                </MenuItem>
              </SubMenu>
            </Tooltip>
          </Menu>
        </Sidebar>
      </div>
    </>
  );
}
export default SideBar;
