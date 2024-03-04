import {
    Box,
    Button,
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
    description?: string;
    image: string;
    maxRate:number;
    minRateDescription?:string;
    maxRateDescription?:string;
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
    let activeStyle="#fff"

    return ( 
        <>
        {imageRequired ? (
            <img style={{width:'250px'}} src={image} alt="required"></img>
        ) : (
            <img src={image}></img>
        )}

        {required ? (
            <Typography>{title}*</Typography>
        ) : (
            <Typography>{title}</Typography>
        )}
        <Typography sx={{color:'#888'}}>{description}</Typography>
        <Box sx={{display:"flex",gap:"4px"}}>
                {Array.from({length:maxRate}).map((_,i)=>{
                    if(rating==i+1){
                        activeStyle="#999"
                    }else{
                        activeStyle="#fff"
                    }
                return(
                    <Button key={i} style={{background:`${activeStyle}`,
                                    color:'#000',
                                    border:'1px solid #777',
                                    fontWeight:"bold",
                                    fontSize:'20px',
                                    padding:'1px'}}  
                        onClick={()=>setRating(i+1)}>{i+1}
                    </Button>
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
