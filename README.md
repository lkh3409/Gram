# Gram
"Gram" is a software that analyzes posts, extracts keywords, and outputs compatibility through the similarity of keywords

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



