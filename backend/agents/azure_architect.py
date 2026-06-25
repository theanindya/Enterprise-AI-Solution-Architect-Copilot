from services.gemini_service import model

def design_azure_architecture(problem):

    prompt = f"""
    You are a Senior Azure AI Architect.

    Business Problem:
    {problem}

    Recommend:

    1. Azure Services Required
    2. Architecture Design
    3. Data Flow
    4. Why each service is needed

    Consider:
    - Azure OpenAI
    - Azure AI Search
    - Azure AI Foundry
    - Azure Blob Storage
    - Azure AI Document Intelligence
    - Azure Machine Learning

    Format clearly.
    """

    response = model.generate_content(prompt)

    return response.text