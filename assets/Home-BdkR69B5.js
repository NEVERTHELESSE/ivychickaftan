const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Features-COLLqBJB.js","assets/index-7e5pYmP3.js","assets/index-DPtp-W0Z.css","assets/FirstIntroduction-cuUufstC.js","assets/index-Dqh-LV-8.js","assets/ClothLoading-B3ofV4Gq.js","assets/Promo-BxTH3tGb.js","assets/NewestCategories-Bi4zHlFA.js","assets/Join-C7oKuauq.js","assets/TopCollection-BCVNvHxv.js","assets/cloths-D8kOQNdc.js","assets/TopCollection-Cs8yHCv6.css","assets/Advery-7QnQg0Go.js"])))=>i.map(i=>d[i]);
import{r as o,j as t,_ as e,a as n}from"./index-7e5pYmP3.js";import{H as f}from"./Helmet-DoTeLYF0.js";const j=o.lazy(()=>e(()=>import("./Features-COLLqBJB.js"),__vite__mapDeps([0,1,2]))),E=o.lazy(()=>e(()=>import("./FirstIntroduction-cuUufstC.js"),__vite__mapDeps([3,1,2,4]))),y=o.lazy(()=>e(()=>import("./ClothLoading-B3ofV4Gq.js"),__vite__mapDeps([5,1,2]))),v=o.lazy(()=>e(()=>import("./Promo-BxTH3tGb.js"),__vite__mapDeps([6,1,2]))),A=o.lazy(()=>e(()=>import("./NewestCategories-Bi4zHlFA.js"),__vite__mapDeps([7,1,2,5]))),L=o.lazy(()=>e(()=>import("./Join-C7oKuauq.js"),__vite__mapDeps([8,1,2]))),P=o.lazy(()=>e(()=>import("./TopCollection-BCVNvHxv.js"),__vite__mapDeps([9,1,2,10,11]))),T=o.lazy(()=>e(()=>import("./Advery-7QnQg0Go.js"),__vite__mapDeps([12,1,2])));function g(){const c="http://192.168.124.1:9000/api/",[a,_]=o.useState(0),[i,d]=o.useState([]),[u,l]=o.useState(!1),[x,m]=o.useState(30);function p(){l(!0),setTimeout(()=>{_(s=>s+6),l(!1)},1e3)}return o.useEffect(()=>{const s=new AbortController;async function r(){await n.get(`${c}product/${a}`).then(h=>{d(i.concat(h.data))})}return r(),()=>{s.abort()}},[a]),o.useEffect(()=>{async function s(){await n.get("http://localhost:9000/api/clothMax").then(r=>m(Number(r.data)))}s()},[]),t.jsxs("div",{children:[t.jsxs(f,{children:[t.jsx("meta",{charSet:"utf-8"}),t.jsx("title",{children:"ivychikaftan"}),t.jsx("link",{rel:"canonical",href:"http://localhost:5173/"})]}),t.jsxs(o.Suspense,{fallback:t.jsx("div",{className:"flex flex-wrap justify-around",children:t.jsx(y,{})}),children:[t.jsx(E,{}),t.jsx(j,{}),t.jsx(v,{}),t.jsx(A,{title:`newest collection
            `,cloths:i,loading:u}),x>a&&t.jsx("div",{className:"flex justify-center",children:t.jsx("button",{className:"border py-2 border-primaryColor shadow  px-6 rounded-lg w-[10rem]",onClick:p,children:"More Products"})}),t.jsx(P,{}),t.jsx(L,{}),t.jsx(T,{})]})]})}export{g as default};
