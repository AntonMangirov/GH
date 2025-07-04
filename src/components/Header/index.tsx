import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

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
