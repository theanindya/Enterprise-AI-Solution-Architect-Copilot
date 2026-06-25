import { useState } from "react";
import axios from "axios";

import {
    Container,
    Grid,
    Paper,
    TextField,
    Button,
    Typography,
    Stack,
    Chip
} from "@mui/material";

import Header from "./components/Header";
import WorkflowPanel from "./components/WorkflowPanel";
import AgentResultCard from "./components/AgentResultCard";
function App() {

  const [formData, setFormData] = useState({
    problem: "",
    industry: "",
    data_sources: "",
    compliance: "",
    users: ""
  });

  const [result, setResult] = useState(null);
  const healthcareExample = `A hospital receives thousands of PDF reports, medical images and lab results every day.

Doctors spend too much time searching information across different systems.

We want an AI assistant that understands hospital documentation and answers questions securely.`;

const manufacturingExample = `A manufacturing company has over 50,000 maintenance manuals stored as PDF documents.

Field engineers spend significant time searching for troubleshooting procedures and equipment documentation.

The company wants an AI assistant that provides accurate answers from technical manuals with source citations.`;

const bankingExample = `A global bank maintains thousands of internal policies, compliance documents and operational procedures.

Employees struggle to find the latest approved information.

The bank wants an AI assistant that answers questions while complying with security and regulatory requirements.`;


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const generateSolution = async () => {

    try {

      const response = await axios.post(
        "http://127.0.0.1:8001/generate-solution",
        formData
      );

      setResult(response.data);

    } catch (error) {
      console.error(error);
      alert("Error generating solution");
    }
  };


  return (

<Container maxWidth="xl" sx={{
        width: "95%",
        mt: 4,
        mb: 6
    }}>

    <Header />

    <Grid container spacing={4}>

        <Grid item xs={8}>

            <Paper
    sx={{
        p: 4,
        height: "100%"
    }}
>

                <Typography
    variant="h5"
    sx={{ mt: 0.5, mb: 6, fontWeight: "bold", color: "#009999" }}
    
>
    Choose an Industry
</Typography>

<Stack
    direction="row"
    spacing={4}
    sx={{ ml: 10, mb: 6 }}
>

    <Chip
        label="🩺 Healthcare"
        clickable
        color="primary"
        variant="outlined"
        onClick={() =>
            setFormData({
                ...formData,
                problem: healthcareExample
            })
        }
    />

    <Chip
        label="🏭 Manufacturing"
        clickable
        color="primary"
        variant="outlined"
        onClick={() =>
            setFormData({
                ...formData,
                problem: manufacturingExample
            })
        }
    />

    <Chip
        label="🏦 Banking"
        clickable
        color="primary"
        variant="outlined"
        onClick={() =>
            setFormData({
                ...formData,
                problem: bankingExample
            })
        }
    />

</Stack>

                <TextField
    fullWidth
    multiline
    rows={8}
    label="Describe your business challenge"
    placeholder={`Example:

A hospital receives thousands of PDF reports, medical images and lab results every day.

Doctors spend too much time searching information across different systems.

We want an AI assistant that understands hospital documentation and answers questions securely.`}
    name="problem"
    value={formData.problem}
    margin="normal"
    onChange={handleChange}
/>

                <Button
                    variant="contained"
                    size="large"
                    sx={{ mt: 6 }}
                    onClick={generateSolution}
                >

                    Generate Enterprise Architecture

                </Button>

            </Paper>

        </Grid>

        <Grid item xs={4}>

            <WorkflowPanel />

        </Grid>

    </Grid>

    {result && (

        <>

            <AgentResultCard
                title="Business Analysis"
                content={result.business_analysis}
            />

            <AgentResultCard
                title="RAG Assessment"
                content={result.rag_analysis}
            />

            <AgentResultCard
                title="Azure Architecture"
                content={result.architecture}
            />

            <AgentResultCard
                title="Security & Governance"
                content={result.security}
            />

            <AgentResultCard
                title="Cost Analysis"
                content={result.cost}
            />

            <AgentResultCard
                title="Final Recommendation"
                content={result.final_report}
            />

        </>

    )}

</Container>

);
}

export default App;