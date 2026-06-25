from fastapi import FastAPI
from pydantic import BaseModel

from models.request_models import SolutionRequest

from agents.business_analyst import analyze_business_problem
from agents.rag_architect import analyze_rag_requirements
from agents.azure_architect import design_azure_architecture
from agents.security_agent import analyze_security
from agents.cost_agent import estimate_cost
from agents.final_report import generate_final_report
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ProblemRequest(BaseModel):
    problem: str


@app.get("/")
def home():
    return {"message": "Enterprise AI Solution Architect API"}


@app.post("/analyze")
def analyze(req: ProblemRequest):

    result = analyze_business_problem(
        req.problem
    )

    return {
        "analysis": result
    }
@app.post("/rag-analysis")
def rag_analysis(req: ProblemRequest):

    result = analyze_rag_requirements(
        req.problem
    )

    return {
        "rag_analysis": result
    }
@app.post("/generate-solution")
def generate_solution(req: SolutionRequest):

    problem_context = f"""
    Problem: {req.problem}

    Industry: {req.industry}

    Data Sources: {req.data_sources}

    Compliance: {req.compliance}

    Users: {req.users}
    """

    # Agent 1
    business_analysis = analyze_business_problem(
        problem_context
    )

    # Agent 2
    rag_analysis = analyze_rag_requirements(
        problem_context
    )

    # Agent 3
    architecture = design_azure_architecture(
        problem_context
    )

    # Agent 4
    security = analyze_security(
        problem_context
    )

    # Agent 5
    cost = estimate_cost(
        problem_context
    )

    # Agent 6
    final_report = generate_final_report(
        business_analysis,
        rag_analysis,
        architecture,
        security,
        cost
    )

    return {
        "business_analysis": business_analysis,
        "rag_analysis": rag_analysis,
        "architecture": architecture,
        "security": security,
        "cost": cost,
        "final_report": final_report
    }