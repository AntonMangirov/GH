import AppBar from "@mui/material/AppBar";
import { Toolbar, Typography, Box } from "@mui/material";
import { Link as RouterLink } from "react-router";

const Header = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography 
          variant="h4" 
          component={RouterLink}
          to="/"
          sx={{ 
            textDecoration: 'none', 
            color: 'inherit',
            cursor: 'pointer',
            '&:hover': {
              opacity: 0.8
            }
          }}
        >
          FinancePlanner AI
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Typography variant="body2" color="inherit" sx={{ opacity: 0.8 }}>
          Умный финансовый анализ
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
