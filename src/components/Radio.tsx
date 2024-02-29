import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Dispatch, SetStateAction, useRef } from "react";

type Props = {
  v: number;
  active: boolean;
  question: string;
  opt: string[];
  setState: Dispatch<SetStateAction<number>>;
  // refBox: any;
  // execute: () => void;
};

function RadioCard(Question: Props) {
  const style = Question.active
    ? {
        marginY: 12,
        opacity: 1,
      }
    : {
        marginY: 12,
        opacity: 0.6,
      };

  const myRef = useRef<HTMLElement>();

  // const executeScroll = () => myRef.current!.scrollIntoView();

  return (
    <Box sx={style} ref={myRef} id={`${Question.v}`}>
      <div>
        <p>{Question.question}</p>
      </div>
      <div>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            onChange={() => {
              Question.setState(Question.v + 1);
              // window.scrollTo({
              //   behavior: "smooth",
              //   top: document.getElementById(`${Question.v + 1}`)!.offsetTop,
              // });
              // executeScroll();
              document.getElementById(`${Question.v + 1}`)!.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "center",
              });
            }}
          >
            {Question.opt.map((val, index) => {
              return (
                <FormControlLabel
                  key={index}
                  value={val}
                  control={<Radio />}
                  label={val}
                />
              );
            })}
          </RadioGroup>
        </FormControl>
      </div>
    </Box>
  );
}

export default RadioCard;
