import { Paper, Typography, Grid } from "@mui/material";

interface FormSectionProps {
  title: string;
  children: React.ReactNode;
}

const FormSection: React.FC<FormSectionProps> = ({ title, children }) => {
  return (
    <Paper elevation={5} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" color="primary" sx={{ mb: 2 }}>
        {title}
      </Typography>
      <Grid container spacing={1}>
        {children}
      </Grid>
    </Paper>
  );
};

export default FormSection;
