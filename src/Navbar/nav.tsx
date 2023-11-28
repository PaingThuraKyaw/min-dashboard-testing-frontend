import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className=" space-y-4">
      <div>
        <NavLink className="" to={"/"}>
          Item List
        </NavLink>
      </div>
      <div>
        <NavLink className="" to={"/create"}>
          Create List
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
