import { theme } from "@/theme";
import { makeStyles } from "@rneui/themed";
import { RFValue } from "react-native-responsive-fontsize";

export const useStyle = makeStyles((theme) => ({
  container: {

  },
  viewTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  labelTextStyle: {
    fontSize: RFValue(12),
    fontWeight: '500'
  },
  valueTextStyle: {
    fontSize: RFValue(13),
    fontWeight: 'bold'
  },
}))