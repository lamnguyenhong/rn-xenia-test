import { MARGIN_VERTICAL } from "@/constants/ui";
import { makeStyles } from "@rneui/themed";
import { RFValue } from "react-native-responsive-fontsize";

export const useStyle = makeStyles((theme) => ({
  container: {
    width: '100%'
  },
  registerStyleView: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    display: 'flex',
    width: '100%',
    marginBottom: MARGIN_VERTICAL
  },
  registrationText: {
    fontSize: RFValue(10),
  },
}))