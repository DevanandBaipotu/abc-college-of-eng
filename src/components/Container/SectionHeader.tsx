import React, { FunctionComponent, useState, useEffect } from 'react';
import { WidgetHeaderPropType } from '../../Types';
export const SectionHeader: FunctionComponent<WidgetHeaderPropType> = ({ title, ...props }) => {
    const [isModalOpen, setIsModelOpen] = useState(false);

    const emitEventForModal: any = () => {
        isModalOpen ? setIsModelOpen(false) : setIsModelOpen(true);
    }

    useEffect(() => {
        props.setMaxWidthForWidget(isModalOpen);
    }, [isModalOpen])
    
    return (
        <header>
            <h3>
                {title}
            </h3>
            <select name="sort-option" className="sort-option form-select" onChange={(e) => props.applyFilter(e.target.value)}>
                <option value="label">Sort by Label</option>
                <option value="value">Sort by Value</option>
            </select>
            <div className="btn btn-primary max-min">
                <i className={`fa ${isModalOpen ? 'fa-minus' : 'fa-arrows-alt'}`} onClick={emitEventForModal}></i>
            </div>
        </header>
    )
}