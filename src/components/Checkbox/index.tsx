import { Box, Card, Container, Typography } from "@mui/material";
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
        <Box>{question.questionImage ? <img src={question.questionImage} alt="no picture" /> : <></>}</Box>
        <Box>
          <Box sx={{ textAlign: 'start'}}>
            <Typography fontWeight={'bold'}>
              {questionNumber}. {question.questionName}
            </Typography>
            <Typography sx={{color: 'grey'}}>{question.questionDescription}</Typography>
          </Box>
          <Box>
            {question.questionOption.map((item, index) => (
              <Box key={index}>{item.optionName}</Box>
            ))}
          </Box>
        </Box>
      </Card>
    </Container>
  );
};

export default CheckBoxQuestion;
