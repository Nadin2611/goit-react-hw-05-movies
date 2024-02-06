"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{186:function(n,t,e){e.r(t);var r=e(4942),o=e(1413),a=e(5861),c=e(9439),i=e(4687),u=e.n(i),s=e(2791),f=e(7689),p=e(5568),l=e(7445),d=e(2690),h=e(6375),v=e(184);t.default=function(){var n=(0,f.UO)().movieId,t=(0,s.useState)([]),e=(0,c.Z)(t,2),i=e[0],x=e[1],Z=(0,s.useState)(!1),w=(0,c.Z)(Z,2),m=w[0],b=w[1],k=(0,s.useState)(!1),g=(0,c.Z)(k,2),_=g[0],j=g[1];(0,s.useEffect)((function(){if(n){var t=function(){var t=(0,a.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,b(!0),t.next=4,(0,d.XT)("movie/".concat(n,"/reviews"));case 4:e=t.sent,x(e.results),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),p.Am.error("Something went wrong!!!");case 11:return t.prev=11,b(!1),(0,l.r)("reviews"),t.finish(11);case 15:case"end":return t.stop()}}),t,null,[[0,8,11,15]])})));return function(){return t.apply(this,arguments)}}();n&&t()}}),[n]);return(0,v.jsxs)(h.W2,{children:[!m&&0===i.length&&(0,v.jsx)("p",{children:"We don't have any reviews for this movie."}),i&&(0,v.jsx)(h.jK,{name:"reviews",children:i.map((function(n){return(0,v.jsxs)(h.GI,{children:[(0,v.jsx)(h.Z7,{children:n.author}),(0,v.jsx)(h.Cq,{children:_[n.id]?n.content:"".concat(n.content.slice(0,200),"...")}),!_[n.id]&&(0,v.jsx)(h.K3,{onClick:function(){return t=n.id,void j((function(n){return(0,o.Z)((0,o.Z)({},n),{},(0,r.Z)({},t,!n[t]))}));var t},children:"Show More..."})]},n.id)}))})]})}},6375:function(n,t,e){e.d(t,{Cq:function(){return v},GI:function(){return d},K3:function(){return x},W2:function(){return p},Z7:function(){return h},jK:function(){return l}});var r,o,a,c,i,u,s=e(168),f=e(6487),p=f.ZP.div(r||(r=(0,s.Z)(["\n  color: white;\n"]))),l=f.ZP.ul(o||(o=(0,s.Z)(["\n  padding-left: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n"]))),d=f.ZP.li(a||(a=(0,s.Z)(["\n  margin-bottom: 6px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  border: 1px solid blue;\n  border-radius: 10px;\n  padding: 12px;\n"]))),h=f.ZP.h2(c||(c=(0,s.Z)(["\n  font-size: 14px;\n  text-shadow: 2px 2px 4px blue;\n"]))),v=f.ZP.p(i||(i=(0,s.Z)(["\n  line-height: 1.5;\n  font-size: 10px;\n  text-align: justify;\n"]))),x=f.ZP.button(u||(u=(0,s.Z)(["\n  color: white;\n  font-size: 12px;\n  background-color: transparent;\n  border: none;\n  align-self: flex-end;\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    color: blue;\n  }\n"])))},2690:function(n,t,e){e.d(t,{IH:function(){return f},Pu:function(){return p},XT:function(){return s}});var r=e(5861),o=e(4687),a=e.n(o),c=e(5294),i="2b5715eb91948ab21d8a3671ab9cf18a",u="https://api.themoviedb.org/3/",s=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.length>1&&void 0!==r[1]?r[1]:{},n.next=3,c.Z.get("".concat(u).concat(t),{});case 3:return e=n.sent,n.abrupt("return",e.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("".concat(u,"authentication/token/new"),{params:{api_key:i}});case 3:return t=n.sent,console.log(t),n.abrupt("return",t.data.request_token);case 8:throw n.prev=8,n.t0=n.catch(0),console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u0456 \u0442\u043e\u043a\u0435\u043d\u0443:",n.t0),n.t0;case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(t,e,r){var o;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.post("".concat(u,"authentication/token/validate_with_login"),{request_token:r},{params:{api_key:i}});case 3:return o=n.sent,n.abrupt("return",o.data.session_id);case 7:throw n.prev=7,n.t0=n.catch(0),console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0456\u0457 \u0442\u043e\u043a\u0435\u043d\u0443:",n.t0),n.t0;case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t,e,r){return n.apply(this,arguments)}}()},7445:function(n,t,e){e.d(t,{r:function(){return o}});var r=e(5667),o=function(n){r.OK.scrollTo(n,{duration:500,smooth:!0,offset:-120})}}}]);
//# sourceMappingURL=186.f87e29a7.chunk.js.map