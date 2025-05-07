var gn=Object.defineProperty;var un=(e,t,n)=>t in e?gn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var he=(e,t,n)=>un(e,typeof t!="symbol"?t+"":t,n);import{a as pn,f as bn,c as ft,l as I,d as b,o as hn,j as L,S as Ot,b as mn,H as fn}from"../assets/Header-DufANt5E.js";import*as o from"react";import m,{useState as Be,useEffect as wn}from"react";import"react-dom";class xn{constructor(){he(this,"api_base","https://fakestoreapi.com");he(this,"getProducts",async()=>{await pn(500);const t=await fetch("https://fakestoreapi.com/products");if(!t.ok)throw new Error("Failed to fetch posts");return t.json()});he(this,"getAll",()=>{let t=`${this.api_base}/products`;return bn(ft.getRows(t))});he(this,"deleteById",t=>{let n=`${this.api_base}/products/`;return ft.deleteRow(n,t)});this.initialize()}initialize(){}}var Cn=new xn,Z;function de(e,t){return e[t]}function yn(e=[],t,n=0){return[...e.slice(0,n),t,...e.slice(n)]}function Rn(e=[],t,n="id"){const a=e.slice(),l=de(t,n);return l?a.splice(a.findIndex(i=>de(i,n)===l),1):a.splice(a.findIndex(i=>i===t),1),a}function wt(e){return e.map((t,n)=>{const a=Object.assign(Object.assign({},t),{sortable:t.sortable||!!t.sortFunction||void 0});return t.id||(a.id=n+1),a})}function me(e,t){return Math.ceil(e/t)}function Ge(e,t){return Math.min(e,t)}(function(e){e.ASC="asc",e.DESC="desc"})(Z||(Z={}));const T=()=>null;function $t(e,t=[],n=[]){let a={},l=[...n];return t.length&&t.forEach(i=>{if(!i.when||typeof i.when!="function")throw new Error('"when" must be defined in the conditional style object and must be function');i.when(e)&&(a=i.style||{},i.classNames&&(l=[...l,...i.classNames]),typeof i.style=="function"&&(a=i.style(e)||{}))}),{conditionalStyle:a,classNames:l.join(" ")}}function Pe(e,t=[],n="id"){const a=de(e,n);return a?t.some(l=>de(l,n)===a):t.some(l=>l===e)}function Oe(e,t){return t?e.findIndex(n=>fe(n.id,t)):-1}function fe(e,t){return e==t}function vn(e,t){const n=!e.toggleOnSelectedRowsChange;switch(t.type){case"SELECT_ALL_ROWS":{const{keyField:a,rows:l,rowCount:i,mergeSelections:s}=t,d=!e.allSelected,u=!e.toggleOnSelectedRowsChange;if(s){const C=d?[...e.selectedRows,...l.filter(p=>!Pe(p,e.selectedRows,a))]:e.selectedRows.filter(p=>!Pe(p,l,a));return Object.assign(Object.assign({},e),{allSelected:d,selectedCount:C.length,selectedRows:C,toggleOnSelectedRowsChange:u})}return Object.assign(Object.assign({},e),{allSelected:d,selectedCount:d?i:0,selectedRows:d?l:[],toggleOnSelectedRowsChange:u})}case"SELECT_SINGLE_ROW":{const{keyField:a,row:l,isSelected:i,rowCount:s,singleSelect:d}=t;return d?i?Object.assign(Object.assign({},e),{selectedCount:0,allSelected:!1,selectedRows:[],toggleOnSelectedRowsChange:n}):Object.assign(Object.assign({},e),{selectedCount:1,allSelected:!1,selectedRows:[l],toggleOnSelectedRowsChange:n}):i?Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length>0?e.selectedRows.length-1:0,allSelected:!1,selectedRows:Rn(e.selectedRows,l,a),toggleOnSelectedRowsChange:n}):Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length+1,allSelected:e.selectedRows.length+1===s,selectedRows:yn(e.selectedRows,l),toggleOnSelectedRowsChange:n})}case"SELECT_MULTIPLE_ROWS":{const{keyField:a,selectedRows:l,totalRows:i,mergeSelections:s}=t;if(s){const d=[...e.selectedRows,...l.filter(u=>!Pe(u,e.selectedRows,a))];return Object.assign(Object.assign({},e),{selectedCount:d.length,allSelected:!1,selectedRows:d,toggleOnSelectedRowsChange:n})}return Object.assign(Object.assign({},e),{selectedCount:l.length,allSelected:l.length===i,selectedRows:l,toggleOnSelectedRowsChange:n})}case"CLEAR_SELECTED_ROWS":{const{selectedRowsFlag:a}=t;return Object.assign(Object.assign({},e),{allSelected:!1,selectedCount:0,selectedRows:[],selectedRowsFlag:a})}case"SORT_CHANGE":{const{sortDirection:a,selectedColumn:l,clearSelectedOnSort:i}=t;return Object.assign(Object.assign(Object.assign({},e),{selectedColumn:l,sortDirection:a,currentPage:1}),i&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:n})}case"CHANGE_PAGE":{const{page:a,paginationServer:l,visibleOnly:i,persistSelectedOnPageChange:s}=t,d=l&&s,u=l&&!s||i;return Object.assign(Object.assign(Object.assign(Object.assign({},e),{currentPage:a}),d&&{allSelected:!1}),u&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:n})}case"CHANGE_ROWS_PER_PAGE":{const{rowsPerPage:a,page:l}=t;return Object.assign(Object.assign({},e),{currentPage:l,rowsPerPage:a})}}}const Sn=I`
	pointer-events: none;
	opacity: 0.4;
`,En=b.div`
	position: relative;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	max-width: 100%;
	${({disabled:e})=>e&&Sn};
	${({theme:e})=>e.table.style};
`,On=I`
	position: sticky;
	position: -webkit-sticky; /* Safari */
	top: 0;
	z-index: 1;
`,$n=b.div`
	display: flex;
	width: 100%;
	${({$fixedHeader:e})=>e&&On};
	${({theme:e})=>e.head.style};
`,Pn=b.div`
	display: flex;
	align-items: stretch;
	width: 100%;
	${({theme:e})=>e.headRow.style};
	${({$dense:e,theme:t})=>e&&t.headRow.denseStyle};
`,Pt=(e,...t)=>I`
		@media screen and (max-width: ${599}px) {
			${I(e,...t)}
		}
	`,kn=(e,...t)=>I`
		@media screen and (max-width: ${959}px) {
			${I(e,...t)}
		}
	`,Dn=(e,...t)=>I`
		@media screen and (max-width: ${1280}px) {
			${I(e,...t)}
		}
	`,Hn=e=>(t,...n)=>I`
			@media screen and (max-width: ${e}px) {
				${I(t,...n)}
			}
		`,ge=b.div`
	position: relative;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	line-height: normal;
	${({theme:e,$headCell:t})=>e[t?"headCells":"cells"].style};
	${({$noPadding:e})=>e&&"padding: 0"};
`,kt=b(ge)`
	flex-grow: ${({button:e,grow:t})=>t===0||e?0:t||1};
	flex-shrink: 0;
	flex-basis: 0;
	max-width: ${({maxWidth:e})=>e||"100%"};
	min-width: ${({minWidth:e})=>e||"100px"};
	${({width:e})=>e&&I`
			min-width: ${e};
			max-width: ${e};
		`};
	${({right:e})=>e&&"justify-content: flex-end"};
	${({button:e,center:t})=>(t||e)&&"justify-content: center"};
	${({compact:e,button:t})=>(e||t)&&"padding: 0"};

	/* handle hiding cells */
	${({hide:e})=>e&&e==="sm"&&Pt`
    display: none;
  `};
	${({hide:e})=>e&&e==="md"&&kn`
    display: none;
  `};
	${({hide:e})=>e&&e==="lg"&&Dn`
    display: none;
  `};
	${({hide:e})=>e&&Number.isInteger(e)&&Hn(e)`
    display: none;
  `};
`,jn=I`
	div:first-child {
		white-space: ${({$wrapCell:e})=>e?"normal":"nowrap"};
		overflow: ${({$allowOverflow:e})=>e?"visible":"hidden"};
		text-overflow: ellipsis;
	}
`,Fn=b(kt).attrs(e=>({style:e.style}))`
	${({$renderAsCell:e})=>!e&&jn};
	${({theme:e,$isDragging:t})=>t&&e.cells.draggingStyle};
	${({$cellStyle:e})=>e};
`;var Tn=o.memo(function({id:e,column:t,row:n,rowIndex:a,dataTag:l,isDragging:i,onDragStart:s,onDragOver:d,onDragEnd:u,onDragEnter:C,onDragLeave:p}){const{conditionalStyle:f,classNames:j}=$t(n,t.conditionalCellStyles,["rdt_TableCell"]);return o.createElement(Fn,{id:e,"data-column-id":t.id,role:"cell",className:j,"data-tag":l,$cellStyle:t.style,$renderAsCell:!!t.cell,$allowOverflow:t.allowOverflow,button:t.button,center:t.center,compact:t.compact,grow:t.grow,hide:t.hide,maxWidth:t.maxWidth,minWidth:t.minWidth,right:t.right,width:t.width,$wrapCell:t.wrap,style:f,$isDragging:i,onDragStart:s,onDragOver:d,onDragEnd:u,onDragEnter:C,onDragLeave:p},!t.cell&&o.createElement("div",{"data-tag":l},function(y,R,P,x){return R?P&&typeof P=="function"?P(y,x):R(y,x):null}(n,t.selector,t.format,a)),t.cell&&t.cell(n,a,t,e))});const xt="input";var Dt=o.memo(function({name:e,component:t=xt,componentOptions:n={style:{}},indeterminate:a=!1,checked:l=!1,disabled:i=!1,onClick:s=T}){const d=t,u=d!==xt?n.style:(p=>Object.assign(Object.assign({fontSize:"18px"},!p&&{cursor:"pointer"}),{padding:0,marginTop:"1px",verticalAlign:"middle",position:"relative"}))(i),C=o.useMemo(()=>function(p,...f){let j;return Object.keys(p).map(y=>p[y]).forEach((y,R)=>{typeof y=="function"&&(j=Object.assign(Object.assign({},p),{[Object.keys(p)[R]]:y(...f)}))}),j||p}(n,a),[n,a]);return o.createElement(d,Object.assign({type:"checkbox",ref:p=>{p&&(p.indeterminate=a)},style:u,onClick:i?T:s,name:e,"aria-label":e,checked:l,disabled:i},C,{onChange:T}))});const In=b(ge)`
	flex: 0 0 48px;
	min-width: 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
`;function Ln({name:e,keyField:t,row:n,rowCount:a,selected:l,selectableRowsComponent:i,selectableRowsComponentProps:s,selectableRowsSingle:d,selectableRowDisabled:u,onSelectedRow:C}){const p=!(!u||!u(n));return o.createElement(In,{onClick:f=>f.stopPropagation(),className:"rdt_TableCell",$noPadding:!0},o.createElement(Dt,{name:e,component:i,componentOptions:s,checked:l,"aria-checked":l,onClick:()=>{C({type:"SELECT_SINGLE_ROW",row:n,isSelected:l,keyField:t,rowCount:a,singleSelect:d})},disabled:p}))}const Mn=b.button`
	display: inline-flex;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	border: none;
	background-color: transparent;
	${({theme:e})=>e.expanderButton.style};
`;function _n({disabled:e=!1,expanded:t=!1,expandableIcon:n,id:a,row:l,onToggled:i}){const s=t?n.expanded:n.collapsed;return o.createElement(Mn,{"aria-disabled":e,onClick:()=>i&&i(l),"data-testid":`expander-button-${a}`,disabled:e,"aria-label":t?"Collapse Row":"Expand Row",role:"button",type:"button"},s)}const An=b(ge)`
	white-space: nowrap;
	font-weight: 400;
	min-width: 48px;
	${({theme:e})=>e.expanderCell.style};
`;function zn({row:e,expanded:t=!1,expandableIcon:n,id:a,onToggled:l,disabled:i=!1}){return o.createElement(An,{onClick:s=>s.stopPropagation(),$noPadding:!0},o.createElement(_n,{id:a,row:e,expanded:t,expandableIcon:n,disabled:i,onToggled:l}))}const Nn=b.div`
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.expanderRow.style};
	${({$extendedRowStyle:e})=>e};
`;var Wn=o.memo(function({data:e,ExpanderComponent:t,expanderComponentProps:n,extendedRowStyle:a,extendedClassNames:l}){const i=["rdt_ExpanderRow",...l.split(" ").filter(s=>s!=="rdt_TableRow")].join(" ");return o.createElement(Nn,{className:i,$extendedRowStyle:a},o.createElement(t,Object.assign({data:e},n)))});const Ve="allowRowEvents";var ke,Ue,Ct;(function(e){e.LTR="ltr",e.RTL="rtl",e.AUTO="auto"})(ke||(ke={})),function(e){e.LEFT="left",e.RIGHT="right",e.CENTER="center"}(Ue||(Ue={})),function(e){e.SM="sm",e.MD="md",e.LG="lg"}(Ct||(Ct={}));const Bn=I`
	&:hover {
		${({$highlightOnHover:e,theme:t})=>e&&t.rows.highlightOnHoverStyle};
	}
`,Gn=I`
	&:hover {
		cursor: pointer;
	}
`,Vn=b.div.attrs(e=>({style:e.style}))`
	display: flex;
	align-items: stretch;
	align-content: stretch;
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.rows.style};
	${({$dense:e,theme:t})=>e&&t.rows.denseStyle};
	${({$striped:e,theme:t})=>e&&t.rows.stripedStyle};
	${({$highlightOnHover:e})=>e&&Bn};
	${({$pointerOnHover:e})=>e&&Gn};
	${({$selected:e,theme:t})=>e&&t.rows.selectedHighlightStyle};
	${({$conditionalStyle:e})=>e};
`;function Un({columns:e=[],conditionalRowStyles:t=[],defaultExpanded:n=!1,defaultExpanderDisabled:a=!1,dense:l=!1,expandableIcon:i,expandableRows:s=!1,expandableRowsComponent:d,expandableRowsComponentProps:u,expandableRowsHideExpander:C,expandOnRowClicked:p=!1,expandOnRowDoubleClicked:f=!1,highlightOnHover:j=!1,id:y,expandableInheritConditionalStyles:R,keyField:P,onRowClicked:x=T,onRowDoubleClicked:$=T,onRowMouseEnter:k=T,onRowMouseLeave:v=T,onRowExpandToggled:E=T,onSelectedRow:h=T,pointerOnHover:D=!1,row:S,rowCount:O,rowIndex:U,selectableRowDisabled:A=null,selectableRows:W=!1,selectableRowsComponent:X,selectableRowsComponentProps:H,selectableRowsHighlight:oe=!1,selectableRowsSingle:ue=!1,selected:ae,striped:le=!1,draggingColumnId:De,onDragStart:He,onDragOver:je,onDragEnd:Fe,onDragEnter:G,onDragLeave:xe}){const[V,Ce]=o.useState(n);o.useEffect(()=>{Ce(n)},[n]);const q=o.useCallback(()=>{Ce(!V),E(!V,S)},[V,E,S]),Te=D||s&&(p||f),Ie=o.useCallback(F=>{F.target.getAttribute("data-tag")===Ve&&(x(S,F),!a&&s&&p&&q())},[a,p,s,q,x,S]),ye=o.useCallback(F=>{F.target.getAttribute("data-tag")===Ve&&($(S,F),!a&&s&&f&&q())},[a,f,s,q,$,S]),Le=o.useCallback(F=>{k(S,F)},[k,S]),K=o.useCallback(F=>{v(S,F)},[v,S]),ee=de(S,P),{conditionalStyle:Re,classNames:ve}=$t(S,t,["rdt_TableRow"]),Me=oe&&ae,_e=R?Re:{},Ae=le&&U%2==0;return o.createElement(o.Fragment,null,o.createElement(Vn,{id:`row-${y}`,role:"row",$striped:Ae,$highlightOnHover:j,$pointerOnHover:!a&&Te,$dense:l,onClick:Ie,onDoubleClick:ye,onMouseEnter:Le,onMouseLeave:K,className:ve,$selected:Me,$conditionalStyle:Re},W&&o.createElement(Ln,{name:`select-row-${ee}`,keyField:P,row:S,rowCount:O,selected:ae,selectableRowsComponent:X,selectableRowsComponentProps:H,selectableRowDisabled:A,selectableRowsSingle:ue,onSelectedRow:h}),s&&!C&&o.createElement(zn,{id:ee,expandableIcon:i,expanded:V,row:S,onToggled:q,disabled:a}),e.map(F=>F.omit?null:o.createElement(Tn,{id:`cell-${F.id}-${ee}`,key:`cell-${F.id}-${ee}`,dataTag:F.ignoreRowClick||F.button?null:Ve,column:F,row:S,rowIndex:U,isDragging:fe(De,F.id),onDragStart:He,onDragOver:je,onDragEnd:Fe,onDragEnter:G,onDragLeave:xe}))),s&&V&&o.createElement(Wn,{key:`expander-${ee}`,data:S,extendedRowStyle:_e,extendedClassNames:ve,ExpanderComponent:d,expanderComponentProps:u}))}const Xn=b.span`
	padding: 2px;
	color: inherit;
	flex-grow: 0;
	flex-shrink: 0;
	${({$sortActive:e})=>e?"opacity: 1":"opacity: 0"};
	${({$sortDirection:e})=>e==="desc"&&"transform: rotate(180deg)"};
`,Kn=({sortActive:e,sortDirection:t})=>m.createElement(Xn,{$sortActive:e,$sortDirection:t},"▲"),Yn=b(kt)`
	${({button:e})=>e&&"text-align: center"};
	${({theme:e,$isDragging:t})=>t&&e.headCells.draggingStyle};
`,Jn=I`
	cursor: pointer;
	span.__rdt_custom_sort_icon__ {
		i,
		svg {
			transform: 'translate3d(0, 0, 0)';
			${({$sortActive:e})=>e?"opacity: 1":"opacity: 0"};
			color: inherit;
			font-size: 18px;
			height: 18px;
			width: 18px;
			backface-visibility: hidden;
			transform-style: preserve-3d;
			transition-duration: 95ms;
			transition-property: transform;
		}

		&.asc i,
		&.asc svg {
			transform: rotate(180deg);
		}
	}

	${({$sortActive:e})=>!e&&I`
			&:hover,
			&:focus {
				opacity: 0.7;

				span,
				span.__rdt_custom_sort_icon__ * {
					opacity: 0.7;
				}
			}
		`};
`,Qn=b.div`
	display: inline-flex;
	align-items: center;
	justify-content: inherit;
	height: 100%;
	width: 100%;
	outline: none;
	user-select: none;
	overflow: hidden;
	${({disabled:e})=>!e&&Jn};
`,Zn=b.div`
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;var qn=o.memo(function({column:e,disabled:t,draggingColumnId:n,selectedColumn:a={},sortDirection:l,sortIcon:i,sortServer:s,pagination:d,paginationServer:u,persistSelectedOnSort:C,selectableRowsVisibleOnly:p,onSort:f,onDragStart:j,onDragOver:y,onDragEnd:R,onDragEnter:P,onDragLeave:x}){o.useEffect(()=>{typeof e.selector=="string"&&console.error(`Warning: ${e.selector} is a string based column selector which has been deprecated as of v7 and will be removed in v8. Instead, use a selector function e.g. row => row[field]...`)},[]);const[$,k]=o.useState(!1),v=o.useRef(null);if(o.useEffect(()=>{v.current&&k(v.current.scrollWidth>v.current.clientWidth)},[$]),e.omit)return null;const E=()=>{if(!e.sortable&&!e.selector)return;let H=l;fe(a.id,e.id)&&(H=l===Z.ASC?Z.DESC:Z.ASC),f({type:"SORT_CHANGE",sortDirection:H,selectedColumn:e,clearSelectedOnSort:d&&u&&!C||s||p})},h=H=>o.createElement(Kn,{sortActive:H,sortDirection:l}),D=()=>o.createElement("span",{className:[l,"__rdt_custom_sort_icon__"].join(" ")},i),S=!(!e.sortable||!fe(a.id,e.id)),O=!e.sortable||t,U=e.sortable&&!i&&!e.right,A=e.sortable&&!i&&e.right,W=e.sortable&&i&&!e.right,X=e.sortable&&i&&e.right;return o.createElement(Yn,{"data-column-id":e.id,className:"rdt_TableCol",$headCell:!0,allowOverflow:e.allowOverflow,button:e.button,compact:e.compact,grow:e.grow,hide:e.hide,maxWidth:e.maxWidth,minWidth:e.minWidth,right:e.right,center:e.center,width:e.width,draggable:e.reorder,$isDragging:fe(e.id,n),onDragStart:j,onDragOver:y,onDragEnd:R,onDragEnter:P,onDragLeave:x},e.name&&o.createElement(Qn,{"data-column-id":e.id,"data-sort-id":e.id,role:"columnheader",tabIndex:0,className:"rdt_TableCol_Sortable",onClick:O?void 0:E,onKeyPress:O?void 0:H=>{H.key==="Enter"&&E()},$sortActive:!O&&S,disabled:O},!O&&X&&D(),!O&&A&&h(S),typeof e.name=="string"?o.createElement(Zn,{title:$?e.name:void 0,ref:v,"data-column-id":e.id},e.name):e.name,!O&&W&&D(),!O&&U&&h(S)))});const eo=b(ge)`
	flex: 0 0 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	font-size: unset;
`;function to({headCell:e=!0,rowData:t,keyField:n,allSelected:a,mergeSelections:l,selectedRows:i,selectableRowsComponent:s,selectableRowsComponentProps:d,selectableRowDisabled:u,onSelectAllRows:C}){const p=i.length>0&&!a,f=u?t.filter(R=>!u(R)):t,j=f.length===0,y=Math.min(t.length,f.length);return o.createElement(eo,{className:"rdt_TableCol",$headCell:e,$noPadding:!0},o.createElement(Dt,{name:"select-all-rows",component:s,componentOptions:d,onClick:()=>{C({type:"SELECT_ALL_ROWS",rows:f,rowCount:y,mergeSelections:l,keyField:n})},checked:a,indeterminate:p,disabled:j}))}function Ht(e=ke.AUTO){const t=typeof window=="object",[n,a]=o.useState(!1);return o.useEffect(()=>{if(t)if(e!=="auto")a(e==="rtl");else{const l=!(!window.document||!window.document.createElement),i=document.getElementsByTagName("BODY")[0],s=document.getElementsByTagName("HTML")[0],d=i.dir==="rtl"||s.dir==="rtl";a(l&&d)}},[e,t]),n}const no=b.div`
	display: flex;
	align-items: center;
	flex: 1 0 auto;
	height: 100%;
	color: ${({theme:e})=>e.contextMenu.fontColor};
	font-size: ${({theme:e})=>e.contextMenu.fontSize};
	font-weight: 400;
`,oo=b.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-wrap: wrap;
`,yt=b.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	box-sizing: inherit;
	z-index: 1;
	align-items: center;
	justify-content: space-between;
	display: flex;
	${({$rtl:e})=>e&&"direction: rtl"};
	${({theme:e})=>e.contextMenu.style};
	${({theme:e,$visible:t})=>t&&e.contextMenu.activeStyle};
`;function ao({contextMessage:e,contextActions:t,contextComponent:n,selectedCount:a,direction:l}){const i=Ht(l),s=a>0;return n?o.createElement(yt,{$visible:s},o.cloneElement(n,{selectedCount:a})):o.createElement(yt,{$visible:s,$rtl:i},o.createElement(no,null,((d,u,C)=>{if(u===0)return null;const p=u===1?d.singular:d.plural;return C?`${u} ${d.message||""} ${p}`:`${u} ${p} ${d.message||""}`})(e,a,i)),o.createElement(oo,null,t))}const lo=b.div`
	position: relative;
	box-sizing: border-box;
	overflow: hidden;
	display: flex;
	flex: 1 1 auto;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	flex-wrap: wrap;
	${({theme:e})=>e.header.style}
`,ro=b.div`
	flex: 1 0 auto;
	color: ${({theme:e})=>e.header.fontColor};
	font-size: ${({theme:e})=>e.header.fontSize};
	font-weight: 400;
`,io=b.div`
	flex: 1 0 auto;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	> * {
		margin-left: 5px;
	}
`,so=({title:e,actions:t=null,contextMessage:n,contextActions:a,contextComponent:l,selectedCount:i,direction:s,showMenu:d=!0})=>o.createElement(lo,{className:"rdt_TableHeader",role:"heading","aria-level":1},o.createElement(ro,null,e),t&&o.createElement(io,null,t),d&&o.createElement(ao,{contextMessage:n,contextActions:a,contextComponent:l,direction:s,selectedCount:i}));function jt(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n}const co={left:"flex-start",right:"flex-end",center:"center"},go=b.header`
	position: relative;
	display: flex;
	flex: 1 1 auto;
	box-sizing: border-box;
	align-items: center;
	padding: 4px 16px 4px 24px;
	width: 100%;
	justify-content: ${({align:e})=>co[e]};
	flex-wrap: ${({$wrapContent:e})=>e?"wrap":"nowrap"};
	${({theme:e})=>e.subHeader.style}
`,uo=e=>{var{align:t="right",wrapContent:n=!0}=e,a=jt(e,["align","wrapContent"]);return o.createElement(go,Object.assign({align:t,$wrapContent:n},a))},po=b.div`
	display: flex;
	flex-direction: column;
`,bo=b.div`
	position: relative;
	width: 100%;
	border-radius: inherit;
	${({$responsive:e,$fixedHeader:t})=>e&&I`
			overflow-x: auto;

			// hidden prevents vertical scrolling in firefox when fixedHeader is disabled
			overflow-y: ${t?"auto":"hidden"};
			min-height: 0;
		`};

	${({$fixedHeader:e=!1,$fixedHeaderScrollHeight:t="100vh"})=>e&&I`
			max-height: ${t};
			-webkit-overflow-scrolling: touch;
		`};

	${({theme:e})=>e.responsiveWrapper.style};
`,Rt=b.div`
	position: relative;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${e=>e.theme.progress.style};
`,ho=b.div`
	position: relative;
	width: 100%;
	${({theme:e})=>e.tableWrapper.style};
`,mo=b(ge)`
	white-space: nowrap;
	${({theme:e})=>e.expanderCell.style};
`,fo=b.div`
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${({theme:e})=>e.noData.style};
`,wo=()=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},m.createElement("path",{d:"M7 10l5 5 5-5z"}),m.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),xo=b.select`
	cursor: pointer;
	height: 24px;
	max-width: 100%;
	user-select: none;
	padding-left: 8px;
	padding-right: 24px;
	box-sizing: content-box;
	font-size: inherit;
	color: inherit;
	border: none;
	background-color: transparent;
	appearance: none;
	direction: ltr;
	flex-shrink: 0;

	&::-ms-expand {
		display: none;
	}

	&:disabled::-ms-expand {
		background: #f60;
	}

	option {
		color: initial;
	}
`,Co=b.div`
	position: relative;
	flex-shrink: 0;
	font-size: inherit;
	color: inherit;
	margin-top: 1px;

	svg {
		top: 0;
		right: 0;
		color: inherit;
		position: absolute;
		fill: currentColor;
		width: 24px;
		height: 24px;
		display: inline-block;
		user-select: none;
		pointer-events: none;
	}
`,yo=e=>{var{defaultValue:t,onChange:n}=e,a=jt(e,["defaultValue","onChange"]);return o.createElement(Co,null,o.createElement(xo,Object.assign({onChange:n,defaultValue:t},a)),o.createElement(wo,null))},r={columns:[],data:[],title:"",keyField:"id",selectableRows:!1,selectableRowsHighlight:!1,selectableRowsNoSelectAll:!1,selectableRowSelected:null,selectableRowDisabled:null,selectableRowsComponent:"input",selectableRowsComponentProps:{},selectableRowsVisibleOnly:!1,selectableRowsSingle:!1,clearSelectedRows:!1,expandableRows:!1,expandableRowDisabled:null,expandableRowExpanded:null,expandOnRowClicked:!1,expandableRowsHideExpander:!1,expandOnRowDoubleClicked:!1,expandableInheritConditionalStyles:!1,expandableRowsComponent:function(){return m.createElement("div",null,"To add an expander pass in a component instance via ",m.createElement("strong",null,"expandableRowsComponent"),". You can then access props.data from this component.")},expandableIcon:{collapsed:m.createElement(()=>m.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},m.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),m.createElement("path",{d:"M0-.25h24v24H0z",fill:"none"})),null),expanded:m.createElement(()=>m.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},m.createElement("path",{d:"M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"}),m.createElement("path",{d:"M0-.75h24v24H0z",fill:"none"})),null)},expandableRowsComponentProps:{},progressPending:!1,progressComponent:m.createElement("div",{style:{fontSize:"24px",fontWeight:700,padding:"24px"}},"Loading..."),persistTableHead:!1,sortIcon:null,sortFunction:null,sortServer:!1,striped:!1,highlightOnHover:!1,pointerOnHover:!1,noContextMenu:!1,contextMessage:{singular:"item",plural:"items",message:"selected"},actions:null,contextActions:null,contextComponent:null,defaultSortFieldId:null,defaultSortAsc:!0,responsive:!0,noDataComponent:m.createElement("div",{style:{padding:"24px"}},"There are no records to display"),disabled:!1,noTableHead:!1,noHeader:!1,subHeader:!1,subHeaderAlign:Ue.RIGHT,subHeaderWrap:!0,subHeaderComponent:null,fixedHeader:!1,fixedHeaderScrollHeight:"100vh",pagination:!1,paginationServer:!1,paginationServerOptions:{persistSelectedOnSort:!1,persistSelectedOnPageChange:!1},paginationDefaultPage:1,paginationResetDefaultPage:!1,paginationTotalRows:0,paginationPerPage:10,paginationRowsPerPageOptions:[10,15,20,25,30],paginationComponent:null,paginationComponentOptions:{},paginationIconFirstPage:m.createElement(()=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},m.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),m.createElement("path",{fill:"none",d:"M24 24H0V0h24v24z"})),null),paginationIconLastPage:m.createElement(()=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},m.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),m.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"})),null),paginationIconNext:m.createElement(()=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},m.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),m.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),null),paginationIconPrevious:m.createElement(()=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},m.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),m.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),null),dense:!1,conditionalRowStyles:[],theme:"default",customStyles:{},direction:ke.AUTO,onChangePage:T,onChangeRowsPerPage:T,onRowClicked:T,onRowDoubleClicked:T,onRowMouseEnter:T,onRowMouseLeave:T,onRowExpandToggled:T,onSelectedRowsChange:T,onSort:T,onColumnOrderChange:T},Ro={rowsPerPageText:"Rows per page:",rangeSeparatorText:"of",noRowsPerPage:!1,selectAllRowsItem:!1,selectAllRowsItemText:"All"},vo=b.nav`
	display: flex;
	flex: 1 1 auto;
	justify-content: flex-end;
	align-items: center;
	box-sizing: border-box;
	padding-right: 8px;
	padding-left: 8px;
	width: 100%;
	${({theme:e})=>e.pagination.style};
`,$e=b.button`
	position: relative;
	display: block;
	user-select: none;
	border: none;
	${({theme:e})=>e.pagination.pageButtonsStyle};
	${({$isRTL:e})=>e&&"transform: scale(-1, -1)"};
`,So=b.div`
	display: flex;
	align-items: center;
	border-radius: 4px;
	white-space: nowrap;
	${Pt`
    width: 100%;
    justify-content: space-around;
  `};
`,Ft=b.span`
	flex-shrink: 1;
	user-select: none;
`,Eo=b(Ft)`
	margin: 0 24px;
`,Oo=b(Ft)`
	margin: 0 4px;
`;var $o=o.memo(function({rowsPerPage:e,rowCount:t,currentPage:n,direction:a=r.direction,paginationRowsPerPageOptions:l=r.paginationRowsPerPageOptions,paginationIconLastPage:i=r.paginationIconLastPage,paginationIconFirstPage:s=r.paginationIconFirstPage,paginationIconNext:d=r.paginationIconNext,paginationIconPrevious:u=r.paginationIconPrevious,paginationComponentOptions:C=r.paginationComponentOptions,onChangeRowsPerPage:p=r.onChangeRowsPerPage,onChangePage:f=r.onChangePage}){const j=(()=>{const H=typeof window=="object";function oe(){return{width:H?window.innerWidth:void 0,height:H?window.innerHeight:void 0}}const[ue,ae]=o.useState(oe);return o.useEffect(()=>{if(!H)return()=>null;function le(){ae(oe())}return window.addEventListener("resize",le),()=>window.removeEventListener("resize",le)},[]),ue})(),y=Ht(a),R=j.width&&j.width>599,P=me(t,e),x=n*e,$=x-e+1,k=n===1,v=n===P,E=Object.assign(Object.assign({},Ro),C),h=n===P?`${$}-${t} ${E.rangeSeparatorText} ${t}`:`${$}-${x} ${E.rangeSeparatorText} ${t}`,D=o.useCallback(()=>f(n-1),[n,f]),S=o.useCallback(()=>f(n+1),[n,f]),O=o.useCallback(()=>f(1),[f]),U=o.useCallback(()=>f(me(t,e)),[f,t,e]),A=o.useCallback(H=>p(Number(H.target.value),n),[n,p]),W=l.map(H=>o.createElement("option",{key:H,value:H},H));E.selectAllRowsItem&&W.push(o.createElement("option",{key:-1,value:t},E.selectAllRowsItemText));const X=o.createElement(yo,{onChange:A,defaultValue:e,"aria-label":E.rowsPerPageText},W);return o.createElement(vo,{className:"rdt_Pagination"},!E.noRowsPerPage&&R&&o.createElement(o.Fragment,null,o.createElement(Oo,null,E.rowsPerPageText),X),R&&o.createElement(Eo,null,h),o.createElement(So,null,o.createElement($e,{id:"pagination-first-page",type:"button","aria-label":"First Page","aria-disabled":k,onClick:O,disabled:k,$isRTL:y},s),o.createElement($e,{id:"pagination-previous-page",type:"button","aria-label":"Previous Page","aria-disabled":k,onClick:D,disabled:k,$isRTL:y},u),!E.noRowsPerPage&&!R&&X,o.createElement($e,{id:"pagination-next-page",type:"button","aria-label":"Next Page","aria-disabled":v,onClick:S,disabled:v,$isRTL:y},d),o.createElement($e,{id:"pagination-last-page",type:"button","aria-label":"Last Page","aria-disabled":v,onClick:U,disabled:v,$isRTL:y},i)))});const ne=(e,t)=>{const n=o.useRef(!0);o.useEffect(()=>{n.current?n.current=!1:e()},t)};function Po(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ko=function(e){return function(t){return!!t&&typeof t=="object"}(e)&&!function(t){var n=Object.prototype.toString.call(t);return n==="[object RegExp]"||n==="[object Date]"||function(a){return a.$$typeof===Do}(t)}(e)},Do=typeof Symbol=="function"&&Symbol.for?Symbol.for("react.element"):60103;function we(e,t){return t.clone!==!1&&t.isMergeableObject(e)?ce((n=e,Array.isArray(n)?[]:{}),e,t):e;var n}function Ho(e,t,n){return e.concat(t).map(function(a){return we(a,n)})}function vt(e){return Object.keys(e).concat(function(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter(function(n){return Object.propertyIsEnumerable.call(t,n)}):[]}(e))}function St(e,t){try{return t in e}catch{return!1}}function jo(e,t,n){var a={};return n.isMergeableObject(e)&&vt(e).forEach(function(l){a[l]=we(e[l],n)}),vt(t).forEach(function(l){(function(i,s){return St(i,s)&&!(Object.hasOwnProperty.call(i,s)&&Object.propertyIsEnumerable.call(i,s))})(e,l)||(St(e,l)&&n.isMergeableObject(t[l])?a[l]=function(i,s){if(!s.customMerge)return ce;var d=s.customMerge(i);return typeof d=="function"?d:ce}(l,n)(e[l],t[l],n):a[l]=we(t[l],n))}),a}function ce(e,t,n){(n=n||{}).arrayMerge=n.arrayMerge||Ho,n.isMergeableObject=n.isMergeableObject||ko,n.cloneUnlessOtherwiseSpecified=we;var a=Array.isArray(t);return a===Array.isArray(e)?a?n.arrayMerge(e,t,n):jo(e,t,n):we(t,n)}ce.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(n,a){return ce(n,a,t)},{})};var Xe=Po(ce);const Et={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)"},background:{default:"#FFFFFF"},context:{background:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},divider:{default:"rgba(0,0,0,.12)"},button:{default:"rgba(0,0,0,.54)",focus:"rgba(0,0,0,.12)",hover:"rgba(0,0,0,.12)",disabled:"rgba(0, 0, 0, .18)"},selected:{default:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},highlightOnHover:{default:"#EEEEEE",text:"rgba(0, 0, 0, 0.87)"},striped:{default:"#FAFAFA",text:"rgba(0, 0, 0, 0.87)"}},Q={default:Et,light:Et,dark:{text:{primary:"#FFFFFF",secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(0,0,0,.12)"},background:{default:"#424242"},context:{background:"#E91E63",text:"#FFFFFF"},divider:{default:"rgba(81, 81, 81, 1)"},button:{default:"#FFFFFF",focus:"rgba(255, 255, 255, .54)",hover:"rgba(255, 255, 255, .12)",disabled:"rgba(255, 255, 255, .18)"},selected:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},highlightOnHover:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},striped:{default:"rgba(0, 0, 0, .87)",text:"#FFFFFF"}}};function Fo(e="default",t,n="default"){return Q[e]||(Q[e]=Xe(Q[n],t||{})),Q[e]=Xe(Q[e],t||{}),Q[e]}function To(e,t,n,a){const[l,i]=o.useState(()=>wt(e)),[s,d]=o.useState(""),u=o.useRef("");ne(()=>{i(wt(e))},[e]);const C=o.useCallback(x=>{var $,k,v;const{attributes:E}=x.target,h=($=E.getNamedItem("data-column-id"))===null||$===void 0?void 0:$.value;h&&(u.current=((v=(k=l[Oe(l,h)])===null||k===void 0?void 0:k.id)===null||v===void 0?void 0:v.toString())||"",d(u.current))},[l]),p=o.useCallback(x=>{var $;const{attributes:k}=x.target,v=($=k.getNamedItem("data-column-id"))===null||$===void 0?void 0:$.value;if(v&&u.current&&v!==u.current){const E=Oe(l,u.current),h=Oe(l,v),D=[...l];D[E]=l[h],D[h]=l[E],i(D),t(D)}},[t,l]),f=o.useCallback(x=>{x.preventDefault()},[]),j=o.useCallback(x=>{x.preventDefault()},[]),y=o.useCallback(x=>{x.preventDefault(),u.current="",d("")},[]),R=function(x=!1){return x?Z.ASC:Z.DESC}(a),P=o.useMemo(()=>l[Oe(l,n==null?void 0:n.toString())]||{},[n,l]);return{tableColumns:l,draggingColumnId:s,handleDragStart:C,handleDragEnter:p,handleDragOver:f,handleDragLeave:j,handleDragEnd:y,defaultSortDirection:R,defaultSortColumn:P}}var Io=o.memo(function(e){const{data:t=r.data,columns:n=r.columns,title:a=r.title,actions:l=r.actions,keyField:i=r.keyField,striped:s=r.striped,highlightOnHover:d=r.highlightOnHover,pointerOnHover:u=r.pointerOnHover,dense:C=r.dense,selectableRows:p=r.selectableRows,selectableRowsSingle:f=r.selectableRowsSingle,selectableRowsHighlight:j=r.selectableRowsHighlight,selectableRowsNoSelectAll:y=r.selectableRowsNoSelectAll,selectableRowsVisibleOnly:R=r.selectableRowsVisibleOnly,selectableRowSelected:P=r.selectableRowSelected,selectableRowDisabled:x=r.selectableRowDisabled,selectableRowsComponent:$=r.selectableRowsComponent,selectableRowsComponentProps:k=r.selectableRowsComponentProps,onRowExpandToggled:v=r.onRowExpandToggled,onSelectedRowsChange:E=r.onSelectedRowsChange,expandableIcon:h=r.expandableIcon,onChangeRowsPerPage:D=r.onChangeRowsPerPage,onChangePage:S=r.onChangePage,paginationServer:O=r.paginationServer,paginationServerOptions:U=r.paginationServerOptions,paginationTotalRows:A=r.paginationTotalRows,paginationDefaultPage:W=r.paginationDefaultPage,paginationResetDefaultPage:X=r.paginationResetDefaultPage,paginationPerPage:H=r.paginationPerPage,paginationRowsPerPageOptions:oe=r.paginationRowsPerPageOptions,paginationIconLastPage:ue=r.paginationIconLastPage,paginationIconFirstPage:ae=r.paginationIconFirstPage,paginationIconNext:le=r.paginationIconNext,paginationIconPrevious:De=r.paginationIconPrevious,paginationComponent:He=r.paginationComponent,paginationComponentOptions:je=r.paginationComponentOptions,responsive:Fe=r.responsive,progressPending:G=r.progressPending,progressComponent:xe=r.progressComponent,persistTableHead:V=r.persistTableHead,noDataComponent:Ce=r.noDataComponent,disabled:q=r.disabled,noTableHead:Te=r.noTableHead,noHeader:Ie=r.noHeader,fixedHeader:ye=r.fixedHeader,fixedHeaderScrollHeight:Le=r.fixedHeaderScrollHeight,pagination:K=r.pagination,subHeader:ee=r.subHeader,subHeaderAlign:Re=r.subHeaderAlign,subHeaderWrap:ve=r.subHeaderWrap,subHeaderComponent:Me=r.subHeaderComponent,noContextMenu:_e=r.noContextMenu,contextMessage:Ae=r.contextMessage,contextActions:F=r.contextActions,contextComponent:Tt=r.contextComponent,expandableRows:Se=r.expandableRows,onRowClicked:Ke=r.onRowClicked,onRowDoubleClicked:Ye=r.onRowDoubleClicked,onRowMouseEnter:Je=r.onRowMouseEnter,onRowMouseLeave:Qe=r.onRowMouseLeave,sortIcon:It=r.sortIcon,onSort:Lt=r.onSort,sortFunction:Ze=r.sortFunction,sortServer:ze=r.sortServer,expandableRowsComponent:Mt=r.expandableRowsComponent,expandableRowsComponentProps:_t=r.expandableRowsComponentProps,expandableRowDisabled:qe=r.expandableRowDisabled,expandableRowsHideExpander:et=r.expandableRowsHideExpander,expandOnRowClicked:At=r.expandOnRowClicked,expandOnRowDoubleClicked:zt=r.expandOnRowDoubleClicked,expandableRowExpanded:tt=r.expandableRowExpanded,expandableInheritConditionalStyles:Nt=r.expandableInheritConditionalStyles,defaultSortFieldId:Wt=r.defaultSortFieldId,defaultSortAsc:Bt=r.defaultSortAsc,clearSelectedRows:nt=r.clearSelectedRows,conditionalRowStyles:Gt=r.conditionalRowStyles,theme:ot=r.theme,customStyles:at=r.customStyles,direction:pe=r.direction,onColumnOrderChange:Vt=r.onColumnOrderChange,className:Ut,ariaLabel:lt}=e,{tableColumns:rt,draggingColumnId:it,handleDragStart:st,handleDragEnter:dt,handleDragOver:ct,handleDragLeave:gt,handleDragEnd:ut,defaultSortDirection:Xt,defaultSortColumn:Kt}=To(n,Vt,Wt,Bt),[{rowsPerPage:Y,currentPage:z,selectedRows:Ne,allSelected:pt,selectedCount:bt,selectedColumn:B,sortDirection:re,toggleOnSelectedRowsChange:Yt},te]=o.useReducer(vn,{allSelected:!1,selectedCount:0,selectedRows:[],selectedColumn:Kt,toggleOnSelectedRowsChange:!1,sortDirection:Xt,currentPage:W,rowsPerPage:H,selectedRowsFlag:!1,contextMessage:r.contextMessage}),{persistSelectedOnSort:ht=!1,persistSelectedOnPageChange:Ee=!1}=U,mt=!(!O||!Ee&&!ht),Jt=K&&!G&&t.length>0,Qt=He||$o,Zt=o.useMemo(()=>((c={},w="default",_="default")=>{const N=Q[w]?w:_;return Xe({table:{style:{color:(g=Q[N]).text.primary,backgroundColor:g.background.default}},tableWrapper:{style:{display:"table"}},responsiveWrapper:{style:{}},header:{style:{fontSize:"22px",color:g.text.primary,backgroundColor:g.background.default,minHeight:"56px",paddingLeft:"16px",paddingRight:"8px"}},subHeader:{style:{backgroundColor:g.background.default,minHeight:"52px"}},head:{style:{color:g.text.primary,fontSize:"12px",fontWeight:500}},headRow:{style:{backgroundColor:g.background.default,minHeight:"52px",borderBottomWidth:"1px",borderBottomColor:g.divider.default,borderBottomStyle:"solid"},denseStyle:{minHeight:"32px"}},headCells:{style:{paddingLeft:"16px",paddingRight:"16px"},draggingStyle:{cursor:"move"}},contextMenu:{style:{backgroundColor:g.context.background,fontSize:"18px",fontWeight:400,color:g.context.text,paddingLeft:"16px",paddingRight:"8px",transform:"translate3d(0, -100%, 0)",transitionDuration:"125ms",transitionTimingFunction:"cubic-bezier(0, 0, 0.2, 1)",willChange:"transform"},activeStyle:{transform:"translate3d(0, 0, 0)"}},cells:{style:{paddingLeft:"16px",paddingRight:"16px",wordBreak:"break-word"},draggingStyle:{}},rows:{style:{fontSize:"13px",fontWeight:400,color:g.text.primary,backgroundColor:g.background.default,minHeight:"48px","&:not(:last-of-type)":{borderBottomStyle:"solid",borderBottomWidth:"1px",borderBottomColor:g.divider.default}},denseStyle:{minHeight:"32px"},selectedHighlightStyle:{"&:nth-of-type(n)":{color:g.selected.text,backgroundColor:g.selected.default,borderBottomColor:g.background.default}},highlightOnHoverStyle:{color:g.highlightOnHover.text,backgroundColor:g.highlightOnHover.default,transitionDuration:"0.15s",transitionProperty:"background-color",borderBottomColor:g.background.default,outlineStyle:"solid",outlineWidth:"1px",outlineColor:g.background.default},stripedStyle:{color:g.striped.text,backgroundColor:g.striped.default}},expanderRow:{style:{color:g.text.primary,backgroundColor:g.background.default}},expanderCell:{style:{flex:"0 0 48px"}},expanderButton:{style:{color:g.button.default,fill:g.button.default,backgroundColor:"transparent",borderRadius:"2px",transition:"0.25s",height:"100%",width:"100%","&:hover:enabled":{cursor:"pointer"},"&:disabled":{color:g.button.disabled},"&:hover:not(:disabled)":{cursor:"pointer",backgroundColor:g.button.hover},"&:focus":{outline:"none",backgroundColor:g.button.focus},svg:{margin:"auto"}}},pagination:{style:{color:g.text.secondary,fontSize:"13px",minHeight:"56px",backgroundColor:g.background.default,borderTopStyle:"solid",borderTopWidth:"1px",borderTopColor:g.divider.default},pageButtonsStyle:{borderRadius:"50%",height:"40px",width:"40px",padding:"8px",margin:"px",cursor:"pointer",transition:"0.4s",color:g.button.default,fill:g.button.default,backgroundColor:"transparent","&:disabled":{cursor:"unset",color:g.button.disabled,fill:g.button.disabled},"&:hover:not(:disabled)":{backgroundColor:g.button.hover},"&:focus":{outline:"none",backgroundColor:g.button.focus}}},noData:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:g.text.primary,backgroundColor:g.background.default}},progress:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:g.text.primary,backgroundColor:g.background.default}}},c);var g})(at,ot),[at,ot]),qt=o.useMemo(()=>Object.assign({},pe!=="auto"&&{dir:pe}),[pe]),M=o.useMemo(()=>{if(ze)return t;if(B!=null&&B.sortFunction&&typeof B.sortFunction=="function"){const c=B.sortFunction,w=re===Z.ASC?c:(_,N)=>-1*c(_,N);return[...t].sort(w)}return function(c,w,_,N){return w?N&&typeof N=="function"?N(c.slice(0),w,_):c.slice(0).sort((g,We)=>{const se=w(g),J=w(We);if(_==="asc"){if(se<J)return-1;if(se>J)return 1}if(_==="desc"){if(se>J)return-1;if(se<J)return 1}return 0}):c}(t,B==null?void 0:B.selector,re,Ze)},[ze,B,re,t,Ze]),be=o.useMemo(()=>{if(K&&!O){const c=z*Y,w=c-Y;return M.slice(w,c)}return M},[z,K,O,Y,M]),en=o.useCallback(c=>{te(c)},[]),tn=o.useCallback(c=>{te(c)},[]),nn=o.useCallback(c=>{te(c)},[]),on=o.useCallback((c,w)=>Ke(c,w),[Ke]),an=o.useCallback((c,w)=>Ye(c,w),[Ye]),ln=o.useCallback((c,w)=>Je(c,w),[Je]),rn=o.useCallback((c,w)=>Qe(c,w),[Qe]),ie=o.useCallback(c=>te({type:"CHANGE_PAGE",page:c,paginationServer:O,visibleOnly:R,persistSelectedOnPageChange:Ee}),[O,Ee,R]),sn=o.useCallback(c=>{const w=me(A||be.length,c),_=Ge(z,w);O||ie(_),te({type:"CHANGE_ROWS_PER_PAGE",page:_,rowsPerPage:c})},[z,ie,O,A,be.length]);if(K&&!O&&M.length>0&&be.length===0){const c=me(M.length,Y),w=Ge(z,c);ie(w)}ne(()=>{E({allSelected:pt,selectedCount:bt,selectedRows:Ne.slice(0)})},[Yt]),ne(()=>{Lt(B,re,M.slice(0))},[B,re]),ne(()=>{S(z,A||M.length)},[z]),ne(()=>{D(Y,z)},[Y]),ne(()=>{ie(W)},[W,X]),ne(()=>{if(K&&O&&A>0){const c=me(A,Y),w=Ge(z,c);z!==w&&ie(w)}},[A]),o.useEffect(()=>{te({type:"CLEAR_SELECTED_ROWS",selectedRowsFlag:nt})},[f,nt]),o.useEffect(()=>{if(!P)return;const c=M.filter(_=>P(_)),w=f?c.slice(0,1):c;te({type:"SELECT_MULTIPLE_ROWS",keyField:i,selectedRows:w,totalRows:M.length,mergeSelections:mt})},[t,P]);const dn=R?be:M,cn=Ee||f||y;return o.createElement(hn,{theme:Zt},!Ie&&(!!a||!!l)&&o.createElement(so,{title:a,actions:l,showMenu:!_e,selectedCount:bt,direction:pe,contextActions:F,contextComponent:Tt,contextMessage:Ae}),ee&&o.createElement(uo,{align:Re,wrapContent:ve},Me),o.createElement(bo,Object.assign({$responsive:Fe,$fixedHeader:ye,$fixedHeaderScrollHeight:Le,className:Ut},qt),o.createElement(ho,null,G&&!V&&o.createElement(Rt,null,xe),o.createElement(En,Object.assign({disabled:q,className:"rdt_Table",role:"table"},lt&&{"aria-label":lt}),!Te&&(!!V||M.length>0&&!G)&&o.createElement($n,{className:"rdt_TableHead",role:"rowgroup",$fixedHeader:ye},o.createElement(Pn,{className:"rdt_TableHeadRow",role:"row",$dense:C},p&&(cn?o.createElement(ge,{style:{flex:"0 0 48px"}}):o.createElement(to,{allSelected:pt,selectedRows:Ne,selectableRowsComponent:$,selectableRowsComponentProps:k,selectableRowDisabled:x,rowData:dn,keyField:i,mergeSelections:mt,onSelectAllRows:tn})),Se&&!et&&o.createElement(mo,null),rt.map(c=>o.createElement(qn,{key:c.id,column:c,selectedColumn:B,disabled:G||M.length===0,pagination:K,paginationServer:O,persistSelectedOnSort:ht,selectableRowsVisibleOnly:R,sortDirection:re,sortIcon:It,sortServer:ze,onSort:en,onDragStart:st,onDragOver:ct,onDragEnd:ut,onDragEnter:dt,onDragLeave:gt,draggingColumnId:it})))),!M.length&&!G&&o.createElement(fo,null,Ce),G&&V&&o.createElement(Rt,null,xe),!G&&M.length>0&&o.createElement(po,{className:"rdt_TableBody",role:"rowgroup"},be.map((c,w)=>{const _=de(c,i),N=function(J=""){return typeof J!="number"&&(!J||J.length===0)}(_)?w:_,g=Pe(c,Ne,i),We=!!(Se&&tt&&tt(c)),se=!!(Se&&qe&&qe(c));return o.createElement(Un,{id:N,key:N,keyField:i,"data-row-id":N,columns:rt,row:c,rowCount:M.length,rowIndex:w,selectableRows:p,expandableRows:Se,expandableIcon:h,highlightOnHover:d,pointerOnHover:u,dense:C,expandOnRowClicked:At,expandOnRowDoubleClicked:zt,expandableRowsComponent:Mt,expandableRowsComponentProps:_t,expandableRowsHideExpander:et,defaultExpanderDisabled:se,defaultExpanded:We,expandableInheritConditionalStyles:Nt,conditionalRowStyles:Gt,selected:g,selectableRowsHighlight:j,selectableRowsComponent:$,selectableRowsComponentProps:k,selectableRowDisabled:x,selectableRowsSingle:f,striped:s,onRowExpandToggled:v,onRowClicked:on,onRowDoubleClicked:an,onRowMouseEnter:ln,onRowMouseLeave:rn,onSelectedRow:nn,draggingColumnId:it,onDragStart:st,onDragOver:ct,onDragEnd:ut,onDragEnter:dt,onDragLeave:gt})}))))),Jt&&o.createElement("div",null,o.createElement(Qt,{onChangePage:ie,onChangeRowsPerPage:sn,rowCount:A||M.length,currentPage:z,rowsPerPage:Y,direction:pe,paginationRowsPerPageOptions:oe,paginationIconLastPage:ue,paginationIconFirstPage:ae,paginationIconNext:le,paginationIconPrevious:De,paginationComponentOptions:je})))});const Lo={rows:{style:{minHeight:"65px"}},headCells:{style:{fontSize:"1.2rem",paddingLeft:"8px",paddingRight:"8px","text-transform":"Capitalize",fontWeight:"bold",backgroundColor:"#bebebe"}},cells:{style:{paddingLeft:"8px",paddingRight:"8px",fontSize:"1.2rem"}}};Fo("solarized",{text:{primary:"#141414",secondary:"#2aa198",fontSzie:"2.9rem"},background:{default:"#e7e7e7cc"},context:{background:"#e7e7e7cc",text:"#FFFFFF"},divider:{default:"#073642"},action:{button:"rgba(0,0,0,.54)",hover:"rgba(0,0,0,.08)",disabled:"rgba(0,0,0,.12)"}},"light");const Mo=b.input`
	height: 32px;
	width: 200px;
	border-radius: 3px;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
	border: 1px solid #e5e5e5;
	padding: 0 32px 0 16px;

	&:hover {
		cursor: pointer;
	}
`,_o=b(Ot)`
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	height: 34px;
	width: 32px;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
`,Ao=({filterText:e,onFilter:t,onClear:n})=>L.jsxs(L.Fragment,{children:[L.jsx(Mo,{id:"search",type:"text",placeholder:"Filter By Name","aria-label":"Search Input",value:e,onChange:t}),L.jsx(_o,{primary:!0,type:"button",onClick:n,children:"X"})]});function zo(){const e=[{when:h=>h.price<20,style:{backgroundColor:"green",color:"white","&:hover":{cursor:"pointer"}}},{when:h=>h.calories<400,style:h=>({backgroundColor:h.isSpecial?"pink":"inerit"})}],t=[{name:"id",selector:h=>h.id,sortable:!0},{name:"title",selector:h=>h.title,sortable:!0},{name:"category",selector:h=>h.category,sortable:!0},{name:"price",selector:h=>h.price,sortable:!0}],[n,a]=m.useState(!1),[l,i]=m.useState(!1),[s,d]=m.useState(""),[u,C]=m.useState(!1),[p,f]=Be([]),[j,y]=Be(!0),[R,P]=Be(null);wn(()=>{(async()=>{try{const D=await Cn.getProducts();f(D.slice(0,15))}catch(D){P(D instanceof Error?D.message:"Failed to load data")}finally{y(!1)}})()},[]);const x=h=>{},$=p.filter(h=>h.title&&h.title.toLowerCase().includes(s.toLowerCase())),k=({selectedRows:h})=>{console.log("selectedRows",h),a(h)},v=()=>{i(!l)},E=m.useMemo(()=>{console.log("filterText",s);const h=()=>{s&&(C(!u),d(""))};return L.jsx(Ao,{onFilter:D=>d(D.target.value),onClear:h,filterText:s})},[s,u]);return j?L.jsx("div",{className:"loader",children:"Loading..."}):R?L.jsx("div",{className:"error",children:R}):L.jsxs("main",{children:[L.jsx("h2",{children:"Dashboard"}),L.jsxs("div",{className:"dashboard-container",children:[L.jsx(Ot,{primary:!0,onClick:v,children:"Clear Selected Rows"}),L.jsx(Io,{className:"mainTable",columns:t,data:$,selectableRows:!0,pagination:!0,responsive:!0,persistTableHead:!0,subHeader:!0,subHeaderComponent:E,onRowClicked:x,theme:"solarized",selectableRowsHighlight:!0,customStyles:Lo,fixedHeader:!0,fixedHeaderScrollHeight:"300px",conditionalRowStyles:e,onSelectedRowsChange:k,clearSelectedRows:l})]})]})}const No=()=>L.jsxs(L.Fragment,{children:[L.jsx(fn,{}),L.jsx(zo,{})]});mn.createRoot(document.getElementById("dashboard-root")).render(L.jsx(No,{}));
