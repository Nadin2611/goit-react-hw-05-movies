"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[672,999],{8425:function(n,e,t){t.d(e,{Z:function(){return p}});var i,r=t(168),o=t(1087),a=(0,t(6487).ZP)(o.rU)(i||(i=(0,r.Z)(["\n  display: flex;\n  gap: 10px;\n  text-decoration: none;\n  color: white;\n  font-size: 12px;\n  padding: 6px 6px;\n  width: 100px;\n  margin-bottom: 20px;\n  align-items: center;\n  border-radius: 10px;\n  box-shadow: 0 0 13px 3px blue;\n\n  &:hover,\n  &:focus {\n    color: blue;\n  }\n"]))),s=t(2184),c=t(184),p=function(n){var e=n.to,t=n.children;return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(a,{to:e,children:[(0,c.jsx)(s.hPZ,{}),t]})})}},4672:function(n,e,t){t.d(e,{Z:function(){return R}});var i,r,o,a,s,c,p,l,d,x,u=t(7689),h=t(2999),f=t(8719),m=t(168),g=t(6487),Z=t(1087),v=g.ZP.div(i||(i=(0,m.Z)(["\n  margin-top: 20px;\n  display: flex;\n"]))),b=g.ZP.ul(r||(r=(0,m.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  padding: 0;\n  justify-content: center;\n"]))),w=g.ZP.li(o||(o=(0,m.Z)(["\n  margin-bottom: 10px;\n  width: 200px;\n\n  @media (min-width: 1440px) {\n    width: 250px;\n  }\n"]))),j=(0,g.ZP)(Z.rU)(a||(a=(0,m.Z)(["\n  font-size: 18px;\n  color: white;\n  text-decoration: none;\n"]))),y=g.ZP.img(s||(s=(0,m.Z)(["\n  border-radius: 10px;\n  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n\n  @media (min-width: 1440px) {\n    width: 250px;\n    height: 380px;\n\n    &:hover,\n    &:focus {\n      transform: scale(1.1);\n    }\n  }\n"]))),P=g.ZP.div(c||(c=(0,m.Z)(["\n  background-color: blue;\n  width: 40px;\n  height: 40px;\n  font-size: 14px;\n  font-weight: bold;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  bottom: -16px;\n  left: 10px;\n\n  @media (min-width: 1440px) {\n    width: 45px;\n    height: 45px;\n    font-size: 18px;\n  }\n"]))),k=g.ZP.div(p||(p=(0,m.Z)(["\n  position: relative;\n"]))),_=g.ZP.p(l||(l=(0,m.Z)(["\n  font-size: 16px;\n  font-weight: bold;\n  text-align: center;\n  margin: 0 auto;\n  margin-top: 20px;\n\n  @media (min-width: 1440px) {\n    font-size: 20px;\n  }\n"]))),z=g.ZP.p(d||(d=(0,m.Z)(["\n  font-size: 14px;\n  text-align: center;\n  margin: 0 auto;\n"]))),S=g.ZP.div(x||(x=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),F=t(184),R=function(n){var e=n.movies,t=(0,u.TH)();return(0,F.jsx)(v,{children:(0,F.jsx)(b,{children:e.map((function(n){var e=n.id,i=n.name,r=n.title,o=n.release_date,a=n.poster_path,s=n.vote_average;if(!o)return null;var c=new Date(o).getFullYear(),p=(10*s).toFixed(),l="".concat(h.BASE_URL).concat(a);return(0,F.jsx)(w,{children:(0,F.jsxs)(j,{to:"/movies/".concat(e),state:{from:t},children:[(0,F.jsxs)(k,{children:[(0,F.jsx)(y,{src:a?l:f.Z,alt:"movie-foto",width:"200",height:"320"}),(0,F.jsxs)(P,{children:[p,"%"]})]}),(0,F.jsxs)(S,{children:[(0,F.jsxs)(_,{children:[" ",null!==r&&void 0!==r?r:i]}),(0,F.jsxs)(z,{children:["(",c,")"]})]})]})},e)}))})})}},2999:function(n,e,t){t.r(e),t.d(e,{BASE_URL:function(){return dn},default:function(){return xn}});var i,r,o,a,s,c,p,l,d,x,u,h,f,m,g,Z,v,b,w,j,y=t(1413),P=t(5861),k=t(9439),_=t(4687),z=t.n(_),S=t(7689),F=t(2791),R=t(5568),U=t(2690),O=t(8719),T=t(7205),A=t(7113),B=t(2069),C=t(168),E=t(6487),L=E.ZP.div(i||(i=(0,C.Z)(["\n  iframe {\n    width: 100%;\n    max-width: 560px;\n    height: auto;\n    margin-top: 30px;\n    border: 0;\n  }\n"]))),X=t(184),D=function(n){var e=n.name,t=n.videoKey;return(0,X.jsx)(L,{children:(0,X.jsx)("iframe",{title:e,src:"https://www.youtube.com/embed/".concat(t),allowFullScreen:!0,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"})})},G=t(1087),H=E.ZP.div(r||(r=(0,C.Z)(["\n  color: white;\n  line-height: 1.5;\n"]))),K=E.ZP.h2(o||(o=(0,C.Z)(["\n  margin-bottom: 30px;\n  font-size: 24px;\n  font-weight: bold;\n  text-align: center;\n"]))),Y=E.ZP.div(a||(a=(0,C.Z)(["\n  display: flex;\n  padding: 30px;\n  border-radius: 10px;\n  background: linear-gradient(\n      to right,\n      rgba(31.5, 31.5, 31.5, 0.8) 20%,\n      rgba(31.5, 31.5, 31.5, 0) 50%\n    ),\n    ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(n){return n.background?"url(".concat(n.background,")"):"none"})),I=E.ZP.img(s||(s=(0,C.Z)(["\n  width: 200px;\n  height: 300px;\n  border-radius: 10px;\n"]))),W=E.ZP.div(c||(c=(0,C.Z)(["\n  display: flex;\n  flex-direction: column;\n  // margin-top: 10px;\n  font-size: 16px;\n"]))),q=E.ZP.div(p||(p=(0,C.Z)(["\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"]))),J=E.ZP.div(l||(l=(0,C.Z)(["\n  display: flex;\n  gap: 10px;\n  margin-bottom: 0;\n"]))),M=E.ZP.p(d||(d=(0,C.Z)(["\n  text-shadow: 2px 2px 4px blue;\n"]))),N=E.ZP.p(x||(x=(0,C.Z)([""]))),Q=E.ZP.p(u||(u=(0,C.Z)(["\n  margin-bottom: 4px;\n  text-shadow: 2px 2px 4px blue;\n"]))),V=E.ZP.p(h||(h=(0,C.Z)(["\n  font-size: 14px;\n  font-style: italic;\n"]))),$=E.ZP.div(f||(f=(0,C.Z)([""]))),nn=E.ZP.h2(m||(m=(0,C.Z)(["\n  font-size: 16px;\n  text-shadow: 2px 2px 4px blue;\n  margin-bottom: 0;\n"]))),en=E.ZP.ul(g||(g=(0,C.Z)(["\n  display: flex;\n  flex-direction: row;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  padding: 0;\n  font-size: 14px;\n  list-style: none;\n  gap: 10px;\n"]))),tn=E.ZP.div(Z||(Z=(0,C.Z)(["\n  margin-top: 20px;\n  border-top: 1px solid white;\n  border-bottom: 1px solid white;\n  padding-left: 20px;\n  width: 100%;\n"]))),rn=E.ZP.p(v||(v=(0,C.Z)(["\n  margin-bottom: 5px;\n  font-size: 16px;\n"]))),on=E.ZP.ul(b||(b=(0,C.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  list-style: none;\n  gap: 50px;\n"]))),an=E.ZP.li(w||(w=(0,C.Z)(["\n  font-size: 18px;\n  margin-bottom: 10px;\n"]))),sn=(0,E.ZP)(G.OL)(j||(j=(0,C.Z)(["\n  display: flex;\n  align-items: center;\n  padding: 4px 10px;\n  border-radius: 10px;\n  font-size: 16px;\n  text-decoration: none;\n  color: blue;\n  font-weight: 500;\n  transition: box-shadow 0.3s, color 0.3s;\n\n  &:hover,\n  &:focus {\n    color: white;\n  }\n\n  &.active {\n    color: white;\n    box-shadow: 0 0 13px 3px blue;\n  }\n"]))),cn=function(n){var e=n.title,t=n.name,i=n.poster_path,r=n.backdrop_path,o=n.vote_average,a=n.overview,s=n.genres,c=n.release_date,p=n.firstOfficialTrailer,l="";c&&(l=new Date(c).getFullYear());var d=(10*o).toFixed();return(0,X.jsxs)(H,{children:[(0,X.jsx)(Y,{background:r,children:i&&(0,X.jsx)(I,{src:i,alt:"movie-foto",width:"100",height:"100"})}),(0,X.jsxs)(K,{children:[null!==e&&void 0!==e?e:t," ",l&&"(".concat(l,")")]}),(0,X.jsxs)(q,{children:[(0,X.jsxs)(W,{children:[(0,X.jsxs)(J,{children:[(0,X.jsx)(M,{children:"User Score: "}),(0,X.jsxs)(N,{children:[d,"%"]})]}),(0,X.jsx)(Q,{children:"Overview: "}),(0,X.jsx)(V,{children:a}),(0,X.jsxs)($,{children:[(0,X.jsx)(nn,{children:"Genres:"}),s&&s.length>0&&(0,X.jsx)(en,{children:s.map((function(n){return(0,X.jsx)("li",{children:n.name},n.id)}))})]})]}),p&&(0,X.jsx)(D,{name:p.name,type:p.type,official:p.official,videoKey:p.key})]}),(0,X.jsxs)(tn,{children:[(0,X.jsx)(rn,{}),(0,X.jsxs)(on,{children:[(0,X.jsx)(an,{children:(0,X.jsxs)(sn,{to:"cast",children:[(0,X.jsx)(B.Z,{style:{fontSize:"16px",marginRight:"4px"}})," ","Cast"]})}),(0,X.jsx)(an,{children:(0,X.jsxs)(sn,{to:"reviews",children:[(0,X.jsx)(A.Z,{style:{fontSize:"16px",marginRight:"4px"}}),"Reviews"]})})]})]})]})},pn=t(8425),ln=t(8861),dn="https://image.tmdb.org/t/p/w500",xn=function(){var n,e,t=(0,S.UO)().movieId,i=(0,F.useState)(null),r=(0,k.Z)(i,2),o=r[0],a=r[1],s=(0,F.useState)(null),c=(0,k.Z)(s,2),p=c[0],l=c[1],d=(0,F.useState)(!1),x=(0,k.Z)(d,2),u=x[0],h=x[1],f=(0,S.TH)(),m=(0,F.useRef)(null!==(n=null===(e=f.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/");(0,F.useEffect)((function(){var n=function(){var n=(0,P.Z)(z().mark((function n(){var e,i;return z().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,h(!0),n.next=4,(0,U.X)("movie/".concat(t));case 4:return e=n.sent,a(e),n.next=8,(0,U.X)("movie/".concat(t,"/videos"));case 8:i=n.sent,l(i.results),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),R.Am.error("Something went wrong!!!");case 15:return n.prev=15,h(!1),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[0,12,15,18]])})));return function(){return n.apply(this,arguments)}}();t&&n()}),[t]);var g=function(n){return null===n||void 0===n?void 0:n.find((function(n){return"Trailer"===n.type&&!0===n.official}))}(p);return(0,X.jsxs)(ln.W,{children:[(0,X.jsx)(pn.Z,{to:m.current,children:"Go back"}),u&&(0,X.jsx)(T.a,{}),o&&(0,X.jsx)(cn,(0,y.Z)((0,y.Z)({},o),{},{videos:p,firstOfficialTrailer:g,poster_path:o.poster_path?"".concat(dn).concat(o.poster_path):O.Z,backdrop_path:o.backdrop_path?"".concat(dn).concat(o.backdrop_path):O.Z})),(0,X.jsx)(F.Suspense,{fallback:(0,X.jsx)(T.a,{}),children:(0,X.jsx)(S.j3,{})})]})}},2690:function(n,e,t){t.d(e,{X:function(){return l}});var i=t(1413),r=t(5861),o=t(4687),a=t.n(o),s=t(5294),c="2b5715eb91948ab21d8a3671ab9cf18a",p="https://api.themoviedb.org/3/",l=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r,o=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=o.length>1&&void 0!==o[1]?o[1]:{},n.next=3,s.Z.get("".concat(p).concat(e),{params:(0,i.Z)({api_key:c},t)});case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},8719:function(n,e,t){t.d(e,{A:function(){return r},Z:function(){return i}});var i="https://images.pexels.com/photos/6177645/pexels-photo-6177645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",r="https://banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png"}}]);
//# sourceMappingURL=672.4c4ba149.chunk.js.map