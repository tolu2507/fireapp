// import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
// import CssBaseline from "@mui/material/CssBaseline";
// import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
// import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";
import { mainNavbarItems } from "./consts/navBarItems";
import { navBarStyles } from "./consts/styles";
import { useParams, useNavigate } from "react-router-dom";

export function Navbar({children}) {
  const navigate = useNavigate();
  return (
    <>
      <Drawer sx={navBarStyles.drawer} variant="permanent" anchor="left">
        <Toolbar />
        <Divider />
        <List>
          {mainNavbarItems.map((text, index) => (
            <ListItem button key={text.id} disablePadding>
              <ListItemButton onClick={() => navigate(text.route)}>
                <ListItemIcon sx={navBarStyles.icons}>{text.icon}</ListItemIcon>
                <ListItemText primary={text.label} sx={navBarStyles.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      {children}
    </>
  );
}
