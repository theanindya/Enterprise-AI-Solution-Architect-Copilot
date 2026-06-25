from services.gemini_service import model

def generate_final_report(
    business_analysis,
    rag_analysis,
    architecture,
    security,
    cost
):

    prompt = f"""
    Create an executive AI solution report.

    Business Analysis:
    {business_analysis}

    RAG Analysis:
    {rag_analysis}

    Architecture:
    {architecture}

    Security:
    {security}

    Cost:
    {cost}

    Generate:

    1. Executive Summary
    2. Recommended Solution
    3. Key Benefits
    4. Implementation Roadmap
    5. Final Recommendation
    """

    response = model.generate_content(prompt)

    return response.text