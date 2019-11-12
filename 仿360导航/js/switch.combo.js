(function(){function h(e,t){var n=this;n.host=e,c.call(n,t),this.items=u(e,this.tabSelector)||[],this.views=this.views||this.viewSelector&&u(e,this.viewSelector)||[];var r=-1,a=this.items;for(var h=0;h<a.length;h++)if(i(a[h],this.selectedClass)){r=h;break}r>-1&&this.switchTo(r);if(n.autoPlay){var p=0;function d(){clearInterval(p),p=setInterval(function(){e.offsetWidth&&!n.autoPlayPausing&&n.next()},n.autoPlayTime||3e3)}d(),l(e,"mouseenter",function(){clearInterval(p)}),l(e,"mouseleave",d)}this.pageUpSelector&&f(e,this.pageUpSelector,"click",function(e){n.previous(),e.preventDefault()}),this.pageDownSelector&&f(e,this.pageDownSelector,"click",function(e){n.next(),e.preventDefault()});if(this.tabSelector){if(n.supportMouseenter){var v=0;f(e,n.tabSelector,"mouseenter",function(e){var t=this;s(t,n.preselectedClass),n.mouseenterSwitchTime!=null&&(clearTimeout(v),v=setTimeout(function(){n.switchToItem(t)},n.mouseenterSwitchTime|0)),e.preventDefault()}),f(e,n.tabSelector,"mouseleave",function(e){o(this,n.preselectedClass),clearTimeout(v),e.preventDefault()})}var m=this.switchEvents||this.defaultSwitchEvents;f(e,n.tabSelector,String(m),function(e){n.switchToItem(this),e.preventDefault()})}}var e=QW.ArrayH.indexOf,t=QW.ObjectH.mix,n=QW.CustEvent,r=QW.NodeH,i=r.hasClass,s=r.addClass,o=r.removeClass,u=r.query,a=QW.EventTargetH,f=a.delegate,l=a.on,c=function(e){t(this,e||{},!0),this.items=this.items||[],n.createEvents(this,c.EVENTS)};c.EVENTS=["beforeswitch","afterswitch"],t(c.prototype,{selectedIndex:-1,isSwitching:!1,switchTo:function(e){alert("Switch to: "+e)},switchToItem:function(t){var n=e(this.items,t);return this.switchTo(n)},next:function(){var e=(this.selectedIndex+1)%(this.items.length||this.views.length);this.switchTo(e)},previous:function(){var e=this.selectedIndex-1;e<0&&(e=(this.items.length||this.views.length)-1),this.switchTo(e)}}),t(h.prototype,[{tabSelector:".slide-nav li",viewSelector:".slide-content li",pageDownSelector:".slide-pagedown",pageUpSelector:".slide-pageup",selectedClass:"selected",preselectedClass:"preselected",selectedViewClass:"selected",defaultSwitchEvents:["click"],switchTo:function(e){var t=this.selectedIndex,n={fromIndex:t,toIndex:e,fromItem:this.items[t],toItem:this.items[e],fromView:this.views[t],toView:this.views[e]};if(e==t)return;if(!this.fire("beforeswitch",n))return;this.isSwitching=!0,this.selectedIndex=e,this.switchAnim(n)},switchAnim:function(e){function n(){t.switchDone(e)}var t=this;e.fromItem&&o(e.fromItem,this.selectedClass),e.toItem&&s(e.toItem,this.selectedClass);switch(this.animType){case"fade":return e.fromView&&QW.NodeW(e.fromView).animate({opacity:{from:1,to:0}},this.animDur||500,function(){QW.NodeW(e.fromView).removeClass(t.selectedViewClass)},this.animEasing),QW.NodeW(e.toView).addClass(t.selectedViewClass).animate({opacity:{from:0,to:1}},this.animDur||500,n,this.animEasing);case"scroll":if(e.fromView)for(var r=0,i;i=t.views[r++];)QW.NodeH[i==e.fromView||i==e.toView?"show":"hide"](i);var u=e.toView.parentNode,a=4;while(a--){if(u.scrollWidth>1.5*u.offsetWidth)return e.fromView&&(u.scrollLeft=e.fromView.offsetLeft),QW.NodeW(u).animate({scrollLeft:{to:e.toView.offsetLeft}},this.animDur||500,n,this.animEasing);if(u.scrollHeight>1.5*u.offsetHeight)return e.fromView&&(u.scrollTop=e.fromView.offsetTop),QW.NodeW(u).animate({scrollTop:{to:e.toView.offsetTop}},this.animDur||500,n,this.animEasing);u=u.parentNode};default:e.fromView&&o(e.fromView,this.selectedViewClass),e.toView&&s(e.toView,this.selectedViewClass),n()}},switchDone:function(e){this.isSwitching=!1,this.selectedIndex=e.toIndex,this.fire("afterswitch",e)}},c.prototype]),QW.provide({TabView:h,Slide:h})})(),function(){var e=QW.ObjectH.mix,t=QW.NodeH,n=t.g,r=QW.Jss,i=QW.JssTargetH,s=i.getJss;r.addRules({".widget-slide":{tabSelector:".slide-nav li",viewSelector:".slide-content li",pageUpSelector:".slide-pageup",pageDownSelector:".slide-pagedown",autoPlay:!0,supportMouseenter:!0,mouseenterSwitchTime:300}});var o={switchable:function(t,r){t=n(t);var i={},o="tabSelector viewSelector pageUpSelector pageDownSelector selectedClass preselectedClass selectedViewClass autoPlay autoPlayPausing autoPlayTime supportMouseenter mouseenterSwitchTime switchEvents animType animDur switchEvents onbeforeswitch onafterswitch".split(" ");for(var u=0;u<o.length;u++){var a=s(t,o[u]);a!=null&&(i[o[u]]=a)}e(i,r),t.__slide=new QW.Slide(t,i)}};QW.NodeW.pluginHelper(o,"operator"),QW.Dom&&QW.ObjectH.mix(QW.Dom,o),QW.DomU.ready(function(){QW.NodeW("div.widget-slide").switchable()})}();