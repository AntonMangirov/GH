import AppBar from "@mui/material/AppBar";
import { Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.85)",
      }}
    >
      <Toolbar>
        <Typography sx={{ fontSize: "24px", fontWeight: 500 }}>
          Финансовый помощник с использованием ИИ
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
