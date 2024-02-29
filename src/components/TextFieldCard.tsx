import { Box, Typography, TextField, Link, Button } from "@mui/material";
import { useState } from "react";

type TextFieldProps = {
  id: number;
  question: string;
  require: boolean;
  description?: string;
  link?: string;
};

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
    if (event.target.value.length === 0) {
      setInput(false);
    } else {
      setInput(true);
    }
    setAnswer(event.target.value);
  };

  const onClickOkHandler = () => {
    console.log(`${id}. ${answer}`);
  };
  return (
    <Box>
      <Typography fontWeight={700}>
        {id}. {question}{" "}
        <span style={{ color: "red" }}>{require ? "*" : ""}</span>
      </Typography>
      <Box>
        <Typography>{description}</Typography>
        <Link href={link}>{link}</Link>
      </Box>
      <TextField
        label={question}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          onChangeHandler(event)
        }
      />
      <Box>{input ? <Button onClick={onClickOkHandler}>OK</Button> : ""}</Box>
    </Box>
  );
}

export default TextFieldCard;
