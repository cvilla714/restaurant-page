import { pageLoad } from "./page_load";
import { tabsLoad, Tabs } from "./tabs";

// create tabs
const tabs = new Tabs(document.querySelector(".tabs"));
tabs.init();
