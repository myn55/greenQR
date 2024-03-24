from bs4 import BeautifulSoup;
import requests, json, lxml;
import subprocess;
import os;

company_name = input("name of company?")

headers = {
'User-agent': 
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36'
}

text = "site:www.sustainalytics.com ";
set_text = text + " " + company_name;

params = {
  'q': set_text,  # query 
  'gl': 'us',    # country to search from
  'hl': 'en'     # language
}

url = "https://google.com/search?q=";

request_result = requests.get(url, headers = headers, params = params, timeout=30);
soup = BeautifulSoup(request_result.text, "lxml");

#link = soup.find('.yuRUbf a')

link = soup.select_one('.tF2Cxc').select_one('.yuRUbf a')['href']
#result = link.select_one('.yuRUbf a')['href']

print("this is the link: " + link)
with open(os.path.join("src/Scraper",'esg_data.txt'), 'w') as f:
    f.write(link)

subprocess.run(["node", "src/Scraper/basic.js"]);