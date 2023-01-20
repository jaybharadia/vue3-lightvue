import Vuetable from "vuetable-2";
import VueTablePaginationInfo from "vuetable-2";
import VueTablePaginationDropDown from "vuetable-2";
const installPlugin = (appInstance) => {
  appInstance.component("VueTable", Vuetable);
  appInstance.component("vuetable-pagination", VueTablePaginationInfo);
  appInstance.component(
    "vuetable-pagination-dropdown",
    VueTablePaginationDropDown
  );
  appInstance.component("vuetable-pagination-info", VueTablePaginationInfo);
};

export default installPlugin;
