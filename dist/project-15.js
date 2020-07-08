/* Project specific JavaScript API library */
/* Version: 15.0.4420.1017 Build Time: 03/31/2014 */
/*
	Copyright (c) Microsoft Corporation.  All rights reserved.
*/

/*
	Your use of this file is governed by the Microsoft Services Agreement http://go.microsoft.com/fwlink/?LinkId=266419.
*/

Microsoft.Office.WebExtension.ProjectViewTypes={Gantt:1,NetworkDiagram:2,TaskDiagram:3,TaskForm:4,TaskSheet:5,ResourceForm:6,ResourceSheet:7,ResourceGraph:8,TeamPlanner:9,TaskDetails:10,TaskNameForm:11,ResourceNames:12,Calendar:13,TaskUsage:14,ResourceUsage:15,Timeline:16};OSF.OUtil.redefineList(Microsoft.Office.WebExtension.CoercionType,{Text:"text"});OSF.OUtil.redefineList(Microsoft.Office.WebExtension.ValueFormat,{Unformatted:"unformatted"});OSF.OUtil.redefineList(Microsoft.Office.WebExtension.FilterType,{All:"all"});OSF.OUtil.redefineList(Microsoft.Office.WebExtension.EventType,{DocumentSelectionChanged:"documentSelectionChanged",TaskSelectionChanged:"taskSelectionChanged",ResourceSelectionChanged:"resourceSelectionChanged",ViewSelectionChanged:"viewSelectionChanged"});delete Microsoft.Office.WebExtension.BindingType;delete Microsoft.Office.WebExtension.FileType;delete Microsoft.Office.WebExtension.select;OSF.ClientMode={ReadWrite:0,ReadOnly:1};OSF.DDA.RichInitializationReason={1:Microsoft.Office.WebExtension.InitializationReason.Inserted,2:Microsoft.Office.WebExtension.InitializationReason.DocumentOpened};Microsoft.Office.WebExtension.FileType={Text:"text",Compressed:"compressed"};OSF.DDA.RichClientSettingsManager={read:function(e,d){var b=[],f=[];e&&e();window.external.GetContext().GetSettings().Read(b,f);d&&d();for(var c={},a=0;a<b.length;a++)c[b[a]]=f[a];return c},write:function(a,g,c,b){var e=[],d=[];for(var f in a){e.push(f);d.push(a[f])}c&&c();window.external.GetContext().GetSettings().Write(e,d);b&&b()}};OSF.DDA.DispIdHost.getRichClientDelegateMethods=function(e){var a={};a[OSF.DDA.DispIdHost.Delegates.ExecuteAsync]=OSF.DDA.SafeArray.Delegate.executeAsync;a[OSF.DDA.DispIdHost.Delegates.RegisterEventAsync]=OSF.DDA.SafeArray.Delegate.registerEventAsync;a[OSF.DDA.DispIdHost.Delegates.UnregisterEventAsync]=OSF.DDA.SafeArray.Delegate.unregisterEventAsync;function b(a){return function(b){var d,c;try{c=a(b.hostCallArgs,b.onCalling,b.onReceiving);d=OSF.DDA.ErrorCodeManager.errorCodes.ooeSuccess}catch(e){d=OSF.DDA.ErrorCodeManager.errorCodes.ooeInternalError;c={name:Strings.OfficeOM.L_InternalError,message:e}}b.onComplete&&b.onComplete(d,c)}}function d(c,b,a){return OSF.DDA.RichClientSettingsManager.read(b,a)}function c(a,c,b){return OSF.DDA.RichClientSettingsManager.write(a[OSF.DDA.SettingsManager.SerializedSettings],a[Microsoft.Office.WebExtension.Parameters.OverwriteIfStale],c,b)}switch(e){case OSF.DDA.AsyncMethodNames.RefreshAsync.id:a[OSF.DDA.DispIdHost.Delegates.ExecuteAsync]=b(d);break;case OSF.DDA.AsyncMethodNames.SaveAsync.id:a[OSF.DDA.DispIdHost.Delegates.ExecuteAsync]=b(c)}return a};OSF.DDA.File=function(e,c,b){OSF.OUtil.defineEnumerableProperties(this,{size:{value:c},sliceCount:{value:Math.ceil(c/b)}});var a={};a[OSF.DDA.FileProperties.Handle]=e;a[OSF.DDA.FileProperties.SliceSize]=b;var d=OSF.DDA.AsyncMethodNames;OSF.DDA.DispIdHost.addAsyncMethods(this,[d.GetDocumentCopyChunkAsync,d.ReleaseDocumentCopyAsync],a)};OSF.DDA.FileSliceOffset="fileSliceoffset";OSF.DDA.CustomXmlParts=function(){this._eventDispatches=[];var a=OSF.DDA.AsyncMethodNames;OSF.DDA.DispIdHost.addAsyncMethods(this,[a.AddDataPartAsync,a.GetDataPartByIdAsync,a.GetDataPartsByNameSpaceAsync])};OSF.DDA.CustomXmlPart=function(f,b,g){OSF.OUtil.defineEnumerableProperties(this,{builtIn:{value:g},id:{value:b},namespaceManager:{value:new OSF.DDA.CustomXmlPrefixMappings(b)}});var c=OSF.DDA.AsyncMethodNames;OSF.DDA.DispIdHost.addAsyncMethods(this,[c.DeleteDataPartAsync,c.GetPartNodesAsync,c.GetPartXmlAsync]);var e=f._eventDispatches,a=e[b];if(!a){var d=Microsoft.Office.WebExtension.EventType;a=new OSF.EventDispatch([d.DataNodeDeleted,d.DataNodeInserted,d.DataNodeReplaced]);e[b]=a}OSF.DDA.DispIdHost.addEventSupport(this,a)};OSF.DDA.CustomXmlPrefixMappings=function(b){var a=OSF.DDA.AsyncMethodNames;OSF.DDA.DispIdHost.addAsyncMethods(this,[a.AddDataPartNamespaceAsync,a.GetDataPartNamespaceAsync,a.GetDataPartPrefixAsync],b)};OSF.DDA.CustomXmlNode=function(d,c,e,b){OSF.OUtil.defineEnumerableProperties(this,{baseName:{value:b},namespaceUri:{value:e},nodeType:{value:c}});var a=OSF.DDA.AsyncMethodNames;OSF.DDA.DispIdHost.addAsyncMethods(this,[a.GetRelativeNodesAsync,a.GetNodeValueAsync,a.GetNodeXmlAsync,a.SetNodeValueAsync,a.SetNodeXmlAsync],d)};OSF.DDA.NodeInsertedEventArgs=function(b,a){OSF.OUtil.defineEnumerableProperties(this,{type:{value:Microsoft.Office.WebExtension.EventType.DataNodeInserted},newNode:{value:b},inUndoRedo:{value:a}})};OSF.DDA.NodeReplacedEventArgs=function(c,b,a){OSF.OUtil.defineEnumerableProperties(this,{type:{value:Microsoft.Office.WebExtension.EventType.DataNodeReplaced},oldNode:{value:c},newNode:{value:b},inUndoRedo:{value:a}})};OSF.DDA.NodeDeletedEventArgs=function(c,a,b){OSF.OUtil.defineEnumerableProperties(this,{type:{value:Microsoft.Office.WebExtension.EventType.DataNodeDeleted},oldNode:{value:c},oldNextSibling:{value:a},inUndoRedo:{value:b}})};OSF.OUtil.setNamespace("SafeArray",OSF.DDA);OSF.DDA.SafeArray.Response={Status:0,Payload:1};OSF.DDA.SafeArray.UniqueArguments={Offset:"offset",Run:"run",BindingSpecificData:"bindingSpecificData",MergedCellGuid:"{66e7831f-81b2-42e2-823c-89e872d541b3}"};OSF.OUtil.setNamespace("Delegate",OSF.DDA.SafeArray);OSF.DDA.SafeArray.Delegate.SpecialProcessor=function(){function b(a){var b;try{var h=a.ubound(1),d=a.ubound(2);a=a.toArray();if(h==1&&d==1)b=[a];else{b=[];for(var f=0;f<h;f++){for(var c=[],e=0;e<d;e++){var g=a[f*d+e];g!=OSF.DDA.SafeArray.UniqueArguments.MergedCellGuid&&c.push(g)}c.length>0&&b.push(c)}}}catch(i){}return b}var c=[OSF.DDA.PropertyDescriptors.FileProperties,OSF.DDA.PropertyDescriptors.FileSliceProperties,OSF.DDA.PropertyDescriptors.BindingProperties,OSF.DDA.SafeArray.UniqueArguments.BindingSpecificData,OSF.DDA.SafeArray.UniqueArguments.Offset,OSF.DDA.SafeArray.UniqueArguments.Run,OSF.DDA.PropertyDescriptors.Subset,OSF.DDA.PropertyDescriptors.DataPartProperties,OSF.DDA.PropertyDescriptors.DataNodeProperties,OSF.DDA.EventDescriptors.BindingSelectionChangedEvent,OSF.DDA.EventDescriptors.DataNodeInsertedEvent,OSF.DDA.EventDescriptors.DataNodeReplacedEvent,OSF.DDA.EventDescriptors.DataNodeDeletedEvent,OSF.DDA.DataNodeEventProperties.OldNode,OSF.DDA.DataNodeEventProperties.NewNode,OSF.DDA.DataNodeEventProperties.NextSiblingNode],a={};a[Microsoft.Office.WebExtension.Parameters.Data]=function(){var c=0,a=1;return {toHost:function(b){if(typeof b!="string"&&b[OSF.DDA.TableDataProperties.TableRows]!==undefined){var d=[];d[c]=b[OSF.DDA.TableDataProperties.TableRows];d[a]=b[OSF.DDA.TableDataProperties.TableHeaders];b=d}return b},fromHost:function(f){var e;if(f.toArray){var g=f.dimensions();if(g===2)e=b(f);else{var d=f.toArray();if(d.length===2&&(d[0]!=null&&d[0].toArray||d[1]!=null&&d[1].toArray)){e={};e[OSF.DDA.TableDataProperties.TableRows]=b(d[c]);e[OSF.DDA.TableDataProperties.TableHeaders]=b(d[a])}else e=d}}else e=f;return e}}}();OSF.DDA.SafeArray.Delegate.SpecialProcessor.uber.constructor.call(this,c,a);this.pack=function(c,d){var b;if(this.isDynamicType(c))b=a[c].toHost(d);else b=d;return b};this.unpack=function(c,d){var b;if(this.isComplexType(c)||OSF.DDA.ListType.isListType(c))try{b=d.toArray()}catch(e){b=d||{}}else if(this.isDynamicType(c))b=a[c].fromHost(d);else b=d;return b}};OSF.OUtil.extend(OSF.DDA.SafeArray.Delegate.SpecialProcessor,OSF.DDA.SpecialProcessor);OSF.DDA.SafeArray.Delegate.ParameterMap=function(){var e=true,f=new OSF.DDA.HostParameterMap(new OSF.DDA.SafeArray.Delegate.SpecialProcessor),a,d=f.self;function g(a){var c=null;if(a){c={};for(var d=a.length,b=0;b<d;b++)c[a[b].name]=a[b].value}return c}function b(b){var a={},c=g(b.toHost);if(b.invertible)a.map=c;else if(b.canonical)a.toHost=a.fromHost=c;else{a.toHost=c;a.fromHost=g(b.fromHost)}f.setMapping(b.type,a)}a=OSF.DDA.FileProperties;b({type:OSF.DDA.PropertyDescriptors.FileProperties,fromHost:[{name:a.Handle,value:0},{name:a.FileSize,value:1}]});b({type:OSF.DDA.PropertyDescriptors.FileSliceProperties,fromHost:[{name:Microsoft.Office.WebExtension.Parameters.Data,value:0},{name:a.SliceSize,value:1}]});a=OSF.DDA.BindingProperties;b({type:OSF.DDA.PropertyDescriptors.BindingProperties,fromHost:[{name:a.Id,value:0},{name:a.Type,value:1},{name:OSF.DDA.SafeArray.UniqueArguments.BindingSpecificData,value:2}]});b({type:OSF.DDA.SafeArray.UniqueArguments.BindingSpecificData,fromHost:[{name:a.RowCount,value:0},{name:a.ColumnCount,value:1},{name:a.HasHeaders,value:2}]});a=OSF.DDA.SafeArray.UniqueArguments;b({type:OSF.DDA.PropertyDescriptors.Subset,toHost:[{name:a.Offset,value:0},{name:a.Run,value:1}],canonical:e});a=Microsoft.Office.WebExtension.Parameters;b({type:OSF.DDA.SafeArray.UniqueArguments.Offset,toHost:[{name:a.StartRow,value:0},{name:a.StartColumn,value:1}],canonical:e});b({type:OSF.DDA.SafeArray.UniqueArguments.Run,toHost:[{name:a.RowCount,value:0},{name:a.ColumnCount,value:1}],canonical:e});a=OSF.DDA.DataPartProperties;b({type:OSF.DDA.PropertyDescriptors.DataPartProperties,fromHost:[{name:a.Id,value:0},{name:a.BuiltIn,value:1}]});a=OSF.DDA.DataNodeProperties;b({type:OSF.DDA.PropertyDescriptors.DataNodeProperties,fromHost:[{name:a.Handle,value:0},{name:a.BaseName,value:1},{name:a.NamespaceUri,value:2},{name:a.NodeType,value:3}]});b({type:OSF.DDA.EventDescriptors.BindingSelectionChangedEvent,fromHost:[{name:OSF.DDA.PropertyDescriptors.BindingProperties,value:0},{name:OSF.DDA.PropertyDescriptors.Subset,value:1}]});a=OSF.DDA.DataNodeEventProperties;b({type:OSF.DDA.EventDescriptors.DataNodeInsertedEvent,fromHost:[{name:a.InUndoRedo,value:0},{name:a.NewNode,value:1}]});b({type:OSF.DDA.EventDescriptors.DataNodeReplacedEvent,fromHost:[{name:a.InUndoRedo,value:0},{name:a.OldNode,value:1},{name:a.NewNode,value:2}]});b({type:OSF.DDA.EventDescriptors.DataNodeDeletedEvent,fromHost:[{name:a.InUndoRedo,value:0},{name:a.OldNode,value:1},{name:a.NextSiblingNode,value:2}]});b({type:a.OldNode,fromHost:[{name:OSF.DDA.PropertyDescriptors.DataNodeProperties,value:d}]});b({type:a.NewNode,fromHost:[{name:OSF.DDA.PropertyDescriptors.DataNodeProperties,value:d}]});b({type:a.NextSiblingNode,fromHost:[{name:OSF.DDA.PropertyDescriptors.DataNodeProperties,value:d}]});a=Microsoft.Office.WebExtension.AsyncResultStatus;b({type:OSF.DDA.PropertyDescriptors.AsyncResultStatus,fromHost:[{name:a.Succeeded,value:0},{name:a.Failed,value:1}]});a=Microsoft.Office.WebExtension.CoercionType;b({type:Microsoft.Office.WebExtension.Parameters.CoercionType,toHost:[{name:a.Text,value:0},{name:a.Matrix,value:1},{name:a.Table,value:2},{name:a.Html,value:3},{name:a.Ooxml,value:4}]});a=Microsoft.Office.WebExtension.FileType;a&&b({type:Microsoft.Office.WebExtension.Parameters.FileType,toHost:[{name:a.Text,value:0},{name:a.Compressed,value:5}]});a=Microsoft.Office.WebExtension.BindingType;a&&b({type:Microsoft.Office.WebExtension.Parameters.BindingType,toHost:[{name:a.Text,value:0},{name:a.Matrix,value:1},{name:a.Table,value:2}],invertible:e});a=Microsoft.Office.WebExtension.ValueFormat;b({type:Microsoft.Office.WebExtension.Parameters.ValueFormat,toHost:[{name:a.Unformatted,value:0},{name:a.Formatted,value:1}]});a=Microsoft.Office.WebExtension.FilterType;b({type:Microsoft.Office.WebExtension.Parameters.FilterType,toHost:[{name:a.All,value:0},{name:a.OnlyVisible,value:1}]});a=Microsoft.Office.WebExtension.Parameters;var c=OSF.DDA.MethodDispId;b({type:c.dispidGetSelectedDataMethod,fromHost:[{name:a.Data,value:d}],toHost:[{name:a.CoercionType,value:0},{name:a.ValueFormat,value:1},{name:a.FilterType,value:2}]});b({type:c.dispidSetSelectedDataMethod,toHost:[{name:a.CoercionType,value:0},{name:a.Data,value:1}]});b({type:c.dispidGetDocumentCopyMethod,toHost:[{name:a.FileType,value:0}],fromHost:[{name:OSF.DDA.PropertyDescriptors.FileProperties,value:d}]});b({type:c.dispidGetDocumentCopyChunkMethod,toHost:[{name:OSF.DDA.FileProperties.Handle,value:0},{name:OSF.DDA.FileSliceOffset,value:1},{name:OSF.DDA.FileProperties.SliceSize,value:2}],fromHost:[{name:OSF.DDA.PropertyDescriptors.FileSliceProperties,value:d}]});b({type:c.dispidReleaseDocumentCopyMethod,toHost:[{name:OSF.DDA.FileProperties.Handle,value:0}]});b({type:c.dispidAddBindingFromSelectionMethod,fromHost:[{name:OSF.DDA.PropertyDescriptors.BindingProperties,value:d}],toHost:[{name:a.Id,value:0},{name:a.BindingType,value:1}]});b({type:c.dispidAddBindingFromPromptMethod,fromHost:[{name:OSF.DDA.PropertyDescriptors.BindingProperties,value:d}],toHost:[{name:a.Id,value:0},{name:a.BindingType,value:1},{name:a.PromptText,value:2}]});b({type:c.dispidAddBindingFromNamedItemMethod,fromHost:[{name:OSF.DDA.PropertyDescriptors.BindingProperties,value:d}],toHost:[{name:a.ItemName,value:0},{name:a.Id,value:1},{name:a.BindingType,value:2},{name:a.FailOnCollision,value:3}]});b({type:c.dispidReleaseBindingMethod,toHost:[{name:a.Id,value:0}]});b({type:c.dispidGetBindingMethod,fromHost:[{name:OSF.DDA.PropertyDescriptors.BindingProperties,value:d}],toHost:[{name:a.Id,value:0}]});b({type:c.dispidGetAllBindingsMethod,fromHost:[{name:OSF.DDA.ListDescriptors.BindingList,value:d}]});b({type:c.dispidGetBindingDataMethod,fromHost:[{name:a.Data,value:d}],toHost:[{name:a.Id,value:0},{name:a.CoercionType,value:1},{name:a.ValueFormat,value:2},{name:a.FilterType,value:3},{name:OSF.DDA.PropertyDescriptors.Subset,value:4}]});b({type:c.dispidSetBindingDataMethod,toHost:[{name:a.Id,value:0},{name:a.CoercionType,value:1},{name:a.Data,value:2},{name:OSF.DDA.SafeArray.UniqueArguments.Offset,value:3}]});b({type:c.dispidAddRowsMethod,toHost:[{name:a.Id,value:0},{name:a.Data,value:1}]});b({type:c.dispidAddColumnsMethod,toHost:[{name:a.Id,value:0},{name:a.Data,value:1}]});b({type:c.dispidClearAllRowsMethod,toHost:[{name:a.Id,value:0}]});b({type:c.dispidLoadSettingsMethod,fromHost:[{name:OSF.DDA.SettingsManager.SerializedSettings,value:d}]});b({type:c.dispidSaveSettingsMethod,toHost:[{name:OSF.DDA.SettingsManager.SerializedSettings,value:OSF.DDA.SettingsManager.SerializedSettings},{name:Microsoft.Office.WebExtension.Parameters.OverwriteIfStale,value:Microsoft.Office.WebExtension.Parameters.OverwriteIfStale}]});b({type:c.dispidAddDataPartMethod,fromHost:[{name:OSF.DDA.PropertyDescriptors.DataPartProperties,value:d}],toHost:[{name:a.Xml,value:0}]});b({type:c.dispidGetDataPartByIdMethod,fromHost:[{name:OSF.DDA.PropertyDescriptors.DataPartProperties,value:d}],toHost:[{name:a.Id,value:0}]});b({type:c.dispidGetDataPartsByNamespaceMethod,fromHost:[{name:OSF.DDA.ListDescriptors.DataPartList,value:d}],toHost:[{name:a.Namespace,value:0}]});b({type:c.dispidGetDataPartXmlMethod,fromHost:[{name:a.Data,value:d}],toHost:[{name:a.Id,value:0}]});b({type:c.dispidGetDataPartNodesMethod,fromHost:[{name:OSF.DDA.ListDescriptors.DataNodeList,value:d}],toHost:[{name:a.Id,value:0},{name:a.XPath,value:1}]});b({type:c.dispidDeleteDataPartMethod,toHost:[{name:a.Id,value:0}]});b({type:c.dispidGetDataNodeValueMethod,fromHost:[{name:a.Data,value:d}],toHost:[{name:OSF.DDA.DataNodeProperties.Handle,value:0}]});b({type:c.dispidGetDataNodeXmlMethod,fromHost:[{name:a.Data,value:d}],toHost:[{name:OSF.DDA.DataNodeProperties.Handle,value:0}]});b({type:c.dispidGetDataNodesMethod,fromHost:[{name:OSF.DDA.ListDescriptors.DataNodeList,value:d}],toHost:[{name:OSF.DDA.DataNodeProperties.Handle,value:0},{name:a.XPath,value:1}]});b({type:c.dispidSetDataNodeValueMethod,toHost:[{name:OSF.DDA.DataNodeProperties.Handle,value:0},{name:a.Data,value:1}]});b({type:c.dispidSetDataNodeXmlMethod,toHost:[{name:OSF.DDA.DataNodeProperties.Handle,value:0},{name:a.Xml,value:1}]});b({type:c.dispidAddDataNamespaceMethod,toHost:[{name:OSF.DDA.DataPartProperties.Id,value:0},{name:a.Prefix,value:1},{name:a.Namespace,value:2}]});b({type:c.dispidGetDataUriByPrefixMethod,fromHost:[{name:a.Data,value:d}],toHost:[{name:OSF.DDA.DataPartProperties.Id,value:0},{name:a.Prefix,value:1}]});b({type:c.dispidGetDataPrefixByUriMethod,fromHost:[{name:a.Data,value:d}],toHost:[{name:OSF.DDA.DataPartProperties.Id,value:0},{name:a.Namespace,value:1}]});b({type:c.dispidGetSelectedTaskMethod,fromHost:[{name:a.TaskId,value:d}]});b({type:c.dispidGetTaskMethod,fromHost:[{name:"taskName",value:0},{name:"wssTaskId",value:1},{name:"resourceNames",value:2}],toHost:[{name:a.TaskId,value:0}]});b({type:c.dispidGetTaskFieldMethod,fromHost:[{name:a.FieldValue,value:d}],toHost:[{name:a.TaskId,value:0},{name:a.FieldId,value:1},{name:a.GetRawValue,value:2}]});b({type:c.dispidGetWSSUrlMethod,fromHost:[{name:a.ServerUrl,value:0},{name:a.ListName,value:1}]});b({type:c.dispidGetSelectedResourceMethod,fromHost:[{name:a.ResourceId,value:d}]});b({type:c.dispidGetResourceFieldMethod,fromHost:[{name:a.FieldValue,value:d}],toHost:[{name:a.ResourceId,value:0},{name:a.FieldId,value:1},{name:a.GetRawValue,value:2}]});b({type:c.dispidGetProjectFieldMethod,fromHost:[{name:a.FieldValue,value:d}],toHost:[{name:a.FieldId,value:0},{name:a.GetRawValue,value:1}]});b({type:c.dispidGetSelectedViewMethod,fromHost:[{name:a.ViewType,value:0},{name:a.ViewName,value:1}]});c=OSF.DDA.EventDispId;b({type:c.dispidDocumentSelectionChangedEvent});b({type:c.dispidBindingSelectionChangedEvent,fromHost:[{name:OSF.DDA.EventDescriptors.BindingSelectionChangedEvent,value:d}]});b({type:c.dispidBindingDataChangedEvent,fromHost:[{name:OSF.DDA.PropertyDescriptors.BindingProperties,value:d}]});b({type:c.dispidSettingsChangedEvent});b({type:c.dispidDataNodeAddedEvent,fromHost:[{name:OSF.DDA.EventDescriptors.DataNodeInsertedEvent,value:d}]});b({type:c.dispidDataNodeReplacedEvent,fromHost:[{name:OSF.DDA.EventDescriptors.DataNodeReplacedEvent,value:d}]});b({type:c.dispidDataNodeDeletedEvent,fromHost:[{name:OSF.DDA.EventDescriptors.DataNodeDeletedEvent,value:d}]});b({type:c.dispidTaskSelectionChangedEvent});b({type:c.dispidResourceSelectionChangedEvent});b({type:c.dispidViewSelectionChangedEvent});return f}();OSF.DDA.SafeArray.Delegate._onException=function(d,c){var a,b=d.number;if(b)switch(b){case -2146828218:a=OSF.DDA.ErrorCodeManager.errorCodes.ooeNoCapability;break;case -2146827850:default:a=OSF.DDA.ErrorCodeManager.errorCodes.ooeInternalError}c.onComplete&&c.onComplete(a||OSF.DDA.ErrorCodeManager.errorCodes.ooeInternalError)};OSF.DDA.SafeArray.Delegate.executeAsync=function(a){try{a.onCalling&&a.onCalling();function b(a){var c=a;if(OSF.OUtil.isArray(a))for(var f=c.length,d=0;d<f;d++)c[d]=b(c[d]);else if(OSF.OUtil.isDate(a))c=a.getVarDate();else if(typeof a==="object"&&!OSF.OUtil.isArray(a)){c=[];for(var e in a)if(!OSF.OUtil.isFunction(a[e]))c[e]=b(a[e])}return c}var d=(new Date).getTime();window.external.Execute(a.dispId,b(a.hostCallArgs),function(g){a.onReceiving&&a.onReceiving();var b=g.toArray(),f=b[OSF.DDA.SafeArray.Response.Status];if(a.onComplete){var c;if(f==OSF.DDA.ErrorCodeManager.errorCodes.ooeSuccess)if(b.length>2){c=[];for(var e=1;e<b.length;e++)c[e-1]=b[e]}else c=b[OSF.DDA.SafeArray.Response.Payload];else c=b[OSF.DDA.SafeArray.Response.Payload];a.onComplete(f,c)}OSF.AppTelemetry&&OSF.AppTelemetry.onMethodDone(a.dispId,a.hostCallArgs,Math.abs((new Date).getTime()-d),f)})}catch(c){OSF.DDA.SafeArray.Delegate._onException(c,a)}};OSF.DDA.SafeArray.Delegate._getOnAfterRegisterEvent=function(c,a){var b=(new Date).getTime();return function(d){a.onReceiving&&a.onReceiving();var e=d.toArray?d.toArray()[OSF.DDA.SafeArray.Response.Status]:d;a.onComplete&&a.onComplete(e);OSF.AppTelemetry&&OSF.AppTelemetry.onRegisterDone(c,a.dispId,Math.abs((new Date).getTime()-b),e)}};OSF.DDA.SafeArray.Delegate.registerEventAsync=function(a){a.onCalling&&a.onCalling();var c=OSF.DDA.SafeArray.Delegate._getOnAfterRegisterEvent(true,a);try{window.external.RegisterEvent(a.dispId,a.targetId,function(c,b){a.onEvent&&a.onEvent(b);OSF.AppTelemetry&&OSF.AppTelemetry.onEventDone(a.dispId)},c)}catch(b){OSF.DDA.SafeArray.Delegate._onException(b,a)}};OSF.DDA.SafeArray.Delegate.unregisterEventAsync=function(a){a.onCalling&&a.onCalling();var c=OSF.DDA.SafeArray.Delegate._getOnAfterRegisterEvent(false,a);try{window.external.UnregisterEvent(a.dispId,a.targetId,c)}catch(b){OSF.DDA.SafeArray.Delegate._onException(b,a)}};Microsoft.Office.WebExtension.ProjectTaskFields={ActualCost:0,ActualDuration:1,ActualFinish:2,ActualOvertimeCost:3,ActualOvertimeWork:4,ActualStart:5,ActualWork:6,Text1:7,Text10:8,Finish10:9,Start10:10,Text11:11,Text12:12,Text13:13,Text14:14,Text15:15,Text16:16,Text17:17,Text18:18,Text19:19,Finish1:20,Start1:21,Text2:22,Text20:23,Text21:24,Text22:25,Text23:26,Text24:27,Text25:28,Text26:29,Text27:30,Text28:31,Text29:32,Finish2:33,Start2:34,Text3:35,Text30:36,Finish3:37,Start3:38,Text4:39,Finish4:40,Start4:41,Text5:42,Finish5:43,Start5:44,Text6:45,Finish6:46,Start6:47,Text7:48,Finish7:49,Start7:50,Text8:51,Finish8:52,Start8:53,Text9:54,Finish9:55,Start9:56,Baseline10BudgetCost:57,Baseline10BudgetWork:58,Baseline10Cost:59,Baseline10Duration:60,Baseline10Finish:61,Baseline10FixedCost:62,Baseline10FixedCostAccrual:63,Baseline10Start:64,Baseline10Work:65,Baseline1BudgetCost:66,Baseline1BudgetWork:67,Baseline1Cost:68,Baseline1Duration:69,Baseline1Finish:70,Baseline1FixedCost:71,Baseline1FixedCostAccrual:72,Baseline1Start:73,Baseline1Work:74,Baseline2BudgetCost:75,Baseline2BudgetWork:76,Baseline2Cost:77,Baseline2Duration:78,Baseline2Finish:79,Baseline2FixedCost:80,Baseline2FixedCostAccrual:81,Baseline2Start:82,Baseline2Work:83,Baseline3BudgetCost:84,Baseline3BudgetWork:85,Baseline3Cost:86,Baseline3Duration:87,Baseline3Finish:88,Baseline3FixedCost:89,Baseline3FixedCostAccrual:90,Basline3Start:91,Baseline3Work:92,Baseline4BudgetCost:93,Baseline4BudgetWork:94,Baseline4Cost:95,Baseline4Duration:96,Baseline4Finish:97,Baseline4FixedCost:98,Baseline4FixedCostAccrual:99,Baseline4Start:100,Baseline4Work:101,Baseline5BudgetCost:102,Baseline5BudgetWork:103,Baseline5Cost:104,Baseline5Duration:105,Baseline5Finish:106,Baseline5FixedCost:107,Baseline5FixedCostAccrual:108,Baseline5Start:109,Baseline5Work:110,Baseline6BudgetCost:111,Baseline6BudgetWork:112,Baseline6Cost:113,Baseline6Duration:114,Baseline6Finish:115,Baseline6FixedCost:116,Baseline6FixedCostAccrual:117,Baseline6Start:118,Baseline6Work:119,Baseline7BudgetCost:120,Baseline7BudgetWork:121,Baseline7Cost:122,Baseline7Duration:123,Baseline7Finish:124,Baseline7FixedCost:125,Baseline7FixedCostAccrual:126,Baseline7Start:127,Baseline7Work:128,Baseline8BudgetCost:129,Baseline8BudgetWork:130,Baseline8Cost:131,Baseline8Duration:132,Baseline8Finish:133,Baseline8FixedCost:134,Baseline8FixedCostAccrual:135,Baseline8Start:136,Baseline8Work:137,Baseline9BudgetCost:138,Baseline9BudgetWork:139,Baseline9Cost:140,Baseline9Duration:141,Baseline9Finish:142,Baseline9FixedCost:143,Baseline9FixedCostAccrual:144,Baseline9Start:145,Baseline9Work:146,BaselineBudgetCost:147,BaselineBudgetWork:148,BaselineCost:149,BaselineDuration:150,BaselineFinish:151,BaselineFixedCost:152,BaselineFixedCostAccrual:153,BaselineStart:154,BaselineWork:155,BudgetCost:156,BudgetWork:157,TaskCalendarGUID:158,ConstraintDate:159,ConstraintType:160,Cost1:161,Cost10:162,Cost2:163,Cost3:164,Cost4:165,Cost5:166,Cost6:167,Cost7:168,Cost8:169,Cost9:170,Date1:171,Date10:172,Date2:173,Date3:174,Date4:175,Date5:176,Date6:177,Date7:178,Date8:179,Date9:180,Deadline:181,Duration1:182,Duration10:183,Duration2:184,Duration3:185,Duration4:186,Duration5:187,Duration6:188,Duration7:189,Duration8:190,Duration9:191,Duration:192,EarnedValueMethod:193,FinishSlack:194,FixedCost:195,FixedCostAccrual:196,Flag10:197,Flag1:198,Flag11:199,Flag12:200,Flag13:201,Flag14:202,Flag15:203,Flag16:204,Flag17:205,Flag18:206,Flag19:207,Flag2:208,Flag20:209,Flag3:210,Flag4:211,Flag5:212,Flag6:213,Flag7:214,Flag8:215,Flag9:216,FreeSlack:217,HasRollupSubTasks:218,ID:219,Name:220,Notes:221,Number1:222,Number10:223,Number11:224,Number12:225,Number13:226,Number14:227,Number15:228,Number16:229,Number17:230,Number18:231,Number19:232,Number2:233,Number20:234,Number3:235,Number4:236,Number5:237,Number6:238,Number7:239,Number8:240,Number9:241,ScheduledDuration:242,ScheduledFinish:243,ScheduledStart:244,OutlineLevel:245,OvertimeCost:246,OvertimeWork:247,PercentComplete:248,PercentWorkComplete:249,Predecessors:250,PreleveledFinish:251,PreleveledStart:252,Priority:253,Active:254,Critical:255,Milestone:256,Overallocated:257,IsRollup:258,Summary:259,RegularWork:260,RemainingCost:261,RemainingDuration:262,RemainingOvertimeCost:263,RemainingWork:264,ResourceNames:265,ResourceNames:266,Cost:267,Finish:268,Start:269,Work:270,StartSlack:271,Status:272,Successors:273,StatusManager:274,TotalSlack:275,TaskGUID:276,Type:277,WBS:278,WBSPREDECESSORS:279,WBSSUCCESSORS:280,WSSID:281};Microsoft.Office.WebExtension.ProjectResourceFields={Accrual:0,ActualCost:1,ActualOvertimeCost:2,ActualOvertimeWork:3,ActualOvertimeWorkProtected:4,ActualWork:5,ActualWorkProtected:6,BaseCalendar:7,Baseline10BudgetCost:8,Baseline10BudgetWork:9,Baseline10Cost:10,Baseline10Work:11,Baseline1BudgetCost:12,Baseline1BudgetWork:13,Baseline1Cost:14,Baseline1Work:15,Baseline2BudgetCost:16,Baseline2BudgetWork:17,Baseline2Cost:18,Baseline2Work:19,Baseline3BudgetCost:20,Baseline3BudgetWork:21,Baseline3Cost:22,Baseline3Work:23,Baseline4BudgetCost:24,Baseline4BudgetWork:25,Baseline4Cost:26,Baseline4Work:27,Baseline5BudgetCost:28,Baseline5BudgetWork:29,Baseline5Cost:30,Baseline5Work:31,Baseline6BudgetCost:32,Baseline6BudgetWork:33,Baseline6Cost:34,Baseline6Work:35,Baseline7BudgetCost:36,Baseline7BudgetWork:37,Baseline7Cost:38,Baseline7Work:39,Baseline8BudgetCost:40,Baseline8BudgetWork:41,Baseline8Cost:42,Baseline8Work:43,Baseline9BudgetCost:44,Baseline9BudgetWork:45,Baseline9Cost:46,Baseline9Work:47,BaselineBudgetCost:48,BaselineBudgetWork:49,BaselineCost:50,BaselineWork:51,BudgetCost:52,BudgetWork:53,ResourceCalendarGUID:54,Code:55,Cost1:56,Cost10:57,Cost2:58,Cost3:59,Cost4:60,Cost5:61,Cost6:62,Cost7:63,Cost8:64,Cost9:65,ResourceCreationDate:66,Date1:67,Date10:68,Date2:69,Date3:70,Date4:71,Date5:72,Date6:73,Date7:74,Date8:75,Date9:76,Duration1:77,Duration10:78,Duration2:79,Duration3:80,Duration4:81,Duration5:82,Duration6:83,Duration7:84,Duration8:85,Duration9:86,Email:87,End:88,Finish1:89,Finish10:90,Finish2:91,Finish3:92,Finish4:93,Finish5:94,Finish6:95,Finish7:96,Finish8:97,Finish9:98,Flag10:99,Flag1:100,Flag11:101,Flag12:102,Flag13:103,Flag14:104,Flag15:105,Flag16:106,Flag17:107,Flag18:108,Flag19:109,Flag2:110,Flag20:111,Flag3:112,Flag4:113,Flag5:114,Flag6:115,Flag7:116,Flag8:117,Flag9:118,Group:119,Units:120,Name:121,Notes:122,Number1:123,Number10:124,Number11:125,Number12:126,Number13:127,Number14:128,Number15:129,Number16:130,Number17:131,Number18:132,Number19:133,Number2:134,Number20:135,Number3:136,Number4:137,Number5:138,Number6:139,Number7:140,Number8:141,Number9:142,OvertimeCost:143,OvertimeRate:144,OvertimeWork:145,PercentWorkComplete:146,CostPerUse:147,Generic:148,OverAllocated:149,RegularWork:150,RemainingCost:151,RemainingOvertimeCost:152,RemainingOvertimeWork:153,RemainingWork:154,ResourceGUID:155,Cost:156,Work:157,Start:158,Start1:159,Start10:160,Start2:161,Start3:162,Start4:163,Start5:164,Start6:165,Start7:166,Start8:167,Start9:168,StandardRate:169,Text1:170,Text10:171,Text11:172,Text12:173,Text13:174,Text14:175,Text15:176,Text16:177,Text17:178,Text18:179,Text19:180,Text2:181,Text20:182,Text21:183,Text22:184,Text23:185,Text24:186,Text25:187,Text26:188,Text27:189,Text28:190,Text29:191,Text3:192,Text30:193,Text4:194,Text5:195,Text6:196,Text7:197,Text8:198,Text9:199};Microsoft.Office.WebExtension.ProjectProjectFields={CurrencyDigits:0,CurrencySymbol:1,CurrencySymbolPosition:2,DurationUnits:3,GUID:4,Finish:5,Start:6,ReadOnly:7,VERSION:8,WorkUnits:9,ProjectServerUrl:10,WSSUrl:11,WSSList:12};OSF.DDA.ProjectDocument=function(b){OSF.DDA.ProjectDocument.uber.constructor.call(this,b);var a=OSF.DDA.AsyncMethodNames;OSF.DDA.DispIdHost.addAsyncMethods(this,[a.GetSelectedDataAsync,a.GetSelectedTask,a.GetTask,a.GetTaskField,a.GetWSSUrl,a.GetSelectedResource,a.GetResourceField,a.GetProjectField,a.GetSelectedView]);OSF.DDA.DispIdHost.addEventSupport(this,new OSF.EventDispatch([Microsoft.Office.WebExtension.EventType.TaskSelectionChanged,Microsoft.Office.WebExtension.EventType.ResourceSelectionChanged,Microsoft.Office.WebExtension.EventType.ViewSelectionChanged]))};OSF.OUtil.extend(OSF.DDA.ProjectDocument,OSF.DDA.Document);OSF.DDA.TaskSelectionChangedEventArgs=function(a){OSF.OUtil.defineEnumerableProperties(this,{type:{value:Microsoft.Office.WebExtension.EventType.TaskSelectionChanged},document:{value:a}})};OSF.DDA.ResourceSelectionChangedEventArgs=function(a){OSF.OUtil.defineEnumerableProperties(this,{type:{value:Microsoft.Office.WebExtension.EventType.ResourceSelectionChanged},document:{value:a}})};OSF.DDA.ViewSelectionChangedEventArgs=function(a){OSF.OUtil.defineEnumerableProperties(this,{type:{value:Microsoft.Office.WebExtension.EventType.ViewSelectionChanged},document:{value:a}})}