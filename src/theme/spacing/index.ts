import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  let spacingClasses: any = {};
  spacingClasses["p-1"] = {
    padding: theme.spacing(1),
  };
  spacingClasses["p-2"] = {
    padding: theme.spacing(2),
  };
  return spacingClasses;
});
