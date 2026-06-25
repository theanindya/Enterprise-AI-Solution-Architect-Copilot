from services.gemini_service import model


def analyze_business_problem(problem):

    prompt = f"""
    You are a Senior AI Business Analyst.

    Analyze the following business problem.

    Business Problem:
    {problem}

    Provide:

    1. Problem Summary
    2. Business Goals
    3. Success Metrics
    4. AI Opportunities
    5. Key Risks

    Format clearly with headings.
    """

    try:
        response = model.generate_content(prompt)
        return response.text
    except Exception as e:
        return f"Gemini Error: {str(e)}"