import { Typography, Box } from "@mui/material";

function Header() {
    const siemensTeal = "#EC6602";

    return (
        <Box sx={{ mb: 4 }}>
            <Typography
                variant="h3"
                fontWeight="bold"
                sx={{ color: siemensTeal }}
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