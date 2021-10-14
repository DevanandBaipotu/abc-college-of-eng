import React, { FunctionComponent, useEffect, useState } from 'react';
import { domain } from '../../domain/domain';
export const SectionMenu: FunctionComponent<any> = ({ stats, name }) => {
    const [url, setUrl] = useState('')
    useEffect(() => {
        switch (name) {
            case 'Buyers':
                setUrl(domain.domainURL + '/get_buyer')
                break;
            case 'Income':
                setUrl(domain.domainURL + '/get_income');
                break;
            case 'Countries':
                setUrl(domain.domainURL + '/get_country');
                break;
            case 'Highlights':
                setUrl(domain.domainURL + '/get_highlight');
                break;
        }
    }, [name])
    return (
        <div className="info">
            <h4>Stats:</h4>
            {
                Object.keys(stats).map(data => {
                    return (
                        <div className="info-module" key={data}>
                            <div className="heading">
                                <span>{stats[data].label}</span>
                                <span>{stats[data].value}%</span>
                            </div>
                            <div className="progress atib-1" >
                                <div className="progress-value" style={{ width: stats[data].value + '%' }}></div>
                            </div>
                        </div>
                    )
                })
            }
            <nav>
                <a href={url} target="_blank" rel="noreferrer"><span>View API</span><span className="fa fa-arrow-right fa-lg"></span></a>
            </nav>
        </div>
    )
}