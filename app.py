from flask import Flask, render_template, request
import yfinance as yf
import numpy as np

app = Flask(__name__)

def calculate_correlation(symbol_1, symbol_2):
    stock_data_1 = yf.download(symbol_1, start='2023-01-01', end='2023-11-25')['Adj Close']
    stock_data_2 = yf.download(symbol_2, start='2023-01-01', end='2023-11-25')['Adj Close']
    
    stock_price_1 = stock_data_1.dropna()
    stock_price_2 = stock_data_2.dropna()
    
    correlation_coefficient = np.corrcoef(stock_price_1, stock_price_2)[0, 1]
    return correlation_coefficient

@app.route('/', methods=['GET', 'POST'])
def index():
    correlation = None
    if request.method == 'POST':
        symbol_1 = request.form['symbol1']
        symbol_2 = request.form['symbol2']
        
        correlation = calculate_correlation(symbol_1, symbol_2)
    
    return render_template('index.html', correlation=correlation)

if __name__ == '__main__':
    app.run(debug=True)
