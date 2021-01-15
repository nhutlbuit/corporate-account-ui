import React, { Suspense, useEffect, useState } from 'react';
import { Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import HeaderBar from './header-bar/header-bar';
import SearchPanel from './search-panel/search-panel';
import NavBar from './nav-bar/nav-bar';
import './corporate-account-report.scss';
import Spinner from '../shared/spinner/spinner';
import { lazyWithPreload } from '../shared/lazy-with-preload';
import CustomTable from "../shared/table/CustomTable.component";
import {SPACE_UMMM_UDD_UYYYY} from "../../common/constants/DateFormatConst";
import { SortOrder} from "../shared/table/CustomTableCore";
import {loadAccountReport} from '../../store/slice/account.report.slice';
import CustomPaging from "../shared/paging/CustomPaging.component";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDown, faAngleUp} from "@fortawesome/free-solid-svg-icons";
import ReactTable from "react-table";
import "react-table/react-table.css";
import "../../styles/custom-react-table.scss";

export interface FilterInterface {
  userId: string,
  license: string,
  type: string,
  value: string,
  sortByCols: string,
  orderBy: string,
  pageNo: number,
  recordsPerPage: number
}

const CorporateAccountReport = () => {

    const dispatch = useDispatch()
    const { toggleNavbar, isShowAccountReportListing, isShowContentPage, isLoadingAccountReportListing, accountReport} = useSelector((state: any) => state.accountReport);
    const [filter, setFilter] = useState(initFilter)
    const [columns, setColumns] = useState(initCols)
    const accountReportList = useSelector((state: any) => state.accountReport.accountReport)
    const totalRecords = useSelector((state: any) => state.accountReport.totalRecords)
    const totalPages = useSelector((state: any) => state.accountReport.totalPages)
    const [expanded, setExpanded] = useState({})
    function initCols() {
      return [
        {
          expander: true,
          width: 40,
          Expander: ({ isExpanded, ...rest }) =>           
            <div>
              {isExpanded
                ? <FontAwesomeIcon icon={faAngleDown} size="xs" color="#508fe8"/>
                : <FontAwesomeIcon icon={faAngleUp} size="xs" color="#508fe8"/>}
            </div>,
          style: {
            cursor: "pointer",
            fontSize: 25,
            padding: "0",
            textAlign: "center",
            userSelect: "none"
          }
        },
        {
          Header: "Account Name",
          accessor: "accountName"
        },
        {
          Header: "Partner Label",
          accessor: "partnerLabel"
        },
        {
          Header: "Level",
          accessor: "level"
        },
        {
          Header: "Corporate Currency",
          accessor: "corporateCurrency"
        },
        {
          Header: "Account Balance",
          accessor: "accountBalance",
          Cell: row => <>
                  <div className={row.original.accountBalance < 0 ? 'negative-number' : ''} title={row.original.accountBalance.toDollar(2, true)}>
                      {row.original.accountBalance.toDollar(2, true)}
                  </div>
                </>
        },
        {
          Header: "Total Balance",
          accessor: "totalBalance",
          Cell: row => <>
                  <div className={row.original.totalBalance < 0 ? 'negative-number' : ''} title={row.original.totalBalance.toDollar(2, true)}>
                      {row.original.totalBalance.toDollar(2, true)}
                  </div>
                </>
        },
        {
          Header: "Total Balance USD",
          accessor: "totalBalanceUSD",
          Cell: row => <>
                  <div className={row.original.totalBalanceUSD < 0 ? 'negative-number' : ''} title={row.original.totalBalanceUSD.toDollar(2, true)}>
                      {row.original.totalBalanceUSD.toDollar(2, true)}
                  </div>
                </>
        },
        {
          Header: "Total Balance",
          accessor: "totalBalance",
          Cell: row => <>
                  <div className={row.original.totalBalance < 0 ? 'negative-number' : ''} title={row.original.totalBalance.toDollar(2, true)}>
                      {row.original.totalBalance.toDollar(2, true)}
                  </div>
                </>
        },
        {
          Header: "Settlement Figure",
          accessor: "settlementFigure",
          Cell: row => <>
                  <div className={row.original.settlementFigure < 0 ? 'negative-number' : ''} title={row.original.settlementFigure.toDollar(2, true)}>
                      {row.original.settlementFigure.toDollar(2, true)}
                  </div>
                </>
        }              
        
      ]
  }
  function initColSub(level:number) {
    const isShowLevel3 = level === 'Level 3'
    return [
      {
        Header: "User Name",
        accessor: "userName",
        sortable: false,
      },    
      {
        Header: "Level",
        accessor: "level",
        sortable: false,
      },
      {
        Header: "Account Balance",
        accessor: "accountBalance",
        sortable: false,
      },
      {
        Header: "Currency",
        accessor: "currency",
        sortable: false,
      },
      {
        Header: "Account Balance",
        accessor: "accountBalance",
        sortable: false,
        show: isShowLevel3,
      },
      {
        Header: "Total Balance",
        accessor: "totalBalance",
        sortable: false,
        show: isShowLevel3,
      },
      {
        Header: "Total Balance USD",
        accessor: "totalBalanceUSD",
        sortable: false,
        show: isShowLevel3,
      },
      {
        Header: "Total Balance",
        accessor: "totalBalance",
        sortable: false,
        show: isShowLevel3,
      },
      {
        Header: "Overall Balance",
        accessor: "settlementFigure",
        sortable: false,
        show: isShowLevel3,
      }              
      
    ]
  }
  
  function initFilter () {
      return {
          userId: window.parent ?.$ ?.playerId,
          license: "license",
          type: "type",
          value: "",
          sortByCols: "changed_date",
          orderBy: SortOrder[SortOrder.DESC],
          pageNo: 1,
          recordsPerPage: 10
      }
  }
  const onSortChange = (sortByCols: string,orderBy: string ) => {
    filter.sortByCols = sortByCols
    filter.orderBy = orderBy
    setFilter({...filter})
  }
  const onPageChange = (f: FilterInterface) => {
    console.log("-----ffffff---", f)
    setFilter(f)
  }
  useEffect(() => {
      dispatch(loadAccountReport(filter))
  }, [filter]);

  
  const renderTable = () => {
    return (
      <div className="section-main-table p-4">
        <ReactTable
          data={accountReportList}
          columns={initCols()}
          defaultPageSize={10}
          className="-striped -highlight"
          showPagination={false}
          manual
          onSortedChange={(newSorted) => {
              if (newSorted.length !== 0) {
                  onSortChange(newSorted[0].id, newSorted[0].desc ? SortOrder[SortOrder.DESC] : SortOrder[SortOrder.ASC]);
              } else {
                  onSortChange('', '');
                  dispatch(loadAccountReport(filter));
              }
          }}
          onExpandedChange={(expanded, index, event) => {
            // console.log(index, expanded);
            // don't for get to save the 'expanded'
            // so it can be fed back in as a prop
            console.log("======", expanded, index, event)
            setExpanded(expanded)        
          }}
          expanded={expanded}
          SubComponent={(row) => renderSubTable(row.original.detail, row.original.level)}
        />
        {renderPaging()}    
      </div> 
    )
  }
  const renderSubTable = (listDetail: any, level: number) => {
    return (
      <div className="section-sub-table p-4">
        <ReactTable
          data={listDetail}
          columns={initColSub(level)}
          defaultPageSize={10}
          className="-striped -highlight"
          showPagination={false}
          minRows
        /> 
      </div>
    )
  }
  const renderPaging = () => {
    return (
        <CustomPaging filter={filter} onChange={onPageChange} totalPages={totalPages} totalRecords={totalRecords}/>
    )
  }

  return (
      <React.Fragment>
        <HeaderBar />
        <SearchPanel />
        {isLoadingAccountReportListing && <Spinner />}
        {renderTable()} 
      </React.Fragment>
  );
}

export default CorporateAccountReport;
