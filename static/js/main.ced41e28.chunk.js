(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,,,,function(e,t,n){e.exports={feedbackBtn:"Feedback_feedbackBtn__pGwpp"}},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(4),i=n.n(a),s=(n(10),n(2)),o=(n(11),n(0)),u=function(e){var t=e.title,n=e.children;return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:t}),n]})},d=function(e){var t=e.message;return Object(o.jsx)("p",{children:t})},b=function(e){var t=e.good,n=e.neutral,c=e.bad,r=e.total,a=e.positivePercentage;return Object(o.jsx)("div",{children:r?Object(o.jsxs)("ul",{children:[Object(o.jsxs)("li",{children:["Good:",t]}),Object(o.jsxs)("li",{children:["Neutral:",n]}),Object(o.jsxs)("li",{children:["Bad:",c]}),Object(o.jsxs)("li",{children:["Total:",r(t,n,c)]}),Object(o.jsxs)("li",{children:["Positive feedback:",a(t,n,c),"%"]})]}):Object(o.jsx)(d,{message:"No feedback given"})})},j=n(5),l=n.n(j),h=function(e){var t=e.grades,n=e.onFeedbackValue;return Object(o.jsx)("div",{className:"btn",children:t.map((function(e){return Object(o.jsx)("button",{type:"button",value:e,onClick:n,className:l.a.feedbackBtn,children:e},e)}))})};function O(){var e=Object(c.useState)(0),t=Object(s.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(0),i=Object(s.a)(a,2),d=i[0],j=i[1],l=Object(c.useState)(0),O=Object(s.a)(l,2),f=O[0],x=O[1],v=function(e,t,n){return e+t+n};return Object(o.jsxs)("div",{children:[Object(o.jsx)(u,{title:"Please leave feedback",children:Object(o.jsx)(h,{grades:["good","neutral","bad"],onFeedbackValue:function(e){switch(e.target.value){case"good":return r((function(e){return e+1}));case"neutral":return j((function(e){return e+1}));case"bad":return x((function(e){return e+1}));default:return}}})}),Object(o.jsx)(u,{title:"Statistics",children:Object(o.jsx)(b,{good:n,neutral:d,bad:f,total:v,positivePercentage:function(e,t,n){return v(e,t,n)?Math.round(100*e/v(e,t,n)):0}})})]})}i.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(O,{})}),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.ced41e28.chunk.js.map