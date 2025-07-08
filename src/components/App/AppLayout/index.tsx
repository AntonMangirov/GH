import Header from "../../Header";
import Box from "@mui/material/Box";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <Box
        sx={{
          flexGrow: 1,
          paddingTop: "96px",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default AppLayout;
