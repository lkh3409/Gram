from flask import Flask, request, jsonify
from urllib.request import urlopen
from urllib.parse import quote_plus as qp
from bs4 import BeautifulSoup
from selenium import webdriver
import time
from waitress import serve

app = Flask(__name__)

@app.route("/user", methods=['POST'])
def web():
    data = request.get_json()
    search_text = data.get('searchText', '')

    baseurl = 'https://www.instagram.com/'
    plusurl = search_text
    url = baseurl + plusurl

    driver = webdriver.Chrome()
    driver.get(url)
    time.sleep(3) #delay 방지
    html = driver.page_source
    soup = BeautifulSoup(html)

    insta = soup.select('._aabd._aa8k._al3l') #image class 

    n=1 #이미지 순번
    for i in insta :
        #print('https://www.instagram.com'+i.a['href'])
        imgUrl = i.select_one('._aagv').img['src']

        # 이미지 저장
        with urlopen(imgUrl) as f :
            with open ('../instagram_crawling/image'+plusurl + str(n) + '.jpg','wb') as h:
                img = f.read()
                h.write(img)
            n+=1
    driver.close()

    return jsonify({'status': 'success', 'message': 'Crawling completed successfully'})


if __name__ == '__main__':
    app.run(debug=True)