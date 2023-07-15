(function(){"use strict";var e={11987:function(e,t,n){var o=n(49242),a=(n(30541),n(57658),n(73396)),l=n(87139),i=n(44870),s=n(44161);const c={id:"main"},u={id:"center"},r={id:"bottom"};var d=(0,a.aZ)({__name:"dialogCom",props:{title:null,show:{type:Boolean}},setup(e){const t=e;return(e,n)=>((0,a.wg)(),(0,a.iD)("div",{id:"dialog",class:(0,l.C_)({show:t.show})},[(0,a._)("div",c,[(0,a._)("p",null,(0,l.zw)(t.title),1),(0,a._)("div",u,[(0,a.WI)(e.$slots,"center")]),(0,a._)("div",r,[(0,a.WI)(e.$slots,"bottom")])])],2))}}),v=n(40089);const p=(0,v.Z)(d,[["__scopeId","data-v-db0620d8"]]);var g=p;let f=0;function h(e){const t=document.querySelector("body"),n=document.createElement("div");n.id="messageBox",n.className="messageBox-"+ ++f,n.innerHTML=`<div class="${e.type}">${e.content}</div>`,t?.appendChild(n),setTimeout((()=>{f--,n.remove()}),3e3)}var m=h,y=n(15792),w=n(18134),k=n.n(w),_=n(43099),b=n.n(_);const C=(0,i.iH)("");function S(e){window.localStorage.setItem("n0ts-chatgpt-theme",e),C.value=e}function D(){const e=window.localStorage.getItem("n0ts-chatgpt-theme");e?C.value=e:S("light"),document.documentElement.setAttribute("theme",e||"light")}function O(){C.value=window.localStorage.getItem("n0ts-chatgpt-theme"),C.value="light"===C.value?"dark":"light",S(C.value),D()}var T={switchTheme:O,load:D,themeCache:C},H={apiBaseUrl:"https://api.n0ts.top",key:"",model:"gpt-3.5-turbo",models:["gpt-4","gpt-4-0613","gpt-4-32k","gpt-4-32k-0613","gpt-3.5-turbo","gpt-3.5-turbo-16k","gpt-3.5-turbo-0613","gpt-3.5-turbo-16k-0613","text-davinci-003","text-davinci-002","code-davinci-002"],system:"",robot:"chatgpt",nbCookie:""};function U(){return window.localStorage.setItem("n0ts-chatgpt-config",JSON.stringify(H)),H}function x(){const e=JSON.parse(window.localStorage.getItem("n0ts-chatgpt-config")??"{}");return e.key?(H.key=e.key,H.model=e.model,H.models=e.models,H.system=e.system,H.apiBaseUrl=e.apiBaseUrl,H.robot=e.robot,H.nbCookie=e.nbCookie,H):U()}var N={save:U,read:x,config:H},P=n(83812),B=n.n(P),j=n(80469),M=n.n(j),q=n(92269),I=n.n(q),E=n(48914);async function Y(e,t){return new Promise(((n,o)=>{const a=document.querySelector(t);a&&I()(a).then((t=>{const o=new E.ZP("p","mm","a4"),a=t.getContext("2d"),l=190,i=272,s=Math.floor(i*t.width/l);if(!a)return;let c=0;while(c<t.height){const e=document.createElement("canvas");e.width=t.width,e.height=Math.min(s,t.height-c);const n=e.getContext("2d");if(!n)return;n.putImageData(a.getImageData(0,c,t.width,Math.min(s,t.height-c)),0,0),o.addImage(e.toDataURL("image/jpeg",1),"JPEG",10,10,l,Math.min(i,l*e.height/e.width)),c+=s,c<t.height&&o.addPage()}o.save(`${e}.pdf`),n(null)}))}))}const A=e=>((0,a.dD)("data-v-da74733e"),e=e(),(0,a.Cn)(),e),z={key:0,id:"chats"},K=["onClick"],L=["onClick"],J={id:"bottom"},$={key:0,class:"money"},G={id:"main"},W={class:"img"},Z={key:0,class:"system"},V={key:1,class:"user"},F={key:2,class:"ai"},R=["innerHTML"],Q={key:0,id:"stretch"},X={class:"img"},ee={key:0,class:"system"},te={key:1,class:"user"},ne={key:2,class:"ai"},oe=["innerHTML"],ae={key:0,class:"links"},le=["href"],ie={key:0,id:"stretch"},se={key:2,id:"home"},ce=A((()=>(0,a._)("div",null,[(0,a._)("p",null,"🤪 N0tsChat | 集成 ChatGPT 与 NewBing"),(0,a._)("div",{class:"content"},[(0,a._)("p",null," 本项目完全开源，无需担心隐私问题，所有聊天记录均保存在本地 "),(0,a._)("p",null,"解决无法访问外网痛点，导致无法使用 AI 对话"),(0,a._)("p",null,[(0,a.Uk)(" 开源地址（求 star）："),(0,a._)("a",{href:"https://gitee.com/n0ts/chat-gpt",target:"_blank"},"Gitee")]),(0,a._)("p",null,[(0,a.Uk)(" 技术交流："),(0,a._)("a",{href:"https://jq.qq.com/?_wv=1027&k=Mh7ah6Dd"},"坚果小栈")])])],-1))),ue=[ce],re={key:3,id:"input"},de={class:"textarea"},ve={class:"btns"},pe={class:"questions"},ge=["onClick"],fe=A((()=>(0,a._)("p",null,"请在下方输入你的 GPT Key",-1))),he=A((()=>(0,a._)("p",null,[(0,a.Uk)(" 申请地址："),(0,a._)("a",{href:"https://platform.openai.com/account/api-keys",target:"_blank"},"点我")],-1))),me=["onKeydown"],ye=A((()=>(0,a._)("p",{class:"tips"}," key 会保存在本地浏览器(localStorage)中，只供本地使用 ",-1))),we={class:"panel"},ke=A((()=>(0,a._)("p",null,"GPT Key：",-1))),_e=A((()=>(0,a._)("p",{class:"tips"},"OpenAI 申请的 Key",-1))),be=A((()=>(0,a._)("p",null,"Model：",-1))),Ce=["value"],Se=A((()=>(0,a._)("p",{class:"tips"},"ChatGPT 模型选择",-1))),De=A((()=>(0,a._)("p",null,"行为设定：",-1))),Oe=A((()=>(0,a._)("p",{class:"tips"},[(0,a._)("span",null,"给 OpenAI 设定一个行为，比如："),(0,a._)("br"),(0,a._)("span",null,"“你是一直猫，每句话后面加个 喵~”")],-1))),Te=A((()=>(0,a._)("p",null,"BingCookie：",-1))),He=A((()=>(0,a._)("p",{class:"tips"},[(0,a._)("span",null,[(0,a.Uk)("前往 "),(0,a._)("a",{href:"https://cn.bing.com/",target:"_blank"},"Bing"),(0,a.Uk)("，F12 打开控制台输入 “document.cookie”")]),(0,a._)("br"),(0,a._)("span",null,"复制内容到这即可")],-1)));var Ue=(0,a.aZ)({__name:"App",setup(e){const{config:t,read:n,save:c}=N,u=JSON.parse(JSON.stringify(t));n();const r=(0,i.iH)("");t.apiBaseUrl&&""!==t.apiBaseUrl?r.value=t.apiBaseUrl:r.value=u.apiBaseUrl;const d=new(B());d.use(M());const v=(0,i.iH)(""==t.key);let p=null,f=null;(0,a.bv)((()=>{f=new(b())(document.querySelector("#main")),p=document.querySelector("#messages"),T.load(),t.key&&Ke()}));const h=(0,i.iH)("");function w(){if(""==h.value)return m({type:"warning",content:"key 不能为空"});t.key=h.value,h.value="",c(),v.value=!1,m({type:"success",content:"key 存储成功，开始提问吧"}),Ke()}function _(){v.value=!1,t.key="暂无配置",c(),m({type:"warning",content:"暂未配置 key，无法使用 ChatGPT"})}const C=(0,i.iH)(!1),S=(0,i.iH)(t.robot);async function D(){C.value=!0;let e=[];if("chatgpt"==S.value){const t=xe[Ne.value].contents,n=t[t.length-1];"assistant"!=n.role&&H("assistant","");let o=null;"system"==t[0].role&&(o=t[0]),e=t.slice(2*xe[Ne.value].exceedTokens),o&&e.unshift(o)}"chatgpt"==S.value?O(e):it()}function O(e){fetch(`${r.value}/chatgpt-stream`,{method:"POST",body:JSON.stringify({key:t.key,model:t.model,messages:e.map((e=>({role:e.role,content:e.stream}))),timeout:6e4}),headers:{"Content-Type":"application/json"}}).then((e=>{const t=e.body.getReader(),n=new TextDecoder("utf-8");let o="";t.read().then((async function e(l){if(l.done||!C.value)return;const i=n.decode(l.value);if(i.includes('"error": {\n'))return C.value=!1,Je(i);if(i.includes("data: [DONE]")){C.value=!1;const e=xe[Ne.value].contents[xe[Ne.value].contents.length-1];return e.tokens=await $e(e.content),U(),await(0,a.Y3)(),je(),void f.update()}return i.replaceAll("data: ","").split("\n").filter(Boolean).forEach((async e=>{const t=JSON.parse(e);if(!t.choices[0].delta.content)return;const n=t.choices[0].delta.content;o+=n,xe[Ne.value].contents[xe[Ne.value].contents.length-1].content=d.render(o),xe[Ne.value].contents[xe[Ne.value].contents.length-1].stream=o,await(0,a.Y3)(),je()})),t.read().then(e)}))})).catch((()=>{xe[Ne.value].contents[xe[Ne.value].contents.length-1].content="<p>发起网络请求失败，服务器可能正在维护中，请稍后重试</p>",m({type:"danger",content:"发起网络请求失败，请稍后重试"}),U(),C.value=!1}))}async function H(e,t,n){const o=n||t,l={role:e,content:d.render(o),tokens:0,stream:o};"chatgpt"==S.value?xe[Ne.value].contents.push(l):at.value.contents.push(l),U(),await(0,a.Y3)(),je(),f.update()}function U(){window.localStorage.setItem("message-data",JSON.stringify(xe)),We()}const x=(0,i.iH)("");function P(){if(""!=x.value&&""!=x.value.trim()&&!C.value){if("chatgpt"==S.value&&-1==Ne.value&&(xe.unshift({name:"",contents:[],exceedTokens:0}),Ne.value=0),"chatgpt"==S.value&&t.system&&0==xe[Ne.value].contents.length&&H("system",t.system),H("user",x.value),"chatgpt"==S.value&&(1==xe[Ne.value].contents.length||"system"==xe[Ne.value].contents[0].role&&2==xe[Ne.value].contents.length)&&"chatgpt"==S.value){const e=x.value;let t=1;xe.forEach((n=>{0==n.name.indexOf(e)&&t++})),xe[Ne.value].name=e+(1==t?"":` #${t}`),document.title=e+" | 🤪N0tsChat"}x.value="",D()}}let j=!1;function q(){j||(j=!0,setTimeout((()=>{j=!1,p=document.querySelector("#messages"),p?p.scrollTo({top:p.scrollHeight,behavior:"smooth"}):q()}),300))}let I=!1;function E(e){if(16===e.keyCode&&(I=!0),!I&&13===e.keyCode)return P(),e.preventDefault(),!1}function A(e){16===e.keyCode&&(I=!1)}const ce=(0,i.iH)(24);(0,a.YP)((()=>x.value),(()=>{const e=x.value.split("\n").length;ce.value=24*e}));const Ue=window.localStorage.getItem("message-data"),xe=(0,i.qj)(Ue?JSON.parse(Ue):[]),Ne=(0,i.iH)(-1);function Pe(){U();let e=1;xe.forEach((t=>{0==t.name.indexOf("新会话")&&e++})),xe.unshift({name:"新会话"+(1==e?"":` #${e}`),contents:[],exceedTokens:0}),x.value="",Ne.value=0}function Be(e){document.title="🤪N0tsChat",xe.splice(e,1),Ne.value=-1,U()}async function je(){const e=[],t=document.querySelectorAll("#messages pre code");t.forEach((t=>{const n=t;if(n.getAttribute("class")?.includes("hljs"))return;const o=document.createElement("div");o.className="copyBtn",o.innerHTML="复制",o.setAttribute("code",n.innerText),o.addEventListener("click",(e=>{Ie(e)})),n.parentElement?.appendChild(o),y.Z.highlightElement(n),e.push(n)})),Me(e),q()}function Me(e){for(let t=0;t<e.length;t++){const n=e[t].innerHTML.replace(/\n/g,"</li><li>");e[t].innerHTML=`<ol><li>${n}</li></ol>`.replace("<li></li></ol>","</ol>")}}(0,a.YP)((()=>Ne.value),(async()=>{xe[Ne.value]&&(document.title=xe[Ne.value].name+" | 🤪N0tsChat",await(0,a.Y3)(),We(),je(),f.update())}));const qe=(0,i.iH)(!1);function Ie(e){const t=e.target.getAttribute("code");t&&(k().copy(t),m({type:"success",content:"复制成功"}))}function Ee(){window.localStorage.removeItem("message-data"),window.localStorage.removeItem("n0ts-chatgpt-theme"),window.localStorage.removeItem("n0ts-chatgpt-config"),window.location.reload()}const Ye=(0,i.iH)(!1);function Ae(){Ye.value=!Ye.value,c(),m({type:"success",content:"设置已保存"})}const ze=(0,i.iH)(null);async function Ke(){}function Le(e,t){return Number(e.toFixed(t))}function Je(e){const n=JSON.parse(e.replace("未知错误，请联系站长解决！",""));return console.error("报错了哥们",n),"invalid_api_key"==n.error.code?(m({type:"danger",content:"API Key 错误，请重新配置"}),t.key="",c(),void(v.value=!0)):"context_length_exceeded"==n.error.code?(xe[Ne.value].exceedTokens+=1,D()):void(xe[Ne.value].contents[xe[Ne.value].contents.length-1].content=e)}async function $e(e){return 0}const Ge=(0,i.iH)(0);function We(){if(!xe[Ne.value])return;let e=0;xe[Ne.value].contents.forEach((t=>{e+=t.tokens})),Ge.value=e}function Ze(){C.value=!1,"newbing"==S.value&&lt.close()}const Ve=(0,i.iH)(!1);async function Fe(){Ve.value=!0,await(0,a.Y3)(),await Y("对话导出 | "+(new Date).toLocaleDateString().replaceAll("/","-").toString(),"#main"),m({type:"success",content:"正在导出中，耐心稍等一会~"}),Ve.value=!1}function Re(){t.robot=S.value="chatgpt"==S.value?"newbing":"chatgpt",c()}const Qe=(0,i.iH)(null);async function Xe(){if(Qe.value)return Qe.value;const{data:e}=await s.Z.post(`${r.value}/bing/new`,{cookie:t.nbCookie});return Qe.value=e.data,Qe.value}let et=!0;const tt=(0,i.iH)([]),nt=(0,i.iH)([]),ot=(0,i.iH)([]),at=(0,i.iH)({name:"newbing",contents:[],exceedTokens:0});let lt=null;async function it(){if(!t.nbCookie)return ct(!0),m({type:"danger",content:"请在配置中填写 Bing Cookie 后使用"});ot.value=[];const e=at.value.contents;e.push({role:"assistant",content:"",tokens:0,stream:""});const n=e[e.length-2],o=e[e.length-1];let l=await Xe();lt=new WebSocket("wss://api.n0ts.top/newbing"),lt.onopen=()=>{console.log("NewBing Ws Open，Content："+n.stream),lt.send(JSON.stringify({text:n.stream,isStartOfSession:et,...l})),et=!1},lt.onmessage=async e=>{try{const t=JSON.parse(e.data);(t.question||t.links)&&(tt.value=t)}catch{console.log(e.data),o.content=d.render(o.stream=e.data),await(0,a.Y3)(),je()}},lt.onclose=async()=>{console.log("NewBing Ws Close"),C.value=!1,U(),await(0,a.Y3)(),je(),f.update(),nt.value=tt.value.links,ot.value=tt.value.question,console.log(tt.value),console.log("相关链接",nt.value),console.log("相关问题",ot.value)}}function st(){return"chatgpt"==S.value?"ChatGPT":"NewBing"}function ct(e){at.value.contents=[],Qe.value=null,lt=null,et=!0,C.value=!1,nt.value=[],ot.value=[],e||m({type:"success",content:"对话重载成功"})}function ut(e){x.value=e.text,ot.value=[],P()}function rt(){window.open("https://support.n0ts.top/")}return(e,n)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",{id:"chatgpt",class:(0,l.C_)({print:Ve.value})},[Ve.value?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",{key:0,id:"sidebar",class:(0,l.C_)({sideBarShow:qe.value})},[(0,a._)("div",{class:"btns"},[(0,a._)("div",{class:"btn",onClick:Pe},"🤓 新建会话")]),Ve.value?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",z,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(xe,((e,t)=>((0,a.wg)(),(0,a.iD)("div",{key:t,onClick:e=>Ne.value=t,class:(0,l.C_)({active:Ne.value==t})},[(0,a._)("p",null,(0,l.zw)(e.name),1),(0,a._)("span",{onClick:(0,o.iM)((e=>Be(t)),["stop"])},"🗑 删除",8,L)],10,K)))),128))])),(0,a._)("div",J,[(0,a._)("div",{class:"btn",onClick:Re},(0,l.zw)("chatgpt"==S.value?"🔎 切换为 NewBing":"💬 切换为 ChatGPT"),1),(0,a._)("div",{class:"btn",onClick:n[0]||(n[0]=(...e)=>(0,i.SU)(T).switchTheme&&(0,i.SU)(T).switchTheme(...e))},(0,l.zw)("light"==(0,i.SU)(T).themeCache.value?"🌃 暗色模式":"🌇 亮色模式"),1),(0,a._)("div",{class:"btn",onClick:n[1]||(n[1]=e=>Ye.value=!0)},"👐 打开配置"),(0,a._)("div",{class:"btn",onClick:Ee},"👊 重置配置"),(0,a._)("div",{class:"btn",onClick:rt},"☕️ 支持我"),ze.value?((0,a.wg)(),(0,a.iD)("div",$," 余额："+(0,l.zw)(Le(ze.value.soft_limit_usd,2))+" $，已用："+(0,l.zw)(Le(ze.value.system_hard_limit_usd-ze.value.soft_limit_usd,2))+" $ ",1)):(0,a.kq)("",!0)]),(0,a._)("div",{id:"showBtn",onClick:n[2]||(n[2]=e=>qe.value=!qe.value)},(0,l.zw)(qe.value?"👈":"👉"),1)],2)),(0,a._)("div",G,["chatgpt"==S.value&&xe[Ne.value]?((0,a.wg)(),(0,a.iD)("div",{key:0,id:"messages",class:(0,l.C_)({print:Ve.value})},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(xe[Ne.value].contents,((e,n)=>((0,a.wg)(),(0,a.iD)("div",{key:n,class:(0,l.C_)("user"==e.role?"right":"left")},[(0,a._)("div",W,["system"==e.role?((0,a.wg)(),(0,a.iD)("div",Z," SY ")):"user"==e.role?((0,a.wg)(),(0,a.iD)("div",V," Me ")):((0,a.wg)(),(0,a.iD)("div",F,(0,l.zw)("chatgpt"==(0,i.SU)(t).robot?"GPT":"Bing"),1))]),(0,a._)("div",{class:(0,l.C_)(["content",{end:!C.value||n!=xe[Ne.value].contents.length-1}]),innerHTML:e.content},null,10,R)],2)))),128)),Ve.value?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",Q))],2)):"newbing"==S.value?((0,a.wg)(),(0,a.iD)("div",{key:1,id:"messages",class:(0,l.C_)({print:Ve.value})},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(at.value.contents,((e,n)=>((0,a.wg)(),(0,a.iD)("div",{key:n,class:(0,l.C_)("user"==e.role?"right":"left")},[(0,a._)("div",X,["system"==e.role?((0,a.wg)(),(0,a.iD)("div",ee," SY ")):"user"==e.role?((0,a.wg)(),(0,a.iD)("div",te," Me ")):((0,a.wg)(),(0,a.iD)("div",ne,(0,l.zw)("chatgpt"==(0,i.SU)(t).robot?"GPT":"Bing"),1))]),(0,a._)("div",{class:(0,l.C_)(["content",{end:!C.value||n!=at.value.contents.length-1}]),innerHTML:e.content},null,10,oe),n!=at.value.contents.length-1||C.value?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",ae,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(nt.value,((e,t)=>((0,a.wg)(),(0,a.iD)("a",{href:e.seeMoreUrl,target:"_blank",key:t},"🔗 "+(0,l.zw)(e.providerDisplayName),9,le)))),128))]))],2)))),128)),Ve.value?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",ie))],2)):((0,a.wg)(),(0,a.iD)("div",se,ue)),Ve.value?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",re,[(0,a._)("div",{class:(0,l.C_)(["stop",{stopShow:C.value}]),onClick:Ze}," 停止回复 🛑 ",2),(0,a._)("div",de,[(0,a._)("div",ve,[(0,a._)("div",{onClick:Fe},"📄 导出PDF"),"newbing"==S.value?((0,a.wg)(),(0,a.iD)("div",{key:0,onClick:n[3]||(n[3]=e=>ct(!1))}," 🔃 重载对话 ")):(0,a.kq)("",!0)]),(0,a._)("div",pe,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(ot.value,((e,t)=>((0,a.wg)(),(0,a.iD)("div",{key:t,onClick:t=>ut(e)}," ❓ "+(0,l.zw)(e.text),9,ge)))),128))]),(0,a.wy)((0,a._)("textarea",{"onUpdate:modelValue":n[4]||(n[4]=e=>x.value=e),onKeydown:E,onKeyup:A,style:(0,l.j5)({height:ce.value+"px"})},null,36),[[o.nr,x.value]])]),(0,a._)("p",null," 当前 AI："+(0,l.zw)(st())+" | 当前 Model："+(0,l.zw)((0,i.SU)(t).model),1)]))])],2),(0,a.Wm)(g,{title:"初次配置",show:v.value},{center:(0,a.w5)((()=>[fe,he,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":n[5]||(n[5]=e=>h.value=e),onKeydown:(0,o.D2)(w,["enter"])},null,40,me),[[o.nr,h.value]]),ye])),bottom:(0,a.w5)((()=>[(0,a._)("button",{class:"success",onClick:w},"存储"),(0,a._)("button",{class:"info",onClick:_},"跳过")])),_:1},8,["show"]),(0,a.Wm)(g,{title:"设置",show:Ye.value},{center:(0,a.w5)((()=>[(0,a._)("div",we,[(0,a._)("div",null,[ke,(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":n[6]||(n[6]=e=>(0,i.SU)(t).key=e)},null,512),[[o.nr,(0,i.SU)(t).key]])]),_e,(0,a._)("div",null,[be,(0,a.wy)((0,a._)("select",{"onUpdate:modelValue":n[7]||(n[7]=e=>(0,i.SU)(t).model=e)},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,i.SU)(t).models,((e,t)=>((0,a.wg)(),(0,a.iD)("option",{key:t,value:e},(0,l.zw)(e),9,Ce)))),128))],512),[[o.bM,(0,i.SU)(t).model]])]),Se,(0,a._)("div",null,[De,(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":n[8]||(n[8]=e=>(0,i.SU)(t).system=e)},null,512),[[o.nr,(0,i.SU)(t).system]])]),Oe,(0,a._)("div",null,[Te,(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":n[9]||(n[9]=e=>(0,i.SU)(t).nbCookie=e)},null,512),[[o.nr,(0,i.SU)(t).nbCookie]])]),He])])),bottom:(0,a.w5)((()=>[(0,a._)("button",{class:"success",onClick:Ae},"保存"),(0,a._)("button",{class:"info",onClick:n[10]||(n[10]=e=>Ye.value=!Ye.value)}," 关闭 ")])),_:1},8,["show"])],64))}});const xe=(0,v.Z)(Ue,[["__scopeId","data-v-da74733e"]]);var Ne=xe;const Pe=(0,o.ri)(Ne);Pe.mount("#app")}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var l=t[o]={exports:{}};return e[o].call(l.exports,l,l.exports,n),l.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,l){if(!o){var i=1/0;for(r=0;r<e.length;r++){o=e[r][0],a=e[r][1],l=e[r][2];for(var s=!0,c=0;c<o.length;c++)(!1&l||i>=l)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(s=!1,l<i&&(i=l));if(s){e.splice(r--,1);var u=a();void 0!==u&&(t=u)}}return t}l=l||0;for(var r=e.length;r>0&&e[r-1][2]>l;r--)e[r]=e[r-1];e[r]=[o,a,l]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(o,a){if(1&a&&(o=this(o)),8&a)return o;if("object"===typeof o&&o){if(4&a&&o.__esModule)return o;if(16&a&&"function"===typeof o.then)return o}var l=Object.create(null);n.r(l);var i={};e=e||[null,t({}),t([]),t(t)];for(var s=2&a&&o;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((function(e){i[e]=function(){return o[e]}}));return i["default"]=function(){return o},n.d(l,i),l}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{297:"c6dfa76a",617:"f607fc1c"}[e]+".js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="chatgpt:";n.l=function(o,a,l,i){if(e[o])e[o].push(a);else{var s,c;if(void 0!==l)for(var u=document.getElementsByTagName("script"),r=0;r<u.length;r++){var d=u[r];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+l){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+l),s.src=o),e[o]=[a];var v=function(t,n){s.onerror=s.onload=null,clearTimeout(p);var a=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(v.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=v.bind(null,s.onerror),s.onload=v.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={143:0};n.f.j=function(t,o){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)o.push(a[2]);else{var l=new Promise((function(n,o){a=e[t]=[n,o]}));o.push(a[2]=l);var i=n.p+n.u(t),s=new Error,c=function(o){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var l=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+l+": "+i+")",s.name="ChunkLoadError",s.type=l,s.request=i,a[1](s)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,l,i=o[0],s=o[1],c=o[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(c)var r=c(n)}for(t&&t(o);u<i.length;u++)l=i[u],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(r)},o=self["webpackChunkchatgpt"]=self["webpackChunkchatgpt"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(11987)}));o=n.O(o)})();
//# sourceMappingURL=app.d6023b61.js.map