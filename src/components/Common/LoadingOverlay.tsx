import React from "react";
import { Box, Typography, CircularProgress } from "@mui/material";

interface LoadingOverlayProps {
  isVisible: boolean;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        backdropFilter: "blur(4px)",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: 3,
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
          minWidth: 300,
        }}
      >
        <CircularProgress
          size={60}
          thickness={4}
          sx={{
            color: "primary.main",
            animation: "pulse 2s ease-in-out infinite",
            "@keyframes pulse": {
              "0%": {
                transform: "scale(1)",
              },
              "50%": {
                transform: "scale(1.1)",
              },
              "100%": {
                transform: "scale(1)",
              },
            },
          }}
        />
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            fontWeight: 500,
            color: "text.primary",
            animation: "fadeInOut 2s ease-in-out infinite",
            "@keyframes fadeInOut": {
              "0%, 100%": {
                opacity: 0.7,
              },
              "50%": {
                opacity: 1,
              },
            },
          }}
        >
          Подождите, производится расчет...
        </Typography>
        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            color: "text.secondary",
            maxWidth: 250,
          }}
        >
          Анализируем ваши доходы, расходы и цели накоплений
        </Typography>
      </Box>
    </Box>
  );
};

export default LoadingOverlay;


