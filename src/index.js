import { pageLoad } from "./page_load";
import { tabsLoad, Tabs } from "./tabs";
import { navCnt } from "./nav";
import { galeryLoad } from "./galery";
// import { mainnavCnt } from "./mainnav";
// create tabs
const tabs = new Tabs(document.querySelector(".tabs"));
tabs.init();
