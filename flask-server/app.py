from flask import Flask, request, jsonify, send_from_directory, g, session
import base64
from urllib.request import urlopen
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
import time
from transformers import ViTImageProcessor, ViTForImageClassification
from PIL import Image
import torch
import torch.nn.functional as F
from flask_cors import CORS
from webdriver_manager.chrome import ChromeDriverManager
from word2vec import cosim

app = Flask(__name__)
CORS(app)
app.secret_key = 'rlaxortn0329'

@app.route('/')
def serve():
    return send_from_directory('../frontend/build', 'index.html')

@app.route("/user1", methods=['POST'])
def crawl1():
    data = request.get_json()
    search_text = data.get('searchText', '')

    baseurl = 'https://www.instagram.com/'
    plusurl = search_text
    url = baseurl + plusurl

    driver = webdriver.Chrome()

    driver.get("https://instagram.com")
    #인스타그램 자동로그인
    driver.implicitly_wait(10)  #나타날때까지 최대 10초동안 기다려
    login_id = driver.find_element(By.CSS_SELECTOR, 'input[name="username"]')
    login_id.send_keys('bonsnal') # 아이디 입력
    login_pwd = driver.find_element(By.CSS_SELECTOR, 'input[name="password"]')
    login_pwd.send_keys('rlaxortn0329')
    driver.implicitly_wait(10)
    login_id.send_keys(Keys.ENTER) #enter 키를 쳐주세요
    time.sleep(5)

    driver.get(url)
    time.sleep(3) #delay 방지
    html = driver.page_source
    soup = BeautifulSoup(html,features='lxml')
    insta = soup.select('._aabd._aa8k._al3l') #image class 

    g.image_list=[]
    n=1 #이미지 순번
    for i in insta :
        print('https://www.instagram.com'+i.a['href'])
        imgUrl = i.select_one('._aagv').img['src']

        # 이미지 저장
        with urlopen(imgUrl) as f :
            imageurl='./static/'+plusurl + str(n) + '.jpg'
            with open ('./static/'+plusurl + str(n) + '.jpg','wb') as h:
                img = f.read()
                h.write(img)
                g.image_list.append(imageurl)
            n+=1
    driver.close()
    with open('./static/'+plusurl+str(1)+'.jpg', 'rb') as img_file:
            img_data = img_file.read()
            img_base64 = base64.b64encode(img_data).decode('utf-8')
    recog1()
    return {'image': img_base64}

@app.route("/user1", methods=['POST'])
def recog1():
    # 이미지 파일들의 경로 리스트 (두 그룹으로 나누기)
    image_paths_group1 = getattr(g, 'image_list', None)
    
    # 모델과 프로세서 불러오기
    processor = ViTImageProcessor.from_pretrained('google/vit-base-patch16-224')
    model = ViTForImageClassification.from_pretrained('google/vit-base-patch16-224')

    # 예측된 라벨을 저장할 리스트 (두 그룹에 대한 각각의 리스트)
    predicted_labels_group1 = []

    # 각 이미지 그룹에 대한 예측 수행
    for image_paths, predicted_labels_list in zip([image_paths_group1],
                                                [predicted_labels_group1]):
        # 이미지 그룹에 대한 예측 수행
        for image_path in image_paths:
            # 이미지 열기
            image = Image.open(image_path)

            # 이미지 전처리 및 모델 예측
            inputs = processor(images=image, return_tensors="pt")
            outputs = model(**inputs)
            logits = outputs.logits

            # 소프트맥스 함수를 사용하여 확률로 변환
            probabilities = F.softmax(logits, dim=-1)

            # 상위 N개 클래스 선택 (예: 상위 5개 클래스)
            top_n_predictions = torch.topk(probabilities, k=3, dim=-1)

            # 예측된 라벨을 스트링으로 변환하여 리스트에 추가
            predicted_labels = " ".join([model.config.id2label[idx.item()] for idx in top_n_predictions.indices[0]])
            predicted_labels_list.append(predicted_labels)
            print(f"Predicted labels for {image_path}: {predicted_labels}")

    list1=[" ".join(predicted_labels_group1)]

    session['label_list1'] = list1

    # 예측된 라벨 리스트 출력
    print("Predicted labels for group 1:", list1)

    return 


@app.route("/user2", methods=['POST'])
def crawl2():
    data = request.get_json()
    search_text = data.get('searchText', '')

    baseurl = 'https://www.instagram.com/'
    plusurl = search_text
    url = baseurl + plusurl

    driver = webdriver.Chrome()

    driver.get("https://instagram.com")
    #인스타그램 자동로그인
    driver.implicitly_wait(10)  #나타날때까지 최대 10초동안 기다려
    login_id = driver.find_element(By.CSS_SELECTOR, 'input[name="username"]')
    login_id.send_keys('bonsnal') # 아이디 입력
    login_pwd = driver.find_element(By.CSS_SELECTOR, 'input[name="password"]')
    login_pwd.send_keys('rlaxortn0329')
    time.sleep(5)
    login_id.send_keys(Keys.ENTER) #enter 키를 쳐주세요
    time.sleep(5)

    driver.get(url)
    time.sleep(3) #delay 방지
    html = driver.page_source
    soup = BeautifulSoup(html,features='lxml')
    insta = soup.select('._aabd._aa8k._al3l') #image class 

    g.image_list=[]
    n=1 #이미지 순번
    for i in insta :
        print('https://www.instagram.com'+i.a['href'])
        imgUrl = i.select_one('._aagv').img['src']

        # 이미지 저장
        with urlopen(imgUrl) as f :
            imageurl='./static/'+plusurl + str(n) + '.jpg'
            with open ('./static/'+plusurl + str(n) + '.jpg','wb') as h:
                img = f.read()
                h.write(img)
                g.image_list.append(imageurl)
            n+=1
    driver.close()
    with open('./static/'+plusurl+str(1)+'.jpg', 'rb') as img_file:
            img_data = img_file.read()
            img_base64 = base64.b64encode(img_data).decode('utf-8')
    recog2()
    return {'image': img_base64}

@app.route("/user2", methods=['POST'])
def recog2():
    # 이미지 파일들의 경로 리스트 (두 그룹으로 나누기)
    image_paths_group1 = getattr(g, 'image_list', None)
    
    # 모델과 프로세서 불러오기
    processor = ViTImageProcessor.from_pretrained('google/vit-base-patch16-224')
    model = ViTForImageClassification.from_pretrained('google/vit-base-patch16-224')

    # 예측된 라벨을 저장할 리스트 (두 그룹에 대한 각각의 리스트)
    predicted_labels_group1 = []

    # 각 이미지 그룹에 대한 예측 수행
    for image_paths, predicted_labels_list in zip([image_paths_group1],
                                                [predicted_labels_group1]):
        # 이미지 그룹에 대한 예측 수행
        for image_path in image_paths:
            # 이미지 열기
            image = Image.open(image_path)

            # 이미지 전처리 및 모델 예측
            inputs = processor(images=image, return_tensors="pt")
            outputs = model(**inputs)
            logits = outputs.logits

            # 소프트맥스 함수를 사용하여 확률로 변환
            probabilities = F.softmax(logits, dim=-1)

            # 상위 N개 클래스 선택 (예: 상위 5개 클래스)
            top_n_predictions = torch.topk(probabilities, k=3, dim=-1)

            # 예측된 라벨을 스트링으로 변환하여 리스트에 추가
            predicted_labels = " ".join([model.config.id2label[idx.item()] for idx in top_n_predictions.indices[0]])
            predicted_labels_list.append(predicted_labels)
            print(f"Predicted labels for {image_path}: {predicted_labels}")

    list1=[" ".join(predicted_labels_group1)]

    session['label_list2'] = list1

    # 예측된 라벨 리스트 출력
    print("Predicted labels for group 1:", list1)

    return 


@app.route("/sim", methods=['GET'])
def sim():
    result1=session.get('label_list1', '111')
    result2=session.get('label_list2', '111')
    print("#####")
    print(cosim(result1,result2))
    print("#####")
    result=int(cosim(result1,result2))
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)