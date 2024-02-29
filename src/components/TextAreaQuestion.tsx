import { Box, Button, Link, TextField, Typography } from "@mui/material";
import { useState } from "react";

const TextAreaQuestionMockData = {
  qid: 2,
  required: true,
  title: "Text Area",
  descrisption: "Description and Link (Optional)",
  textAreaPlaceholder: "Enter you Feedback",
  textAreaRows: 4,
};

interface TextAreaQuestionProps {
  qid: number;
  required: boolean;
  questionTitle: string;
  description?: string;
  link?: string;
  textAreaPlaceholder: string;
  textAreaRows: number;
}

const TextAreaQuestion = ({
  qid,
  required,
  questionTitle,
  description,
  link,
  textAreaPlaceholder,
  textAreaRows,
}: TextAreaQuestionProps) => {
  const [input, setInput] = useState<boolean>(false);
  const [answer, setAnswer] = useState<string>("");
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const hasInput = inputValue.trim().length > 0;
    setInput(hasInput);
    setAnswer(inputValue);
  };

  const onClickOkHandler = () => {
    console.log(`${qid}. ${answer}`);
  };
  return (
    <>
      <Box sx={{ textAlign: "left" }}>
        <Typography
          variant="h5"
          sx={{ marginLeft: "0.5rem", fontWeight: "bold" }}
        >
          {qid}. {questionTitle}{" "}
          <span style={{ color: "red" }}>{required ? "*" : ""}</span>
        </Typography>
        <Box>
          <Typography sx={{ color: "gray" }}>{description}</Typography>
          <Link href={link}>{link}</Link>
        </Box>
        <TextField
          fullWidth
          multiline
          minRows={textAreaRows}
          placeholder={textAreaPlaceholder}
          sx={{ marginTop: "0.2rem" }}
          onChange={onChangeHandler}
        />
        <Box>
          {input ? (
            <Button variant="contained" onClick={onClickOkHandler}>
              OK
            </Button>
          ) : null}
        </Box>
      </Box>
    </>
  );
};

export default TextAreaQuestion;
