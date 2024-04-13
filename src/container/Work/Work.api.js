import axios from "axios"

const fetchProductCategory = async () => {

    try {

        return axios.get("http://localhost:8080/api/v1/projectCategory/showProjectCategrory")
            .then((response) => {
                console.log(response)
            }).catch((error) => {
                console.log(error)
            })
    } catch (error) {
        console.log("Error into fetch api into product category", error)
    }

}

export { fetchProductCategory }