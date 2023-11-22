from transformers import ViTImageProcessor, ViTForImageClassification
from PIL import Image
import torch
import torch.nn.functional as F
from word2vec import cosim
# 이미지 파일들의 경로 리스트 (두 그룹으로 나누기)
image_paths_group1 = ['image_word_sim/jegalhhhhhhhhhhhhhhhhhhhhsex.y1.jpg', 'image_word_sim/jegalhhhhhhhhhhhhhhhhhhhhsex.y2.jpg']
image_paths_group2 = ['image_word_sim/im_agjun1.jpg', 'image_word_sim/im_agjun2.jpg']

# 모델과 프로세서 불러오기
processor = ViTImageProcessor.from_pretrained('google/vit-base-patch16-224')
model = ViTForImageClassification.from_pretrained('google/vit-base-patch16-224')

# 예측된 라벨을 저장할 리스트 (두 그룹에 대한 각각의 리스트)
predicted_labels_group1 = []
predicted_labels_group2 = []

# 각 이미지 그룹에 대한 예측 수행
for image_paths, predicted_labels_list in zip([image_paths_group1, image_paths_group2],
                                              [predicted_labels_group1, predicted_labels_group2]):
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
list2=[" ".join(predicted_labels_group2)]



# 예측된 라벨 리스트 출력
print("Predicted labels for group 1:", list1)
print("Predicted labels for group 2:", list2)

cosim(list1, list2)
