import {
  Box,
  Card,
  Container,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

type Option = {
  optionName: string;
};

type Question = {
  questionName: string;
  questionDescription?: string;
  questionOption: Option[];
  questionImage?: string;
  required: boolean;
};

type Props = {
  question: Question;
  questionNumber: number;
};

const RadioQuestion = ({ question, questionNumber }: Props) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleTextFieldChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = event.target.value;
    setSelectedOption(newValue ? "Other" : "");
  };
  return (
    <Container sx={{ marginY: 5 }}>
      <Card sx={{ padding: 5 }}>
        <Box>
          {question.questionImage ? (
            <img src={question.questionImage} alt="no picture" />
          ) : (
            <></>
          )}
        </Box>
        <Box>
          <Box sx={{ textAlign: "start" }}>
            <Typography fontWeight={"bold"} sx={{ whiteSpace: "nowrap" }}>
              {questionNumber}. {question.questionName}{" "}
              {question.required && <span style={{ color: "red" }}>*</span>}
            </Typography>
            <Typography sx={{ color: "grey" }}>
              {question.questionDescription}
            </Typography>
          </Box>
          <Box sx={{ textAlign: "start" }}>
            <FormControl sx={{ width: "100%" }}>
              <RadioGroup
                value={selectedOption}
                onChange={handleRadioChange}
                name="radio-buttons-group"
              >
                {question.questionOption.map((item, index) => (
                  <div
                    style={{ display: "flex", flexDirection: "column" }}
                    key={index}
                  >
                    <FormControlLabel
                      sx={{
                        marginY: "5px",
                        marginX: "0px",
                        border: "1px solid black",
                        borderRadius: "10px",
                      }}
                      value={item.optionName}
                      control={<Radio />}
                      label={
                        item.optionName === "Other" ? (
                          <TextField
                            placeholder="Other"
                            sx={{
                              marginY: "5px",
                              marginX: "0px",
                              border: "none",
                              borderRadius: "10px",
                            }}
                            variant="standard"
                            InputProps={{
                              disableUnderline: true,
                            }}
                            onChange={handleTextFieldChange}
                          />
                        ) : (
                          item.optionName
                        )
                      }
                    />
                  </div>
                ))}
              </RadioGroup>
            </FormControl>
          </Box>
        </Box>
      </Card>
    </Container>
  );
};

export default RadioQuestion;
