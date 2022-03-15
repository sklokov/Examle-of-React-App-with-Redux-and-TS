import axios from "axios";

export const projectApi = {
    getDataForMainPage(number: number) {
        return axios.get(`https://zoo-animal-api.herokuapp.com/animals/rand/${number}`, {
            headers: {
                withCredentials: true,
            }
        })
            .then(res => res.data)
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response.data)
                    console.log(error.response.status)
                    console.log(error.response.headers)
                    return error.response.data
                }
            })
    }
}