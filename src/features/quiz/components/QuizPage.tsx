import { Grid } from "@mui/material";
import { VFC } from "react";
import { Page } from "../../../components/elements/Page";

export const QuizPage: VFC = () => {
  return (
    <Page>
      <Grid
        sx={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "grey.100",
        }}
        container
        direction="column"
      >
        <Grid item m={2}>
          quiz
        </Grid>
      </Grid>
    </Page>
  );
};
