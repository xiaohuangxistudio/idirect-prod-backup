import{k as p,_ as g,c as y,l as m,b as s,a as e,r as o,o as w}from"./index-Cm55Gr8Q.js";/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var r={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=({size:a,strokeWidth:t=2,absoluteStrokeWidth:l,color:n,iconNode:d,name:b,class:h,...v},{slots:c})=>p("svg",{...r,width:a||r.width,height:a||r.height,stroke:n||r.stroke,"stroke-width":l?Number(t)*24/Number(a):t,class:["lucide",`lucide-${C(b??"icon")}`],...v},[...d.map(u=>p(...u)),...c.default?[c.default()]:[]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=(a,t)=>(l,{slots:n})=>p(x,{...l,iconNode:t,name:a},n);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=i("BellRingIcon",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6",key:"5bb3ad"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8",key:"tap9e0"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=i("ClockIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=i("DollarSignIcon",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=i("FileCheckIcon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=i("MapPinnedIcon",[["path",{d:"M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0",key:"11u0oz"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712",key:"q8zwxj"}]]),D={name:"IndexPage",components:{DollarSign:V,Clock:I,FileCheck:z,BellRing:M,MapPinned:B},data(){return{customerRateValue:4.8}}},R={class:"homepage"},q={class:"features"},A={class:"container"},N={class:"features-grid"},P={class:"feature-item"},S={class:"feature-icon"},$={class:"feature-item"},F={class:"feature-icon"},H={class:"feature-item"},L={class:"feature-icon"},j={class:"feature-item"},E={class:"feature-icon"},Z={class:"feature-item"},K={class:"feature-icon"},U={class:"statistics"},G={class:"container"},J={class:"statistics-grid"},O={class:"stat-item"},Q={class:"stat-value"};function T(a,t,l,n,d,b){const h=o("Clock"),v=o("DollarSign"),c=o("FileCheck"),u=o("BellRing"),_=o("MapPinned"),k=o("van-rate");return w(),y("div",R,[t[13]||(t[13]=m('<nav class="navbar" data-v-70bc8998><div class="container" data-v-70bc8998><div class="brand" data-v-70bc8998><img src="https://delivery-static-file.idirect.au/asset/image/iDirect-home-logo-blue_440x128.png" alt="iDirect Logo" class="logo" data-v-70bc8998></div><div class="menu" data-v-70bc8998><a href="/merchant/login" class="nav-button" data-v-70bc8998>商家登录</a></div></div></nav><div class="hero" data-v-70bc8998><div class="hero-content" data-v-70bc8998><h1 class="hero-title" data-v-70bc8998>智能配送，快速可靠</h1><p class="hero-subtitle" data-v-70bc8998>为小微商家打造的一站式配送解决方案</p></div></div>',2)),s("div",q,[s("div",A,[s("div",N,[s("div",P,[s("div",S,[e(h,{class:"icon",size:50})]),t[1]||(t[1]=s("h3",null,"高效配送",-1)),t[2]||(t[2]=s("p",null,"优化配送流程，提升效率，让每一单都快速送达。",-1))]),s("div",$,[s("div",F,[e(v,{class:"icon",size:50})]),t[3]||(t[3]=s("h3",null,"降低成本",-1)),t[4]||(t[4]=s("p",null,"减少对人员的依赖，通过智能化平台降低运营成本。",-1))]),s("div",H,[s("div",L,[e(c,{class:"icon",size:50})]),t[5]||(t[5]=s("h3",null,"简单易用",-1)),t[6]||(t[6]=s("p",null,"专为小微商家设计的友好界面，无需复杂培训即可上手。",-1))]),s("div",j,[s("div",E,[e(u,{class:"icon",size:50})]),t[7]||(t[7]=s("h3",null,"多渠道推送",-1)),t[8]||(t[8]=s("p",null,"多渠道实时推送提醒，确保顺利到达。",-1))]),s("div",Z,[s("div",K,[e(_,{class:"icon",size:50})]),t[9]||(t[9]=s("h3",null,"实时追踪",-1)),t[10]||(t[10]=s("p",null,"实时跟踪订单状态，提供送达证明。",-1))])])])]),s("div",U,[s("div",G,[s("div",J,[t[12]||(t[12]=m('<div class="stat-item" data-v-70bc8998><div class="stat-value" data-v-70bc8998>Eastwood</div><div class="stat-label" data-v-70bc8998>覆盖范围</div></div><div class="stat-item" data-v-70bc8998><div class="stat-value" data-v-70bc8998>98%</div><div class="stat-label" data-v-70bc8998>准时率</div></div><div class="stat-item" data-v-70bc8998><div class="stat-value" data-v-70bc8998>30-45分钟</div><div class="stat-label" data-v-70bc8998>平均配送时间</div></div>',3)),s("div",O,[s("div",Q,[e(k,{modelValue:d.customerRateValue,"onUpdate:modelValue":t[0]||(t[0]=f=>d.customerRateValue=f),size:25,color:"#ffd21e","void-icon":"star","void-color":"#eee",readonly:!0,"allow-half":""},null,8,["modelValue"])]),t[11]||(t[11]=s("div",{class:"stat-label"},"用户满意度",-1))])])])]),t[14]||(t[14]=s("footer",{class:"footer"},[s("div",{class:"container"},[s("p",null,"© 2024 iDirect")])],-1))])}const Y=g(D,[["render",T],["__scopeId","data-v-70bc8998"]]);export{Y as default};
