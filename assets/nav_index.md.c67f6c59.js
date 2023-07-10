import{d as _,a as d,o as e,c as i,b as n,u as a,w as A,e as l,t as h,_ as m,f as k,F as u,r as b,g as f,h as y}from"./app.f3faa9ad.js";const B=/[\u0000-\u001f]/g,T=/[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g,C=/[\u0300-\u036F]/g,v=t=>t.normalize("NFKD").replace(C,"").replace(B,"").replace(T,"-").replace(/-{2,}/g,"-").replace(/^-+|-+$/g,"").replace(/^(\d)/,"_$1").toLowerCase(),x=["href"],N={class:"box"},D={class:"box-header"},L=["innerHTML"],P={key:1,class:"icon"},$=["src","alt"],I=["id"],S={key:0,class:"desc"},F=_({__name:"MNavLink",props:{icon:null,title:null,desc:null,link:null},setup(t){const s=t,c=d(()=>s.title?v(s.title):""),o=d(()=>typeof s.icon=="object"?s.icon.svg:"");return(r,p)=>t.link?(e(),i("a",{key:0,class:"m-nav-link",href:t.link,target:"_blank",rel:"noreferrer"},[n("article",N,[n("div",D,[a(o)?(e(),i("div",{key:0,class:"icon",innerHTML:a(o)},null,8,L)):t.icon&&typeof t.icon=="string"?(e(),i("div",P,[n("img",{src:a(A)(t.icon),alt:t.title,onerror:"this.parentElement.style.display='none'"},null,8,$)])):l("",!0),t.title?(e(),i("h5",{key:2,id:a(c),class:"title"},h(t.title),9,I)):l("",!0)]),t.desc?(e(),i("p",S,h(t.desc),1)):l("",!0)])],8,x)):l("",!0)}});const G=m(F,[["__scopeId","data-v-94d36b8f"]]),M=["id"],V=["href"],z={class:"m-nav-links"},j=_({__name:"MNavLinks",props:{title:null,items:null},setup(t){const s=t,c=d(()=>v(s.title));return(o,r)=>(e(),i(u,null,[t.title?(e(),i("h2",{key:0,id:a(c),tabindex:"-1"},[k(h(t.title)+" ",1),n("a",{class:"header-anchor",href:`#${a(c)}`,"aria-hidden":"true"},null,8,V)],8,M)):l("",!0),n("div",z,[(e(!0),i(u,null,b(t.items,({icon:p,title:w,desc:E,link:g})=>(e(),f(G,{key:g,icon:p,title:w,desc:E,link:g},null,8,["icon","title","desc","link"]))),128))])],64))}});const q=m(j,[["__scopeId","data-v-2bcff0a9"]]),R=[{title:"官方相关",items:[{icon:"icons/yamamoto.webp",title:"山本崇一朗-推特",desc:"《高木同学》原作者",link:"https://twitter.com/udon0531"},{icon:"icons/dp6h9JiL.webp",title:"稲葉光史-推特",desc:"《（原）高木同学》作者",link:"https://twitter.com/Y6W9v"},{icon:"icons/takagi3_anime.webp",title:"动画官方推特",desc:"《高木同学》动画官方SNS账号",link:"https://twitter.com/takagi3_anime"},{icon:"icons/takagi3_anime.webp",title:"动画官网",desc:"《高木同学》动画官网（默认为剧场版页面）",link:"https://takagi3.me/"},{icon:"icons/geekan-sunday.ico",title:"《月刊少年》杂志官网",desc:"原作漫画连载杂志的官网",link:"https://gekkansunday.net/"}]},{title:"民间自建站点",items:[{icon:"/icons/takagi-wiki.webp",title:"高木同学资料站",desc:"类wiki资料信息站 (by @一只鬆）",link:"https://wiki.takagi3.cn/"},{icon:"/icons/takagi-fanclub.webp",title:"高木同学Fan社区",desc:"属于高木厨的独立社区论坛 (by @轻虹空雨）",link:"https://club.takagi3.cn/"},{icon:"/icons/takagi-imgshare.webp",title:"高木同学共享云图仓",desc:"实用&共享的高木美图云仓 (by @轻虹空雨）",link:"https://shareimg.takagi3.cn/"},{icon:"/icons/takagi-filecloud.webp",title:"高木同学文件资料站",desc:"[重建中]大家一般需要的资源，都在这了。",link:"https://share.takagi3.top"}]},{title:"公共社群",items:[{icon:"/icons/tieba.webp",title:"百度贴吧",link:"https://tieba.baidu.com/f?kw=%E6%93%85%E9%95%BF%E6%8D%89%E5%BC%84%E7%9A%84%E9%AB%98%E6%9C%A8%E5%90%8C%E5%AD%A6&fr=index"},{icon:"/icons/weibo.webp",title:"微博超话",link:"https://weibo.com/p/100808bb6103ebd10533630befafe870f424f2"},{icon:"/icons/qq.webp",title:"QQ频道",link:"https://pd.qq.com/s/cp4k08j75"}]},{title:"百科资料",items:[{icon:"/icons/wikipedia.ico",title:"维基百科",link:"https://zh.m.wikipedia.org/wiki/%E6%93%85%E9%95%B7%E6%8D%89%E5%BC%84%E4%BA%BA%E7%9A%84%E9%AB%98%E6%9C%A8%E5%90%8C%E5%AD%B8"},{icon:"/icons/moegirl.ico",title:"萌娘百科",link:"https://zh.moegirl.org.cn/%E6%93%85%E9%95%BF%E6%8D%89%E5%BC%84%E7%9A%84%E9%AB%98%E6%9C%A8%E5%90%8C%E5%AD%A6"},{icon:"/icons/fandom.ico",title:"Fandom Wiki",link:"https://karakai-jouzu-no-takagi-san.fandom.com/zh/wiki/%E9%A6%96%E9%A1%B5"}]},{title:"圈内名人",items:[{icon:"/icons/touzi.webp",title:"擅长捉弄の高木同学",desc:"高木圈知名B站UP主，外号“头子”",link:"https://space.bilibili.com/2709173/"},{icon:"/icons/takagi-camerata.webp",title:"高木同学同好会",desc:"民间粉丝团体“高木同学同好会”B站公号",link:"https://space.bilibili.com/1415908672/"}]},{title:"其他",items:[{icon:"/icons/chatgpt-next-web.svg",title:"ChatGPT-Next-Web",desc:"国内可用的二改GPT站点 (访问密钥请联系站长)",link:"https://chatgpt.takagi3.top"},{icon:"/icons/bing.ico",title:"Bing-AI Chat",desc:"国内可用的Bing AI站点",link:"https://bingchat.takagi3.top"},{icon:"/icons/tkgcrop.webp",title:"“高木同学振兴会”官网",desc:"民间粉丝团体“高木同学振兴会”官网",link:"https://takagisan.cn"},{icon:"/icons/Gesun-203-Jan-cover-modified.webp",title:"《高木同学》内容仓库集群",desc:"关于《高木同学》项目的Github组织页面",link:"https://github.com/TakagisanArchiveRepos"},{icon:"/icons/github.svg",title:"高木资料站Github仓库",link:"https://github.com/TakagisanArchiveRepos/VuePress-TakagiWiki"},{icon:"/icons/github.svg",title:"高木站点导航Github仓库",link:"https://github.com/TakagisanArchiveRepos/Takagi-NavSite"},{icon:"/icons/github.svg",title:"AI高木程序Github仓库",link:"https://github.com/mrtank2333/AITakagi-san_Powered_By_ChatGPT_Client"}]}];const W=y('<h1 id="站点列表" tabindex="-1">站点列表 <a class="header-anchor" href="#站点列表" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><strong>欢迎访问 高木同学站点导航</strong> | <strong>站长：</strong>@<a href="https://mufeng086.com" target="_blank" rel="noreferrer">轻虹空雨</a> | <strong>收录申请：</strong><a href="mailto:feedback@takagi3.cn" target="_blank" rel="noreferrer">Feedback@takagi3.cn</a></p></div>',2),J=n("div",{class:"tip custom-block"},[n("p",{class:"custom-block-title"},"TIP"),n("p",null,[k("本站前端模板由 "),n("a",{href:"https://github.com/maomao1996",target:"_blank",rel:"noreferrer"},"maomao"),k(" 开发，源项目地址："),n("a",{href:"https://github.com/maomao1996/vitepress-fe-nav",target:"_blank",rel:"noreferrer"},"https://github.com/maomao1996/vitepress-fe-nav")])],-1),Q=JSON.parse('{"title":"站点列表","description":"","frontmatter":{"layoutClass":"m-nav-layout","outline":[2,3,4]},"headers":[],"relativePath":"nav/index.md","lastUpdated":1688996404000}'),H={name:"nav/index.md"},U=Object.assign(H,{setup(t){return(s,c)=>(e(),i("div",null,[W,(e(!0),i(u,null,b(a(R),({title:o,items:r})=>(e(),f(q,{title:o,items:r},null,8,["title","items"]))),256)),J]))}});export{Q as __pageData,U as default};
