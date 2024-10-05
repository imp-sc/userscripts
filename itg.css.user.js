// ==UserScript==
// @name         ITGlue CSS Patch
// @namespace    https://*.itglue.com/*
// @version      0.1
// @author       imp-sc
// @description  Forces wider search bar
// @match        https://*.itglue.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=itglue.com
// @updateURL    https://github.com/imp-sc/userscripts/raw/refs/heads/main/itg.css.user.js
// @downloadURL  https://github.com/imp-sc/userscripts/raw/refs/heads/main/itg.css.user.js
// @grant        GM_addStyle
// ==/UserScript==

// Replace CSS Properties
const css =
`@media only screen and (min-width: 1920px) {.search-bar-v3 .search-bar-v3-wrapper {width:70vw}}
.search-bar-v3 .typeahead.has-input-value {height:630px;}
.search-bar-v3 .typeahead .react-selectable-list {max-height:522px;}
body:where(.ui-theme-dark) {--kaseya-background-secondary:var(--topbar-background-color);}
.react-table .react-table-inner td {padding: 2px 8px;}
table {font-size:13.5px;}
`;
GM_addStyle(css);