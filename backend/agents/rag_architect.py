from services.gemini_service import model


def analyze_rag_requirements(problem):

    prompt = f"""
    You are a Senior RAG Architect.

    Analyze the business problem below.

    Business Problem:
    {problem}

    Determine:

    1. Is RAG required? (YES/NO)
    2. Why?
    3. Recommended chunking strategy
    4. Embedding strategy
    5. Retrieval strategy
    6. Recommended vector database

    Format clearly with headings.
    """

    response = model.generate_content(prompt)

    return response.text