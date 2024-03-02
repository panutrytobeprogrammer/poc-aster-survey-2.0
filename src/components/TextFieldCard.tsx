import { Box, Typography, TextField, Link, Button } from "@mui/material";
import { useState } from "react";

type TextFieldProps = {
  id: number;
  question: string;
  require: boolean;
  description?: string;
  link?: string;
};

// <TextFieldCard id={1} question="hahaha test question" require={true} />

function TextFieldCard({
  id,
  question,
  require,
  description,
  link,
}: TextFieldProps) {
  const [input, setInput] = useState<boolean>();
  const [answer, setAnswer] = useState<string>("");
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const hasInput = inputValue.trim().length > 0;
    setInput(hasInput);
    setAnswer(inputValue);
  };

  const onClickOkHandler = () => {
    console.log(`${id}. ${answer}`);
  };
  return (
    <Box>
      <Typography fontWeight={700}>
        {id}. {question} {require && <span style={{ color: "red" }}>*</span>}
      </Typography>
      <Box>
        <Typography>{description}</Typography>
        <Link href={link}>{link}</Link>
      </Box>
      <TextField label={question} onChange={onChangeHandler} />
      <Box>{input && <Button onClick={onClickOkHandler}>OK</Button>}</Box>
    </Box>
  );
}

export default TextFieldCard;
