"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[941],{8425:function(n,e,r){r.d(e,{Z:function(){return l}});var t,i=r(168),o=r(1087),a=(0,r(5867).ZP)(o.rU)(t||(t=(0,i.Z)(["\n  display: flex;\n  gap: 10px;\n  text-decoration: none;\n  color: white;\n  font-size: 18px;\n  padding: 10px 20px;\n  align-items: center;\n\n  &:hover,\n  &:focus {\n    color: blue;\n  }\n"]))),s=r(2184),c=r(184),l=function(n){var e=n.to,r=n.children;return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(a,{to:e,children:[(0,c.jsx)(s.hPZ,{}),r]})})}},6375:function(n,e,r){r.d(e,{Cq:function(){return x},GI:function(){return p},K3:function(){return Z},W2:function(){return h},Z7:function(){return f},jK:function(){return u}});var t,i,o,a,s,c,l=r(168),d=r(5867),h=d.ZP.div(t||(t=(0,l.Z)(["\n  color: white;\n"]))),u=d.ZP.ul(i||(i=(0,l.Z)(["\n  padding-left: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"]))),p=d.ZP.li(o||(o=(0,l.Z)(["\n  margin-bottom: 6px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  border: 1px solid white;\n  border-radius: 10px;\n  padding: 16px;\n"]))),f=d.ZP.h2(a||(a=(0,l.Z)(["\n  font-size: 20px;\n"]))),x=d.ZP.p(s||(s=(0,l.Z)(["\n  line-height: 1.5;\n  font-size: 14px;\n  text-align: justify;\n"]))),Z=d.ZP.button(c||(c=(0,l.Z)(["\n  color: white;\n  font-size: 14px;\n  background-color: transparent;\n  border: none;\n  align-self: flex-end;\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    color: blue;\n  }\n"])))},3941:function(n,e,r){r.r(e),r.d(e,{default:function(){return $}});var t,i,o,a,s,c,l,d,h,u,p,f,x,Z,g,v,j,m=r(5861),b=r(9439),y=r(7757),w=r.n(y),P=r(2791),_=r(7689),k=r(8174),z=r(2690),Y=r(8719),S=r(168),F=r(5867),B=F.ZP.div(t||(t=(0,S.Z)(["\n  color: white;\n  line-height: 1.5;\n  display: flex;\n  gap: 40px;\n  padding-top: 20px;\n"]))),C=F.ZP.div(i||(i=(0,S.Z)(["\n  margin-left: 10px;\n"]))),D=F.ZP.img(o||(o=(0,S.Z)(["\n  height: auto;\n  border-radius: 10px;\n"]))),A=F.ZP.div(a||(a=(0,S.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"]))),G=F.ZP.h2(s||(s=(0,S.Z)(["\n  margin: 0px;\n  font-size: 24px;\n  font-weight: bold;\n  padding-top: 12px;\n"]))),K=F.ZP.div(c||(c=(0,S.Z)([""]))),U=F.ZP.div(l||(l=(0,S.Z)(["\n  /* Your Gender styles here */\n"]))),I=F.ZP.div(d||(d=(0,S.Z)(["\n  /* Your Birthday styles here */\n"]))),M=F.ZP.div(h||(h=(0,S.Z)([""]))),N=F.ZP.div(u||(u=(0,S.Z)(["\n  /* Your BirthdayPlace styles here */\n"]))),q=F.ZP.ul(p||(p=(0,S.Z)(["\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n"]))),E=F.ZP.div(f||(f=(0,S.Z)(["\n  /* Your BiografyContainer styles here */\n"]))),H=F.ZP.h1(x||(x=(0,S.Z)([""]))),L=F.ZP.p(Z||(Z=(0,S.Z)(["\n  font-size: 16px;\n"]))),O=F.ZP.h3(g||(g=(0,S.Z)(["\n  margin: 0;\n  font-size: 20px;\n  font-weight: bold;\n"]))),R=F.ZP.p(v||(v=(0,S.Z)(["\n  font-size: 20px;\n"]))),T=F.ZP.div(j||(j=(0,S.Z)([""]))),W=r(6375),J=r(184),Q=function(n){var e=n.profile_path,r=n.gender,t=n.birthday,i=n.deathday,o=n.place_of_birth,a=n.also_known_as,s=n.name,c=n.biography,l=(0,P.useState)(!1),d=(0,b.Z)(l,2),h=d[0],u=d[1],p="";if(t&&i){var f=new Date(t);p=new Date(i).getFullYear()-f.getFullYear()}else if(t&&!i){var x=new Date(t);p=(new Date).getFullYear()-x.getFullYear()}return(0,J.jsxs)(B,{children:[(0,J.jsxs)(C,{children:[(0,J.jsx)(D,{src:e?"https://image.tmdb.org/t/p/w500/".concat(e):Y.A,alt:"actor-foto",width:"300",height:"450"}),(0,J.jsxs)(A,{children:[(0,J.jsx)(G,{children:"Personal information"}),(0,J.jsxs)(K,{children:[(0,J.jsx)(O,{children:"Gender"}),(0,J.jsx)(U,{children:function(n){switch(n){case 0:return"Not set / not specified";case 1:return"Female";case 2:return"Male";case 3:return"Non-binary";default:return"Unknown"}}(r)})]}),t&&(0,J.jsxs)(K,{children:[(0,J.jsx)(O,{children:"Birthday"}),(0,J.jsxs)(I,{children:[t," (",p," years old)"]})]}),i&&(0,J.jsxs)(K,{children:[(0,J.jsx)(O,{children:"Deathday"}),(0,J.jsx)(M,{children:i})]}),o&&(0,J.jsxs)(K,{children:[(0,J.jsx)(O,{children:"Place of birth"}),(0,J.jsx)(N,{children:o})]}),a&&a.length>0&&(0,J.jsxs)(K,{children:[(0,J.jsx)(O,{children:"Also known as"}),(0,J.jsx)(q,{children:a.map((function(n,e){return(0,J.jsx)("li",{children:n},e)}))})]})]})]}),(0,J.jsxs)(T,{children:[(0,J.jsx)(H,{children:s}),c?(0,J.jsxs)(E,{children:[(0,J.jsx)(G,{children:"Biografy"}),(0,J.jsx)(L,{children:c&&(h?c:"".concat(c.slice(0,1e3)))}),c&&c.length>1e3&&(0,J.jsx)(W.K3,{onClick:function(){u(!h)},children:h?"Show Less":"Show More..."})]}):(0,J.jsx)(R,{children:"Sorry, there is no information about this actor"})]})]})},V=r(5510),X=r(8425),$=function(){var n,e,r=(0,_.UO)().personId,t=(0,P.useState)(null),i=(0,b.Z)(t,2),o=i[0],a=i[1],s=(0,P.useState)(!1),c=(0,b.Z)(s,2),l=c[0],d=c[1],h=(0,_.TH)(),u=(0,P.useRef)(null!==(n=null===(e=h.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/");(0,P.useEffect)((function(){var n=function(){var n=(0,m.Z)(w().mark((function n(){var e;return w().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,d(!0),n.next=4,(0,z.Z)("person/".concat(r));case 4:e=n.sent,a(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),k.Am.error("Something went wrong!!!");case 11:return n.prev=11,d(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[r]);var p=o||{},f=p.profile_path,x=p.gender,Z=p.birthday,g=p.deathday,v=p.place_of_birth,j=p.also_known_as,y=p.name,Y=p.biography;return(0,J.jsxs)("div",{children:[(0,J.jsx)(X.Z,{to:u.current,children:"Go back"}),l&&(0,J.jsx)(V.a,{}),(0,J.jsx)(Q,{profile_path:f,gender:x,birthday:Z,deathday:g,place_of_birth:v,also_known_as:j,name:y,biography:Y})]})}},2690:function(n,e,r){var t=r(1413),i=r(5861),o=r(7757),a=r.n(o),s=r(5294),c="2b5715eb91948ab21d8a3671ab9cf18a",l="https://api.themoviedb.org/3/",d=function(){var n=(0,i.Z)(a().mark((function n(e){var r,i,o=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=o.length>1&&void 0!==o[1]?o[1]:{},n.next=3,s.Z.get("".concat(l).concat(e),{params:(0,t.Z)({api_key:c},r)});case 3:return i=n.sent,n.abrupt("return",i.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();e.Z=d},8719:function(n,e,r){r.d(e,{A:function(){return i},Z:function(){return t}});var t="https://images.pexels.com/photos/6177645/pexels-photo-6177645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",i="https://banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png"}}]);
//# sourceMappingURL=941.b6bf4538.chunk.js.map