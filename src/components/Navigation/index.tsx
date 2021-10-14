import React, { FunctionComponent } from 'react';
import "./navigation.css";
import assignmentFile from '../../assets/postmanReq.json';

export const Navigation: FunctionComponent<any> = () => {
    const downloadTxtFile: any = () => {
        const element = document.createElement("a");
        const file = new Blob([JSON.stringify(assignmentFile)],
            { type: 'application/json' });
        element.href = URL.createObjectURL(file);
        element.download = "assignment.json";
        document.body.appendChild(element);
        element.click();
    }
    return (
        <div>
            <h1 className="page-title">
                ABC College of engineering
            <div className="float-right btn btn-primary btn-lg" onClick={downloadTxtFile}>Download
        Postman Collection</div>
            </h1>
        </div>
    )
}