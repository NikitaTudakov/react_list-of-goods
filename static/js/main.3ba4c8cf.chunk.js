(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n.n(a),r=n(6),i=n.n(r),o=n(1),c=n(2),l=n(4),u=n(3),b=(n(13),n(7)),m=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={isReversed:!1,sortBy:""},t.reverse=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.reset=function(){t.setState({isReversed:!1,sortBy:""})},t.sortByName=function(){t.setState({sortBy:"Alphabet"})},t.sortByLength=function(){t.setState({sortBy:"Length"})},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.state,e=t.isReversed,n=t.sortBy,a=this.props.goods,r=Object(b.a)(a);return r.sort((function(t,e){switch(n){case"Alphabet":return t.localeCompare(e);case"Length":return t.length-e.length;default:return 0}})),e&&r.reverse(),s.a.createElement(s.a.Fragment,null,s.a.createElement("button",{className:"btn btn_list",onClick:this.reverse},"Reverse"),s.a.createElement("button",{className:"btn btn_list",onClick:this.sortByName},"Sort by name"),s.a.createElement("button",{className:"btn btn_list",onClick:this.reset},"Reset"),s.a.createElement("button",{className:"btn btn_list",onClick:this.sortByLength},"Sort by length"),s.a.createElement("ul",{className:"list"},r.map((function(t){return s.a.createElement("li",{className:"list__item",key:t},t)}))))}}]),n}(s.a.Component),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],f=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={isVisible:!0},t.start=function(){setTimeout((function(){t.setState((function(t){return{isVisible:!t.isVisible}}))}),500)},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.state.isVisible;return s.a.createElement("div",{className:"App"},t?s.a.createElement("button",{type:"button",className:"btn btn_main",onClick:this.start},"Start"):s.a.createElement(m,{goods:h}))}}]),n}(s.a.Component);i.a.render(s.a.createElement(f,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.3ba4c8cf.chunk.js.map