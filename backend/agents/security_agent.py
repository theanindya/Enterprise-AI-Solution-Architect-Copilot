from services.gemini_service import model

def analyze_security(problem):

    prompt = f"""
    You are a Responsible AI and Security Expert.

    Business Problem:
    {problem}

    Analyze:

    1. Security Risks
    2. Privacy Risks
    3. Governance Considerations
    4. Responsible AI Concerns
    5. Compliance Recommendations
    """

    response = model.generate_content(prompt)

    return response.text