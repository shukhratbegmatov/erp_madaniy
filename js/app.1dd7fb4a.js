(function(){"use strict";var t={453:function(t,a,s){s.d(a,{A:function(){return d}});var i=function(){var t=this,a=t._self._c;return a("div",{staticClass:"main_navs"},[t._m(0),a("div",[a("div",{staticClass:"user_data"},[t._m(1),t._m(2),a("button",{staticClass:"btn out-btn pull-left",attrs:{href:"/oz/site/logout"},on:{click:function(a){return t.logOut()}}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"15",height:"20",viewBox:"0 0 18 20"}},[a("image",{attrs:{id:"_157938","data-name":"157938",width:"18",height:"20","xlink:href":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAYAAACAl21KAAAABHNCSVQICAgIfAhkiAAAANhJREFUOE+91LFKA0EUheFv1UrwLXwAe0V9AUkvmd52Ot/ALtNZ2sybiJVdIGChgoVJr5VgsZKQgIKb3Syj087hnzP33Hur4ai+w6Hm84ajHE3WaFTDUV3jE7MG4QfOcvTYBTTO0cE6YdvdytH/g0Kyi50cvX93ubGjkNxiH8c5elrB+oCucInpMs2XOawPqMI1LvCM0xy9bgyavx6SLWSc4wEnP0AhGeAG221xs4DtLXX3fwPq4GIhaf1aF1BIyhQ7JMXiL9aQZUakqY69GvI3WNHFVmTVfgEDLZlFVEbDkAAAAABJRU5ErkJggg=="}})])])])])])},e=[function(){var t=this,a=t._self._c;return a("div",[a("div",{staticClass:"org_name"},[a("div",{staticClass:"org_text"},[t._v(" Madaniy meros agentligi ")]),a("div",{staticClass:"org_title"},[t._v(" Yagona elektron platforma ")])])])},function(){var t=this,a=t._self._c;return a("div",[a("img",{attrs:{src:s(5314),width:"30px",alt:""}})])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"user_names"},[a("div",{staticClass:"user"},[t._v(" Shuxrat Begmatov ")]),a("div",{staticClass:"user_leader"},[t._v(" AKTni joriy etish va raqamlashtirish bo'limi bosh mutaxasisi ")])])}],n=(s(4114),{name:"MainNavbar",methods:{logOut(){localStorage.removeItem("token"),this.$router.push("/login")}},data(){return{user:""}},mounted(){this.$http.get("/user-me/",{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}}).then((t=>{this.user=t.data}))}}),r=n,o=s(1656),l=(0,o.A)(r,i,e,!1,null,null,null),d=l.exports},3513:function(t,a,s){s.d(a,{A:function(){return c}});var i=function(){var t=this,a=t._self._c;t._self._setupProxy;return a("div",[a("div",{staticClass:"main_sidebar"},[t._m(0),a("div",{staticClass:"side_menus"},[a("div",[a("router-link",{attrs:{to:"/"}},[a("div",{staticClass:"main_links"},[a("svg",{attrs:{width:"16.800293",height:"16.799805",viewBox:"0 0 16.8003 16.7998",fill:"none",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[a("desc",[t._v(" Created with Pixso. ")]),a("defs",[a("linearGradient",{attrs:{x1:"0.000000",y1:"0.000004",x2:"16.800068",y2:"16.800072",id:"paint_linear_2_574_0",gradientUnits:"userSpaceOnUse"}},[a("stop",{attrs:{"stop-color":"#14ADD6"}}),a("stop",{attrs:{offset:"1.000000","stop-color":"#384295"}})],1)],1),a("path",{attrs:{id:"Vector",d:"M8 2.5L8 5.5C7.99 6.16 7.73 6.79 7.26 7.26C6.79 7.73 6.16 7.99 5.5 8L2.5 8C1.83 7.99 1.2 7.73 0.73 7.26C0.26 6.79 0 6.16 0 5.5L0 2.5C0 1.83 0.26 1.2 0.73 0.73C1.2 0.26 1.83 0 2.5 0L5.5 0C6.16 0 6.79 0.26 7.26 0.73C7.73 1.2 7.99 1.83 8 2.5ZM14.29 0L11.29 0C10.63 0 10 0.26 9.53 0.73C9.06 1.2 8.8 1.83 8.8 2.5L8.8 5.5C8.8 6.16 9.06 6.79 9.53 7.26C10 7.73 10.63 7.99 11.29 8L14.29 8C14.96 7.99 15.59 7.73 16.06 7.26C16.53 6.79 16.79 6.16 16.8 5.5L16.8 2.5C16.79 1.83 16.53 1.2 16.06 0.73C15.59 0.26 14.96 0 14.29 0ZM5.5 8.79L2.5 8.79C1.83 8.8 1.2 9.06 0.73 9.53C0.26 10 0 10.63 0 11.29L0 14.29C0 14.96 0.26 15.59 0.73 16.06C1.2 16.53 1.83 16.79 2.5 16.79L5.5 16.79C6.16 16.79 6.79 16.53 7.26 16.06C7.73 15.59 7.99 14.96 8 14.29L8 11.29C7.99 10.63 7.73 10 7.26 9.53C6.79 9.06 6.16 8.8 5.5 8.79L5.5 8.79ZM14.29 8.79L11.29 8.79C10.63 8.8 10 9.06 9.53 9.53C9.06 10 8.8 10.63 8.8 11.29L8.8 14.29C8.8 14.96 9.06 15.59 9.53 16.06C10 16.53 10.63 16.79 11.29 16.79L14.29 16.79C14.96 16.79 15.59 16.53 16.06 16.06C16.53 15.59 16.79 14.96 16.8 14.29L16.8 11.29C16.79 10.63 16.53 10 16.06 9.53C15.59 9.06 14.96 8.8 14.29 8.79Z",fill:"url(#paint_linear_2_574_0)","fill-opacity":"1.000000","fill-rule":"nonzero"}})]),t._v(" Dashboard ")])])],1),a("div",[a("router-link",{attrs:{to:"/objects"}},[a("div",{staticClass:"main_links"},[a("svg",{attrs:{width:"24.000000",height:"24.000000",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[a("desc",[t._v(" Created with Pixso. ")]),a("defs",[a("clipPath",{attrs:{id:"clip5_1291"}},[a("rect",{attrs:{id:"Stock",rx:"0.000000",width:"23.000000",height:"23.000000",transform:"translate(0.500000 0.500000)",fill:"white","fill-opacity":"0"}})])]),a("rect",{attrs:{id:"Stock",rx:"0.000000",width:"23.000000",height:"23.000000",transform:"translate(0.500000 0.500000)",fill:"#FFFFFF","fill-opacity":"0"}}),a("g",{attrs:{"clip-path":"url(#clip5_1291)"}},[a("path",{attrs:{id:"Vector",d:"M4 7.87L8.87 7.87L8.87 3L4 3L4 7.87ZM5.53 4.53L7.34 4.53L7.34 6.34L5.53 6.34L5.53 4.53Z",fill:"#272525","fill-opacity":"1.000000","fill-rule":"nonzero"}}),a("path",{attrs:{id:"Vector",d:"M10.73 3L19.99 3L19.99 4.53L10.73 4.53L10.73 3Z",fill:"#272525","fill-opacity":"1.000000","fill-rule":"nonzero"}}),a("path",{attrs:{id:"Vector",d:"M10.73 6.34L18.13 6.34L18.13 7.87L10.73 7.87L10.73 6.34Z",fill:"#272525","fill-opacity":"1.000000","fill-rule":"nonzero"}}),a("path",{attrs:{id:"Vector",d:"M4 14.55L8.87 14.55L8.87 9.68L4 9.68L4 14.55ZM5.53 11.21L7.34 11.21L7.34 13.02L5.53 13.02L5.53 11.21Z",fill:"#272525","fill-opacity":"1.000000","fill-rule":"nonzero"}}),a("path",{attrs:{id:"Vector",d:"M10.73 9.68L19.99 9.68L19.99 11.21L10.73 11.21L10.73 9.68Z",fill:"#272525","fill-opacity":"1.000000","fill-rule":"nonzero"}}),a("path",{attrs:{id:"Vector",d:"M10.73 13.02L18.13 13.02L18.13 14.55L10.73 14.55L10.73 13.02Z",fill:"#272525","fill-opacity":"1.000000","fill-rule":"nonzero"}}),a("path",{attrs:{id:"Vector",d:"M4 21.24L8.87 21.24L8.87 16.36L4 16.36L4 21.24ZM5.53 17.89L7.34 17.89L7.34 19.7L5.53 19.7L5.53 17.89Z",fill:"#272525","fill-opacity":"1.000000","fill-rule":"nonzero"}}),a("path",{attrs:{id:"Vector",d:"M10.73 16.36L19.99 16.36L19.99 17.89L10.73 17.89L10.73 16.36Z",fill:"#272525","fill-opacity":"1.000000","fill-rule":"nonzero"}}),a("path",{attrs:{id:"Vector",d:"M10.73 19.7L18.13 19.7L18.13 21.24L10.73 21.24L10.73 19.7Z",fill:"#272525","fill-opacity":"1.000000","fill-rule":"nonzero"}})])]),t._v(" Obyektlar ")])])],1)])])])},e=[function(){var t=this,a=t._self._c;t._self._setupProxy;return a("div",{staticClass:"side_logo"},[a("img",{attrs:{src:s(2806),width:"197px",alt:""}})])}],n=s(6848),r=(0,n.defineComponent)({__name:"SidebarMain",setup(t){return{__sfc:!0}}}),o=r,l=s(1656),d=(0,l.A)(o,i,e,!1,null,null,null),c=d.exports},7867:function(t,a,s){var i=s(6848),e=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"app"}},[t.isLoading?a("div",{staticClass:"loader"},[a("b-spinner")],1):t._e(),a("router-view")],1)},n=[],r=(s(4114),s(3518)),o={mounted(){null===localStorage.getItem("token")&&this.$router.push("/login")},computed:{...(0,r.aH)(["isLoading","refCount"])},created(){this.$http.interceptors.request.use((t=>(this.$store.commit("loading",!0),t)),(t=>(this.$store.commit("loading",!1),Promise.reject(t)))),this.$http.interceptors.response.use((t=>(this.$store.commit("loading",!1),t)),(t=>(this.$store.commit("loading",!1),Promise.reject(t))))}},l=o,d=s(1656),c=(0,d.A)(l,e,n,!1,null,null,null),v=c.exports,u=s(4458);(0,u.k)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});var _=s(7753);i["default"].use(r.Ay);var h=new r.Ay.Store({state:{isLoading:!1,refCount:0},mutations:{loading(t,a){console.log({isLoading:a}),a?(t.refCount++,t.isLoading=!0):t.refCount>0&&(t.refCount--,t.isLoading=t.refCount>0)},SET_MENU(t,a){t.users=a}},actions:{},modules:{}}),p=s(1641),f=s(4486),g=(s(9313),s(4373)),m=s(9553);i["default"].config.productionTip=!1,g.A.defaults.baseURL="https://erp-api.madaniymeros.uz/api/v1/",i["default"].prototype.$http=g.A,i["default"].use(p.vGs),i["default"].use(f.YS);const C={};i["default"].use(m.Ay,C),new i["default"]({router:_.A,store:h,render:t=>t(v)}).$mount("#app")},7753:function(t,a,s){s.d(a,{A:function(){return m}});s(8992),s(7550);var i=s(6848),e=s(6178),n=function(){var t=this,a=t._self._c;return a("div",{staticClass:"home"},[a("div",{staticClass:"new_home"},[a("MainNavbar"),a("SidebarMain"),a("div",{staticClass:"main_container main_card_c"},[a("div",[a("div",{staticClass:"statistics"},[a("div",{staticClass:"displey_flex"},[a("div",[a("div",{staticClass:"main_statis_card"},[a("div",{staticClass:"create_count"},[t._v(" 250 ")]),a("div",{staticClass:"create_name"},[t._v(" Arxeologik obyektlar ")]),a("div",{staticClass:"main-count"},[a("svg",{attrs:{width:"9.505859",height:"11.544922",viewBox:"0 0 9.50586 11.5449",fill:"none",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[a("desc",[t._v(" Created with Pixso. ")]),a("defs"),a("path",{attrs:{id:"shape",d:"M4.75 0.79L4.75 10.79M8.75 4.79L4.75 0.79L0.75 4.79",stroke:"#10A242","stroke-opacity":"1.000000","stroke-width":"1.500000","stroke-linejoin":"round","stroke-linecap":"round"}})]),t._v(" 1200 ")])])]),a("div",[a("div",{staticClass:"main_statis_card"},[a("div",{staticClass:"create_count"},[t._v(" 250 ")]),a("div",{staticClass:"create_name"},[t._v(" Monumental san'at yodgorliklari ")]),a("div",{staticClass:"main-count"},[a("svg",{attrs:{width:"9.505859",height:"11.544922",viewBox:"0 0 9.50586 11.5449",fill:"none",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[a("desc",[t._v(" Created with Pixso. ")]),a("defs"),a("path",{attrs:{id:"shape",d:"M4.75 0.79L4.75 10.79M8.75 4.79L4.75 0.79L0.75 4.79",stroke:"#10A242","stroke-opacity":"1.000000","stroke-width":"1.500000","stroke-linejoin":"round","stroke-linecap":"round"}})]),t._v(" 1200 ")])])]),a("div",[a("div",{staticClass:"main_statis_card"},[a("div",{staticClass:"create_count"},[t._v(" 250 ")]),a("div",{staticClass:"create_name"},[t._v(" Diqatga sazovor joylar ")]),a("div",{staticClass:"main-count"},[a("svg",{attrs:{width:"9.505859",height:"11.544922",viewBox:"0 0 9.50586 11.5449",fill:"none",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[a("desc",[t._v(" Created with Pixso. ")]),a("defs"),a("path",{attrs:{id:"shape",d:"M4.75 0.79L4.75 10.79M8.75 4.79L4.75 0.79L0.75 4.79",stroke:"#10A242","stroke-opacity":"1.000000","stroke-width":"1.500000","stroke-linejoin":"round","stroke-linecap":"round"}})]),t._v(" 1200 ")])])]),a("div",[a("div",{staticClass:"main_statis_card"},[a("div",{staticClass:"create_count"},[t._v(" 250 ")]),a("div",{staticClass:"create_name"},[t._v(" Arxitektura yodgorliklari ")]),a("div",{staticClass:"main-count"},[a("svg",{attrs:{width:"9.505859",height:"11.544922",viewBox:"0 0 9.50586 11.5449",fill:"none",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[a("desc",[t._v(" Created with Pixso. ")]),a("defs"),a("path",{attrs:{id:"shape",d:"M4.75 0.79L4.75 10.79M8.75 4.79L4.75 0.79L0.75 4.79",stroke:"#10A242","stroke-opacity":"1.000000","stroke-width":"1.500000","stroke-linejoin":"round","stroke-linecap":"round"}})]),t._v(" 1200 ")])])]),a("div",[a("div",{staticClass:"main_statis_card"},[a("div",{staticClass:"create_count"},[t._v(" 250 ")]),a("div",{staticClass:"create_name"},[t._v(" Muxofasa tegralari ")]),a("div",{staticClass:"main-count"},[a("svg",{attrs:{width:"9.505859",height:"11.544922",viewBox:"0 0 9.50586 11.5449",fill:"none",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[a("desc",[t._v(" Created with Pixso. ")]),a("defs"),a("path",{attrs:{id:"shape",d:"M4.75 0.79L4.75 10.79M8.75 4.79L4.75 0.79L0.75 4.79",stroke:"#10A242","stroke-opacity":"1.000000","stroke-width":"1.500000","stroke-linejoin":"round","stroke-linecap":"round"}})]),t._v(" 1200 ")])])])])]),a("div",{staticClass:"row"},[t._m(0),t._m(1),t._m(2),a("div",{staticClass:"col-xl-6"},[a("div",{staticClass:"main_card_counts"},[a("div",{staticClass:"object_stats"},[a("div",{staticClass:"ob_title"},[t._v("Ijro intizomi")]),a("div",{staticClass:"ob_title mt-3"},[t._v("27-01-2025 yil")]),a("div",{staticClass:"parent_main"},[t._m(3),a("div",[a("apexchart",{attrs:{type:"pie",options:t.chartOptions,series:t.series}})],1)])])])])])])])],1)])},r=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"col-xl-6"},[a("div",{staticClass:"main_card_counts"},[a("div",{staticClass:"object_stats"},[a("div",{staticClass:"ob_title"},[t._v("Obyektlar")]),a("div",{staticClass:"ob_table"},[a("div",{staticClass:"ob_child"},[a("table",[a("thead",[a("tr",[a("th",[t._v("T/R")]),a("th",[t._v("Viloyat nomi")]),a("th",[t._v("Obyektlar soni")]),a("th",[t._v("Tizimga kiritilgan")]),a("th",[t._v("Qolgan")])])]),a("tbody",[a("tr",[a("td",[t._v("01")]),a("td",[t._v("Toshkent shahar")]),a("td",[t._v("3000")]),a("td",[t._v("1000")]),a("td",{staticClass:"status pending"},[t._v("2000")])]),a("tr",[a("td",[t._v("02")]),a("td",[t._v("Namangan viloyati")]),a("td",[t._v("1000")]),a("td",[t._v("1000")]),a("td",{staticClass:"status approved"},[t._v("0")])]),a("tr",[a("td",[t._v("01")]),a("td",[t._v("Toshkent shahar")]),a("td",[t._v("3000")]),a("td",[t._v("1000")]),a("td",{staticClass:"status pending"},[t._v("2000")])]),a("tr",[a("td",[t._v("02")]),a("td",[t._v("Namangan viloyati")]),a("td",[t._v("1000")]),a("td",[t._v("1000")]),a("td",{staticClass:"status approved"},[t._v("0")])]),a("tr",[a("td",[t._v("01")]),a("td",[t._v("Toshkent shahar")]),a("td",[t._v("3000")]),a("td",[t._v("1000")]),a("td",{staticClass:"status pending"},[t._v("2000")])]),a("tr",[a("td",[t._v("02")]),a("td",[t._v("Namangan viloyati")]),a("td",[t._v("1000")]),a("td",[t._v("1000")]),a("td",{staticClass:"status approved"},[t._v("0")])]),a("tr",[a("td",[t._v("01")]),a("td",[t._v("Toshkent shahar")]),a("td",[t._v("3000")]),a("td",[t._v("1000")]),a("td",{staticClass:"status pending"},[t._v("2000")])]),a("tr",[a("td",[t._v("02")]),a("td",[t._v("Namangan viloyati")]),a("td",[t._v("1000")]),a("td",[t._v("1000")]),a("td",{staticClass:"status approved"},[t._v("0")])])])])])])])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"col-xl-6"},[a("div",{staticClass:"main_card_counts"},[a("div",{staticClass:"object_stats"},[a("div",{staticClass:"ob_title"},[t._v("Kadrlar")]),a("div",{staticClass:"ob_table"},[a("table",[a("thead",[a("tr",[a("th",[t._v("T/R")]),a("th",[t._v("Viloyat nomi")]),a("th",[t._v("Obyektlar soni")]),a("th",[t._v("Tizimga kiritilgan")]),a("th",[t._v("Qolgan")])])]),a("tbody",[a("tr",[a("td",[t._v("01")]),a("td",[t._v("Toshkent shahar")]),a("td",[t._v("3000")]),a("td",[t._v("1000")]),a("td",{staticClass:"status pending"},[t._v("2000")])]),a("tr",[a("td",[t._v("02")]),a("td",[t._v("Namangan viloyati")]),a("td",[t._v("1000")]),a("td",[t._v("1000")]),a("td",{staticClass:"status approved"},[t._v("0")])]),a("tr",[a("td",[t._v("01")]),a("td",[t._v("Toshkent shahar")]),a("td",[t._v("3000")]),a("td",[t._v("1000")]),a("td",{staticClass:"status pending"},[t._v("2000")])]),a("tr",[a("td",[t._v("02")]),a("td",[t._v("Namangan viloyati")]),a("td",[t._v("1000")]),a("td",[t._v("1000")]),a("td",{staticClass:"status approved"},[t._v("0")])]),a("tr",[a("td",[t._v("01")]),a("td",[t._v("Toshkent shahar")]),a("td",[t._v("3000")]),a("td",[t._v("1000")]),a("td",{staticClass:"status pending"},[t._v("2000")])]),a("tr",[a("td",[t._v("02")]),a("td",[t._v("Namangan viloyati")]),a("td",[t._v("1000")]),a("td",[t._v("1000")]),a("td",{staticClass:"status approved"},[t._v("0")])]),a("tr",[a("td",[t._v("01")]),a("td",[t._v("Toshkent shahar")]),a("td",[t._v("3000")]),a("td",[t._v("1000")]),a("td",{staticClass:"status pending"},[t._v("2000")])]),a("tr",[a("td",[t._v("02")]),a("td",[t._v("Namangan viloyati")]),a("td",[t._v("1000")]),a("td",[t._v("1000")]),a("td",{staticClass:"status approved"},[t._v("0")])])])])])])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"col-xl-6"},[a("div",{staticClass:"main_card_counts"},[a("div",{staticClass:"object_stats"},[a("div",{staticClass:"ob_title"},[t._v("Muzey ashyolari")]),a("div",{staticClass:"ob_table"},[a("table",[a("thead",[a("tr",[a("th",[t._v("T/R")]),a("th",[t._v("Viloyat nomi")]),a("th",[t._v("Obyektlar soni")]),a("th",[t._v("Tizimga kiritilgan")]),a("th",[t._v("Qolgan")])])]),a("tbody",[a("tr",[a("td",[t._v("01")]),a("td",[t._v("Toshkent shahar")]),a("td",[t._v("3000")]),a("td",[t._v("1000")]),a("td",{staticClass:"status pending"},[t._v("2000")])]),a("tr",[a("td",[t._v("02")]),a("td",[t._v("Namangan viloyati")]),a("td",[t._v("1000")]),a("td",[t._v("1000")]),a("td",{staticClass:"status approved"},[t._v("0")])]),a("tr",[a("td",[t._v("01")]),a("td",[t._v("Toshkent shahar")]),a("td",[t._v("3000")]),a("td",[t._v("1000")]),a("td",{staticClass:"status pending"},[t._v("2000")])]),a("tr",[a("td",[t._v("02")]),a("td",[t._v("Namangan viloyati")]),a("td",[t._v("1000")]),a("td",[t._v("1000")]),a("td",{staticClass:"status approved"},[t._v("0")])]),a("tr",[a("td",[t._v("01")]),a("td",[t._v("Toshkent shahar")]),a("td",[t._v("3000")]),a("td",[t._v("1000")]),a("td",{staticClass:"status pending"},[t._v("2000")])]),a("tr",[a("td",[t._v("02")]),a("td",[t._v("Namangan viloyati")]),a("td",[t._v("1000")]),a("td",[t._v("1000")]),a("td",{staticClass:"status approved"},[t._v("0")])]),a("tr",[a("td",[t._v("01")]),a("td",[t._v("Toshkent shahar")]),a("td",[t._v("3000")]),a("td",[t._v("1000")]),a("td",{staticClass:"status pending"},[t._v("2000")])]),a("tr",[a("td",[t._v("02")]),a("td",[t._v("Namangan viloyati")]),a("td",[t._v("1000")]),a("td",[t._v("1000")]),a("td",{staticClass:"status approved"},[t._v("0")])])])])])])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"count_h"},[a("div",{staticClass:"h_counts"},[a("div",{staticClass:"count_h_m"}),a("div",{staticClass:"count_h_s"},[t._v(" 80 Jami Topshiriqlar soni ")])]),a("div",{staticClass:"h_counts success"},[a("div",{staticClass:"count_h_m"}),a("div",{staticClass:"count_h_s"},[t._v(" 80 Jami bajarilgan topshiriqlar soni ")])]),a("div",{staticClass:"h_counts error"},[a("div",{staticClass:"count_h_m"}),a("div",{staticClass:"count_h_s"},[t._v(" 0 Muddati o'tgan topshiriqlar soni ")])])])}],o=s(3513),l=s(453),d=s(8923),c=s.n(d),v={components:{MainNavbar:l.A,SidebarMain:o.A,apexchart:c()},data(){return{series:[44,55,13],chartOptions:{labels:["Topshiriqlar soni","Bajarilgan topshiriqlar","Muddati o'tgan topshiriqlar"],chart:{type:"pie"},legend:{position:"bottom"}}}}},u=v,_=s(1656),h=(0,_.A)(u,n,r,!1,null,null,null),p=h.exports;i["default"].use(e.Ay);const f=[{path:"/",name:"home",component:p,meta:{requiresAuth:!0}},{path:"/about",name:"about",component:()=>s.e(594).then(s.bind(s,1417))},{path:"/objects",name:"ObjectsMain",component:()=>s.e(594).then(s.bind(s,1798)),meta:{requiresAuth:!0}},{path:"/objects/create",name:"ObjectsMainCreate",component:()=>s.e(594).then(s.bind(s,4380)),meta:{requiresAuth:!0}},{path:"/login",name:"LoginPage",component:()=>s.e(594).then(s.bind(s,5054))}],g=new e.Ay({mode:"history",base:"/",routes:f,scrollBehavior:(t,a,s)=>s||(t.hash?{selector:t.hash}:{x:0,y:0})});g.beforeEach(((t,a,s)=>{t.matched.some((t=>t.meta.requiresAuth))?localStorage.getItem("token")?s():s({name:"LoginPage"}):s()}));var m=g},2806:function(t,a,s){t.exports=s.p+"img/logo.52093d3e.png"},5314:function(t,a,s){t.exports=s.p+"img/user.99e6fb41.png"}},a={};function s(i){var e=a[i];if(void 0!==e)return e.exports;var n=a[i]={exports:{}};return t[i].call(n.exports,n,n.exports,s),n.exports}s.m=t,function(){var t=[];s.O=function(a,i,e,n){if(!i){var r=1/0;for(c=0;c<t.length;c++){i=t[c][0],e=t[c][1],n=t[c][2];for(var o=!0,l=0;l<i.length;l++)(!1&n||r>=n)&&Object.keys(s.O).every((function(t){return s.O[t](i[l])}))?i.splice(l--,1):(o=!1,n<r&&(r=n));if(o){t.splice(c--,1);var d=e();void 0!==d&&(a=d)}}return a}n=n||0;for(var c=t.length;c>0&&t[c-1][2]>n;c--)t[c]=t[c-1];t[c]=[i,e,n]}}(),function(){s.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(a,{a:a}),a}}(),function(){s.d=function(t,a){for(var i in a)s.o(a,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:a[i]})}}(),function(){s.f={},s.e=function(t){return Promise.all(Object.keys(s.f).reduce((function(a,i){return s.f[i](t,a),a}),[]))}}(),function(){s.u=function(t){return"js/about.b0d74741.js"}}(),function(){s.miniCssF=function(t){}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)}}(),function(){var t={},a="erp.madaniymeros.uz:";s.l=function(i,e,n,r){if(t[i])t[i].push(e);else{var o,l;if(void 0!==n)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var v=d[c];if(v.getAttribute("src")==i||v.getAttribute("data-webpack")==a+n){o=v;break}}o||(l=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,s.nc&&o.setAttribute("nonce",s.nc),o.setAttribute("data-webpack",a+n),o.src=i),t[i]=[e];var u=function(a,s){o.onerror=o.onload=null,clearTimeout(_);var e=t[i];if(delete t[i],o.parentNode&&o.parentNode.removeChild(o),e&&e.forEach((function(t){return t(s)})),a)return a(s)},_=setTimeout(u.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=u.bind(null,o.onerror),o.onload=u.bind(null,o.onload),l&&document.head.appendChild(o)}}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.p="/"}(),function(){var t={524:0};s.f.j=function(a,i){var e=s.o(t,a)?t[a]:void 0;if(0!==e)if(e)i.push(e[2]);else{var n=new Promise((function(s,i){e=t[a]=[s,i]}));i.push(e[2]=n);var r=s.p+s.u(a),o=new Error,l=function(i){if(s.o(t,a)&&(e=t[a],0!==e&&(t[a]=void 0),e)){var n=i&&("load"===i.type?"missing":i.type),r=i&&i.target&&i.target.src;o.message="Loading chunk "+a+" failed.\n("+n+": "+r+")",o.name="ChunkLoadError",o.type=n,o.request=r,e[1](o)}};s.l(r,l,"chunk-"+a,a)}},s.O.j=function(a){return 0===t[a]};var a=function(a,i){var e,n,r=i[0],o=i[1],l=i[2],d=0;if(r.some((function(a){return 0!==t[a]}))){for(e in o)s.o(o,e)&&(s.m[e]=o[e]);if(l)var c=l(s)}for(a&&a(i);d<r.length;d++)n=r[d],s.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return s.O(c)},i=self["webpackChunkerp_madaniymeros_uz"]=self["webpackChunkerp_madaniymeros_uz"]||[];i.forEach(a.bind(null,0)),i.push=a.bind(null,i.push.bind(i))}();var i=s.O(void 0,[504],(function(){return s(7867)}));i=s.O(i)})();
//# sourceMappingURL=app.1dd7fb4a.js.map