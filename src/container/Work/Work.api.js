import axios from "axios";

const fetchProjectCategory = async () => {
    try {
        const response = await axios.get("http://localhost:8080/api/v1/projectCategory/showProjectCategrory");

        // Log the response data or return it as needed
        console.log(response.data);
        return response.data;

    } catch (error) {
        // Handle errors
        console.log("Error fetching product category:", error);
        throw error; // Re-throw the error or handle it as needed
    }
};


// ! fetch projects 
const fetchProjects = async () => {

    try {
        return await axios.get("http://localhost:8080/api/v1/project/fetchProjects")
            .then((response) => {

                console.log("response of the fetch projects ", response?.data)
                return response.data;

            })
            .catch((error) => {
                console.log("error into fetch project ", error)
            })
    } catch (error) {

        console.log("error into fetch project ", error)
    }
}

export { fetchProjectCategory, fetchProjects };
