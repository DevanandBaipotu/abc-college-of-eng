import React, { FunctionComponent, useMemo } from 'react';
import { WidgetBodyPropType } from '../../Types';
export const SectionTable: FunctionComponent<WidgetBodyPropType> = ({ data, info, header, isSortByValue }) => {

    const sortData = useMemo<any>(() => {
        const tempArray = data.sort((ele1: any, ele2: any) => {
            return isSortByValue ? ele1.value - ele2.value : ele1.label.localeCompare(ele2.label);
        })
        return tempArray
        // eslint-disable-next-line
    }, [isSortByValue]);
    return (
        <div className="chart">
            <div className="controls">
                <nav>
                    <span className="filter-name">{info.label}</span>
                </nav>
                <div>
                    <span className="filter-value">{info.value}%</span>
                </div>
            </div>
            <div className="canvas-container">
                <div className="canvas" id="highlights">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>{header[0]}</th>
                                <th>{header[1]}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Array.isArray(sortData) && sortData.map(({ label, value, color }) => {
                                    return (
                                        <tr style={{ color }} key={label}>
                                            <td>{label}</td>
                                            <td>{value}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div >
            </div >
        </div >
    )
}