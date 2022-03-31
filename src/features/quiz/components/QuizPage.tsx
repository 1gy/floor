import { Card, CardActionArea, CardContent, Grid, Typography } from "@mui/material";
import { VFC } from "react";
import { Page } from "../../../components/elements/Page";
import { useRandomQuiz } from "./QuizPage.logic";

export const RandomPlayCard: VFC = () => {
  const { play } = useRandomQuiz();

  return (
    <Card sx={{ width: 300 }}>
      <CardActionArea onClick={play}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            ランダム選曲
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ランダムに10曲をプレイします
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

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
          <Typography variant="h4">FLOOR曲名クイズ</Typography>
        </Grid>
        <Grid item m={2}>
          <RandomPlayCard />
        </Grid>
      </Grid>
    </Page>
  );
};
