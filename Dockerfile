FROM python:3.11-slim

WORKDIR /app

ENV PYTHONUNBUFFERED=TRUE
ENV PORT=8080

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD exec functions-framework --target=generate_ppp_opinion --port=$PORT
