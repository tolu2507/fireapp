import { capitalize } from "@mui/material";
import Grid from "@mui/material/Grid";
import { CommonButton } from "../../common/CommonButton/CommonButton";

export function Authentication() {
  const styledButton = {
    fontWeight: 600,
    fontSize: "0.87rem",
    textTransform: "capitalize",
    borderRadius: 2.5,
    "&.MuiButton-contained": {
      backgroundColor: "#009be5",
      "&:hover": {
        backgroundColor: "#006db3",
      },
    },
    "&.MuiButton-outlined": {
      color: "#009be5",
      borderColor: "#009be5",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
  };
  return (
    <Grid item xs={8}>
      <item>This is the Authentication Page</item>
      <pre></pre>
      <CommonButton variant={"contained"} size={"large"} sx={styledButton}>
        Add user
      </CommonButton>
      <CommonButton variant={"outlined"} sx={styledButton}>
        Web setup
      </CommonButton>
    </Grid>
  );
}
