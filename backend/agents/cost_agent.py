from services.gemini_service import model

def estimate_cost(problem):

    prompt = f"""
    You are an Enterprise AI Cost Consultant.

    Business Problem:
    {problem}

    Provide:

    1. Complexity Level
    2. Development Effort
    3. Infrastructure Cost Category
    4. Deployment Complexity
    5. Scaling Considerations
    """

    response = model.generate_content(prompt)

    return response.text