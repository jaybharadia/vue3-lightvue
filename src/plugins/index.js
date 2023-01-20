import registerLightVue from "./lightvue";
import registerVueTable from "./vuetable";
const installPlugins = (appInstance) => {
  registerLightVue(appInstance);
  registerVueTable(appInstance);
};
export default installPlugins;
