import { NavLink, useLocation } from "react-router-dom";
import navItems from "../../helpers/navItems";

const NavItems = () => {
  const location = useLocation();

  return (
    <div className="space-y-3">
      <p className="pl-4 text-sm">MENU</p>
      {navItems.map((item, index) => (
        <NavItem
          key={index}
          name={item.name}
          path={item.path}
          icon={item.icon}
          isActive={location.pathname === item.path}
        />
      ))}
    </div>
  );
};

const NavItem = ({ name, path, icon, isActive }) => {
  const Icon = icon;
  return (
    <NavLink
      to={path}
      className={`w-full block text-start p-2 cursor-pointer  transition-all duration-250 ${
        isActive
          ? "text-md text-black border-l-7 border-l-emerald-500 pl-5"
          : "text-slate-400 hover:text-emerald-500 hover:bg-gray-100"
      }`}
    >
      <div className="flex iems-center gap-1">
        {Icon && (
          <Icon className={`text-2xl ${isActive ? "text-emerald-700" : ""}`} />
        )}
        <span>{name}</span>
      </div>
    </NavLink>
  );
};

export default NavItems;
