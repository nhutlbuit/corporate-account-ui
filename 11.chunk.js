(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{521:function(e,t,n){"use strict";n.r(t),n.d(t,"Popper",(function(){return O})),n.d(t,"placements",(function(){return U})),n.d(t,"Manager",(function(){return P})),n.d(t,"Reference",(function(){return M}));var r=n(419),o=n.n(r),p=n(103),s=n.n(p),a=n(23),i=n.n(a),c=n(81),d=n.n(c),u=n(24),l=n.n(u),f=n(420),h=n.n(f),m=n(0),v=n(230),y=n(231),w=n.n(y),N=w()(),E=w()(),P=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t=e.call.apply(e,[this].concat(r))||this,l()(i()(t),"referenceNode",void 0),l()(i()(t),"setReferenceNode",(function(e){e&&t.referenceNode!==e&&(t.referenceNode=e,t.forceUpdate())})),t}d()(t,e);var n=t.prototype;return n.componentWillUnmount=function(){this.referenceNode=null},n.render=function(){return m.createElement(N.Provider,{value:this.referenceNode},m.createElement(E.Provider,{value:this.setReferenceNode},this.props.children))},t}(m.Component),b=function(e){return Array.isArray(e)?e[0]:e},g=function(e){if("function"==typeof e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return e.apply(void 0,n)}},I=function(e,t){if("function"==typeof e)return g(e,t);null!=e&&(e.current=t)},S={position:"absolute",top:0,left:0,opacity:0,pointerEvents:"none"},R={},A=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t=e.call.apply(e,[this].concat(r))||this,l()(i()(t),"state",{data:void 0,placement:void 0}),l()(i()(t),"popperInstance",void 0),l()(i()(t),"popperNode",null),l()(i()(t),"arrowNode",null),l()(i()(t),"setPopperNode",(function(e){e&&t.popperNode!==e&&(I(t.props.innerRef,e),t.popperNode=e,t.updatePopperInstance())})),l()(i()(t),"setArrowNode",(function(e){t.arrowNode=e})),l()(i()(t),"updateStateModifier",{enabled:!0,order:900,fn:function(e){var n=e.placement;return t.setState({data:e,placement:n}),e}}),l()(i()(t),"getOptions",(function(){return{placement:t.props.placement,eventsEnabled:t.props.eventsEnabled,positionFixed:t.props.positionFixed,modifiers:s()({},t.props.modifiers,{arrow:s()({},t.props.modifiers&&t.props.modifiers.arrow,{enabled:!!t.arrowNode,element:t.arrowNode}),applyStyle:{enabled:!1},updateStateModifier:t.updateStateModifier})}})),l()(i()(t),"getPopperStyle",(function(){return t.popperNode&&t.state.data?s()({position:t.state.data.offsets.popper.position},t.state.data.styles):S})),l()(i()(t),"getPopperPlacement",(function(){return t.state.data?t.state.placement:void 0})),l()(i()(t),"getArrowStyle",(function(){return t.arrowNode&&t.state.data?t.state.data.arrowStyles:R})),l()(i()(t),"getOutOfBoundariesState",(function(){return t.state.data?t.state.data.hide:void 0})),l()(i()(t),"destroyPopperInstance",(function(){t.popperInstance&&(t.popperInstance.destroy(),t.popperInstance=null)})),l()(i()(t),"updatePopperInstance",(function(){t.destroyPopperInstance();var e=i()(t).popperNode,n=t.props.referenceElement;n&&e&&(t.popperInstance=new v.a(n,e,t.getOptions()))})),l()(i()(t),"scheduleUpdate",(function(){t.popperInstance&&t.popperInstance.scheduleUpdate()})),t}d()(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.placement===e.placement&&this.props.referenceElement===e.referenceElement&&this.props.positionFixed===e.positionFixed&&h()(this.props.modifiers,e.modifiers,{strict:!0})?this.props.eventsEnabled!==e.eventsEnabled&&this.popperInstance&&(this.props.eventsEnabled?this.popperInstance.enableEventListeners():this.popperInstance.disableEventListeners()):this.updatePopperInstance(),t.placement!==this.state.placement&&this.scheduleUpdate()},n.componentWillUnmount=function(){I(this.props.innerRef,null),this.destroyPopperInstance()},n.render=function(){return b(this.props.children)({ref:this.setPopperNode,style:this.getPopperStyle(),placement:this.getPopperPlacement(),outOfBoundaries:this.getOutOfBoundariesState(),scheduleUpdate:this.scheduleUpdate,arrowProps:{ref:this.setArrowNode,style:this.getArrowStyle()}})},t}(m.Component);l()(A,"defaultProps",{placement:"bottom",eventsEnabled:!0,referenceElement:void 0,positionFixed:!1});var U=v.a.placements;function O(e){var t=e.referenceElement,n=o()(e,["referenceElement"]);return m.createElement(N.Consumer,null,(function(e){return m.createElement(A,s()({referenceElement:void 0!==t?t:e},n))}))}var x=n(46),C=n.n(x),F=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t=e.call.apply(e,[this].concat(r))||this,l()(i()(t),"refHandler",(function(e){I(t.props.innerRef,e),g(t.props.setReferenceNode,e)})),t}d()(t,e);var n=t.prototype;return n.componentWillUnmount=function(){I(this.props.innerRef,null)},n.render=function(){return C()(Boolean(this.props.setReferenceNode),"`Reference` should not be used outside of a `Manager` component."),b(this.props.children)({ref:this.refHandler})},t}(m.Component);function M(e){return m.createElement(E.Consumer,null,(function(t){return m.createElement(F,s()({setReferenceNode:t},e))}))}}}]);
//# sourceMappingURL=11.chunk.js.map