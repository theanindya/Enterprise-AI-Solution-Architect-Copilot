from pydantic import BaseModel


class SolutionRequest(BaseModel):
    problem: str
    industry: str
    data_sources: str
    compliance: str
    users: str