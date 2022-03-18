import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import DoorFrontOutlinedIcon from "@mui/icons-material/DoorFrontOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Los Alamos</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">PRINCIPAL</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <li>
            <MenuBookOutlinedIcon className="icon" />
            <span>Libro</span>
          </li>
          <li>
            <FactCheckOutlinedIcon className="icon" />
            <span>Reservas</span>
          </li>
          <p className="title">LISTAS</p>

          <li>
            <PersonOutlineOutlinedIcon className="icon" />
            <span>Clientes</span>
          </li>
          <li>
            <DoorFrontOutlinedIcon className="icon" />
            <span>Habitaciones</span>
          </li>
          <p className="title">SERVICIO</p>

          <li>
            <FeedOutlinedIcon className="icon" />
            <span>Reportes</span>
          </li>
          <li>
            <SettingsOutlinedIcon className="icon" />
            <span>Configuracion</span>
          </li>
          <p className="title">USUARIO</p>

          <li>
            <AccountBoxOutlinedIcon className="icon" />
            <span>Perfil</span>
          </li>
          <li>
            <ExitToAppOutlinedIcon className="icon" />
            <span>Salir</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
          <div className="colorOption"></div>
          <div className="colorOption"></div>
          <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
