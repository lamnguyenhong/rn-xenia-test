import { MARGIN_VERTICAL } from "@/constants/ui";
import { makeStyles } from "@rneui/themed";

export const useStyle = makeStyles((theme) => ({
  container: {
    flex: 1,
    marginVertical: MARGIN_VERTICAL
  }
}))