(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{17:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a,c,r,i=n(1),o=n.n(i),s=n(5),d=n.n(s),l=(n(17),n(6)),b=n(7),j=n(8),u=n(11),h=n(10),x=n(2),O=n(3),p=O.a.section(a||(a=Object(x.a)(["\n  text-align: center;\n  margin: 0 auto;\n"]))),g=n(0);function v(e){var t=e.titel,n=e.children;return Object(g.jsxs)(p,{children:[Object(g.jsx)("h1",{children:t}),n]})}var f,k=O.a.div(c||(c=Object(x.a)(["\n  margin: 0 auto;\n  text-align: center;\n"]))),m=O.a.button(r||(r=Object(x.a)(["\n  border: none;\n  padding: 5px 25px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 15px;\n  margin: 4px;\n  transition-duration: 0.4s;\n  cursor: pointer;\n  text-transform: capitalize;\n  border-radius: 10px;\n  &:hover {\n    background-color: #ffa500;\n    color: #fff;\n  }\n"])));function y(e){var t=e.options,n=e.onLeaveFeedback;return Object(g.jsx)(k,{children:t.map((function(e,t){return Object(g.jsx)(m,{type:"button",name:e,onClick:n,children:e},t)}))})}var F,P,w,T=O.a.h3(f||(f=Object(x.a)(["\n  font-weight: 300;\n"])));function N(e){var t=e.message;return Object(g.jsx)(T,{children:t})}N.defaultProps={message:"No feedback given"};var S=O.a.div(F||(F=Object(x.a)(["\n  margin: 0 auto;\n  text-align: center;\n"]))),z=O.a.div(P||(P=Object(x.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),B=O.a.p(w||(w=Object(x.a)(["\n  margin-right: 5px;\n  font-weight: 300;\n"])));function C(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,r=e.positivePercentage;return Object(g.jsxs)(S,{children:[Object(g.jsx)("h2",{children:"Statistics"}),c?Object(g.jsxs)(z,{children:[Object(g.jsxs)(B,{children:["Good:",Object(g.jsxs)("span",{children:[" ",t]})]}),Object(g.jsxs)(B,{children:["Neutral:",Object(g.jsxs)("span",{children:[" ",n]})]}),Object(g.jsxs)(B,{children:["Bad:",Object(g.jsxs)("span",{children:[" ",a]})]}),Object(g.jsxs)(B,{children:["Total:",Object(g.jsxs)("span",{children:[" ",c]})]}),Object(g.jsxs)(B,{children:["Positiv:",Object(g.jsxs)("span",{children:[" ",r,"%"]})]})]}):Object(g.jsx)(N,{message:"No feedback given"})]})}var J=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.handleFeedback=function(t){var n=t.target.name;console.log(n),e.setState((function(e){return Object(l.a)({},n,e[n]+1)}))},e.countTotalFeedback=function(){var t=e.state,n=t.good,a=t.neutral;return t.bad+a+n},e}return Object(j.a)(n,[{key:"countPositiveFeedbackPercentage",value:function(){return(this.state.good/this.countTotalFeedback()*100).toFixed(0)}},{key:"render",value:function(){var e=this.state,t=e.good,n=e.bad,a=e.neutral,c=Object.keys(this.state);return Object(g.jsxs)(v,{titel:"Please leave feedback",children:[Object(g.jsx)(y,{options:c,onLeaveFeedback:this.handleFeedback}),Object(g.jsx)(C,{good:t,neutral:a,bad:n,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})]})}}]),n}(i.Component);d.a.render(Object(g.jsx)(o.a.StrictMode,{children:Object(g.jsx)(J,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.1660ecd0.chunk.js.map