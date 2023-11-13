from urllib.request import urlopen
from urllib.parse import quote_plus as qp
from bs4 import BeautifulSoup
from selenium import webdriver
import time

baseurl = 'https://www.instagram.com/'
plusurl = input('인스타 아이디를 넣으세요 : ')
url = baseurl + plusurl

driver = webdriver.Chrome()
driver.get(url)
time.sleep(3) #delay 방지
html = driver.page_source
soup = BeautifulSoup(html)

insta = soup.select('._aabd._aa8k._al3l') #image class 

n=1 #이미지 순번
for i in insta :
    print('https://www.instagram.com'+i.a['href'])
    imgUrl = i.select_one('._aagv').img['src']

    # 이미지 저장
    with urlopen(imgUrl) as f :
        with open ('instagram_crawling/image/'+plusurl + str(n) + '.jpg','wb') as h:
            img = f.read()
            h.write(img)
        n+=1
driver.close()
