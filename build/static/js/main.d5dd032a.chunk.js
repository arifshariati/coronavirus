(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[0],{221:function(e,t,a){e.exports=a(426)},226:function(e,t,a){},228:function(e,t,a){},426:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(54),c=a.n(l),s=(a(226),a(227),a(26)),o=a(27),i=a(28),m=a(29),d=(a(228),a(430)),u=a(431),h=a(181),p=a(436),E=a(435);var g=function(){return r.a.createElement("div",{className:"header"},r.a.createElement(d.a,{fluid:!0},r.a.createElement(u.a,{className:"justify-content-md-center"},r.a.createElement(h.a,{xs:"12",lg:"8"},r.a.createElement(p.a,{expand:"lg"},r.a.createElement(p.a.Brand,{href:"/"},"COVID-19 Cases Visualization "),r.a.createElement(p.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(p.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(E.a,{pullright:!0},r.a.createElement(E.a.Link,{href:"/",alt:"Coronavirus Home Page"},"Home"),r.a.createElement(E.a.Link,{href:"/DataChartOnly",alt:"Coronavirus visual data"},"Data Chart"),r.a.createElement(E.a.Link,{href:"/Data-Table",alt:"Coronavirus Deaths and Recovered Cases"},"Data Table"),r.a.createElement(E.a.Link,{href:"/News",alt:"Coronavirus Latest News"}," ",r.a.createElement("b",null,"BORED ?")," Vist News Gallery"))))))))},f=a(12),y=a.n(f),v=a(21),b=a(13),w=a.n(b),x=a(437),k=a(441),N=a(438),C=a(440),D=a(439),j=a(18),S=a(6),T=(a(423),"#FFD31D"),O="#21BF72",P="#DD2C00",B=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={confirmed:0,recovered:0,deaths:0,total:0,incidents:[],incidentsSorted:[],confirmedSorted:[],recoveredSorted:[],deathsSorted:[],zoom:2,minZoom:2,width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth},e.updateDimensions=function(){var t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;e.setState({width:t})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getData(),window.addEventListener("resize",this.updateDimensions)}},{key:"getData",value:function(){var e=Object(v.a)(y.a.mark((function e(){var t,a,n,r,l,c,s,o;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("https://covid19.mathdro.id/api/confirmed");case 2:return t=e.sent,e.next=5,w.a.get("https://covid19.mathdro.id/api");case 5:a=e.sent,n=t.data.filter((function(e){return null!==e.lat})),r=t.data.filter((function(e){return"US"!==e.countryRegion})),l=r.sort((function(e,t){return t.confirmed-e.confirmed})),c=r.sort((function(e,t){return t.confirmed-e.confirmed})),s=r.sort((function(e,t){return t.recovered-e.recovered})),o=r.sort((function(e,t){return t.deaths-e.deaths})),this.setState({incidents:n,incidentsSorted:l.slice(1,10),confirmedSorted:c.slice(1,10),recoveredSorted:s.slice(1,10),deathsSorted:o.slice(1,10),total:a.data.deaths.value,confirmed:a.data.confirmed.value,recovered:a.data.recovered.value,deaths:a.data.deaths.value});case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.confirmed,a=e.recovered,n=e.deaths,l=e.total,c=e.incidents,s=e.confirmedSorted,o=e.recoveredSorted,i=e.deathsSorted,m=e.zoom,p=e.minZoom,E=e.width;return r.a.createElement("div",{className:"mid"},r.a.createElement(d.a,{fluid:!0},r.a.createElement(u.a,{className:"justify-content-md-center"},r.a.createElement(h.a,{xs:"12",lg:"8"},r.a.createElement(C.a,{className:"shadow",style:{marginBottom:"1rem",padding:"1rem",border:"none"}},r.a.createElement(x.a,{width:E>980?960:E-80,zoom:E<980?1:m,center:[20.505,-.09],minZoom:E<980?1:p},r.a.createElement(k.a,{url:"https://{s}.tile.osm.org/{z}/{x}/{y}.png"}),c.map((function(e,t){return r.a.createElement(N.a,{key:t,center:[e.lat,e.long],readius:20*Math.log(e.deaths/l),fillOpacity:.5,fillColor:"red",stroke:!1})}))))))),r.a.createElement(d.a,{fluid:!0},r.a.createElement(u.a,{className:"justify-content-md-center"},r.a.createElement(h.a,{xs:!0,lg:"8"},r.a.createElement(C.a,{className:"shadow-sm",style:{marginBottom:"0rem",padding:"1rem",border:"none"}},r.a.createElement(u.a,{className:"justify-content-md-center"},r.a.createElement(h.a,null,r.a.createElement(D.a,{className:"shadow",style:{backgroundColor:T}},r.a.createElement("h4",null,r.a.createElement(j.a,{value:t,displayType:"text",thousandSeparator:!0})),r.a.createElement("p",null,r.a.createElement("b",null,"Accomulative"),r.a.createElement("i",null," as of today")))),r.a.createElement(h.a,null,r.a.createElement(D.a,{className:"shadow",style:{backgroundColor:O}},r.a.createElement("h4",null,r.a.createElement(j.a,{value:a,displayType:"text",thousandSeparator:!0})),r.a.createElement("h6",null,r.a.createElement("b",null,Math.round(a/t*100)),r.a.createElement("i",null,"% Recovery")))),r.a.createElement(h.a,null,r.a.createElement(D.a,{className:"shadow",style:{backgroundColor:P,color:"#FFFFFF"}},r.a.createElement("h4",null,r.a.createElement(j.a,{value:n,displayType:"text",thousandSeparator:!0})),r.a.createElement("h6",null,r.a.createElement("b",null,Math.round(n/t*100)),r.a.createElement("i",null,"% Deaths"))))))))),r.a.createElement(d.a,{fluid:!0},r.a.createElement(u.a,{className:"justify-content-md-center"},r.a.createElement(h.a,{xs:!0,lg:"8"},r.a.createElement(C.a,{className:"shadow-sm",style:{marginBottom:"1rem",padding:"1rem",border:"none"}},r.a.createElement("div",{style:{marginTop:"1rem"}},r.a.createElement("h5",{style:{textAlign:"center"}},"Top 10 Counties - Confirmed Cases Data")),r.a.createElement(S.d,{width:E>980?1200:E-80,height:400,data:s,margin:{top:5,right:30,left:20,bottom:5},layout:"vertical",barSize:15},r.a.createElement(S.e,{strokeDasharray:"1 1"}),r.a.createElement(S.h,{type:"number"}),r.a.createElement(S.i,{dataKey:"countryRegion",type:"category"}),r.a.createElement(S.g,null),r.a.createElement(S.f,null),r.a.createElement(S.c,{dataKey:"confirmed",fill:T})))))),r.a.createElement(d.a,{fluid:!0},r.a.createElement(u.a,{className:"justify-content-md-center"},r.a.createElement(h.a,{xs:!0,lg:"8"},r.a.createElement(C.a,{className:"shadow-sm",style:{marginBottom:"1rem",padding:"1rem",border:"none"}},r.a.createElement("div",{style:{marginTop:"1rem"}},r.a.createElement("h5",{style:{textAlign:"center"}},"Top 10 Countries - Recovered Cases Data")),r.a.createElement(S.d,{width:E>980?1200:E-80,height:400,data:o,margin:{top:5,right:30,left:20,bottom:5},layout:"vertical",barSize:15},r.a.createElement(S.e,{strokeDasharray:"1 1"}),r.a.createElement(S.h,{type:"number"}),r.a.createElement(S.i,{dataKey:"countryRegion",type:"category"}),r.a.createElement(S.g,null),r.a.createElement(S.f,null),r.a.createElement(S.c,{dataKey:"recovered",fill:O})))))),r.a.createElement(d.a,{fluid:!0},r.a.createElement(u.a,{className:"justify-content-md-center"},r.a.createElement(h.a,{xs:!0,lg:"8"},r.a.createElement(C.a,{className:"shadow-sm",style:{marginBottom:"1rem",padding:"1rem",border:"none"}},r.a.createElement("div",{style:{marginTop:"1rem"}},r.a.createElement("h5",{style:{textAlign:"center"}},"Top 10 Countries - Death Cases Data")),r.a.createElement(S.d,{width:E>980?1200:E-80,height:400,data:i,margin:{top:5,right:30,left:20,bottom:5},layout:"vertical",barSize:15},r.a.createElement(S.e,{strokeDasharray:"1 1"}),r.a.createElement(S.h,{type:"number"}),r.a.createElement(S.i,{dataKey:"countryRegion",type:"category"}),r.a.createElement(S.g,null),r.a.createElement(S.f,null),r.a.createElement(S.c,{dataKey:"deaths",fill:P,width:1})))))))}}]),a}(n.Component),A=a(35),R=a(434),F=a(432),K=function(e){for(var t=e.dataPerPage,a=e.totalData,n=e.paginate,l=[],c=1;c<=Math.ceil(a/t);c++)l.push(c);return r.a.createElement(E.a,null,r.a.createElement("ul",{className:"pagination justify-content-center"},l.map((function(e){return r.a.createElement("li",{key:e,className:"page-item"},r.a.createElement("a",{onClick:function(){return n(e)},href:"#",className:"page-link"},e))}))))},I="#FFD31D",z="#21BF72",W="#DD2C00",H=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={currentData:[],currentPage:1,dataPerPage:7,selectedCountry:"China",temp:[],countries:[],tableCountries:[],width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth},n.updateDimensions=function(){var e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;n.setState({width:e})},n.getData=n.getData.bind(Object(A.a)(n)),n.getCountry=n.getCountry.bind(Object(A.a)(n)),n.paginate=n.paginate.bind(Object(A.a)(n)),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getCountryByIP(),window.addEventListener("resize",this.updateDimensions)}},{key:"getCountryByIP",value:function(){var e=Object(v.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("https://ipapi.co/json");case 2:t=e.sent,this.setState({selectedCountry:t.data.country_name}),this.getData();case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getData",value:function(){var e=Object(v.a)(y.a.mark((function e(){var t,a,n,r,l;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("https://pomber.github.io/covid19/timeseries.json");case 2:t=e.sent,a=this.state.selectedCountry,(n=t.data[a].slice(0)).sort((function(e,t){return t.confirmed-e.confirmed})),this.setState({countries:t.data[a],tableCountries:n,temp:Object.keys(t.data)}),r=this.state.currentPage*this.state.dataPerPage,l=r-this.state.dataPerPage,this.setState({currentData:this.state.tableCountries.slice(l,r)});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getCountry",value:function(){var e=Object(v.a)(y.a.mark((function e(t){var a,n,r,l,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.persist(),e.next=3,w.a.get("https://pomber.github.io/covid19/timeseries.json");case 3:a=e.sent,n=t.target.value,(r=a.data[n].slice(0)).sort((function(e,t){return t.confirmed-e.confirmed})),this.setState({selectedCountry:n,countries:a.data[n],tableCountries:r}),l=this.state.currentPage*this.state.dataPerPage,c=l-this.state.dataPerPage,this.setState({currentData:this.state.tableCountries.slice(c,l)});case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updatePageNumber",value:function(){var e=Object(v.a)(y.a.mark((function e(){var t,a,n,r,l;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("https://pomber.github.io/covid19/timeseries.json");case 2:t=e.sent,a=this.state.selectedCountry,(n=t.data[a].slice(0)).sort((function(e,t){return t.confirmed-e.confirmed})),this.setState({selectedCountry:a,countries:t.data[a],tableCountries:n}),r=this.state.currentPage*this.state.dataPerPage,l=r-this.state.dataPerPage,this.setState({currentData:this.state.tableCountries.slice(l,r)});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"paginate",value:function(e){this.setState({currentPage:e}),this.updatePageNumber()}},{key:"render",value:function(){var e=this.state,t=e.currentData,a=e.dataPerPage,n=e.selectedCountry,l=e.temp,c=e.countries,s=e.tableCountries,o=e.width;return r.a.createElement("div",{className:"mid"},r.a.createElement(d.a,{fluid:!0},r.a.createElement(u.a,{className:"justify-content-md-center"},r.a.createElement(h.a,{xs:"12",lg:"8"},r.a.createElement(C.a,{className:"shadow-sm",style:{marginBottom:"1rem",padding:"1rem",border:"none"}},r.a.createElement(R.a.Control,{as:"select",size:"sm",onChange:this.getCountry,custom:!0},r.a.createElement("option",null,n),l.map((function(e,t){return r.a.createElement("option",{key:t},e)}))))))),r.a.createElement(d.a,{fluid:!0},r.a.createElement(u.a,{className:"justify-content-md-center"},r.a.createElement(h.a,{xs:!0,lg:"8"},r.a.createElement(C.a,{className:"shadow-sm",style:{border:"none"}},r.a.createElement("div",{style:{marginTop:"1rem"}},r.a.createElement("h5",{style:{textAlign:"center"}},n,"'s Data")),r.a.createElement(S.b,{width:o>980?1200:o-80,height:300,data:c,margin:{top:20,right:20,left:20,bottom:20}},r.a.createElement(S.e,{strokeDasharray:"1 1"}),r.a.createElement(S.h,{dataKey:"date"}),r.a.createElement(S.i,null),r.a.createElement(S.g,null),r.a.createElement(S.f,null),r.a.createElement(S.a,{type:"monotone",dataKey:"confirmed",dot:!1,stroke:I,fill:I}),r.a.createElement(S.a,{type:"monotone",dataKey:"recovered",dot:!1,stroke:z,fill:z}),r.a.createElement(S.a,{type:"monotone",dataKey:"deaths",dot:!1,stroke:W,fill:W})))))),r.a.createElement(d.a,{fluid:!0},r.a.createElement(u.a,{className:"justify-content-md-center"},r.a.createElement(h.a,{xs:!0,lg:"8"},r.a.createElement(C.a,{className:"shadow-sm",style:{marginTop:"1rem",padding:"1rem",border:"none"}},r.a.createElement(F.a,{responsive:!0,size:"sm",striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Confirmed"),r.a.createElement("th",null,"Recovered"),r.a.createElement("th",null,"Deaths"))),r.a.createElement("tbody",null,t.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.date),r.a.createElement("td",null,r.a.createElement(j.a,{value:e.confirmed,displayType:"text",thousandSeparator:!0})),r.a.createElement("td",null,r.a.createElement(j.a,{value:e.recovered,displayType:"text",thousandSeparator:!0})),r.a.createElement("td",{style:{fontWeight:"bold"}},r.a.createElement(j.a,{value:e.deaths,displayType:"text",thousandSeparator:!0})))})))),r.a.createElement(K,{dataPerPage:a,totalData:s.length,paginate:this.paginate}))))))}}]),a}(n.Component),L="#FFD31D",_="#21BF72",M="#DD2C00",V=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={currentData:[],currentPage:1,dataPerPage:7,selectedCountry:"China",temp:[],countries:[],tableCountries:[],width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth},n.updateDimensions=function(){var e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;n.setState({width:e})},n.getData=n.getData.bind(Object(A.a)(n)),n.getCountry=n.getCountry.bind(Object(A.a)(n)),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getCountryByIP(),window.addEventListener("resize",this.updateDimensions)}},{key:"getCountryByIP",value:function(){var e=Object(v.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("https://ipapi.co/json");case 2:t=e.sent,this.setState({selectedCountry:t.data.country_name}),this.getData();case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getData",value:function(){var e=Object(v.a)(y.a.mark((function e(){var t,a,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.selectedCountry,e.next=3,w.a.get("https://pomber.github.io/covid19/timeseries.json");case 3:a=e.sent,(n=a.data[t]).sort((function(e,t){return e.confirmed-t.confirmed})),this.setState({countries:a.data[t],tableCountries:n,temp:Object.keys(a.data)});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getCountry",value:function(){var e=Object(v.a)(y.a.mark((function e(t){var a,n,r,l,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.persist(),e.next=3,w.a.get("https://pomber.github.io/covid19/timeseries.json");case 3:a=e.sent,n=t.target.value,(r=a.data[n].slice(0)).sort((function(e,t){return t.confirmed-e.confirmed})),this.setState({selectedCountry:n,countries:a.data[n],tableCountries:r}),l=this.state.currentPage*this.state.dataPerPage,c=l-this.state.dataPerPage,this.setState({currentData:this.state.tableCountries.slice(c,l)});case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.selectedCountry,a=e.temp,n=e.countries,l=e.width;return r.a.createElement("div",{className:"mid"},r.a.createElement(d.a,{fluid:!0},r.a.createElement(u.a,{className:"justify-content-md-center"},r.a.createElement(h.a,{xs:"12",lg:"8"},r.a.createElement(C.a,{className:"shadow-sm",style:{marginBottom:"1rem",padding:"1rem",border:"none"}},r.a.createElement(R.a.Control,{as:"select",size:"sm",onChange:this.getCountry,custom:!0},r.a.createElement("option",null,t),a.map((function(e,t){return r.a.createElement("option",{key:t},e)}))))))),r.a.createElement(d.a,{fluid:!0},r.a.createElement(u.a,{className:"justify-content-md-center"},r.a.createElement(h.a,{xs:!0,lg:"8"},r.a.createElement(C.a,{className:"shadow-sm",style:{border:"none"}},r.a.createElement("div",{style:{marginTop:"1rem"}},r.a.createElement("h5",{style:{textAlign:"center"}},t,"'s Data")),r.a.createElement(S.b,{width:l>980?1200:l-80,height:300,data:n,margin:{top:20,right:20,left:20,bottom:20}},r.a.createElement(S.e,{strokeDasharray:"1 1"}),r.a.createElement(S.h,{dataKey:"date"}),r.a.createElement(S.i,null),r.a.createElement(S.g,null),r.a.createElement(S.f,null),r.a.createElement(S.a,{type:"monotone",dataKey:"confirmed",dot:!1,stroke:L,fill:L}),r.a.createElement(S.a,{type:"monotone",dataKey:"recovered",dot:!1,stroke:_,fill:_}),r.a.createElement(S.a,{type:"monotone",dataKey:"deaths",dot:!1,stroke:M,fill:M})))))),r.a.createElement(d.a,{fluid:!0},r.a.createElement(u.a,{className:"justify-content-md-center"},r.a.createElement(h.a,{xs:!0,lg:"8"},r.a.createElement(C.a,{className:"shadow-sm",style:{border:"none",marginTop:"1rem"}},r.a.createElement(u.a,{className:"justify-content-md-center"},r.a.createElement(h.a,null,r.a.createElement(S.b,{width:l>980?480:l>720?l/2-80:l-80,height:250,data:n,margin:{top:20,right:20,left:20,bottom:20}},r.a.createElement(S.e,{strokeDasharray:"1 1"}),r.a.createElement(S.h,{dataKey:"date"}),r.a.createElement(S.i,null),r.a.createElement(S.g,null),r.a.createElement(S.f,null),r.a.createElement(S.a,{type:"monotone",dataKey:"confirmed",dot:!1,stroke:L,fill:L}))),r.a.createElement(h.a,{style:{textAlign:"right"}},r.a.createElement("div",{style:{marginTop:"2rem",marginRight:"5rem"}},r.a.createElement("p",null,"As of available data"),r.a.createElement("h3",null,r.a.createElement(j.a,{value:n&&n[n.length-1]&&n[n.length-1].confirmed,displayType:"text",thousandSeparator:!0,style:{color:L}})),r.a.createElement("p",null,"Confirmed cases have been Registered")))))))),r.a.createElement(d.a,{fluid:!0},r.a.createElement(u.a,{className:"justify-content-md-center"},r.a.createElement(h.a,{xs:!0,lg:"8"},r.a.createElement(C.a,{className:"shadow-sm",style:{border:"none",marginTop:"1rem"}},r.a.createElement(u.a,{className:"justify-content-md-center"},r.a.createElement(h.a,null,r.a.createElement(S.b,{width:l>980?480:l>720?l/2-80:l-80,height:250,data:n,margin:{top:20,right:20,left:20,bottom:20}},r.a.createElement(S.e,{strokeDasharray:"1 1"}),r.a.createElement(S.h,{dataKey:"date"}),r.a.createElement(S.i,null),r.a.createElement(S.g,null),r.a.createElement(S.f,null),r.a.createElement(S.a,{type:"monotone",dataKey:"recovered",dot:!1,stroke:_,fill:_}))),r.a.createElement(h.a,{style:{textAlign:"right"}},r.a.createElement("div",{style:{marginTop:"2rem",marginRight:"5rem"}},r.a.createElement("p",null,"As of available data"),r.a.createElement("h3",null,r.a.createElement(j.a,{value:n&&n[n.length-1]&&n[n.length-1].deaths,displayType:"text",thousandSeparator:!0,style:{color:_}})),r.a.createElement("p",null,"Recovered cases have been Registered with"),r.a.createElement("h3",null,r.a.createElement(j.a,{value:n&&n[0]&&Math.round(n[n.length-1].recovered/n[n.length-1].confirmed*100),displayType:"text",thousandSeparator:!0})," %"),r.a.createElement("p",null,"Recovery rate")))))))),r.a.createElement(d.a,{fluid:!0},r.a.createElement(u.a,{className:"justify-content-md-center"},r.a.createElement(h.a,{xs:!0,lg:"8"},r.a.createElement(C.a,{className:"shadow-sm",style:{border:"none",marginTop:"1rem"}},r.a.createElement(u.a,{className:"justify-content-md-center"},r.a.createElement(h.a,null,r.a.createElement(S.b,{width:l>980?480:l>720?l/2-80:l-80,height:250,data:n,margin:{top:20,right:20,left:20,bottom:20}},r.a.createElement(S.e,{strokeDasharray:"1 1"}),r.a.createElement(S.h,{dataKey:"date"}),r.a.createElement(S.i,null),r.a.createElement(S.g,null),r.a.createElement(S.f,null),r.a.createElement(S.a,{type:"monotone",dataKey:"deaths",dot:!1,stroke:M,fill:M}))),r.a.createElement(h.a,{style:{textAlign:"right"}},r.a.createElement("div",{style:{marginTop:"2rem",marginRight:"5rem"}},r.a.createElement("p",null,"As of available data"),r.a.createElement("h3",null,r.a.createElement(j.a,{value:n&&n[n.length-1]&&n[n.length-1].deaths,displayType:"text",thousandSeparator:!0,style:{color:M}})),r.a.createElement("p",null,"Death cases have been Registered with"),r.a.createElement("h3",null,r.a.createElement(j.a,{value:n&&n[n.length-1]&&Math.round(n[n.length-1].deaths/n[n.length-1].confirmed*100),displayType:"text",thousandSeparator:!0}),"%"),r.a.createElement("p",null," Death rate")))))))))}}]),a}(n.Component),U=a(433),J=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={trumpNews:[],USHealth:[],technology:[],business:[],entertainment:[],sports:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getNews()}},{key:"getNews",value:function(){var e=Object(v.a)(y.a.mark((function e(){var t,a,n,r,l,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("https://newsapi.org/v2/top-headlines?q=trump&apiKey=1eef6d1799164641972598884245ee39");case 2:return t=e.sent,e.next=5,w.a.get("https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=1eef6d1799164641972598884245ee39");case 5:return a=e.sent,e.next=8,w.a.get("https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=1eef6d1799164641972598884245ee39");case 8:return n=e.sent,e.next=11,w.a.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1eef6d1799164641972598884245ee39");case 11:return r=e.sent,e.next=14,w.a.get("https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=1eef6d1799164641972598884245ee39");case 14:return l=e.sent,e.next=17,w.a.get("https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=1eef6d1799164641972598884245ee39");case 17:c=e.sent,console.log(t.data.articles),this.setState({trumpNews:t.data.articles.slice(0,3),USHealth:a.data.articles.slice(0,6),technology:n.data.articles.slice(0,3),business:r.data.articles.slice(0,3),entertainment:l.data.articles.slice(0,3),sports:c.data.articles.slice(0,3)});case 20:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.trumpNews,a=e.USHealth,n=e.technology,l=e.business,c=e.entertainment,s=e.sports;return r.a.createElement("div",{className:"mid"},r.a.createElement(d.a,{fluid:!0},r.a.createElement(u.a,{className:"justify-content-md-center"},r.a.createElement(h.a,{xs:!0,lg:"8",style:{marginBottom:"1rem",marginTop:"1rem",padding:"0rem"}},r.a.createElement("h3",null,"Latest News on Health"),r.a.createElement("span",{className:"fade-line"}))),r.a.createElement(u.a,{className:"justify-content-md-center"},r.a.createElement(h.a,{xs:"12",lg:"8"},r.a.createElement(U.a,null,a.map((function(e,t){return r.a.createElement(C.a,{key:t,className:"shadow-sm",style:{marginBottom:"1rem",padding:"0rem",border:"none"}},r.a.createElement(C.a.Img,{variant:"top",style:{minHeight:"10rem"},src:e.urlToImage}),r.a.createElement("small",{className:"text-muted"},"published at ",e.publishedAt),r.a.createElement(C.a.Body,null,r.a.createElement(C.a.Title,{style:{fontSize:"medium",textAlign:"left"}},e.title),r.a.createElement(C.a.Text,{style:{overflow:"hidden",textOverflow:"ellipsis",maxHeight:"4rem",whiteSpace:"pre-wrap"}},e.description)),r.a.createElement(C.a.Footer,null,r.a.createElement(C.a.Link,{href:e.url,target:"_blank"},r.a.createElement("b",null,"Read Fill Story on")," ",e.source.name)))}))))),r.a.createElement(u.a,{className:"justify-content-md-center"},r.a.createElement(h.a,{xs:!0,lg:"8",style:{marginBottom:"1rem",marginTop:"1rem",padding:"0rem"}},r.a.createElement("h3",null,"What Donuld Trump Says ?"),r.a.createElement("span",{className:"fade-line"}))),r.a.createElement(u.a,{className:"justify-content-md-center"},r.a.createElement(h.a,{xs:"12",lg:"8"},r.a.createElement(U.a,null,t.map((function(e,t){return r.a.createElement(C.a,{key:t,className:"shadow-sm",style:{marginBottom:"1rem",padding:"0rem",border:"none"}},r.a.createElement(C.a.Img,{variant:"top",style:{minHeight:"10rem"},src:e.urlToImage}),r.a.createElement("small",{className:"text-muted"},"published at ",e.publishedAt),r.a.createElement(C.a.Body,null,r.a.createElement(C.a.Title,{style:{fontSize:"medium",textAlign:"left"}},e.title),r.a.createElement(C.a.Text,{style:{overflow:"hidden",textOverflow:"ellipsis",maxHeight:"4rem",whiteSpace:"pre-wrap"}},e.description)),r.a.createElement(C.a.Footer,null,r.a.createElement(C.a.Link,{href:e.url,target:"_blank"},r.a.createElement("b",null,"Read Fill Story on")," ",e.source.name)))}))))),r.a.createElement(u.a,{className:"justify-content-md-center"},r.a.createElement(h.a,{xs:!0,lg:"8",style:{marginBottom:"1rem",marginTop:"1rem",padding:"0rem"}},r.a.createElement("h3",null,"An Inside to Technology"),r.a.createElement("span",{className:"fade-line"}))),r.a.createElement(u.a,{className:"justify-content-md-center"},r.a.createElement(h.a,{xs:"12",lg:"8"},r.a.createElement(U.a,null,n.map((function(e,t){return r.a.createElement(C.a,{key:t,className:"shadow-sm",style:{marginBottom:"1rem",padding:"0rem",border:"none"}},r.a.createElement(C.a.Img,{variant:"top",style:{minHeight:"10rem"},src:e.urlToImage}),r.a.createElement("small",{className:"text-muted"},"published at ",e.publishedAt),r.a.createElement(C.a.Body,null,r.a.createElement(C.a.Title,{style:{fontSize:"medium",textAlign:"left"}},e.title),r.a.createElement(C.a.Text,{style:{overflow:"hidden",textOverflow:"ellipsis",maxHeight:"4rem",whiteSpace:"pre-wrap"}},e.description)),r.a.createElement(C.a.Footer,null,r.a.createElement(C.a.Link,{href:e.url,target:"_blank"},r.a.createElement("b",null,"Read Fill Story on")," ",e.source.name)))}))))),r.a.createElement(u.a,{className:"justify-content-md-center"},r.a.createElement(h.a,{xs:!0,lg:"8",style:{marginBottom:"1rem",marginTop:"1rem",padding:"0rem"}},r.a.createElement("h3",null,"Business Insider"),r.a.createElement("span",{className:"fade-line"}))),r.a.createElement(u.a,{className:"justify-content-md-center"},r.a.createElement(h.a,{xs:"12",lg:"8"},r.a.createElement(U.a,null,l.map((function(e,t){return r.a.createElement(C.a,{key:t,className:"shadow-sm",style:{marginBottom:"1rem",padding:"0rem",border:"none"}},r.a.createElement(C.a.Img,{variant:"top",style:{minHeight:"10rem"},src:e.urlToImage}),r.a.createElement("small",{className:"text-muted"},"published at ",e.publishedAt),r.a.createElement(C.a.Body,null,r.a.createElement(C.a.Title,{style:{fontSize:"medium",textAlign:"left"}},e.title),r.a.createElement(C.a.Text,{style:{overflow:"hidden",textOverflow:"ellipsis",maxHeight:"4rem",whiteSpace:"pre-wrap"}},e.description)),r.a.createElement(C.a.Footer,null,r.a.createElement(C.a.Link,{href:e.url,target:"_blank"},r.a.createElement("b",null,"Read Fill Story on")," ",e.source.name)))}))))),r.a.createElement(u.a,{className:"justify-content-md-center"},r.a.createElement(h.a,{xs:!0,lg:"8",style:{marginBottom:"1rem",marginTop:"1rem",padding:"0rem"}},r.a.createElement("h3",null,"Entertainment Hall"),r.a.createElement("span",{className:"fade-line"}))),r.a.createElement(u.a,{className:"justify-content-md-center"},r.a.createElement(h.a,{xs:"12",lg:"8"},r.a.createElement(U.a,null,c.map((function(e,t){return r.a.createElement(C.a,{key:t,className:"shadow-sm",style:{marginBottom:"1rem",padding:"0rem",border:"none"}},r.a.createElement(C.a.Img,{variant:"top",style:{minHeight:"10rem"},src:e.urlToImage}),r.a.createElement("small",{className:"text-muted"},"published at ",e.publishedAt),r.a.createElement(C.a.Body,null,r.a.createElement(C.a.Title,{style:{fontSize:"medium",textAlign:"left"}},e.title),r.a.createElement(C.a.Text,{style:{overflow:"hidden",textOverflow:"ellipsis",maxHeight:"4rem",whiteSpace:"pre-wrap"}},e.description)),r.a.createElement(C.a.Footer,null,r.a.createElement(C.a.Link,{href:e.url,target:"_blank"},r.a.createElement("b",null,"Read Fill Story on")," ",e.source.name)))}))))),r.a.createElement(u.a,{className:"justify-content-md-center"},r.a.createElement(h.a,{xs:!0,lg:"8",style:{marginBottom:"1rem",marginTop:"1rem",padding:"0rem"}},r.a.createElement("h3",null,"Sports Universe"),r.a.createElement("span",{className:"fade-line"}))),r.a.createElement(u.a,{className:"justify-content-md-center"},r.a.createElement(h.a,{xs:"12",lg:"8"},r.a.createElement(U.a,null,s.map((function(e,t){return r.a.createElement(C.a,{key:t,className:"shadow-sm",style:{marginBottom:"1rem",padding:"0rem",border:"none"}},r.a.createElement(C.a.Img,{variant:"top",style:{minHeight:"10rem"},src:e.urlToImage}),r.a.createElement("small",{className:"text-muted"},"published at ",e.publishedAt),r.a.createElement(C.a.Body,null,r.a.createElement(C.a.Title,{style:{fontSize:"medium",textAlign:"left"}},e.title),r.a.createElement(C.a.Text,{style:{overflow:"hidden",textOverflow:"ellipsis",maxHeight:"4rem",whiteSpace:"pre-wrap"}},e.description)),r.a.createElement(C.a.Footer,null,r.a.createElement(C.a.Link,{href:e.url,target:"_blank"},r.a.createElement("b",null,"Read Fill Story on")," ",e.source.name)))})))))))}}]),a}(n.Component);var Z=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement(d.a,{fluid:!0},r.a.createElement(u.a,{className:"justify-content-md-center"},r.a.createElement(h.a,{xs:"12",lg:"8"},r.a.createElement("p",{style:{fontSize:14,lineHeight:1.2,marginTop:10,marginBottom:24,marginLeft:50,marginRight:50}},"Data, Numbers and Stats provided on this website is pulled from different data sources. This website is merely a mean of providing a general overview and graphical representation of COVID-19 pandemic. Viewers / visitors of this website is advised not to absorb Data, Numbers and Stats as final and do visit other information sources for the sack of your information."),r.a.createElement("p",null,"Data retrieved from ",r.a.createElement("a",{href:"https://github.com/CSSEGISandData/COVID-19",rel:"alternate nooperner noreferre",target:"_blank"},"Johns Hopkins")," via"," ",r.a.createElement("a",{href:"https://github.com/pomber/covid19",rel:"alternate nooperner noreferre",target:"_blank"},"@pomber")," ",r.a.createElement("br",null)),r.a.createElement("p",null,"Developed with ",r.a.createElement("a",{href:"http://recharts.org/",rel:"alternate nooperner noreferre",target:"_blank"},"Recharts for Responsive Charting"),","," ",r.a.createElement("a",{href:"https://react-bootstrap.github.io/",rel:"alternate nooperner noreferre",target:"_blank"},"React-Bootstrap"),","," ",r.a.createElement("a",{href:"https://react-leaflet.js.org/",rel:"alternate nooperner noreferre",target:"_blank"},"React-Leaflet for Map Data Visualization"),","," ",r.a.createElement("a",{href:"https://reactjs.org",rel:"alternate nooperner noreferre",target:"_blank"},"React")," by"," ",r.a.createElement("a",{href:"https://github.com/arifshariati",rel:"alternate nooperner noreferre",target:"_blank"},"Arif Shariati")),r.a.createElement("p",null,"There is always room for improvement ! ",r.a.createElement("b",null,"if you want to contribute?")," Please do so !"," ",r.a.createElement("a",{href:"https://github.com/eminx/thecurve",rel:"alternate nooperner noreferre",target:"_blank"},"Create an issue")," or"," ",r.a.createElement("a",{href:"mailto:mohammad.arif.fast@hotmail.com"},"send me an email"))))))},G=a(193),q=a(42),$=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(G.a,null,r.a.createElement(g,null),r.a.createElement(q.a,{exact:!0,path:"/",component:B}),r.a.createElement(q.a,{path:"/DataChartOnly",component:V}),r.a.createElement(q.a,{path:"/Data-Table",component:H}),r.a.createElement(q.a,{path:"/News",component:J}),r.a.createElement(Z,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[221,1,2]]]);
//# sourceMappingURL=main.d5dd032a.chunk.js.map