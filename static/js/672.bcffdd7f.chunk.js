"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[672,999],{8425:function(n,e,t){t.d(e,{Z:function(){return d}});var i,r=t(168),o=t(1087),a=(0,t(6487).ZP)(o.rU)(i||(i=(0,r.Z)(["\n  display: flex;\n  gap: 10px;\n  text-decoration: none;\n  color: white;\n  font-size: 12px;\n  padding: 6px 6px;\n  width: 100px;\n  margin-bottom: 20px;\n  align-items: center;\n  border-radius: 10px;\n  box-shadow: 0 0 13px 3px blue;\n\n  @media (min-width: 768px) {\n    font-size: 16px;\n    padding: 8px 8px;\n    width: 120px;\n\n    &:hover,\n    &:focus {\n      color: blue;\n    }\n  }\n\n  @media (min-width: 1440px) {\n    font-size: 18px;\n    padding: 10px 10px;\n    width: 140px;\n  }\n"]))),p=t(2184),s=t(184),d=function(n){var e=n.to,t=n.children;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(a,{to:e,children:[(0,s.jsx)(p.hPZ,{}),t]})})}},4672:function(n,e,t){t.d(e,{Z:function(){return R}});var i,r,o,a,p,s,d,x,c,l,h=t(7689),m=t(2999),u=t(8719),f=t(168),g=t(6487),w=t(1087),Z=g.ZP.div(i||(i=(0,f.Z)(["\n  margin-top: 20px;\n  display: flex;\n"]))),v=g.ZP.ul(r||(r=(0,f.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  padding: 0;\n  justify-content: center;\n"]))),b=g.ZP.li(o||(o=(0,f.Z)(["\n  margin-bottom: 10px;\n  width: 200px;\n\n  @media (min-width: 1440px) {\n    width: 250px;\n  }\n"]))),j=(0,g.ZP)(w.rU)(a||(a=(0,f.Z)(["\n  font-size: 18px;\n  color: white;\n  text-decoration: none;\n"]))),y=g.ZP.img(p||(p=(0,f.Z)(["\n  border-radius: 10px;\n  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n\n  @media (min-width: 768px) {\n    &:hover,\n    &:focus {\n      transform: scale(1.1);\n    }\n  }\n\n  @media (min-width: 1440px) {\n    width: 250px;\n    height: 380px;\n  }\n"]))),P=g.ZP.div(s||(s=(0,f.Z)(["\n  background-color: blue;\n  width: 40px;\n  height: 40px;\n  font-size: 14px;\n  font-weight: bold;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  bottom: -16px;\n  left: 10px;\n  transition: transform 0.5s ease;\n\n  @media (min-width: 768px) {\n    &:hover,\n    &:focus {\n      transform: scale(1.5) rotate(360deg);\n    }\n  }\n\n  @media (min-width: 1440px) {\n    width: 45px;\n    height: 45px;\n    font-size: 18px;\n  }\n"]))),z=g.ZP.div(d||(d=(0,f.Z)(["\n  position: relative;\n"]))),k=g.ZP.p(x||(x=(0,f.Z)(["\n  font-size: 16px;\n  font-weight: bold;\n  text-align: center;\n  margin: 0 auto;\n  margin-top: 20px;\n\n  @media (min-width: 1440px) {\n    font-size: 20px;\n  }\n"]))),_=g.ZP.p(c||(c=(0,f.Z)(["\n  font-size: 14px;\n  text-align: center;\n  margin: 0 auto;\n"]))),S=g.ZP.div(l||(l=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),F=t(184),R=function(n){var e=n.movies,t=(0,h.TH)();return(0,F.jsx)(Z,{children:(0,F.jsx)(v,{children:e.map((function(n){var e=n.id,i=n.name,r=n.title,o=n.release_date,a=n.poster_path,p=n.vote_average;if(!o)return null;var s=new Date(o).getFullYear(),d=(10*p).toFixed(),x="".concat(m.BASE_URL).concat(a);return(0,F.jsx)(b,{children:(0,F.jsxs)(j,{to:"/movies/".concat(e),state:{from:t},children:[(0,F.jsxs)(z,{children:[(0,F.jsx)(y,{src:a?x:u.Z,alt:"movie-foto",width:"200",height:"320"}),(0,F.jsxs)(P,{children:[d,"%"]})]}),(0,F.jsxs)(S,{children:[(0,F.jsxs)(k,{children:[" ",null!==r&&void 0!==r?r:i]}),(0,F.jsxs)(_,{children:["(",s,")"]})]})]})},e)}))})})}},2999:function(n,e,t){t.r(e),t.d(e,{BASE_URL:function(){return xn},default:function(){return cn}});var i,r,o,a,p,s,d,x,c,l,h,m,u,f,g,w,Z,v,b,j,y=t(1413),P=t(5861),z=t(9439),k=t(4687),_=t.n(k),S=t(7689),F=t(2791),R=t(5568),U=t(2690),O=t(8719),T=t(7205),A=t(7113),B=t(2069),C=t(168),E=t(6487),L=E.ZP.div(i||(i=(0,C.Z)(["\n  iframe {\n    width: 100%;\n    height: 150px;\n    max-width: 260px;\n    border: 0;\n  }\n\n  @media (min-width: 768px) {\n    iframe {\n      height: 320px;\n      max-width: 560px;\n    }\n  }\n\n  @media (min-width: 1440px) {\n    iframe {\n      height: 440px;\n      max-width: 760px;\n    }\n  }\n"]))),X=t(184),D=function(n){var e=n.name,t=n.videoKey;return(0,X.jsx)(L,{children:(0,X.jsx)("iframe",{title:e,src:"https://www.youtube.com/embed/".concat(t),allowFullScreen:!0,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"})})},G=t(1087),H=E.ZP.div(r||(r=(0,C.Z)(["\n  color: white;\n  line-height: 1.5;\n"]))),K=E.ZP.h2(o||(o=(0,C.Z)(["\n  margin-bottom: 30px;\n  font-size: 24px;\n  font-weight: bold;\n  text-align: center;\n\n  @media (min-width: 768px) {\n    font-size: 28px;\n  }\n\n  @media (min-width: 1440px) {\n    font-size: 32px;\n  }\n"]))),Y=E.ZP.div(a||(a=(0,C.Z)(["\n  display: flex;\n  position: relative; //\u0437\u043c\u0456\u043d\u0438\n  flex-direction: column;\n  padding: 30px;\n  border-radius: 10px;\n  background: linear-gradient(\n      to right,\n      rgba(31.5, 31.5, 31.5, 0.8) 20%,\n      rgba(31.5, 31.5, 31.5, 0) 50%\n    ),\n    ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(n){return n.background?"url(".concat(n.background,")"):"none"})),I=E.ZP.img(p||(p=(0,C.Z)(["\n  border-radius: 10px;\n\n  @media (min-width: 768px) {\n    width: 250px;\n    height: 370px;\n  }\n\n  @media (min-width: 1440px) {\n    width: 300px;\n    height: 430px;\n  }\n"]))),W=E.ZP.div(s||(s=(0,C.Z)(["\n  display: flex;\n  flex-direction: column;\n  // margin-top: 10px;\n  font-size: 16px;\n\n  @media (min-width: 768px) {\n    font-size: 20px;\n  }\n\n  @media (min-width: 1440px) {\n    font-size: 22px;\n  }\n"]))),q=E.ZP.div(d||(d=(0,C.Z)(["\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"]))),J=E.ZP.div(x||(x=(0,C.Z)(["\n  display: flex;\n  gap: 10px;\n  margin-bottom: 0;\n"]))),M=E.ZP.p(c||(c=(0,C.Z)(["\n  text-shadow: 2px 2px 4px blue;\n"]))),N=E.ZP.p(l||(l=(0,C.Z)([""]))),Q=E.ZP.p(h||(h=(0,C.Z)(["\n  margin-bottom: 4px;\n  text-shadow: 2px 2px 4px blue;\n"]))),V=E.ZP.p(m||(m=(0,C.Z)(["\n  font-size: 14px;\n  font-style: italic;\n\n  @media (min-width: 768px) {\n    font-size: 18px;\n  }\n\n  @media (min-width: 1440px) {\n    font-size: 20px;\n  }\n"]))),$=E.ZP.div(u||(u=(0,C.Z)([""]))),nn=E.ZP.p(f||(f=(0,C.Z)(["\n  font-size: 16px;\n  text-shadow: 2px 2px 4px blue;\n  margin-bottom: 0;\n\n  @media (min-width: 768px) {\n    font-size: 20px;\n  }\n\n  @media (min-width: 1440px) {\n    font-size: 22px;\n  }\n"]))),en=E.ZP.ul(g||(g=(0,C.Z)(["\n  display: flex;\n  flex-direction: row;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  padding: 0;\n  font-size: 14px;\n  list-style: none;\n  gap: 10px;\n\n  @media (min-width: 768px) {\n    font-size: 18px;\n  }\n\n  @media (min-width: 1440px) {\n    font-size: 20px;\n  }\n"]))),tn=E.ZP.div(w||(w=(0,C.Z)(["\n  margin-top: 20px;\n  border-top: 1px solid white;\n  border-bottom: 1px solid white;\n  padding-left: 20px;\n  width: 100%;\n"]))),rn=(E.ZP.p(Z||(Z=(0,C.Z)(["\n  margin-bottom: 5px;\n  font-size: 16px;\n"]))),E.ZP.ul(v||(v=(0,C.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  list-style: none;\n  gap: 50px;\n"])))),on=E.ZP.li(b||(b=(0,C.Z)(["\n  font-size: 18px;\n  margin-bottom: 10px;\n"]))),an=(0,E.ZP)(G.OL)(j||(j=(0,C.Z)(["\n  display: flex;\n  align-items: center;\n  padding: 4px 10px;\n  border-radius: 10px;\n  font-size: 16px;\n  text-decoration: none;\n  color: blue;\n  font-weight: 500;\n  transition: box-shadow 0.3s, color 0.3s;\n\n  @media (min-width: 768px) {\n    font-size: 20px;\n\n    &:hover,\n    &:focus {\n      color: white;\n    }\n\n    &.active {\n      color: white;\n      box-shadow: 0 0 13px 3px blue;\n    }\n  }\n\n  @media (min-width: 1440px) {\n    font-size: 24px;\n  }\n"]))),pn=function(n){var e=n.title,t=n.name,i=n.poster_path,r=n.backdrop_path,o=n.vote_average,a=n.overview,p=n.genres,s=n.release_date,d=n.firstOfficialTrailer,x="";s&&(x=new Date(s).getFullYear());var c=(10*o).toFixed();return(0,X.jsxs)(H,{children:[(0,X.jsx)(Y,{background:r,children:i&&(0,X.jsx)(I,{src:i,alt:"movie-foto",width:"200",height:"300"})}),(0,X.jsxs)(K,{children:[null!==e&&void 0!==e?e:t," ",x&&"(".concat(x,")")]}),(0,X.jsxs)(q,{children:[(0,X.jsxs)(W,{children:[(0,X.jsxs)(J,{children:[(0,X.jsx)(M,{children:"User Score: "}),(0,X.jsxs)(N,{children:[c,"%"]})]}),(0,X.jsx)(Q,{children:"Overview: "}),(0,X.jsx)(V,{children:a}),(0,X.jsxs)($,{children:[(0,X.jsx)(nn,{children:"Genres:"}),p&&p.length>0&&(0,X.jsx)(en,{children:p.map((function(n){return(0,X.jsx)("li",{children:n.name},n.id)}))})]})]}),d&&(0,X.jsx)(D,{name:d.name,type:d.type,official:d.official,videoKey:d.key})]}),(0,X.jsx)(tn,{children:(0,X.jsxs)(rn,{children:[(0,X.jsx)(on,{children:(0,X.jsxs)(an,{to:"cast",children:[(0,X.jsx)(B.Z,{style:{marginRight:"4px"}}),"Cast"]})}),(0,X.jsx)(on,{children:(0,X.jsxs)(an,{to:"reviews",children:[(0,X.jsx)(A.Z,{style:{marginRight:"4px"}}),"Reviews"]})})]})})]})},sn=t(8425),dn=t(8861),xn="https://image.tmdb.org/t/p/w500",cn=function(){var n,e,t=(0,S.UO)().movieId,i=(0,F.useState)(null),r=(0,z.Z)(i,2),o=r[0],a=r[1],p=(0,F.useState)(null),s=(0,z.Z)(p,2),d=s[0],x=s[1],c=(0,F.useState)(!1),l=(0,z.Z)(c,2),h=l[0],m=l[1],u=(0,S.TH)(),f=(0,F.useRef)(null!==(n=null===(e=u.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/");(0,F.useEffect)((function(){var n=function(){var n=(0,P.Z)(_().mark((function n(){var e,i;return _().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,m(!0),n.next=4,(0,U.X)("movie/".concat(t));case 4:return e=n.sent,a(e),n.next=8,(0,U.X)("movie/".concat(t,"/videos"));case 8:i=n.sent,x(i.results),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),R.Am.error("Something went wrong!!!");case 15:return n.prev=15,m(!1),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[0,12,15,18]])})));return function(){return n.apply(this,arguments)}}();t&&n()}),[t]);var g=function(n){return null===n||void 0===n?void 0:n.find((function(n){return"Trailer"===n.type&&!0===n.official}))}(d);return(0,X.jsxs)(dn.W,{children:[(0,X.jsx)(sn.Z,{to:f.current,children:"Go back"}),h&&(0,X.jsx)(T.a,{}),o&&(0,X.jsx)(pn,(0,y.Z)((0,y.Z)({},o),{},{videos:d,firstOfficialTrailer:g,poster_path:o.poster_path?"".concat(xn).concat(o.poster_path):O.Z,backdrop_path:o.backdrop_path?"".concat(xn).concat(o.backdrop_path):O.Z})),(0,X.jsx)(F.Suspense,{fallback:(0,X.jsx)(T.a,{}),children:(0,X.jsx)(S.j3,{})})]})}},2690:function(n,e,t){t.d(e,{X:function(){return x}});var i=t(1413),r=t(5861),o=t(4687),a=t.n(o),p=t(5294),s="2b5715eb91948ab21d8a3671ab9cf18a",d="https://api.themoviedb.org/3/",x=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r,o=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=o.length>1&&void 0!==o[1]?o[1]:{},n.next=3,p.Z.get("".concat(d).concat(e),{params:(0,i.Z)({api_key:s},t)});case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},8719:function(n,e,t){t.d(e,{A:function(){return r},Z:function(){return i}});var i="https://images.pexels.com/photos/6177645/pexels-photo-6177645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",r="https://banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png"}}]);
//# sourceMappingURL=672.bcffdd7f.chunk.js.map