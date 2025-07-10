import {
  Container,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const Purposes = () => {
  return (
    <Container>
      <Typography variant="h6" color="primary">
        Цель накоплений
      </Typography>

      <TextField
        fullWidth
        label="Сумма для накопления"
        placeholder="Сколько хотите накопить"
        variant="outlined"
      />

      <FormControl fullWidth>
        <InputLabel>Срок накопления</InputLabel>
        <Select label="Срок накопления" defaultValue="12">
          <MenuItem value={3}>3 месяца</MenuItem>
          <MenuItem value={6}>6 месяцев</MenuItem>
          <MenuItem value={12}>1 год</MenuItem>
          <MenuItem value={18}>1.5 года</MenuItem>
          <MenuItem value={24}>2 года</MenuItem>
          <MenuItem value={36}>3 года</MenuItem>
          <MenuItem value={60}>5 лет</MenuItem>
        </Select>
      </FormControl>
    </Container>
  );
};

export default Purposes;
