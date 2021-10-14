import React, { FunctionComponent, useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { SectionMenu } from './SectionMenu';
import { SectionTable } from './SectionTable';
import { WidgetPropType } from '../../Types';
import "./container.css";
export const Container: FunctionComponent<WidgetPropType> = ({ name, dataSet, stats, filter })  => {
    const [isSortByValue, setSortByValue] = useState(false);
    const [hasMaxClass, setHasMaxClass] = useState('');
    return (
        <div className={`widget ${hasMaxClass}`}>
            <SectionHeader
            title={name}
            applyFilter={(val: string) => val === "value" ? setSortByValue(true) : setSortByValue(false)}
            setMaxWidthForWidget={(val: boolean) => val ? setHasMaxClass('max') : setHasMaxClass('')}></SectionHeader>
            <SectionMenu stats={stats} name={name}></SectionMenu>
            <SectionTable data={dataSet.data} info={filter} header={dataSet.header} isSortByValue={isSortByValue}></SectionTable>
        </div>
    )
}