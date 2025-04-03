import api from "./api"

export const getStudentProfile = async () => {
  try {
    const response = await api.get("/students/profile")
    return { success: true, data: response.data }
  } catch (error) {
    console.error("Error fetching student profile:", error)
    return {
      success: false,
      message: error.response?.data?.message || "Failed to fetch profile",
    }
  }
}

export const getStudentResults = async () => {
  try {
    const response = await api.get("/students/results")
    return { success: true, data: response.data }
  } catch (error) {
    console.error("Error fetching student results:", error)
    return {
      success: false,
      message: error.response?.data?.message || "Failed to fetch results",
    }
  }
}

export const getCourseDetails = async (courseId) => {
  try {
    const response = await api.get(`/courses/${courseId}`)
    return { success: true, data: response.data }
  } catch (error) {
    console.error("Error fetching course details:", error)
    return {
      success: false,
      message: error.response?.data?.message || "Failed to fetch course details",
    }
  }
}

export const submitIssue = async (issueData) => {
  try {
    const response = await api.post("/issues/submit", issueData)
    return { success: true, data: response.data }
  } catch (error) {
    console.error("Error submitting issue:", error)
    return {
      success: false,
      message: error.response?.data?.message || "Failed to submit issue",
    }
  }
}

