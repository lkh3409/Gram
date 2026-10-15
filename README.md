# Gram

**인스타 피드 분석을 통한 궁합 평가** · 2023 컴퓨터공학부 프로젝트

두 사람의 인스타그램 피드 사진에서 키워드를 뽑고, 키워드 사이의 의미 유사도로 궁합 점수를 계산하는 웹 서비스입니다.

## 동작 방식

1. 입력한 두 인스타그램 계정의 피드 사진을 Selenium으로 수집합니다.
2. 이미지 분류 모델(ViT)로 사진마다 키워드를 뽑습니다. 중간발표 때는 InceptionV3를 썼습니다.
3. Word2Vec 임베딩의 코사인 유사도로 두 사람의 키워드가 얼마나 비슷한지 계산합니다.
4. Flask API가 결과를 React 웹 화면에 보여줍니다.

## 팀

| 이름 | 역할 |
|---|---|
| 김예빈 | 프론트엔드 |
| 김택수 | 프론트엔드, 백엔드 |
| 제갈민혁 | AI 모델 |
| 이강훈 | AI 모델, API 구현 |

# How to use?
1. install
   ```bash
   # clone this repo
   git clone https://github.com/lkh3409/Gram.git  
   ```
   ```
   check requirements.txt and install libraries(ex. torch, flask,tensorflow ...)
   ```
2. Run flask web application and react web
   ```shell
   cd flask-server
   python app.py
   ```
    ```shell
   cd frontend
   npm start
   ```
# Architecture
![스크린샷 2023-11-23 224946](https://github.com/lkh3409/Gram/assets/67497047/f337dba2-46ff-47d8-946b-27b61e8b494f)</br>
# Preview
![ㅁㄴㅇㅁㅇㄴㄴㅁㅇ](https://github.com/lkh3409/Gram/assets/67497047/f8b8cea8-253f-455d-b0bb-03dd0e8b82d8)</br>
![ㅁㅁㅁ1](https://github.com/lkh3409/Gram/assets/67497047/24d055f3-3bee-43d6-989f-3a32544828aa)</br>


# Reference
[VIT model](https://huggingface.co/google/vit-base-patch16-224)</br>
[word2vec](https://www.kaggle.com/models/google/wiki-words/frameworks/tensorFlow2/variations/500-with-normalization/versions/1?tfhub-redirect=true)</br>



