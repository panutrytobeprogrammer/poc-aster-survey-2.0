import {
  Box,
  Card,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";

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

const CheckBoxQuestion = ({ question, questionNumber }: Props) => {
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
              <RadioGroup defaultValue="" name="checkbox-buttons-group">
                {question.questionOption.map((item, index) => (
                  <FormControlLabel
                    sx={{
                      marginY: "5px",
                      marginX: '0px',
                      border: "1px solid black",
                      borderRadius: "10px",
                    }}
                    key={index}
                    value={item.optionName}
                    control={<Checkbox />}
                    label={item.optionName}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Box>
        </Box>
      </Card>
    </Container>
  );
};

export default CheckBoxQuestion;
