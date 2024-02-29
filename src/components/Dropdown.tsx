import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useState } from "react";

interface DropdownProps {
  required: boolean;
  imageRequired: boolean;
  title: string;
  description: string;
  image: string;
  inputLabel: string;
  dropdownItems: { value: number; label: string }[];
}

const DropDownCard = ({
  required,
  imageRequired,
  title,
  description,
  image,
  inputLabel,
  dropdownItems,
}: DropdownProps) => {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <>
      {imageRequired ? (
        <img src={image} alt="required"></img>
      ) : (
        <img src={image}></img>
      )}
      {required ? (
        <Typography>{title}*</Typography>
      ) : (
        <Typography>{title}</Typography>
      )}
      <Typography>{description}</Typography>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-helper-label">
          {inputLabel}
        </InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label={inputLabel}
          onChange={handleChange}
        >
          {dropdownItems.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default DropDownCard;
