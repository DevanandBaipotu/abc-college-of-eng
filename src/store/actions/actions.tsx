import { domain } from "../../domain/domain";

export function getBuyer() {
    return (dispatch: any) => {
        fetch(`${domain.domainURL}/get_buyer`).then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('something went wrong in get_buyers API')
            }
            })
            .then(data => {
                data.data.time = new Date().getTime();
                dispatch({
                    type: "GET_BUYER",
                    payload: data
                })
            }).catch((error)=>{
                console.log(error)
            })
    }
}

export function getIncome() {
    return (dispatch: any) => {
        fetch(`${domain.domainURL}/get_income`).then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('something went wrong in get_income API')
            }
        })
            .then(data => {
                data.data.time = new Date().getTime();
                dispatch({
                    type: 'GET_INCOME',
                    payload: data
                })
            }).catch((error)=>{
                console.log(error)
            })
    }
}

export function getHighlight() {
    return (dispatch: any) => {
        fetch(`${domain.domainURL}/get_highlight`).then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('something went wrong in get_highlight API')
            }
        })
            .then(data => {
                data.data.time = new Date().getTime();
                dispatch({
                    type: "GET_HIGHLIGHT",
                    payload: data
                })
            }).catch((error)=>{
                console.log(error)
            })
    }
}

export function getCountry() {
    return (dispatch: any) => {
        fetch(`${domain.domainURL}/get_country`).then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('something went wrong in get_country API')
            }
        })
            .then(data => {
                data.data.time = new Date().getTime();
                dispatch({
                    type: "GET_COUNTRY",
                    payload: data
                })
            }).catch((error)=>{
                console.log(error)
            })
    }
}