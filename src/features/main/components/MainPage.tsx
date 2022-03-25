import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { useNavigate } from "@tanstack/react-location";
import { useCallback, VFC } from "react";
import { Page } from "../../../components/elements/Page";

export const LibraryCard: VFC = () => {
  const navigate = useNavigate();
  const handleClick = useCallback(() => navigate({ to: "/library" }), []);

  return (
    <Card sx={{ width: 300 }}>
      <CardActionArea onClick={handleClick}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Library
          </Typography>
          <Typography variant="body2" color="text.secondary">
            work in progress
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export const QuizCard: VFC = () => {
  return (
    <Card sx={{ width: 300 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Quiz
          </Typography>
          <Typography variant="body2" color="text.secondary">
            work in progress
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export const MainPage: VFC = () => {
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
          <LibraryCard />
        </Grid>
        <Grid item m={2}>
          <QuizCard />
        </Grid>
      </Grid>
    </Page>
  );
};
