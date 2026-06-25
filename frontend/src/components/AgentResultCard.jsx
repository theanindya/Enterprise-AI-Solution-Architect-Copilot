import { Card, CardContent, Typography } from "@mui/material";

function AgentResultCard({ title, content }) {
  return (
    <Card
      sx={{
        marginTop: 10,
        borderRadius: 3,
        boxShadow: 3
      }}
    >
      <CardContent>

        <Typography
          variant="h5"
          gutterBottom
        >
          {title}
        </Typography>

        <Typography
          sx={{
            whiteSpace: "pre-wrap",
            fontFamily: "monospace"
          }}
        >
          {content}
        </Typography>

      </CardContent>
    </Card>
  );
}

export default AgentResultCard;