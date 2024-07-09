"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7837],{53250:function(t,e,r){var s=r(67294);var n="function"===typeof Object.is?Object.is:function(t,e){return t===e&&(0!==t||1/t===1/e)||t!==t&&e!==e},i=s.useState,u=s.useEffect,o=s.useLayoutEffect,a=s.useDebugValue;function c(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!n(t,r)}catch(s){return!0}}var l="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?function(t,e){return e()}:function(t,e){var r=e(),s=i({inst:{value:r,getSnapshot:e}}),n=s[0].inst,l=s[1];return o((function(){n.value=r,n.getSnapshot=e,c(n)&&l({inst:n})}),[t,r,e]),u((function(){return c(n)&&l({inst:n}),t((function(){c(n)&&l({inst:n})}))}),[t]),a(r),r};e.useSyncExternalStore=void 0!==s.useSyncExternalStore?s.useSyncExternalStore:l},61688:function(t,e,r){t.exports=r(53250)},77837:function(t,e,r){r.d(e,{a:function(){return m}});var s=r(32161),n=r(30081),i=r(15761),u=r(33989),o=r(72379);class a extends u.l{constructor(t,e){super(),this.client=t,this.options=e,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(e)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.length&&(this.currentQuery.addObserver(this),c(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.listeners.length||this.destroy()}shouldFetchOnReconnect(){return l(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return l(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=[],this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(t,e){const r=this.options,n=this.currentQuery;if(this.options=this.client.defaultQueryOptions(t),(0,s.VS)(r,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),"undefined"!==typeof this.options.enabled&&"boolean"!==typeof this.options.enabled)throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=r.queryKey),this.updateQuery();const i=this.hasListeners();i&&h(this.currentQuery,n,this.options,r)&&this.executeFetch(),this.updateResult(e),!i||this.currentQuery===n&&this.options.enabled===r.enabled&&this.options.staleTime===r.staleTime||this.updateStaleTimeout();const u=this.computeRefetchInterval();!i||this.currentQuery===n&&this.options.enabled===r.enabled&&u===this.currentRefetchInterval||this.updateRefetchInterval(u)}getOptimisticResult(t){const e=this.client.getQueryCache().build(this.client,t);return this.createResult(e,t)}getCurrentResult(){return this.currentResult}trackResult(t){const e={};return Object.keys(t).forEach((r=>{Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(r),t[r])})})),e}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:t,...e}={}){return this.fetch({...e,meta:{refetchPage:t}})}fetchOptimistic(t){const e=this.client.defaultQueryOptions(t),r=this.client.getQueryCache().build(this.client,e);return r.isFetchingOptimistic=!0,r.fetch().then((()=>this.createResult(r,e)))}fetch(t){var e;return this.executeFetch({...t,cancelRefetch:null==(e=t.cancelRefetch)||e}).then((()=>(this.updateResult(),this.currentResult)))}executeFetch(t){this.updateQuery();let e=this.currentQuery.fetch(this.options,t);return null!=t&&t.throwOnError||(e=e.catch(s.ZT)),e}updateStaleTimeout(){if(this.clearStaleTimeout(),s.sk||this.currentResult.isStale||!(0,s.PN)(this.options.staleTime))return;const t=(0,s.Kp)(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout((()=>{this.currentResult.isStale||this.updateResult()}),t)}computeRefetchInterval(){var t;return"function"===typeof this.options.refetchInterval?this.options.refetchInterval(this.currentResult.data,this.currentQuery):null!=(t=this.options.refetchInterval)&&t}updateRefetchInterval(t){this.clearRefetchInterval(),this.currentRefetchInterval=t,!s.sk&&!1!==this.options.enabled&&(0,s.PN)(this.currentRefetchInterval)&&0!==this.currentRefetchInterval&&(this.refetchIntervalId=setInterval((()=>{(this.options.refetchIntervalInBackground||i.j.isFocused())&&this.executeFetch()}),this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(t,e){const r=this.currentQuery,n=this.options,i=this.currentResult,u=this.currentResultState,a=this.currentResultOptions,l=t!==r,p=l?t.state:this.currentQueryInitialState,f=l?this.currentResult:this.previousQueryResult,{state:y}=t;let R,{dataUpdatedAt:v,error:S,errorUpdatedAt:b,fetchStatus:m,status:g}=y,E=!1,Q=!1;if(e._optimisticResults){const s=this.hasListeners(),i=!s&&c(t,e),u=s&&h(t,r,e,n);(i||u)&&(m=(0,o.Kw)(t.options.networkMode)?"fetching":"paused",v||(g="loading")),"isRestoring"===e._optimisticResults&&(m="idle")}if(e.keepPreviousData&&!y.dataUpdatedAt&&null!=f&&f.isSuccess&&"error"!==g)R=f.data,v=f.dataUpdatedAt,g=f.status,E=!0;else if(e.select&&"undefined"!==typeof y.data)if(i&&y.data===(null==u?void 0:u.data)&&e.select===this.selectFn)R=this.selectResult;else try{this.selectFn=e.select,R=e.select(y.data),R=(0,s.oE)(null==i?void 0:i.data,R,e),this.selectResult=R,this.selectError=null}catch(T){0,this.selectError=T}else R=y.data;if("undefined"!==typeof e.placeholderData&&"undefined"===typeof R&&"loading"===g){let t;if(null!=i&&i.isPlaceholderData&&e.placeholderData===(null==a?void 0:a.placeholderData))t=i.data;else if(t="function"===typeof e.placeholderData?e.placeholderData():e.placeholderData,e.select&&"undefined"!==typeof t)try{t=e.select(t),this.selectError=null}catch(T){0,this.selectError=T}"undefined"!==typeof t&&(g="success",R=(0,s.oE)(null==i?void 0:i.data,t,e),Q=!0)}this.selectError&&(S=this.selectError,R=this.selectResult,b=Date.now(),g="error");const I="fetching"===m,C="loading"===g,O="error"===g;return{status:g,fetchStatus:m,isLoading:C,isSuccess:"success"===g,isError:O,isInitialLoading:C&&I,data:R,dataUpdatedAt:v,error:S,errorUpdatedAt:b,failureCount:y.fetchFailureCount,failureReason:y.fetchFailureReason,errorUpdateCount:y.errorUpdateCount,isFetched:y.dataUpdateCount>0||y.errorUpdateCount>0,isFetchedAfterMount:y.dataUpdateCount>p.dataUpdateCount||y.errorUpdateCount>p.errorUpdateCount,isFetching:I,isRefetching:I&&!C,isLoadingError:O&&0===y.dataUpdatedAt,isPaused:"paused"===m,isPlaceholderData:Q,isPreviousData:E,isRefetchError:O&&0!==y.dataUpdatedAt,isStale:d(t,e),refetch:this.refetch,remove:this.remove}}updateResult(t){const e=this.currentResult,r=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,(0,s.VS)(r,e))return;this.currentResult=r;const n={cache:!0};!1!==(null==t?void 0:t.listeners)&&(()=>{if(!e)return!0;const{notifyOnChangeProps:t}=this.options;if("all"===t||!t&&!this.trackedProps.size)return!0;const r=new Set(null!=t?t:this.trackedProps);return this.options.useErrorBoundary&&r.add("error"),Object.keys(this.currentResult).some((t=>{const s=t;return this.currentResult[s]!==e[s]&&r.has(s)}))})()&&(n.listeners=!0),this.notify({...n,...t})}updateQuery(){const t=this.client.getQueryCache().build(this.client,this.options);if(t===this.currentQuery)return;const e=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(null==e||e.removeObserver(this),t.addObserver(this))}onQueryUpdate(t){const e={};"success"===t.type?e.onSuccess=!t.manual:"error"!==t.type||(0,o.DV)(t.error)||(e.onError=!0),this.updateResult(e),this.hasListeners()&&this.updateTimers()}notify(t){n.V.batch((()=>{var e,r,s,n;if(t.onSuccess)null==(e=(r=this.options).onSuccess)||e.call(r,this.currentResult.data),null==(s=(n=this.options).onSettled)||s.call(n,this.currentResult.data,null);else if(t.onError){var i,u,o,a;null==(i=(u=this.options).onError)||i.call(u,this.currentResult.error),null==(o=(a=this.options).onSettled)||o.call(a,void 0,this.currentResult.error)}t.listeners&&this.listeners.forEach((t=>{t(this.currentResult)})),t.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})}))}}function c(t,e){return function(t,e){return!1!==e.enabled&&!t.state.dataUpdatedAt&&!("error"===t.state.status&&!1===e.retryOnMount)}(t,e)||t.state.dataUpdatedAt>0&&l(t,e,e.refetchOnMount)}function l(t,e,r){if(!1!==e.enabled){const s="function"===typeof r?r(t):r;return"always"===s||!1!==s&&d(t,e)}return!1}function h(t,e,r,s){return!1!==r.enabled&&(t!==e||!1===s.enabled)&&(!r.suspense||"error"!==t.state.status)&&d(t,r)}function d(t,e){return t.isStaleByTime(e.staleTime)}var p=r(67294);const f=r(61688).useSyncExternalStore;function y(){let t=!1;return{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t}}const R=p.createContext(y());var v=r(85945);const S=p.createContext(!1);S.Provider;function b(t,e){const r=(0,v.NL)({context:t.context}),s=p.useContext(S),i=p.useContext(R),u=r.defaultQueryOptions(t);u._optimisticResults=s?"isRestoring":"optimistic",u.onError&&(u.onError=n.V.batchCalls(u.onError)),u.onSuccess&&(u.onSuccess=n.V.batchCalls(u.onSuccess)),u.onSettled&&(u.onSettled=n.V.batchCalls(u.onSettled)),(t=>{t.suspense&&"number"!==typeof t.staleTime&&(t.staleTime=1e3)})(u),((t,e)=>{(t.suspense||t.useErrorBoundary)&&(e.isReset()||(t.retryOnMount=!1))})(u,i),(t=>{p.useEffect((()=>{t.clearReset()}),[t])})(i);const[o]=p.useState((()=>new e(r,u))),a=o.getOptimisticResult(u);if(f(p.useCallback((t=>s?()=>{}:o.subscribe(n.V.batchCalls(t))),[o,s]),(()=>o.getCurrentResult()),(()=>o.getCurrentResult())),p.useEffect((()=>{o.setOptions(u,{listeners:!1})}),[u,o]),((t,e,r)=>(null==t?void 0:t.suspense)&&((t,e)=>t.isLoading&&t.isFetching&&!e)(e,r))(u,a,s))throw((t,e,r)=>e.fetchOptimistic(t).then((({data:e})=>{null==t.onSuccess||t.onSuccess(e),null==t.onSettled||t.onSettled(e,null)})).catch((e=>{r.clearReset(),null==t.onError||t.onError(e),null==t.onSettled||t.onSettled(void 0,e)})))(u,o,i);if((({result:t,errorResetBoundary:e,useErrorBoundary:r,query:s})=>{return t.isError&&!e.isReset()&&!t.isFetching&&(n=r,i=[t.error,s],"function"===typeof n?n(...i):!!n);var n,i})({result:a,errorResetBoundary:i,useErrorBoundary:u.useErrorBoundary,query:o.getCurrentQuery()}))throw a.error;return u.notifyOnChangeProps?a:o.trackResult(a)}function m(t,e,r){return b((0,s._v)(t,e,r),a)}}}]);