(window["webpackJsonpconsume-api-react"]=window["webpackJsonpconsume-api-react"]||[]).push([[0],{12:function(e,t,s){e.exports=s(18)},18:function(e,t,s){"use strict";s.r(t);var a=s(0),r=s.n(a),n=s(11),l=s.n(n),i=s(6),d=s.n(i),o=s(8),f=s(7),c=s(2),u=s(3),p=s(1),h=s(5),m=s(4),b=s(9),O=function(e){Object(h.a)(s,e);var t=Object(m.a)(s);function s(e){var a;return Object(c.a)(this,s),(a=t.call(this,e)).state={value:a.props.updates[a.props.index]},a.handleSubmit=a.handleSubmit.bind(Object(p.a)(a)),a.handleChange=a.handleChange.bind(Object(p.a)(a)),a.replaceUndefWithEmptyString=a.replaceUndefWithEmptyString.bind(Object(p.a)(a)),a}return Object(u.a)(s,[{key:"handleSubmit",value:function(){var e=Object(o.a)(d.a.mark((function e(t){var s,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"1XzScy_hXVg7hVScZ_g6RBxq-ubkyvt601zD88w1IOo4",s=this.props.column+this.props.row,a="https://docs.google.com/spreadsheets/d/1XzScy_hXVg7hVScZ_g6RBxq-ubkyvt601zD88w1IOo4/edit#gid="+this.props.gid+"&range="+s,window.open(a,"_blank","scrollbars=1"),t.preventDefault();case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){console.log(this.state.value),this.setState({value:e.target.value})}},{key:"replaceUndefWithEmptyString",value:function(e){return console.log(e),"undefined"==typeof e?"":e}},{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("p",null,r.a.createElement("b",null,this.props.formText,":"),r.a.createElement("textarea",{disabled:!0,rows:"2",style:{width:"90%"},value:this.state.value,defaultValue:this.props.updates[this.props.index],onChange:this.handleChange,id:"updates"}),r.a.createElement("input",{type:"submit",value:"edit on spreadsheet"})))}}]),s}(r.a.Component),N=function(e){Object(h.a)(s,e);var t=Object(m.a)(s);function s(e){var a;return Object(c.a)(this,s),(a=t.call(this,e)).getRowNumber=a.getRowNumber.bind(Object(p.a)(a)),a}return Object(u.a)(s,[{key:"getRowNumber",value:function(e,t,s,a,r,n,l,i){for(var d="",o="",f="",c="",u=0;u<n.length;u++){if("undefined"!=typeof r[u]&&(d=r[u].toString()),"undefined"!=typeof n[u]&&(o=n[u].toString()),"undefined"!=typeof l[u]&&(f=l[u].toString()),"undefined"!=typeof i[u]&&(c=i[u].toString()),d.includes(e)&&o.includes(t)&&f.includes(s)&&c.includes(a))return u+4}}},{key:"render",value:function(){for(var e=this,t=[],s=[],a=[],n=0,l=0,i=0;i<this.props.datesNeeds.length;i++){var d=this.props.statusNeeds[i],o="";d&&(o=d.toString()),o.includes("Partial")&&n++,o.includes("Fulfilled")&&l++}if(this.props.targetLabelNeeds)for(i=0;i<this.props.labelsNeeds.length;i++){var f=this.props.labelsNeeds[i].toString().toLowerCase(),c=this.props.detailsNeeds[i].toString().toLowerCase(),u=this.props.namesNeeds[i].toString().toLowerCase(),p="";this.props.updateNeeds[i]&&(p=this.props.updateNeeds[i].toString().toLowerCase());var h="";this.props.assistedBy[i]&&(h=this.props.assistedBy[i].toString().toLowerCase()),(f.includes(this.props.targetLabelNeeds.toLowerCase())||c.includes(this.props.targetLabelNeeds.toLowerCase())||u.includes(this.props.targetLabelNeeds.toLowerCase())||p.includes(this.props.targetLabelNeeds)||h.includes(this.props.targetLabelNeeds))&&t.push(i)}else t=Object(b.a)(Array(this.props.datesNeeds.length).keys());if(this.props.newestFirstNeeds&&t.reverse(),this.props.hideFulfilledNeeds){for(var m=0;m<t.length;m++){var N=this.props.statusNeeds[t[m]];o="";N&&(o=N.toString()),o.includes("Partial")&&a.push(m),o.includes("Fulfilled")||s.push(m)}t=s.map((function(e){return t[e]}))}return r.a.createElement("div",{class:"container-needs"},r.a.createElement("br",null),r.a.createElement("center",null,r.a.createElement("h2",null,"needs")),r.a.createElement("center",null,"fulfilled: ",l,", partial: ",n,", total: ",this.props.datesNeeds.length),r.a.createElement("br",null),t.map((function(t){return r.a.createElement("div",{class:"card"},r.a.createElement("div",{class:"card-header"},e.props.datesNeeds[t],", needed by [",e.props.byWhen[t],"], edited [",e.props.editsNeeds[t],"], status [",e.props.statusNeeds[t],"]"),r.a.createElement("div",{class:"card-body"},r.a.createElement("h5",{class:"card-title"},t+1,". ",e.props.namesNeeds[t]),r.a.createElement("h6",{class:"card-subtitle mb-2 text-muted"},"location: ",e.props.locationsNeeds[t]),r.a.createElement("h6",{class:"card-subtitle mb-2 text-muted"},"labels: ",e.props.labelsNeeds[t]),r.a.createElement("p",{class:"card-text"},e.props.contactsNeeds[t]),r.a.createElement("p",{class:"card-text"},e.props.detailsNeeds[t]),r.a.createElement(O,{index:t,updates:e.props.updateNeeds,formText:"updates",sheetName:"Needs",column:"M",row:e.getRowNumber(e.props.namesNeeds[t],e.props.datesNeeds[t],e.props.contactsNeeds[t],e.props.detailsNeeds[t],e.props.namesNeeds,e.props.datesNeeds,e.props.contactsNeeds,e.props.detailsNeeds),gid:"1282909433"}),r.a.createElement(O,{index:t,updates:e.props.assistedBy,formText:"assisted by",sheetName:"Needs",column:"L",row:e.getRowNumber(e.props.namesNeeds[t],e.props.datesNeeds[t],e.props.contactsNeeds[t],e.props.detailsNeeds[t],e.props.namesNeeds,e.props.datesNeeds,e.props.contactsNeeds,e.props.detailsNeeds),gid:"1282909433"})))})))}}]),s}(r.a.Component),g=function(e){Object(h.a)(s,e);var t=Object(m.a)(s);function s(e){var a;return Object(c.a)(this,s),(a=t.call(this,e)).getRowNumber=a.getRowNumber.bind(Object(p.a)(a)),a}return Object(u.a)(s,[{key:"getRowNumber",value:function(e,t,s,a,r,n,l,i){for(var d="",o="",f="",c="",u=0;u<n.length;u++){if("undefined"!=typeof r[u]&&(d=r[u].toString()),"undefined"!=typeof n[u]&&(o=n[u].toString()),"undefined"!=typeof l[u]&&(f=l[u].toString()),"undefined"!=typeof i[u]&&(c=i[u].toString()),d.includes(e)&&o.includes(t)&&f.includes(s)&&c.includes(a))return u+4}}},{key:"render",value:function(){for(var e=this,t=[],s=[],a=[],n=0,l=0,i=0;i<this.props.datesOffers.length;i++){var d=this.props.statusOffers[i],o="";d&&(o=d.toString()),o.includes("Partial")&&n++,o.includes("Fulfilled")&&l++}if(this.props.targetLabelOffers)for(i=0;i<this.props.labelsOffers.length;i++){var f=this.props.labelsOffers[i].toString(),c=this.props.detailsOffers[i].toString(),u=this.props.namesOffers[i].toString();(f.toLowerCase().includes(this.props.targetLabelOffers.toLowerCase())||c.toLowerCase().includes(this.props.targetLabelOffers.toLowerCase())||u.toLowerCase().includes(this.props.targetLabelOffers.toLowerCase()))&&t.push(i)}else t=Object(b.a)(Array(this.props.datesOffers.length).keys());if(this.props.newestFirstOffers&&t.reverse(),this.props.hideFulfilledOffers){for(var p=0;p<t.length;p++){var h=this.props.statusOffers[t[p]];o="";h&&(o=h.toString()),o.includes("Partial")&&a.push(p),o.includes("Fulfilled")||s.push(p)}t=s.map((function(e){return t[e]}))}return r.a.createElement("div",{class:"container-offers"},r.a.createElement("br",null),r.a.createElement("center",null,r.a.createElement("h2",null,"offers")),r.a.createElement("center",null,"fulfilled: ",l,", partial: ",n,", total: ",this.props.datesOffers.length),r.a.createElement("br",null),t.map((function(t){return r.a.createElement("div",{class:"card"},r.a.createElement("div",{class:"card-header"},e.props.datesOffers[t],", until [",e.props.untilWhen[t],"], edited [",e.props.editsOffers[t],"], status [",e.props.statusOffers[t],"] "),r.a.createElement("div",{class:"card-body"},r.a.createElement("h5",{class:"card-title"},t+1,". ",e.props.namesOffers[t]),r.a.createElement("h6",{class:"card-subtitle mb-2 text-muted"},"location: ",e.props.locationsOffers[t]),r.a.createElement("h6",{class:"card-subtitle mb-2 text-muted"},"labels: ",e.props.labelsOffers[t]),r.a.createElement("p",{class:"card-text"},e.props.contactsOffers[t]),r.a.createElement("p",{class:"card-text"},e.props.detailsOffers[t]),r.a.createElement(O,{index:t,updates:e.props.updateOffers,gid:"1773210002",formText:"updates",sheetName:"Offers",column:"L",row:e.getRowNumber(e.props.namesOffers[t],e.props.datesOffers[t],e.props.contactsOffers[t],e.props.detailsOffers[t],e.props.namesOffers,e.props.datesOffers,e.props.contactsOffers,e.props.detailsOffers)})))})))}}]),s}(r.a.Component),v=function(e){Object(h.a)(s,e);var t=Object(m.a)(s);function s(e){var a;return Object(c.a)(this,s),(a=t.call(this,e)).state={datesNeeds:[],byWhen:[],editsNeeds:[],namesNeeds:[],locationsNeeds:[],contactsNeeds:[],detailsNeeds:[],labelsNeeds:[],updateNeeds:[],statusNeeds:[],assistedBy:[],datesOffers:[],untilWhen:[],editsOffers:[],namesOffers:[],locationsOffers:[],contactsOffers:[],detailsOffers:[],labelsOffers:[],updateOffers:[],statusOffers:[],targetLabelNeeds:"",targetLabelOffers:"",hideFulfilledNeeds:!0,hideFulfilledOffers:!0,newestFirstNeeds:!0,newestFirstOffers:!0},a.handleFilterNeeds=a.handleFilterNeeds.bind(Object(p.a)(a)),a.handleFilterOffers=a.handleFilterOffers.bind(Object(p.a)(a)),a.handleNewestNeeds=a.handleNewestNeeds.bind(Object(p.a)(a)),a.handleNewestOffers=a.handleNewestOffers.bind(Object(p.a)(a)),a.handleFulfilledNeeds=a.handleFulfilledNeeds.bind(Object(p.a)(a)),a.handleFulfilledOffers=a.handleFulfilledOffers.bind(Object(p.a)(a)),a}return Object(u.a)(s,[{key:"handleFilterNeeds",value:function(e){this.setState({targetLabelNeeds:e.target.value})}},{key:"handleFilterOffers",value:function(e){this.setState({targetLabelOffers:e.target.value})}},{key:"handleNewestNeeds",value:function(e){var t=e.target,s="newestFirstNeeds"===t.name?t.checked:t.value,a=t.name;this.setState(Object(f.a)({},a,s))}},{key:"handleNewestOffers",value:function(e){var t=e.target,s="newestFirstOffers"===t.name?t.checked:t.value,a=t.name;this.setState(Object(f.a)({},a,s))}},{key:"handleFulfilledNeeds",value:function(e){var t=e.target,s="hideFulfilledNeeds"===t.name?t.checked:t.value,a=t.name;this.setState(Object(f.a)({},a,s))}},{key:"handleFulfilledOffers",value:function(e){var t=e.target,s="hideFulfilledOffers"===t.name?t.checked:t.value,a=t.name;this.setState(Object(f.a)({},a,s))}},{key:"componentDidMount",value:function(){var e=Object(o.a)(d.a.mark((function e(){var t,s,a,r,n,l,i,o,f,c,u,p,h,m,b,O,N,g,v,w,E,y,F;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t="1XzScy_hXVg7hVScZ_g6RBxq-ubkyvt601zD88w1IOo4",s="AIzaSyAifplI-xEZ993f7tup1u2OHkNonXmZV6o",a={method:"GET",mode:"cors"},r=["datesNeeds","byWhen","editsNeeds","namesNeeds","locationsNeeds","contactsNeeds","detailsNeeds","labelsNeeds","statusNeeds","assistedBy","updateNeeds"],n="4",l="200",i=["A","G","K","B","H","I","F","E","J","L","M"],o=0;case 8:if(!(o<r.length)){e.next=25;break}return f=i[o]+n+":"+i[o]+l,c="https://sheets.googleapis.com/v4/spreadsheets/"+t+"/values/Needs!"+f+"?key="+s,e.next=13,fetch(c,a);case 13:return u=e.sent,e.next=16,u.json();case 16:p=e.sent,h=r[o],m=p.values,(b={})[h]=m,this.setState(b);case 22:o++,e.next=8;break;case 25:O=["datesOffers","untilWhen","editsOffers","namesOffers","locationsOffers","contactsOffers","detailsOffers","labelsOffers","statusOffers","updateOffers"],N="4",g="200",v=["A","G","K","B","H","I","F","E","J","L"],o=0;case 30:if(!(o<O.length)){e.next=47;break}return w=v[o]+N+":"+v[o]+g,E="https://sheets.googleapis.com/v4/spreadsheets/"+t+"/values/Offers!"+w+"?key="+s,e.next=35,fetch(E,a);case 35:return y=e.sent,e.next=38,y.json();case 38:F=e.sent,h=O[o],m=F.values,(b={})[h]=m,this.setState(b);case 44:o++,e.next=30;break;case 47:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{width:"45%",float:"left",paddingLeft:"5%"}},r.a.createElement("form",null,r.a.createElement("label",null,r.a.createElement("b",null,"filter needs:")),r.a.createElement("input",{type:"text",value:this.state.targetLabelNeeds,onChange:this.handleFilterNeeds}),r.a.createElement("h6",null,'(try "funds", "food", "urgent", etc.)'),r.a.createElement("br",null)),r.a.createElement("input",{type:"checkbox",name:"hideFulfilledNeeds",checked:this.state.hideFulfilledNeeds,onChange:this.handleFulfilledNeeds}),r.a.createElement("label",{for:"hideFulfilledNeeds"}," hide fulfilled needs"),r.a.createElement("br",null),r.a.createElement("input",{type:"checkbox",id:"newestFirstNeeds",name:"newestFirstNeeds",checked:this.state.newestFirstNeeds,value:"newestFirstNeeds",onChange:this.handleNewestNeeds}),r.a.createElement("label",{for:"newestFirstNeeds"}," show newest first"),r.a.createElement("br",null)),r.a.createElement("div",{style:{width:"45%",float:"right",paddingRight:"5%"}},r.a.createElement("form",null,r.a.createElement("label",null,r.a.createElement("b",null,"filter offers: \u200e\u200e\u200e\u200e\u200e\u200e\u200e\u200e")),r.a.createElement("input",{onChange:this.handleFilterOffers}),r.a.createElement("h6",null,'(try "$", "grocery", "labour", etc.)'),r.a.createElement("br",null)),r.a.createElement("input",{type:"checkbox",name:"hideFulfilledOffers",checked:this.state.hideFulfilledOffers,onChange:this.handleFulfilledOffers}),r.a.createElement("label",{for:"hideFulfilledOffers"}," hide fulfilled offers"),r.a.createElement("br",null),r.a.createElement("input",{type:"checkbox",id:"newestFirstOffers",name:"newestFirstOffers",checked:this.state.newestFirstOffers,value:"newestFirstOffers",onChange:this.handleNewestOffers}),r.a.createElement("label",{for:"newestFirstOffers"}," show newest first"),r.a.createElement("br",null)),r.a.createElement(N,{datesNeeds:this.state.datesNeeds,byWhen:this.state.byWhen,editsNeeds:this.state.editsNeeds,namesNeeds:this.state.namesNeeds,locationsNeeds:this.state.locationsNeeds,contactsNeeds:this.state.contactsNeeds,detailsNeeds:this.state.detailsNeeds,labelsNeeds:this.state.labelsNeeds,statusNeeds:this.state.statusNeeds,updateNeeds:this.state.updateNeeds,assistedBy:this.state.assistedBy,targetLabelNeeds:this.state.targetLabelNeeds,hideFulfilledNeeds:this.state.hideFulfilledNeeds,newestFirstNeeds:this.state.newestFirstNeeds}),r.a.createElement(g,{datesOffers:this.state.datesOffers,untilWhen:this.state.untilWhen,editsOffers:this.state.editsOffers,namesOffers:this.state.namesOffers,locationsOffers:this.state.locationsOffers,contactsOffers:this.state.contactsOffers,detailsOffers:this.state.detailsOffers,labelsOffers:this.state.labelsOffers,statusOffers:this.state.statusOffers,updateOffers:this.state.updateOffers,targetLabelOffers:this.state.targetLabelOffers,hideFulfilledOffers:this.state.hideFulfilledOffers,newestFirstOffers:this.state.newestFirstOffers}))}}]),s}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[12,1,2]]]);
//# sourceMappingURL=main.c56a501c.chunk.js.map