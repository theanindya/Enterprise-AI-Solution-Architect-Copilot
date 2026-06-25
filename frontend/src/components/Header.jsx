import { Typography, Box } from "@mui/material";

function Header() {
    return (
        <Box sx={{ mb: 4 }}>
            <Typography
                variant="h3"
                fontWeight="bold"
                color="primary"
            >
                Enterprise AI Solution Architect Copilot
            </Typography>

            <Typography
                variant="subtitle1"
                color="text.secondary"
            >
                Multi-Agent Platform for AI Architecture Design,
                RAG Assessment and Governance Planning
            </Typography>
        </Box>
    );
}

export default Header;