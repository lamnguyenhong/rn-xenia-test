import { MARGIN_HORIZONTAL } from "@/constants/ui";
import { makeStyles } from "@rneui/themed";

export const useStyle = makeStyles((theme) => ({
  container: {
    flex: 1,
    marginHorizontal: MARGIN_HORIZONTAL
  },
  details: {
    flex: 4,
  },
  actions: {
    flex: 2,
    justifyContent: 'flex-end',
    marginBottom: MARGIN_HORIZONTAL
  },
}))