import {
    Card,
    CardContent,
    Typography,
    Stack
} from "@mui/material";

function WorkflowPanel() {

    const agents = [
        "Business Analyst",
        "RAG Architect",
        "Azure Architect",
        "Security Agent",
        "Cost Agent",
        "Final Report"
    ];

    return (

        <Card
    sx={{
        position: "sticky",
        top: 20,
        borderRadius: 3,
        boxShadow: 4,
        height: "100%"
    }}
>

            <CardContent
    sx={{
        textAlign: "center"
    }}
>

                <Typography
                    variant="h5"
                    gutterBottom
                >
                    Multi-Agent Workflow
                </Typography>

                <Stack spacing={2} mt={3}>

                    {agents.map((agent, index) => (

                        <div key={index}>

                            <Typography
    align="center"
    fontWeight="bold"
    sx={{
        background: "#E3F2FD",
        padding: 1,
        borderRadius: 2
    }}
>
                                {agent}
                            </Typography>

                            {index < agents.length - 1 && (

                                <Typography
                                    align="center"
                                    sx={{ fontSize: 28 }}
                                >
                                    ↓
                                </Typography>

                            )}

                        </div>

                    ))}

                </Stack>

            </CardContent>

        </Card>

    );

}

export default WorkflowPanel;