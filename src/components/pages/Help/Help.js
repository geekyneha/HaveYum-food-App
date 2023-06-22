import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button } from "@mui/material";
import style from "./help.module.css"

export default function Help() {
  return (
    <>
      <div className={style["help-container"]}>
        <h1>Help & Support</h1>
        <span>Let's take a step ahead and help you better.</span>
      
      <div className={style["faq-container"]}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>I want to partner my restaurant with haveYum</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Partner with us</Typography>
            <Button variant="outlined">Send an Email</Button>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              What are the mandatory documents needed to list my restaurant on
              Swiggy?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              - Copies of the below documents are mandatory
            </Typography>
            <Typography>- FSSAI Licence OR FSSAI Acknowledgement</Typography>
            <Typography>- Pan Card</Typography>
            <Typography>- GSTIN Certificate</Typography>
            <Typography>- Cancelled Cheque OR bank Passbook</Typography>
            <Typography>- Menu</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>What is this one time Onboarding fees? Do I have to pay for it while registering?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>This is a one-time fee charged towards the system & admin costs incurred during the onboarding process. It is deducted from the weekly payouts after you start receiving orders from Swiggy.</Typography>
            
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Who should I contact if I need help & support in getting onboarded?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>You can connect with Partner Support on 080-67466777/68179777 or write to partnersuport@haveYum.in</Typography>
            <Button variant="outlined">Send an Email</Button>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>How much commission will I be charged by haveYum</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>This is a one-time fee charged towards the system & admin costs incurred during the onboarding process. It is deducted from the weekly payouts after you start receiving orders from Swiggy.</Typography>
            
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>What is this one time Onboarding fees? Do I have to pay for it while registering?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>This is a one-time fee charged towards the system & admin costs incurred during the onboarding process. It is deducted from the weekly payouts after you start receiving orders from Swiggy.</Typography>
            
          </AccordionDetails>
        </Accordion>
        
        </div>
        
      </div>
    </>
  );
}
