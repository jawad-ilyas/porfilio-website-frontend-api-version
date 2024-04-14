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

export { fetchProjectCategory };
