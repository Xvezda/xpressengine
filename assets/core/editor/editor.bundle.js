!function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=22)}([function(e,t,n){e.exports=n(2)(432)},function(e,t){e.exports=_xe_bundle_common},function(e,t){e.exports=_xe_bundle_vendor},,,function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(0),a=o(s),l=n(8),u=n(23),f=o(u),d=n(11),c=o(d),p=function(){function e(){var t=this;i(this,e),this.toolsSet={},this.editorSet={},this.editorOptionSet={},(0,l.eventify)(this),this.tools={},this.tools.define=function(e){a.default.isFunction(console.warn)&&a.default.isFunction(console.trace)&&(console.warn("DEPRECATED: XEeditor.tools.define() is deprecated. use XEeditor.defineTool"),console.trace()),t.defineTool(e)},this.tools.get=function(e){return a.default.isFunction(console.warn)&&a.default.isFunction(console.trace)&&(console.warn("DEPRECATED: XEeditor.tools.get() is deprecated. use XEeditor.getTool"),console.trace()),t.getTool(e)}}return r(e,[{key:"define",value:function(e){var t=e.editorSettings,n=e.interfaces;if(c.default.isValidEditorOptions(t,n)){var o=new f.default(t,n);this.editorSet[t.name]=o,this.editorOptionSet[t.name]=t}}},{key:"getEditor",value:function(e){return this.editorSet[e]}},{key:"defineTool",value:function(e){c.default.isValidToolsObject(e)&&(this.toolsSet[e.id]=new h(e))}},{key:"getTool",value:function(e){return this.toolsSet[e]}},{key:"attachDomId",value:function(e,t){return(0,a.default)(e).attr("xe-tool-id",t).clone().wrapAll("<div/>").parent().html()}},{key:"getDomSelector",value:function(e){return'[xe-tool-id="'+e+'"]'}}]),e}(),h=function(e){for(var t in e)this[t]=e[t]},v=new p;window.XEeditor=v,t.default=v},,,function(e,t,n){e.exports=n(1)(54)},,,function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(5),s=function(e){return e&&e.__esModule?e:{default:e}}(r),a={editorSettings:["name"],interfaces:["initialize","addContents","getContents","setContents","getContentDom"],tools:{property:["id","events"],events:["iconClick","elementDoubleClick"]}},l=function(){function e(){o(this,e)}return i(e,null,[{key:"isValidBeforeCreateInstance",value:function(e,t,n){if(!e)return console.error("error: 중복 editor id. ("+e+")"),!1;if(n.editorList.length>0){for(var o=!0,i=0,r=n.editorList.length;i<r;i+=1)if(n.editorList[i]===e){o=!1,console.error();break}if(!o)return!1}return!0}},{key:"isValidEditorOptions",value:function(e,t){var n=!0;for(var o in a.editorSettings)e.hasOwnProperty(a.editorSettings[o])||(console.error("구현 필요 [editorSettings."+a.editorSettings[o]+"]"),n=!1);for(var i in a.interfaces)t.hasOwnProperty(a.interfaces[i])||(console.error("구현 필요 ["+a.interfaces[i]+"]"),n=!1);return e.hasOwnProperty("plugins")&&e.plugins instanceof Array&&e.plugins.length>0&&!e.hasOwnProperty("addPlugins")&&console.error("구현 필요 [fn:addPlugins]"),s.default.editorSet.hasOwnProperty(e.name)&&(console.error("등록된 에디터 있음 ["+e.name+"]"),n=!1),!!n}},{key:"isValidToolsObject",value:function(e){for(var t=!0,n=0,o=a.tools.property.length;n<o;n+=1)e.hasOwnProperty(a.tools.property[n])||(console.error("구현 필요 [XEeditor.addTool => fn:"+a.tools.property[n]+"]"),t=!1);for(var i=0,r=a.tools.events.length;i<r;i+=1)e.events.hasOwnProperty(a.tools.events[i])||(console.error("구현 필요[XEeditor.addTool => event"+a.tools.events[i]+"]"),t=!1);return t}}]),e}();t.default=l},,,,,,,,,,,function(e,t,n){n(5),e.exports=n(25)},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(5),a=o(s),l=n(11),u=o(l),f=n(24),d=o(f),c=n(8),p=n(0),h=o(p),v=function(){function e(t,n){i(this,e),this.name=t.name,this.configs=t.configs,this.editorList=[],this.interfaces={},(0,c.eventify)(this),t.hasOwnProperty("plugins")&&t.plugins instanceof Array&&t.plugins.length>0&&t.hasOwnProperty("addPlugins")&&t.addPlugins(t.plugins);for(var o in n)this[o]=n[o]}return r(e,[{key:"create",value:function(e,t,n,o){if(o=o||[],n=h.default.extend(this.configs||{},n||{}),u.default.isValidBeforeCreateInstance(e,o,this)){var i=new d.default(this.name,e,n,o);if(i._editor=this,this.editorList[e]=i,this.initialize.call(this.editorList[e],e,t,n),o&&o.length>0){for(var r={},s=[],l=0,f=o.length;l<f;l+=1)a.default.getTool(o[l].id)?(r[o[l].id]=a.default.getTool(o[l].id),s.push(o[l])):console.error("define된 tool이 존재하지 않음. ["+o[l].id+"]");this.addTools&&"function"==typeof this.addTools&&this.addTools.call(this.editorList[e],r,s)}return this.editorList[e]}}}]),e}();t.default=v},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(5),s=function(e){return e&&e.__esModule?e:{default:e}}(r),a=n(8),l=function(){function e(t,n,i,r){o(this,e);var s={editorOptions:i,toolInfoList:r};(0,a.eventify)(this),this.editorName=t,this.selector=n,this.props={},this.getOptions=function(){return s}}return i(e,[{key:"getInstance",value:function(){return this}},{key:"getContents",value:function(){return s.default.editorSet[this.editorName].getContents.call(this)}},{key:"setContents",value:function(e){s.default.editorSet[this.editorName].setContents.call(this,e)}},{key:"addContents",value:function(e){s.default.editorSet[this.editorName].addContents.call(this,e)}},{key:"addProps",value:function(e){for(var t in e)this.props[t]=e[t]}},{key:"addTools",value:function(e){s.default.editorSet[this.editorName].addTools.call(this,this.getOptions().toolInfoList,e)}},{key:"on",value:function(e,t){s.default.editorSet[this.editorName].on.call(this,e,t)}},{key:"renderFileUploader",value:function(e){s.default.editorSet[this.editorName].renderFileUploader.call(this,e)}},{key:"getContentDom",value:function(){return"function"==typeof s.default.editorSet[this.editorName].getContentDom&&s.default.editorSet[this.editorName].getContentDom.call(this)}},{key:"reset",value:function(){s.default.editorSet[this.editorName].reset.call(this)}}]),e}();t.default=l},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=n(0),r=o(i);o(n(5)).default.define({editorSettings:{name:"XEtextarea",configs:{}},interfaces:{initialize:function(e,t){t=r.default.extend(!0,{fileUpload:{},suggestion:{},names:{file:{image:{}},tag:{},mention:{}},extensions:[],fontFamily:[],perms:{},files:[]},t);var n=(0,r.default)("#"+e),o=t.height,i=t.fontFamily,s=t.fontSize;this.addProps({editor:n,selector:e,options:t}),o&&n.css("height",o+"px"),(i||s)&&(i&&i.length>0&&n.css("font-family",i.join(",")),s&&n.css("font-size",s)),n.parents("form").on("submit",function(){var e=t.names.file.input,o=t.files,i=(0,r.default)();if(n.nextAll(".paramWrap").remove(),n.after("<div class='paramWrap'>"),i=n.nextAll(".paramWrap"),o.length>0)for(var s=0,a=o.length;s<a;s+=1){var l=o[s];i.append("<input type='hidden'name='"+e+"[]' value='"+l.id+"' />")}})},getContents:function(){return this.props.editor.val()},setContents:function(e){this.props.editor.val(e)},addContents:function(e){var t=this.props.editor.val();this.props.editor.val(t)},on:function(e,t){this.props.editor.on(e,t)},getContentDom:function(){return!1},reset:function(){this.props.editor.val("").focus(),this.props.editor.nextAll(".paramWrap").remove()}}})}]);