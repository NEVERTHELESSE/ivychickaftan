const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Features-CLUEu3ep.js","assets/index-BYUpvUnZ.js","assets/index-yupK7qw8.css","assets/FirstIntroduction-BX7ogwLi.js","assets/index-BVKcoDh9.js","assets/ClothLoading-BSx3lJMj.js","assets/Promo-Bou3HKYj.js","assets/NewestCategories-Cq3hhT6-.js","assets/Join-C7V1Z06N.js","assets/axios-upsvKRUO.js","assets/TopCollection-CsIGYtJE.js","assets/TopCollection-KLMUaSvi.css","assets/Advery-BIMu45Nb.js"])))=>i.map(i=>d[i]);
import{r as o,u as m,j as t,_ as e}from"./index-BYUpvUnZ.js";import{H as x}from"./Helmet-Dp2XQRgX.js";import{a as p}from"./axios-upsvKRUO.js";import{c as f}from"./cloths-D8kOQNdc.js";const h=o.lazy(()=>e(()=>import("./Features-CLUEu3ep.js"),__vite__mapDeps([0,1,2]))),j=o.lazy(()=>e(()=>import("./FirstIntroduction-BX7ogwLi.js"),__vite__mapDeps([3,1,2,4]))),E=o.lazy(()=>e(()=>import("./ClothLoading-BSx3lJMj.js"),__vite__mapDeps([5,1,2]))),y=o.lazy(()=>e(()=>import("./Promo-Bou3HKYj.js"),__vite__mapDeps([6,1,2]))),v=o.lazy(()=>e(()=>import("./NewestCategories-Cq3hhT6-.js"),__vite__mapDeps([7,1,2,5]))),L=o.lazy(()=>e(()=>import("./Join-C7V1Z06N.js"),__vite__mapDeps([8,1,2,9]))),P=o.lazy(()=>e(()=>import("./TopCollection-CsIGYtJE.js"),__vite__mapDeps([10,1,2,9,11]))),T=o.lazy(()=>e(()=>import("./Advery-BIMu45Nb.js"),__vite__mapDeps([12,1,2])));function D(){const[r,i]=o.useState(0),l=f.slice(0,r+6),[c,a]=o.useState(!1),[n,_]=o.useState(30);function d(){a(!0),setTimeout(()=>{i(s=>s+6),a(!1)},1e3)}return o.useEffect(()=>{async function s(){await p.get("http://localhost:9000/api/clothMax").then(u=>_(Number(u.data)))}s()},[]),m(s=>s.cart.api),t.jsxs("div",{children:[t.jsxs(x,{children:[t.jsx("meta",{charSet:"utf-8"}),t.jsx("title",{children:"ivychikaftan"}),t.jsx("link",{rel:"canonical",href:"http://localhost:5173/"})]}),t.jsxs(o.Suspense,{fallback:t.jsx("div",{className:"flex flex-wrap justify-around",children:t.jsx(E,{})}),children:[t.jsx(j,{}),t.jsx(h,{}),t.jsx(y,{}),t.jsx(v,{title:`newest collection
            `,cloths:l,loading:c}),n>r&&t.jsx("div",{className:"flex justify-center",children:t.jsx("button",{className:"border py-2 border-primaryColor shadow  px-6 rounded-lg w-[10rem]",onClick:d,children:"More Products"})}),t.jsx(P,{}),t.jsx(L,{}),t.jsx(T,{})]})]})}export{D as default};