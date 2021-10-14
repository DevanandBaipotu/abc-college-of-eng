export type DataSetStruct = {
    data: Array<object>,
    header: Array<string>
}

export type FilterDataStruct = {
    label: string | undefined,
    value: number | undefined
}


export type WidgetPropType = {
    name: string,
    dataSet: DataSetStruct,
    filter: FilterDataStruct,
    stats: object
}

export type WidgetHeaderPropType = {
    title: string,
    applyFilter: Function,
    setMaxWidthForWidget: Function
}

export type WidgetBodyPropType = {
    data: Array<object>,
    info: FilterDataStruct,
    header: Array<string>,
    isSortByValue: boolean
}

export type WelcomePageBlocks = {
    Buyers: object,
    Countries: object,
    Income: object,
    Highlights: object
}