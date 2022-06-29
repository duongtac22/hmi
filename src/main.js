import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/index'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone , faChartLine, faChartArea , faChartColumn , faBellSlash , faFolderTree, faTableList , faTableCellsLarge , faDiagramNext, faUserCircle, faChevronRight, faChevronLeft, faKey, faUser, faBell} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPhone , faChartLine , faChartArea , faChartColumn , faBellSlash , faTableList , faFolderTree,  faTableCellsLarge , faDiagramNext , faUserCircle , faChevronRight , faChevronLeft ,  faKey , faUser , faBell);
 
import '@/assets/css/tailwind.css'
import '@/assets/css/global.css'

const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon);
app.use( router )
app.use( store )
app.mount('#app')
