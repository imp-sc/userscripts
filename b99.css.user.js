// ==UserScript==
// @name         B99 CSS Patch
// @namespace    https://app.base99.com
// @version      0.1
// @description  resizes tickets grid
// @author       You
// @match        https://app.base99.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=base99.com
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

const css =
`body{font-size:15.5px;line-height:1.3;}
.rectangleDashboardBody {margin: 10px 25px 50px 25px;}
.mx-datagrid tr{cursor:text;}
.mx-window{width:800px,height:auto;}
.mx-layoutgrid.mx-layoutgrid-fluid.container-fluid.mx-name-customerlayoutGrid2 {padding: 0px 0px 0px 0px !important;}
div[class="filter"] div[class^="mx-name-container"] {width:unset;}
div.col-lg-2.col-md-12.col-12 { display:none !important; visibility:hidden !important; }
div.mx-name-customerlayoutGrid2.mx-layoutgrid.mx-layoutgrid-fluid.container-fluid.spacing-outer-top-none div.row div.col-lg.col-md.col{font-family: "Consolas",sans-serif;letter-spacing:-0.05em};
div.mx-dataview-content div.mx-name-customerlayoutGrid2.mx-layoutgrid.mx-layoutgrid-fluid.container-fluid.spacing-outer-top-none div.row {line-height:1.0;}
div.mx-name-container3.customer_ticketlist_New div.mx-name-dataGrid21.techDashboardGrid.table-compact div.table div.table-content.infinite-loading div.tr div.th {min-height:125px;}
.mx-scrollcontainer .mx-placeholder .mx-layoutgrid, .mx-scrollcontainer .mx-placeholder .mx-layoutgrid-fluid {padding: 20px 5px 5px 20px;}
div.mx-name-technicianDashboardGrid1_SSP_controlbar div.mx-name-container3.customer_ticketlist_New div.mx-name-technicianDashboardGrid1_SSP_controlbar1.mx-grid-controlbar {top: 5px !important;}
.layout-atlas .region-topbar .topbar-content {height: 60px;}
.mx-name-container14 .customerDashLine {border-bottom: 0.5px none;}
.mx-name-dataView27 {width:100% !important;}
#mxui_widget_Underlay_0{display:none;}`;
GM_addStyle(css);
