
import fetch from "node-fetch";

export const getJobs = async (req, res) => {
  try {
    // Fetch job listings from the GitHub Jobs API
    const response = await fetch(
      "https://jobs.github.com/positions.json?description=react&location=india"
    );
    const jobs = await response.json();

    // Send the job listings as JSON response
    res.json(jobs);
  } catch (error) {
    // Handle errors
    console.error("Error fetching job listings:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
