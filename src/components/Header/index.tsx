import AppBar from "@mui/material/AppBar";
import { Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h4">
          Финансовый помощник с использованием ИИ
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
