import {accountReportApi} from "../apis/AccountReport.api";

export const getAccounReportListingService = async (account: any) => {
  // let data = yield call(accountReportApi, account);
  let data  = {
    "totalPages":8,
    "totalRecords":76,
    "pageNumber":1,
    "pageSize":10,
    "records":[
       {
        "id":0,
        "accountName": "Darik",
        "partnerLabel": "Darik 1",
        "level":"Level 3",
        "corporateCurrency":"CNY",
        "accountBalance":-3000,
        "totalBalance":4000,
        "totalBalanceUSD":-56565,
        "totalBalance":4000,
        "settlementFigure":20000,
        "detail": [
          {
            "id":0,
            "userName": "Darik Dev",
            "level":"Level 3",
            "corporateCurrency":"CNY",
            "accountBalance":3000,
            "totalBalance":4000,
            "totalBalanceUSD":56565,
            "totalBalance":4000,
            "settlementFigure":20000
          },
          {
            "id":0,
            "userName": "Darik",
            "level":"Level 3",
            "corporateCurrency":"CNY",
            "accountBalance":3000,
            "totalBalance":4000,
            "totalBalanceUSD":56565,
            "totalBalance":4000,
            "settlementFigure":20000
          }
        ]
       },
       {
        "id":0,
        "accountName": "Darik1111",
        "partnerLabel": "Darik 1111",
        "level":"Level 2",
        "corporateCurrency":"CNY",
        "accountBalance":3000,
        "totalBalance":4000,
        "totalBalanceUSD":56565,
        "totalBalance":4000,
        "settlementFigure":20000,
        "detail": [
          {
            "id":0,
            "userName": "Darik Dev111",
            "level":"Level 2",
            "corporateCurrency":"CNY",
            "accountBalance":3000,
            "totalBalance":4000,
            "totalBalanceUSD":56565,
            "totalBalance":4000,
            "settlementFigure":20000
          },
          {
            "id":0,
            "userName": "Darik22222",
            "level":"Level 2",
            "corporateCurrency":"CNY",
            "accountBalance":3000,
            "totalBalance":4000,
            "totalBalanceUSD":56565,
            "totalBalance":4000,
            "settlementFigure":20000
          }
        ]
      },
      {
        "id":0,
        "accountName": "Darik2222",
        "partnerLabel": "Darik 2",
        "level":"Level 3",
        "corporateCurrency":"CNY",
        "accountBalance":3000,
        "totalBalance":4000,
        "totalBalanceUSD":56565,
        "totalBalance":4000,
        "settlementFigure":20000,
        "detail": [
          {
            "id":0,
            "userName": "Darik Dev111",
            "level":"Level 3",
            "corporateCurrency":"CNY",
            "accountBalance":3000,
            "totalBalance":4000,
            "totalBalanceUSD":56565,
            "totalBalance":4000,
            "settlementFigure":20000
          },
          {
            "id":0,
            "userName": "Darik22222",
            "level":"Level 3",
            "corporateCurrency":"CNY",
            "accountBalance":3000,
            "totalBalance":-4000,
            "totalBalanceUSD":56565,
            "totalBalance":4000,
            "settlementFigure":20000
          }
        ]
      },
      {
        "id":0,
        "accountName": "Darik3333",
        "partnerLabel": "Darik 3",
        "level":"Level 2",
        "corporateCurrency":"CNY",
        "accountBalance":-3000,
        "totalBalance":4000,
        "totalBalanceUSD":56565,
        "totalBalance":-4000,
        "settlementFigure":20000,
        "detail": [
          {
            "id":0,
            "userName": "Darik Dev3333",
            "level":"Level 2",
            "corporateCurrency":"CNY",
            "accountBalance":3000,
            "totalBalance":4000,
            "totalBalanceUSD":56565,
            "totalBalance":4000,
            "settlementFigure":20000
          }
        ]
      }
    ],
    "limit":30,
    "firstPage":true,
    "lastPage":false,
    "hasNextPage":true,
    "hasPreviousPage":false,
    "empty":false
  }
  return data;
};






