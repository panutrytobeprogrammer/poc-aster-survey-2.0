import {
    Box,
    Typography,
  } from "@mui/material";
  import { useState } from "react";

//   <RatingScore
//   required={true}
//   imageRequired={true}
//   title={"6. Rating Score"}
//   description={"Description and Link (Optional)"}
//   image={"../src/assets/react.svg"}
//   maxRate={7}
//   minRateDescription="1 is not satified"
//   maxRateDescription="10 is satified"
// ></RatingScore>

  interface RatingProps {
    required: boolean;
    imageRequired: boolean;
    title: string;
    description: string;
    image: string;
    maxRate:number;
    minRateDescription:string;
    maxRateDescription:string;
  }
  
  const RatingScore = ({
    required,
    imageRequired,
    title,description,
    image,
    maxRate,
    minRateDescription,
    maxRateDescription}:RatingProps) => {
    const [rating,setRating]=useState(0)
    console.log(rating)
    


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
        <Box sx={{border:1,display:"flex",gap:"2px"}}>
                {Array.from({length:maxRate}).map((_,i)=>{
                return(
                    <button  onFocus={()=>setRating(i+1)}>{i+1}</button>
                )
            })}
        </Box>
        <Box sx={{display:"flex",justifyContent:"space-between"}}>
            <Typography>{minRateDescription}</Typography>
            <Typography>{maxRateDescription}</Typography>
        </Box>
        </>
     );
  }
   
  export default RatingScore;
