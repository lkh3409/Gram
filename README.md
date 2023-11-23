# Gram
"Gram" is a software that receives two Instagram IDs, analyzes posts, extracts keywords, and outputs compatibility through the similarity of keywords

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
# preview

# reference
[VIT model](https://huggingface.co/google/vit-base-patch16-224)
[word2vec](https://www.kaggle.com/models/google/wiki-words/frameworks/tensorFlow2/variations/500-with-normalization/versions/1?tfhub-redirect=true)


