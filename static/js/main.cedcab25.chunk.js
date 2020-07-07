(this.webpackJsonpweatcomp=this.webpackJsonpweatcomp||[]).push([[0],{232:function(e,t,a){},233:function(e,t,a){},234:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(30),o=a.n(c),i=a(32),l=a(8),m=a(9),u=a(11),s=a(10),p=a(12),d=a(4),h=a(20),f=a.n(h),b=a(31),y=a(21),E=a.n(y),v=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={city:{name:"",state:"",temp:0,tfeel:0,wicon:""}},a.handleClick=Object(b.a)(f.a.mark((function e(){var t,n,r,c,o,i,l;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.getElementById("cityName").value,n=document.getElementById("stateName").value,n=E.a.sanitizeStateName(n),r=E.a.getStateCodeByStateName(n),"https://api.openweathermap.org/","data/2.5/weather/?q=",c="".concat(t,",").concat(r,",us&appid=011216192ce543ec5ba1b7afed585afa"),"&units=imperial",o="https://api.openweathermap.org/data/2.5/weather/?q="+c+"&units=imperial",i="https://openweathermap.org/img/wn/",e.next=12,fetch(o).then((function(e){return e.json()}));case 12:if("404"!==(l=e.sent).cod){e.next=18;break}return alert("Error: "+l.message),document.getElementById("stateName").value="",document.getElementById("cityName").value="",e.abrupt("return",null);case 18:a.setState({city:{name:l.name,state:r,temp:l.main.temp,tfeel:l.main.feels_like,wicon:i+l.weather[0].icon+"@2x.png"}}),a.props.addLocation(a.state),document.getElementById("stateName").value="",document.getElementById("cityName").value="";case 22:case"end":return e.stop()}}),e)}))),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(d.Form,{p:"4"},r.a.createElement(d.Form.Group,null,r.a.createElement("label",{htmlFor:"cityName"},"City Name"),r.a.createElement(d.Form.Input,{type:"text",id:"cityName",placeholder:"Enter city name"})),r.a.createElement(d.Form.Group,null,r.a.createElement("label",{htmlFor:"stateName"},"State"),r.a.createElement(d.Form.Input,{type:"text",id:"stateName",placeholder:"Enter state name"})),r.a.createElement(d.Button,{primary:!0,preventDefault:!0,onClick:this.handleClick},"Submit"))}}]),t}(n.Component),g=(a(232),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){if(0===this.props.locationData.length)return null;var e=this.props,t=e.locationData,a=e.removeLocation;return r.a.createElement(d.Container,{mt:"3",bg:"light",rounded:!0},r.a.createElement(j,{locationData:t,removeLocation:a}))}}]),t}(n.Component)),j=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(e){a.props.removeLocation(e)},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;if(!this.props)return null;var t=this.props.locationData.map((function(t,a){return r.a.createElement(d.Col,{col:"2",mt:"4",text:"center",key:a},r.a.createElement("div",{key:a},r.a.createElement("p",{className:"font-weight-bold"},t.city.name,", ",t.city.state," "),r.a.createElement(d.Figure,null,r.a.createElement(d.Figure.Image,{src:t.city.wicon})),r.a.createElement("br",null),"Temp: ",t.city.temp,r.a.createElement("br",null),"Feels: ",t.city.tfeel),r.a.createElement(d.Button,{secondary:!0,preventDefault:!0,text:"center",onClick:function(){return e.handleClick(a)}},"Remove"))}));return r.a.createElement(d.Row,{mx:"4",pb:"4",justifyContent:"between"},t)}}]),t}(n.Component),O=g,w=(a(233),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={locations:[]},a.addLocation=function(e){a.setState({locations:[].concat(Object(i.a)(a.state.locations),[e])})},a.removeLocation=function(e){var t=a.state.locations,n=t.filter((function(a){return t.indexOf(a)!==e}));a.setState({locations:n})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(d.Container,{p:"4"},r.a.createElement(d.Container,{p:"4",bg:"light",rounded:!0,mb:"3"},r.a.createElement("h2",null,"Weat",r.a.createElement("span",{id:"logoComp"},"Comp"))),r.a.createElement(d.Container,{bg:"light",rounded:!0},r.a.createElement(v,{addLocation:this.addLocation})),r.a.createElement(O,{locationData:this.state.locations,removeLocation:this.removeLocation}))}}]),t}(n.Component));o.a.render(r.a.createElement(w,null),document.getElementById("root"))},33:function(e,t,a){e.exports=a(234)}},[[33,1,2]]]);
//# sourceMappingURL=main.cedcab25.chunk.js.map