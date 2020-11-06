import {ReactElement} from "react";

export interface Column {
    id: string
    header: string
    headerCell?: ReactElement
    accessor: string
    className?: string
    dataType?: DataTypeEnum
    format?: string
    minWidth: number
    sort?: SortOrder
    cell?: ReactElement
    filter?: ReactElement
    icons?: Array<ReactElement>
}

export interface GroupCol {
    groupId: number
    header: string
    cols: Array<Column>
    minWidth: number
}

export interface Group {
    groupId: string
    expanded: boolean
    rows: Array<Row>
}

export interface Row {
    expanded: boolean
    isRoot: boolean
    item: any
}

export enum SortOrder {
    DEFAULT, ASC, DESC,
}

export enum DataTypeEnum {
    String = 'String', Number = 'Number', Date = 'Date'
}

export const groupBy = (array: Array<any>, key: string, expanded: boolean) => {
    let groupMap = array.reduce((map: Map<any, Array<any>>, currentItem, currentIndex) => {
        let id = !!key ? currentItem[key] : currentIndex
        let item = {item: currentItem, isRoot: false, expanded: expanded}
        map = map.size > 0 ? map : new Map()
        map.has(id) ? map.get(id)?.push(item) : map.set(id, [item])
        return map;
    }, [])

    let result = Array.from(groupMap.keys()).map(key => {
        let list = groupMap.get(key)
        let multiple = list.length > 1
        if (multiple) {
            list[0].isRoot = true
        }
        return {
            groupId: key,
            rows: list,
            expanded: multiple && expanded
        }
    })

    return result.slice()
}

export const groupColumn = (array: Array<any>, key: string) => {
    let groupMap = array.reduce((map: Map<any, Array<any>>, currentItem, currentIndex) => {
        let id = !!currentItem[key] ? currentItem[key] : currentIndex
        let item = currentItem
        map = map.size > 0 ? map : new Map()
        map.has(id) ? map.get(id)?.push(item) : map.set(id, [item])
        return map;
    }, []);
    let result = Array.from(groupMap.keys()).map(key => {
        return {
            groupId: key,
            header: groupMap.get(key)[0].groupHeader,
            cols: groupMap.get(key),
            minWidth: groupMap.get(key).reduce((minWidth: number, col: Column) => {
                return minWidth + col.minWidth;
            }, 0)
        }
    });
    return result;
}

export const updateSort = (column: Column, columns: Array<Column>): Array<Column> => {
    let sort = column.sort
    resetColumnSort(columns)
    switch (sort) {
        case SortOrder.DEFAULT:
            column.sort = SortOrder.ASC
            break
        case SortOrder.ASC:
            column.sort = SortOrder.DESC
            break
        default:
            column.sort = SortOrder.ASC
            break
    }
    return columns.slice()
}

export const hasSort = (c: Column) => {
    return c.sort != null
}

export const resetColumnSort = (columns: Array<Column>) => {
    columns.forEach(c => hasSort(c) && (c.sort = SortOrder.DEFAULT))
}

