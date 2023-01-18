import LvInput from "lightvue/input";
import LvButton from "lightvue/button";

const installPlugin = (appInstance) => {
  appInstance.component("LvInput", LvInput);
  appInstance.component("LvButton", LvButton);
};
export default installPlugin;
