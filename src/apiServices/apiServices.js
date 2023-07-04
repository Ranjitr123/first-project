const API_BASE_URL = "https://api.example.com"; // Replace with your API base URL

class ApiService {
  async sendRequest(method, path, body = null) {
    const url = API_BASE_URL + path;
    const options = {
      method,
      headers: {
        "Content-Type": "application/json",
        // Add any required headers for your API
      },
      body: body ? JSON.stringify(body) : undefined,
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error("Request failed");
      }

      return response.json();
    } catch (error) {
      throw new Error("Request failed");
    }
  }

  // Define your API methods here
  async getUsers() {
    return this.sendRequest("GET", "/users");
  }

  async createUser(user) {
    return this.sendRequest("POST", "/users", user);
  }

  async updateUser(userId, updatedData) {
    return this.sendRequest("PUT", `/users/${userId}`, updatedData);
  }

  async deleteUser(userId) {
    return this.sendRequest("DELETE", `/users/${userId}`);
  }
}

export default new ApiService();
