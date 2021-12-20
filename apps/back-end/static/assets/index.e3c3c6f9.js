var pe=Object.defineProperty;var C=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var q=(t,r,o)=>r in t?pe(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,N=(t,r)=>{for(var o in r||(r={}))D.call(r,o)&&q(t,o,r[o]);if(C)for(var o of C(r))$.call(r,o)&&q(t,o,r[o]);return t};var j=(t,r)=>{var o={};for(var a in t)D.call(t,a)&&r.indexOf(a)<0&&(o[a]=t[a]);if(t!=null&&C)for(var a of C(t))r.indexOf(a)<0&&$.call(t,a)&&(o[a]=t[a]);return o};import{c as ue,a as he,j as e,C as O,A as u,r as me,I as l,d as U,b as V,e as i,f as I,T as h,g as m,h as L,i as ge,k as d,l as b,m as Y,n as Z,s as k,o as K,p as G,L as w,q as R,t as v,u as f,v as _,w as T,x as J,y as Q,D as P,z as X,B as fe,E as n,F as S,G as x,H as ee,J as te,M as B,S as E,K as re,R as g,N as ie,O as be,P as xe,Q as ye,U as we,V as ve,W as _e,X as ke}from"./vendor.01db7308.js";const Ce=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const p of s)if(p.type==="childList")for(const M of p.addedNodes)M.tagName==="LINK"&&M.rel==="modulepreload"&&a(M)}).observe(document,{childList:!0,subtree:!0});function o(s){const p={};return s.integrity&&(p.integrity=s.integrity),s.referrerpolicy&&(p.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?p.credentials="include":s.crossorigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function a(s){if(s.ep)return;s.ep=!0;const p=o(s);fetch(s.href,p)}};Ce();const oe=ue({name:"modal",initialState:{isModal:!1,title:""},reducers:{modalOpen:t=>{t.isModal=!0,t.title=event.target.innerText},modalClose:t=>{t.isModal=!1,t.title=""}}}),{modalOpen:ae,modalClose:Ie}=oe.actions;var Le=oe.reducer;const Pe=he({reducer:{modal:Le}});function Se(){return e(O,{avatar:e(u,{sx:{bgcolor:me[500]},"aria-label":"recipe",children:"Y"}),action:e(l,{"aria-label":"settings",children:e(U,{})}),title:"Yossi Cohen",subheader:"September 14, 2021"})}function Ae(){return e(V,{component:"img",image:"https://images.unsplash.com/photo-1546587348-d12660c30c50?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJhbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",alt:"Paella dish"})}function Me(){return i(I,{children:[e(h,{variant:"h6",color:"text.secondary",children:"Yossi Cohen"}),e(h,{variant:"body2",color:"text.secondary",children:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like. This impressive paella is a perfect party dish and a fun meal to cook together with your guests."}),e(m,{sx:{bgcolor:L[200]},icon:e(ge,{}),label:"Nature"})]})}function Ne(){return e(m,{icon:e(d,{title:"Like",children:e(l,{"aria-label":"like",children:e(b,{})})}),label:"1,549 Likes",variant:"outlined"})}function je(){return e(d,{title:"Share",children:e(l,{"aria-label":"share",children:e(Y,{})})})}function Re(){return e(d,{title:"Add Comment",children:e(l,{"aria-label":"add comment",children:e(Z,{})})})}const Te=k(t=>{const a=t,{expand:r}=a,o=j(a,["expand"]);return e(l,N({},o))})(({theme:t,expand:r})=>({transform:r?"rotate(180deg)":"rotate(0deg)",marginLeft:"auto",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest})}));function Be({expanded:t,setExpanded:r}){return e(Te,{expand:t,onClick:()=>{r(!t)},"aria-expanded":t,"aria-label":"show more",children:e(K,{})})}function Ee({expanded:t,setExpanded:r}){return i(G,{disableSpacing:!0,children:[e(Ne,{}),e(je,{}),e(Re,{}),e(Be,{expanded:t,setExpanded:r})]})}function Fe(){return e(w,{children:e(u,{sx:{bgcolor:R[500]},alt:"Avi Moshe",src:"/static/images/avatar/1.jpg"})})}function ze(){return e(v,{primary:"Avi Moshe",secondary:i(f.exports.Fragment,{children:[e(h,{sx:{display:"block"},component:"span",variant:"body2",color:"text.primary",children:"September 17, 2021"}),"I'll be in your neighborhood doing errands this\u2026",e(m,{icon:e(d,{title:"Like",children:e(l,{"aria-label":"like",children:e(b,{})})}),label:"579 Likes",variant:"outlined"})]})})}function We(){return i(_,{alignItems:"flex-start",children:[e(Fe,{}),e(ze,{})]})}function He(){return i(_,{alignItems:"flex-start",children:[e(w,{children:e(u,{sx:{bgcolor:T[500]},alt:"Israel Israeli",src:"/static/images/avatar/2.jpg"})}),e(v,{primary:"Israel Israeli",secondary:i(f.exports.Fragment,{children:[e(h,{sx:{display:"block"},component:"span",variant:"body2",color:"text.primary",children:"September 15, 2021"}),"Wish I could come, but I'm out of town this\u2026",e(m,{icon:e(d,{title:"Like",children:e(l,{"aria-label":"like",children:e(b,{})})}),label:"134 Likes",variant:"outlined"})]})})]})}function De(){return i(_,{alignItems:"flex-start",children:[e(w,{children:e(u,{sx:{bgcolor:L[500]},alt:"Dana Nama",src:"/static/images/avatar/3.jpg"})}),e(v,{primary:"Dana Nama",secondary:i(f.exports.Fragment,{children:[e(h,{sx:{display:"block"},component:"span",variant:"body2",color:"text.primary",children:"September 14, 2021"}),"Do you have Paris recommendations?",e(m,{icon:e(d,{title:"Like",children:e(l,{"aria-label":"like",children:e(b,{})})}),label:"149 Likes",variant:"outlined"})]})})]})}function $e({expanded:t}){return e(J,{in:t,timeout:"auto",unmountOnExit:!0,children:e(I,{children:i(Q,{sx:{width:"100%",bgcolor:"background.paper"},children:[e(We,{}),e(P,{variant:"inset",component:"li"}),e(He,{}),e(P,{variant:"inset",component:"li"}),e(De,{})]})})})}function qe(){const[t,r]=f.exports.useState(!1);alert("render");const{postHeader:o,postContent:a,postMedia:s}=f.exports.useMemo(()=>({postHeader:e(Se,{}),postContent:e(Me,{}),postMedia:e(Ae,{})}),[]);return i(X,{sx:{maxWidth:1080,marginTop:"5px"},children:[o,s,a,e(Ee,{expanded:t,setExpanded:r}),e($e,{expanded:t})]})}const Oe=k(t=>{const a=t,{expand:r}=a,o=j(a,["expand"]);return e(l,N({},o))})(({theme:t,expand:r})=>({transform:r?"rotate(180deg)":"rotate(0deg)",marginLeft:"auto",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest})}));function Ue(){const[t,r]=f.exports.useState(!1),o=()=>{r(!t)};return i(X,{sx:{maxWidth:1080,marginTop:1},children:[e(O,{avatar:e(u,{sx:{bgcolor:L[500]},"aria-label":"recipe",children:"A"}),action:e(l,{"aria-label":"settings",children:e(U,{})}),title:"Avi Hertzel",subheader:"September 12, 2021"}),e(V,{component:"img",image:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",alt:"Paella dish"}),i(I,{children:[e(h,{variant:"h6",color:"text.secondary",children:"Avi Hertzel"}),e(h,{variant:"body2",color:"text.secondary",children:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like. This impressive paella is a perfect party dish and a fun meal to cook together with your guests."}),e(m,{sx:{bgcolor:R[200]},icon:e(fe,{}),label:"Pets"})]}),i(G,{disableSpacing:!0,children:[e(m,{icon:e(d,{title:"Like",children:e(l,{"aria-label":"like",children:e(b,{})})}),label:"1,689 Likes",variant:"outlined"}),e(d,{title:"Share",children:e(l,{"aria-label":"share",children:e(Y,{})})}),e(d,{title:"Add Comment",children:e(l,{"aria-label":"add comment",children:e(Z,{})})}),e(Oe,{expand:t,onClick:o,"aria-expanded":t,"aria-label":"show more",children:e(K,{})})]}),e(J,{in:t,timeout:"auto",unmountOnExit:!0,children:e(I,{children:i(Q,{sx:{width:"100%",bgcolor:"background.paper"},children:[i(_,{alignItems:"flex-start",children:[e(w,{children:e(u,{sx:{bgcolor:R[500]},alt:"Avi Moshe",src:"/static/images/avatar/1.jpg"})}),e(v,{primary:"Avi Moshe",secondary:i(f.exports.Fragment,{children:[e(h,{sx:{display:"block"},component:"span",variant:"body2",color:"text.primary",children:"September 17, 2021"}),"I'll be in your neighborhood doing errands this\u2026",e(m,{icon:e(d,{title:"Like",children:e(l,{"aria-label":"like",children:e(b,{})})}),label:"579 Likes",variant:"outlined"})]})})]}),e(P,{variant:"inset",component:"li"}),i(_,{alignItems:"flex-start",children:[e(w,{children:e(u,{sx:{bgcolor:T[500]},alt:"Israel Israeli",src:"/static/images/avatar/2.jpg"})}),e(v,{primary:"Israel Israeli",secondary:i(f.exports.Fragment,{children:[e(h,{sx:{display:"block"},component:"span",variant:"body2",color:"text.primary",children:"September 15, 2021"}),"Wish I could come, but I'm out of town this\u2026",e(m,{icon:e(d,{title:"Like",children:e(l,{"aria-label":"like",children:e(b,{})})}),label:"134 Likes",variant:"outlined"})]})})]}),e(P,{variant:"inset",component:"li"}),i(_,{alignItems:"flex-start",children:[e(w,{children:e(u,{sx:{bgcolor:L[500]},alt:"Dana Nama",src:"/static/images/avatar/3.jpg"})}),e(v,{primary:"Dana Nama",secondary:i(f.exports.Fragment,{children:[e(h,{sx:{display:"block"},component:"span",variant:"body2",color:"text.primary",children:"September 14, 2021"}),"Do you have Paris recommendations?",e(m,{icon:e(d,{title:"Like",children:e(l,{"aria-label":"like",children:e(b,{})})}),label:"149 Likes",variant:"outlined"})]})})]})]})})})]})}function Ve(){return i("div",{children:[e(qe,{}),e(Ue,{})]})}const ne=n.form`
    min-width: 25vw;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    align-items: center;
`,se=n.h1`
    font-family: billabong;
    font-weight: 300;
    font-size: 64px;
    margin-bottom: 30px;
    margin-top: 30px;
`,c=n.input`
    width: 80%;
    padding: 10px;
    margin-bottom: 5px;
    border: 1px solid #eaeaea;
    border-radius: 5px;
    background-color: rgb(255, 255, 255);
`,F=n.button`
    width: 80%;
    padding: 7px;
    margin-top: 10px;
    margin-bottom: 40px;
    color: white;
    font-weight: bold;
    background-color: rgb(0,149,246);
    border: 1px solid transparent;
    border-radius: 5px;
    cursor: pointer;
    transition: 500ms ease-in-out;

    &:hover {
        background-color: #63c0fd;
    }
`,le=n.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
    padding: 10px;
    border: 1px solid #ddd; 
    border-radius: 5px;
    background-color: #fff;
`,Ye=n.form`
    padding-top: 40px;
    width: 70vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    
    & label {
        margin-top: 10px;
        width: 40vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 500;
    }
`,Ze=n.p`
    font-size: 12px;
`;function Ke(){return i(S,{children:[i(ne,{children:[e(se,{children:"Kilogram"}),e(c,{type:"text",placeholder:"Phone number, username or email",required:!0}),e(c,{type:"password",placeholder:"Password",required:!0}),e(F,{type:"submit",children:"Log In"}),e(x,{to:"/restorepassword",children:e(Ze,{children:"Forgot Password?"})})]}),e(le,{children:i("p",{children:["Don't have an account? ",e(x,{to:"/signup",children:"Sign up"})]})})]})}function Ge(){return e(Ke,{})}const Je=n.h2`
    font-size: 18px;
    font-weight: 500;
    color: #9c8e8e;
    text-align: center;
    margin-bottom: 10px;
`,Qe=n.p`
    font-size: 12px;
    text-align: center;
`;function Xe(){return i(S,{children:[i(ne,{children:[e(se,{children:"Kilogram"}),i(Je,{children:['No photos of people "training" in ',e("br",{})," the gym on this app..."]}),e(c,{type:"text",placeholder:"Mobile number or email",required:!0}),e(c,{type:"text",placeholder:"Full Name",required:!0}),e(c,{type:"text",placeholder:"Username",required:!0}),e(c,{type:"password",placeholder:"Password",required:!0}),e(F,{type:"submit",children:"Sign Up"}),i(Qe,{children:["By signing up you agree to our Terms,",e("br",{})," Data Policy and Cookies Policy."]})]}),e(le,{children:i("p",{children:["Have an account? ",e(x,{to:"/login",children:"Log in"})]})})]})}function et(){return e(S,{children:e(Xe,{})})}const A={profile:{ID:1,username:"HilellElshalem",name:{firstName:"Hilell",lastName:"Elshalem",fullName:"Hilell Elshalem"},address:{country:"Israel",city:"Be'er Sheva",street:"Qipod",houseNumber:"14"},image:{src:"https://res.cloudinary.com/teepublic/image/private/s--9ZtubWhB--/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:53/co_ffffff,e_outline:inner_fill:53/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1563682998/production/designs/5373105_0.jpg"},followers:{total:"43",usernames:[{name:{firstName:"Avi",lastName:"Levi"},image:{src:"https://res.cloudinary.com/teepublic/image/private/s--9ZtubWhB--/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:53/co_ffffff,e_outline:inner_fill:53/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1563682998/production/designs/5373105_0.jpg"}},{name:{firstName:"Moshe",lastName:"Balanga"},image:{src:"https://res.cloudinary.com/teepublic/image/private/s--9ZtubWhB--/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:53/co_ffffff,e_outline:inner_fill:53/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1563682998/production/designs/5373105_0.jpg"}},{name:{firstName:"Yossi",lastName:"Cohen"},image:{src:"https://res.cloudinary.com/teepublic/image/private/s--9ZtubWhB--/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:53/co_ffffff,e_outline:inner_fill:53/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1563682998/production/designs/5373105_0.jpg"}}]},following:{total:"50"},posts:{myPosts:{total:"0",posts:{pic:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/VAN_CAT.png/330px-VAN_CAT.png"}},savedPosts:{total:"0",posts:{}},taggedPosts:{total:"0",posts:{}}}}};function z(){return A}const tt=n.div`
    width: 70vw;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`,rt=n.div`
    width: inherit;
    height: 20vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;
`,it=n.div`
    width: inherit;
    height: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid #afafaf;
`,ot=n.div`
    width: 20vw;
    display: flex;
    justify-content: space-around;

    & a {
        padding: 10px;
        border-top: 1px solid transparent;
        color: black;
    }
`,at=n.div`
    width: inherit;
`,nt=n.h1`
    font-weight: 300;
`,st=n.button`
    padding: 7px;
    border: 1px solid #c0c0c0;
    border-radius: 5px;
    cursor: pointer;
`,W=n.p`
    font-weight: 500;
    
    & span {
        cursor: pointer;
        font-weight: 400;
    }
`,lt=n.div`
    z-index: 1;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
`,dt=n.div`
    z-index: 2;
    display: flex;
    flex-direction: column;
    width: 20vw;
    height: 40vh;
    margin: 15% auto;
    background-color: #fefefe;
    border: 1px solid #afafaf;
    border-radius: 10px;
`,ct=n.div`
    display: flex;
    justify-content: space-between;
    padding: 7px;
    border-bottom: 1px solid #afafaf;

    & p {
        font-size: 16px;
        font-weight: 600;
        flex-grow: 1;
        text-align: center;
    }

    & .fa-times {
        padding: 0 auto;
        cursor: pointer;
    }
`,pt=n.div`
    height: inherit;
    display: flex;
    flex-direction: column;
    padding: 1rem;
`,ut=n.div`
    display: flex;
    align-items: center;
    margin: .5rem 0;

    & p {
        margin-left: 1rem;
    }
`;function ht(t){const r=z().profile.followers.usernames,o=ee();return e(lt,{children:i(dt,{children:[i(ct,{children:[e("p",{children:t.title}),e("i",{className:"fas fa-times",onClick:()=>o(Ie())})]}),e(pt,{children:r.map((a,s)=>i(ut,{children:[e(u,{src:a.image.src,sx:{width:40,height:40}}),e("p",{children:a.name.firstName+" "+a.name.lastName})]},s))})]})})}const y=z().profile,mt=e(u,{alt:y.name.firstName+" "+y.name.lastName,src:y.image.src,sx:{width:164,height:164}});function gt(){const t=te(a=>a.modal.isModal),r=te(a=>a.modal.title),o=ee();return e(S,{children:i(rt,{children:[mt,e(nt,{children:y.username}),i(W,{children:[y.posts.myPosts.total," ",e("span",{children:"posts"})]}),i(W,{children:[y.followers.total," ",e("span",{onClick:()=>o(ae()),children:"followers"})]}),i(W,{children:[y.following.total," ",e("span",{onClick:()=>o(ae()),children:"following"})]}),t&&e(ht,{title:r}),e(x,{to:"/:username/settings",children:e(st,{children:"Edit Profile"})})]})})}const ft=[{title:"cool cat",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/VAN_CAT.png/330px-VAN_CAT.png"},{title:"cool cat",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/375px-Cat_November_2010-1a.jpg"},{title:"cool cat",img:"https://i.cbc.ca/1.5256404.1566499707!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/cat-behaviour.jpg",saved:"true"},{title:"cool cat",img:"https://cdn.britannica.com/q:60/68/160068-050-53FE2889/Snowshoe-cat.jpg",saved:"true"},{title:"extremely cool cat",img:"https://www.prestigeanimalhospital.com/sites/default/files/interesting-cat-facts.jpg",saved:"true"},{title:"very cool cat",img:"https://cdn.britannica.com/q:60/91/181391-050-1DA18304/cat-toes-paw-number-paws-tiger-tabby.jpg"},{title:"very cool cat",img:"https://ichef.bbci.co.uk/news/976/cpsprodpb/A8CC/production/_116521234_tv065115181.jpg"}];function H(){return ft}function bt(){const t=H();return e(B,{columns:3,spacing:1,children:t.map((r,o)=>e(E,{children:e("img",{src:`${r.img}?w=162&auto=format`,srcSet:`${r.img}?w=162&auto=format&dpr=2 2x`,alt:r.title,loading:"lazy",style:{borderBottomLeftRadius:4,borderBottomRightRadius:4,borderTopRightRadius:4,borderTopLeftRadius:4,cursor:"pointer"}})},o))})}function xt(){const t=H();return e(B,{columns:3,spacing:1,children:t.map((r,o)=>e(E,{children:e("img",{src:`${r.img}?w=162&auto=format`,srcSet:`${r.img}?w=162&auto=format&dpr=2 2x`,alt:r.title,loading:"lazy",style:{borderBottomLeftRadius:4,borderBottomRightRadius:4,borderTopRightRadius:4,borderTopLeftRadius:4,cursor:"pointer"}})},o))})}function yt(){const t=H();return e(B,{columns:3,spacing:1,children:t.map((r,o)=>e(E,{children:e("img",{src:`${r.img}?w=162&auto=format`,srcSet:`${r.img}?w=162&auto=format&dpr=2 2x`,alt:r.title,loading:"lazy",style:{borderBottomLeftRadius:4,borderBottomRightRadius:4,borderTopRightRadius:4,borderTopLeftRadius:4,cursor:"pointer"}})},o))})}function wt(){return i(it,{children:[i(ot,{children:[e(x,{to:"/:username/profile/",children:"POSTS"}),e(x,{to:"/:username/profile/saved",children:"SAVED"}),e(x,{to:"/:username/profile/tagged",children:"TAGGED"})]}),e(at,{children:i(re,{children:[e(g,{path:"/:username/profile/",children:e(bt,{})}),e(g,{path:"/:username/profile/saved",children:e(xt,{})}),e(g,{path:"/:username/profile/tagged",children:e(yt,{})})]})})]})}function vt(){return i(tt,{children:[e(gt,{}),e(wt,{})]})}const _t=[{from:"{sombody.username}",massage:"started following you",time:{date:"28.10.21",hour:"14:35:19"},readed:"true"},{from:"{sombody.username}",massage:"like your post",time:{date:"28.10.21",hour:"10:44:58"},readed:"false"}],de=[{senderId:3,massages:[{massage:"hello to you",sender:"{sombody.username}",time:{date:"28.10.21",hour:"14:35:19"},readed:"false"},{massage:"hi to you",sender:"{sombody.username}",time:{date:"28.10.21",hour:"10:44:58"},readed:"false"},{massage:"hi to you",sender:"{sombody.username}",time:{date:"28.10.21",hour:"10:44:58"},readed:"true"}]},{senderId:2,massages:[{massage:"success!! we try and success to to this message item!",sender:"{sombody.username}",time:{date:"28.10.21",hour:"14:35:19"},readed:"false"},{massage:"hi to you",sender:"{sombody.username}",time:{date:"28.10.21",hour:"10:44:58"},readed:"true"},{massage:"hi to you",sender:"{sombody.username}",time:{date:"28.10.21",hour:"10:44:58"},readed:"true"}]}];de.filter(t=>t.readed==="false").length;_t.filter(t=>t.readed==="false").length;k("div")(({theme:t})=>({position:"relative",borderRadius:16,backgroundColor:ie("#fff",.15),"&:hover":{backgroundColor:ie("#fff",.25)},marginRight:t.spacing(2),marginLeft:0,width:"100%",[t.breakpoints.up("sm")]:{marginLeft:t.spacing(3),width:"auto"}}));k("div")(({theme:t})=>({padding:t.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}));k(be)(({theme:t})=>({color:"inherit","& .MuiInputBase-input":{padding:t.spacing(1,1,1,0),paddingLeft:`calc(1em + ${t.spacing(4)})`,transition:t.transitions.create("width"),width:"100%",[t.breakpoints.up("md")]:{width:"20ch"}}}));function kt({chatData:t}){const r=z(t.senderId);let o=0,a=!1;debugger;for(;!a&&o<t.massages.length;)t.massages[o].readed===!0?a=!0:o++;return i("div",{className:"msgItem",children:[e(xe,{badgeContent:o,color:"error",sx:{display:"inline-block",margin:"15px"},children:e(u,{sx:{bgcolor:T[500]},alt:r.profile.name.fullName,src:r.profile.image.src})}),i("div",{className:"msgText",style:{display:"inline-block"},children:[e("h5",{children:r.profile.name.fullName}),e("p",{style:{color:"gray",whiteSpace:"nowrap",width:"200px",overflow:"hidden",textOverflow:"ellipsis"},children:t.massages[0].massage})]})]})}function Ct({massages:t,numOf:r=0}){return console.log("render list..."),t.map(o=>{console.log(o)}),e("nav",{children:t.map(o=>e(kt,{chatData:o},o.senderId))})}function It(){return e("div",{})}function Lt(){return de}function Pt(){const t=Lt();return console.log(t),i("div",{style:{display:"flex"},children:[e("div",{style:{width:"50%",margin:"5px"},children:e(Ct,{massages:t})}),e("div",{style:{width:"50%"},children:e(It,{})})]})}const ce=n(F)`
    width: 12vw;
`,St=n(ce)`
    background-color: #63c0fd;

    &:hover {
        background-color: rgb(0,149,246);
    }
`;function At(){return i(Ye,{children:[e("label",{children:e(St,{children:"Change Profile Pic"})}),i("label",{children:["Name",e(c,{type:"text",placeholder:A.profile.name.firstName+" "+A.profile.name.lastName})]}),i("label",{children:["Username",e(c,{type:"text",placeholder:A.profile.username})]}),i("label",{children:["Website",e(c,{type:"text",placeholder:"Website"})]}),i("label",{children:["Bio",e(c,{type:"text",placeholder:"Bio"})]}),i("label",{children:["Email",e(c,{type:"Email",placeholder:"Email"})]}),i("label",{children:["Phone",e(c,{type:"tel",pattern:"[0-9]{3}-[0-9]{7}",placeholder:"Phone Number"})]}),e(ce,{children:"Submit Changes"})]})}function Mt(){return e(At,{})}function Nt(){return e(ye,{children:i(re,{children:[e(g,{path:"/login",children:e(Ge,{})}),e(g,{path:"/signup",children:e(et,{})}),i(g,{path:"/:username",children:[e(g,{path:"/:username/profile",children:e(vt,{})}),e(g,{path:"/:username/feed",children:e(Ve,{})}),e(g,{path:"/:username/mailbox",children:e(Pt,{})}),e(g,{path:"/:username/settings",children:e(Mt,{})})]}),e(we,{path:"/",to:"/login"})]})})}ve.render(e(_e.StrictMode,{children:e(ke,{store:Pe,children:e(Nt,{})})}),document.getElementById("root"));
