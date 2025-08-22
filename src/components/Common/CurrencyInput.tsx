import { TextField, InputAdornment, Grid } from "@mui/material";

interface CurrencyInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  gridSize?: number;
}

function CurrencyInput(props: CurrencyInputProps) {
  const {
    label,
    placeholder,
    value,
    onChange,
    error,
    required = false,
    gridSize = 6,
  } = props;

  return (
    <Grid size={gridSize}>
      <TextField
        fullWidth
        label={label}
        placeholder={placeholder}
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">{"\u20BD"}</InputAdornment>
          ),
        }}
        value={value}
        onChange={onChange}
        error={!!error}
        helperText={error}
        required={required}
      />
    </Grid>
  );
}

export default CurrencyInput;
