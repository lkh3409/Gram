from transformers import ViTImageProcessor, ViTForImageClassification
from PIL import Image
import torch
import torch.nn.functional as F

# 이미지 열기
image = Image.open('test_2.jpg')

# 모델과 프로세서 불러오기
processor = ViTImageProcessor.from_pretrained('google/vit-base-patch16-224')
model = ViTForImageClassification.from_pretrained('google/vit-base-patch16-224')

# 이미지 전처리 및 모델 예측
inputs = processor(images=image, return_tensors="pt")
outputs = model(**inputs)
logits = outputs.logits

# 소프트맥스 함수를 사용하여 확률로 변환
probabilities = F.softmax(logits, dim=-1)

# 상위 N개 클래스 선택 (예: 상위 5개 클래스)
top_n_predictions = torch.topk(probabilities, k=5, dim=-1)

# 결과 출력
for i in range(top_n_predictions.indices.size(1)):
    predicted_class_idx = top_n_predictions.indices[0, i].item()
    predicted_prob = top_n_predictions.values[0, i].item()
    predicted_label = model.config.id2label[predicted_class_idx]
    print(f"Predicted class {i + 1}: {predicted_label} with probability {predicted_prob:.4f}")