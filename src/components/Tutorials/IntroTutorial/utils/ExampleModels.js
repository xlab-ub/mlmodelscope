const ExampleModels = [
  {
    "id": 18,
    "created_at": "2022-04-29T20:46:50.441766Z",
    "updated_at": "2022-04-29T20:46:50.441766Z",
    "attributes": {
      "Top1": "",
      "Top5": "",
      "kind": "CNN",
      "manifest_author": "Cheng Li",
      "training_dataset": "Pascal VOC"
    },
    "description": "MXNet Object Detection model, which is trained on the Pascal VOC dataset. Use faster_rcnn_resnet50_v1b_voc from GluonCV model zoo.\n",
    "short_description": "Faster R-CNN is an object detection network with a region proposal network (RPN) to enable nearly cost-free region proposals as compared to the early networks such as Fast R-CNN.",
    "model": {
      "graph_checksum": "",
      "graph_path": "model-symbol.json",
      "weights_checksum": "",
      "weights_path": "model-0000.params"
    },
    "framework": {
      "id": 1,
      "name": "MXNet",
      "version": "1.7.0",
      "architectures": [
        {
          "name": "amd64"
        }
      ]
    },
    "input": {
      "description": "",
      "type": ""
    },
    "license": "unrestricted",
    "name": "Faster_RCNN_ResNet50_v1b_VOC",
    "output": {
      "description": "the output bounding box",
      "type": "image_object_detection"
    },
    "url": {
      "github": "https://github.com/dmlc/gluon-cv/blob/master/gluoncv/model_zoo/rcnn/faster_rcnn/faster_rcnn.py",
      "citation": "https://arxiv.org/abs/1506.01497",
      "link1": "http://dspace.bracu.ac.bd/xmlui/bitstream/handle/10361/14070/19241031%2C%2015301031%2C%2015301094%2C%2015301098_CSE.pdf?sequence=1&isAllowed=y",
      "link2": ""
    },
    "version": "1.0"
  },
  {
    "id": 77,
    "created_at": "2022-04-29T20:47:35.617955Z",
    "updated_at": "2022-04-29T20:47:35.617955Z",
    "attributes": {
      "Top1": "74.33",
      "Top5": "91.85",
      "kind": "CNN",
      "manifest_author": "Cheng Li",
      "training_dataset": "ImageNet"
    },
    "description": "MXNet Image Classification model, which is trained on the ImageNet dataset. Use VGG19_bn from GluonCV model zoo.\n",
    "short_description": "VGG is a convolution neural network that increases its depth by using small (3x3) convolution filters. It pushes then deep neural network to the depth of 16 to 19 layers.",
    "model": {
      "graph_checksum": "",
      "graph_path": "model-symbol.json",
      "weights_checksum": "",
      "weights_path": "model-0000.params"
    },
    "framework": {
      "id": 1,
      "name": "MXNet",
      "version": "1.7.0",
      "architectures": [
        {
          "name": "amd64"
        }
      ]
    },
    "input": {
      "description": "",
      "type": ""
    },
    "license": "unrestricted",
    "name": "VGG19_bn",
    "output": {
      "description": "the output label",
      "type": "image_classification"
    },
    "url": {
      "github": "https://github.com/dmlc/gluon-cv/blob/master/gluoncv/model_zoo/vgg.py",
      "citation": "https://arxiv.org/abs/1409.1556",
      "link1": "https://iq.opengenus.org/vgg19-architecture/",
      "link2": ""
    },
    "version": "1.0"
  },
  {
    "id": 76,
    "created_at": "2022-04-29T20:47:34.998735Z",
    "updated_at": "2022-04-29T20:47:34.998735Z",
    "attributes": {
      "Top1": "74.11",
      "Top5": "91.35",
      "kind": "CNN",
      "manifest_author": "Cheng Li",
      "training_dataset": "ImageNet"
    },
    "description": "MXNet Image Classification model, which is trained on the ImageNet dataset. Use VGG19 from GluonCV model zoo.\n",
    "short_description": "VGG is a convolution neural network that increases its depth by using small (3x3) convolution filters. It pushes then deep neural network to the depth of 16 to 19 layers.",
    "model": {
      "graph_checksum": "",
      "graph_path": "model-symbol.json",
      "weights_checksum": "",
      "weights_path": "model-0000.params"
    },
    "framework": {
      "id": 1,
      "name": "MXNet",
      "version": "1.7.0",
      "architectures": [
        {
          "name": "amd64"
        }
      ]
    },
    "input": {
      "description": "",
      "type": ""
    },
    "license": "unrestricted",
    "name": "VGG19",
    "output": {
      "description": "the output label",
      "type": "image_classification"
    },
    "url": {
      "github": "https://github.com/dmlc/gluon-cv/blob/master/gluoncv/model_zoo/vgg.py",
      "citation": "https://arxiv.org/abs/1409.1556",
      "link1": "",
      "link2": ""
    },
    "version": "1.0"
  },
  {
    "id": 75,
    "created_at": "2022-04-29T20:47:34.23001Z",
    "updated_at": "2022-04-29T20:47:34.23001Z",
    "attributes": {
      "Top1": "73.10",
      "Top5": "91.76",
      "kind": "CNN",
      "manifest_author": "Cheng Li",
      "training_dataset": "ImageNet"
    },
    "description": "MXNet Image Classification model, which is trained on the ImageNet dataset. Use VGG16_bn from GluonCV model zoo.\n",
    "short_description": "VGG is a convolution neural network that increases its depth by using small (3x3) convolution filters. It pushes then deep neural network to the depth of 16 to 19 layers.",
    "model": {
      "graph_checksum": "",
      "graph_path": "model-symbol.json",
      "weights_checksum": "",
      "weights_path": "model-0000.params"
    },
    "framework": {
      "id": 1,
      "name": "MXNet",
      "version": "1.7.0",
      "architectures": [
        {
          "name": "amd64"
        }
      ]
    },
    "input": {
      "description": "",
      "type": ""
    },
    "license": "unrestricted",
    "name": "VGG16_bn",
    "output": {
      "description": "the output label",
      "type": "image_classification"
    },
    "url": {
      "github": "https://github.com/dmlc/gluon-cv/blob/master/gluoncv/model_zoo/vgg.py",
      "citation": "https://arxiv.org/abs/1409.1556",
      "link1": "",
      "link2": ""
    },
    "version": "1.0"
  },
  {
    "id": 74,
    "created_at": "2022-04-29T20:47:32.24456Z",
    "updated_at": "2022-04-29T20:47:32.24456Z",
    "attributes": {
      "Top1": "73.23",
      "Top5": "91.31",
      "kind": "CNN",
      "manifest_author": "Cheng Li",
      "training_dataset": "ImageNet"
    },
    "description": "MXNet Image Classification model, which is trained on the ImageNet dataset. Use VGG16 from GluonCV model zoo.\n",
    "short_description": "VGG is a convolution neural network that increases its depth by using small (3x3) convolution filters. It pushes then deep neural network to the depth of 16 to 19 layers.",
    "model": {
      "graph_checksum": "",
      "graph_path": "model-symbol.json",
      "weights_checksum": "",
      "weights_path": "model-0000.params"
    },
    "framework": {
      "id": 1,
      "name": "MXNet",
      "version": "1.7.0",
      "architectures": [
        {
          "name": "amd64"
        }
      ]
    },
    "input": {
      "description": "",
      "type": ""
    },
    "license": "unrestricted",
    "name": "VGG16",
    "output": {
      "description": "the output label",
      "type": "image_classification"
    },
    "url": {
      "github": "https://github.com/dmlc/gluon-cv/blob/master/gluoncv/model_zoo/vgg.py",
      "citation": "https://arxiv.org/abs/1409.1556",
      "link1": "https://www.mygreatlearning.com/blog/introduction-to-vgg16/",
      "link2": ""
    },
    "version": "1.0"
  },
  {
    "id": 73,
    "created_at": "2022-04-29T20:47:31.475994Z",
    "updated_at": "2022-04-29T20:47:31.475994Z",
    "attributes": {
      "Top1": "68.84",
      "Top5": "88.11",
      "kind": "CNN",
      "manifest_author": "Cheng Li",
      "training_dataset": "ImageNet"
    },
    "description": "MXNet Image Classification model, which is trained on the ImageNet dataset. Use VGG13_bn from GluonCV model zoo.\n",
    "short_description": "VGG is a convolution neural network that increases its depth by using small (3x3) convolution filters. It pushes then deep neural network to the depth of 16 to 19 layers.",
    "model": {
      "graph_checksum": "",
      "graph_path": "model-symbol.json",
      "weights_checksum": "",
      "weights_path": "model-0000.params"
    },
    "framework": {
      "id": 1,
      "name": "MXNet",
      "version": "1.7.0",
      "architectures": [
        {
          "name": "amd64"
        }
      ]
    },
    "input": {
      "description": "",
      "type": ""
    },
    "license": "unrestricted",
    "name": "VGG13_bn",
    "output": {
      "description": "the output label",
      "type": "image_classification"
    },
    "url": {
      "github": "https://github.com/dmlc/gluon-cv/blob/master/gluoncv/model_zoo/vgg.py",
      "citation": "https://arxiv.org/abs/1409.1556",
      "link1": "",
      "link2": ""
    },
    "version": "1.0"
  },
  {
    "id": 72,
    "created_at": "2022-04-29T20:47:30.706434Z",
    "updated_at": "2022-04-29T20:47:30.706434Z",
    "attributes": {
      "Top1": "67.74",
      "Top5": "88.11",
      "kind": "CNN",
      "manifest_author": "Cheng Li",
      "training_dataset": "ImageNet"
    },
    "description": "MXNet Image Classification model, which is trained on the ImageNet dataset. Use VGG13 from GluonCV model zoo.\n",
    "short_description": "VGG is a convolution neural network that increases its depth by using small (3x3) convolution filters. It pushes then deep neural network to the depth of 16 to 19 layers.",
    "model": {
      "graph_checksum": "",
      "graph_path": "model-symbol.json",
      "weights_checksum": "",
      "weights_path": "model-0000.params"
    },
    "framework": {
      "id": 1,
      "name": "MXNet",
      "version": "1.7.0",
      "architectures": [
        {
          "name": "amd64"
        }
      ]
    },
    "input": {
      "description": "",
      "type": ""
    },
    "license": "unrestricted",
    "name": "VGG13",
    "output": {
      "description": "the output label",
      "type": "image_classification"
    },
    "url": {
      "github": "https://github.com/dmlc/gluon-cv/blob/master/gluoncv/model_zoo/vgg.py",
      "citation": "https://arxiv.org/abs/1409.1556",
      "link1": "https://www.researchgate.net/publication/337438949_Neural_Network_Memorization_Dissection",
      "link2": ""
    },
    "version": "1.0"
  },
  {
    "id": 71,
    "created_at": "2022-04-29T20:47:29.938492Z",
    "updated_at": "2022-04-29T20:47:29.938492Z",
    "attributes": {
      "Top1": "68.59",
      "Top5": "88.72",
      "kind": "CNN",
      "manifest_author": "Cheng Li",
      "training_dataset": "ImageNet"
    },
    "description": "MXNet Image Classification model, which is trained on the ImageNet dataset. Use VGG11 from GluonCV model zoo.\n",
    "short_description": "VGG is a convolution neural network that increases its depth by using small (3x3) convolution filters. It pushes then deep neural network to the depth of 16 to 19 layers.",
    "model": {
      "graph_checksum": "",
      "graph_path": "model-symbol.json",
      "weights_checksum": "",
      "weights_path": "model-0000.params"
    },
    "framework": {
      "id": 1,
      "name": "MXNet",
      "version": "1.7.0",
      "architectures": [
        {
          "name": "amd64"
        }
      ]
    },
    "input": {
      "description": "",
      "type": ""
    },
    "license": "unrestricted",
    "name": "VGG11_bn",
    "output": {
      "description": "the output label",
      "type": "image_classification"
    },
    "url": {
      "github": "https://github.com/dmlc/gluon-cv/blob/master/gluoncv/model_zoo/vgg.py",
      "citation": "https://arxiv.org/abs/1409.1556",
      "link1": "",
      "link2": ""
    },
    "version": "1.0"
  },
  {
    "id": 70,
    "created_at": "2022-04-29T20:47:29.168521Z",
    "updated_at": "2022-04-29T20:47:29.168521Z",
    "attributes": {
      "Top1": "66.62",
      "Top5": "87.34",
      "kind": "CNN",
      "manifest_author": "Cheng Li",
      "training_dataset": "ImageNet"
    },
    "description": "MXNet Image Classification model, which is trained on the ImageNet dataset. Use VGG11 from GluonCV model zoo.\n",
    "short_description": "VGG is a convolution neural network that increases its depth by using small (3x3) convolution filters. It pushes then deep neural network to the depth of 16 to 19 layers.",
    "model": {
      "graph_checksum": "",
      "graph_path": "model-symbol.json",
      "weights_checksum": "",
      "weights_path": "model-0000.params"
    },
    "framework": {
      "id": 1,
      "name": "MXNet",
      "version": "1.7.0",
      "architectures": [
        {
          "name": "amd64"
        }
      ]
    },
    "input": {
      "description": "",
      "type": ""
    },
    "license": "unrestricted",
    "name": "VGG11",
    "output": {
      "description": "the output label",
      "type": "image_classification"
    },
    "url": {
      "github": "https://github.com/dmlc/gluon-cv/blob/master/gluoncv/model_zoo/vgg.py",
      "citation": "https://arxiv.org/abs/1409.1556",
      "link1": "https://iq.opengenus.org/vgg-11/",
      "link2": ""
    },
    "version": "1.0"
  },
  {
    "id": 69,
    "created_at": "2022-04-29T20:47:28.399848Z",
    "updated_at": "2022-04-29T20:47:28.399848Z",
    "attributes": {
      "Top1": "",
      "Top5": "",
      "kind": "CNN",
      "manifest_author": "Cheng Li",
      "training_dataset": "Pascal VOC"
    },
    "description": "MXNet Object Detection model, which is trained on the Pascal VOC dataset. Use ssd_512_vgg16_atrous_voc from GluonCV model zoo.\n",
    "short_description": "SSD is a Single Shot MultiBox model for object detection without proposal generation. It achieves this by discretizing the output space of bounding boxes into a set of default boxes over different aspect ratios and scales per feature map location.",
    "model": {
      "graph_checksum": "",
      "graph_path": "model-symbol.json",
      "weights_checksum": "",
      "weights_path": "model-0000.params"
    },
    "framework": {
      "id": 1,
      "name": "MXNet",
      "version": "1.7.0",
      "architectures": [
        {
          "name": "amd64"
        }
      ]
    },
    "input": {
      "description": "",
      "type": ""
    },
    "license": "unrestricted",
    "name": "SSD_512_VGG16_Atrous_VOC",
    "output": {
      "description": "the output bounding box",
      "type": "image_object_detection"
    },
    "url": {
      "github": "https://github.com/dmlc/gluon-cv/blob/master/gluoncv/model_zoo/ssd/vgg_atrous.py",
      "citation": "https://arxiv.org/abs/1512.02325",
      "link1": "",
      "link2": ""
    },
    "version": "1.0"
  },
  {
    "id": 68,
    "created_at": "2022-04-29T20:47:27.631827Z",
    "updated_at": "2022-04-29T20:47:27.631827Z",
    "attributes": {
      "Top1": "",
      "Top5": "",
      "kind": "CNN",
      "manifest_author": "Cheng Li",
      "training_dataset": "COCO"
    },
    "description": "MXNet Object Detection model, which is trained on the COCO dataset. Use ssd_512_vgg16_atrous_coco from GluonCV model zoo.\n",
    "short_description": "SSD is a Single Shot MultiBox model for object detection without proposal generation. It achieves this by discretizing the output space of bounding boxes into a set of default boxes over different aspect ratios and scales per feature map location.",
    "model": {
      "graph_checksum": "",
      "graph_path": "model-symbol.json",
      "weights_checksum": "",
      "weights_path": "model-0000.params"
    },
    "framework": {
      "id": 1,
      "name": "MXNet",
      "version": "1.7.0",
      "architectures": [
        {
          "name": "amd64"
        }
      ]
    },
    "input": {
      "description": "",
      "type": ""
    },
    "license": "unrestricted",
    "name": "SSD_512_VGG16_Atrous_COCO",
    "output": {
      "description": "the output bounding box",
      "type": "image_object_detection"
    },
    "url": {
      "github": "https://github.com/dmlc/gluon-cv/blob/master/gluoncv/model_zoo/ssd/vgg_atrous.py",
      "citation": "https://arxiv.org/abs/1512.02325",
      "link1": "",
      "link2": ""
    },
    "version": "1.0"
  },
  {
    "id": 67,
    "created_at": "2022-04-29T20:47:26.86182Z",
    "updated_at": "2022-04-29T20:47:26.86182Z",
    "attributes": {
      "Top1": "",
      "Top5": "",
      "kind": "CNN",
      "manifest_author": "Cheng Li",
      "training_dataset": "Pascal VOC"
    },
    "description": "MXNet Object Detection model, which is trained on the Pascal VOC dataset. Use ssd_512_resnet50_v1_voc from GluonCV model zoo.\n",
    "short_description": "SSD is a Single Shot MultiBox model for object detection without proposal generation. It achieves this by discretizing the output space of bounding boxes into a set of default boxes over different aspect ratios and scales per feature map location.",
    "model": {
      "graph_checksum": "",
      "graph_path": "model-symbol.json",
      "weights_checksum": "",
      "weights_path": "model-0000.params"
    },
    "framework": {
      "id": 1,
      "name": "MXNet",
      "version": "1.7.0",
      "architectures": [
        {
          "name": "amd64"
        }
      ]
    },
    "input": {
      "description": "",
      "type": ""
    },
    "license": "unrestricted",
    "name": "SSD_512_ResNet50_v1_VOC",
    "output": {
      "description": "the output bounding box",
      "type": "image_object_detection"
    },
    "url": {
      "github": "https://github.com/dmlc/gluon-cv/blob/master/gluoncv/model_zoo/ssd/resnet_v1b_ssd.py",
      "citation": "https://ieeexplore.ieee.org/document/9073753",
      "link1": "https://arxiv.org/pdf/1912.06319.pdf",
      "link2": ""
    },
    "version": "1.0"
  },
  {
    "id": 66,
    "created_at": "2022-04-29T20:47:26.094292Z",
    "updated_at": "2022-04-29T20:47:26.094292Z",
    "attributes": {
      "Top1": "",
      "Top5": "",
      "kind": "CNN",
      "manifest_author": "Cheng Li",
      "training_dataset": "COCO"
    },
    "description": "MXNet Object Detection model, which is trained on the COCO dataset. Use ssd_512_resnet50_v1_coco from GluonCV model zoo.\n",
    "short_description": "SSD is a Single Shot MultiBox model for object detection without proposal generation. It achieves this by discretizing the output space of bounding boxes into a set of default boxes over different aspect ratios and scales per feature map location.",
    "model": {
      "graph_checksum": "",
      "graph_path": "model-symbol.json",
      "weights_checksum": "",
      "weights_path": "model-0000.params"
    },
    "framework": {
      "id": 1,
      "name": "MXNet",
      "version": "1.7.0",
      "architectures": [
        {
          "name": "amd64"
        }
      ]
    },
    "input": {
      "description": "",
      "type": ""
    },
    "license": "unrestricted",
    "name": "SSD_512_ResNet50_v1_COCO",
    "output": {
      "description": "the output bounding box",
      "type": "image_object_detection"
    },
    "url": {
      "github": "https://github.com/dmlc/gluon-cv/blob/master/gluoncv/model_zoo/ssd/resnet_v1b_ssd.py",
      "citation": "https://ieeexplore.ieee.org/document/9073753",
      "link1": "https://arxiv.org/pdf/1912.06319.pdf",
      "link2": ""
    },
    "version": "1.0"
  },
  {
    "id": 60,
    "created_at": "2022-04-29T20:47:22.023613Z",
    "updated_at": "2022-04-29T20:47:22.023613Z",
    "attributes": {
      "Top1": "54.96",
      "Top5": "78.17",
      "kind": "CNN",
      "manifest_author": "Cheng Li",
      "training_dataset": "ImageNet"
    },
    "description": "MXNet Image Classification model, which is trained on the ImageNet dataset. Use SqueezeNet_v1.1 from GluonCV model zoo.\n",
    "short_description": "SqueezeNet reduces the convoluational neural networks parameters by introducing a fire module consisting of 1x1 filters and squeeze layers.",
    "model": {
      "graph_checksum": "4540936dae06bf9304838e3df88c24e8",
      "graph_path": "model-symbol.json",
      "weights_checksum": "1351611541c24b57015aee487f4b7d70",
      "weights_path": "model-0000.params"
    },
    "framework": {
      "id": 1,
      "name": "MXNet",
      "version": "1.7.0",
      "architectures": [
        {
          "name": "amd64"
        }
      ]
    },
    "input": {
      "description": "",
      "type": ""
    },
    "license": "unrestricted",
    "name": "SqueezeNet_v1.1",
    "output": {
      "description": "the output label",
      "type": "image_classification"
    },
    "url": {
      "github": "https://github.com/dmlc/gluon-cv/blob/master/gluoncv/model_zoo/squeezenet.py",
      "citation": "https://arxiv.org/abs/1602.07360",
      "link1": "",
      "link2": ""
    },
    "version": "1.0"
  },
  {
    "id": 59,
    "created_at": "2022-04-29T20:47:21.38114Z",
    "updated_at": "2022-04-29T20:47:21.38114Z",
    "attributes": {
      "Top1": "56.11",
      "Top5": "79.09",
      "kind": "CNN",
      "manifest_author": "Cheng Li",
      "training_dataset": "ImageNet"
    },
    "description": "MXNet Image Classification model, which is trained on the ImageNet dataset. Use SqueezeNet_v1.0 from GluonCV model zoo.\n",
    "short_description": "SqueezeNet reduces the convoluational neural networks parameters by introducing a fire module consisting of 1x1 filters and squeeze layers.",
    "model": {
      "graph_checksum": "ddf014f8b42e26d8d60f9cc5803f8cf3",
      "graph_path": "model-symbol.json",
      "weights_checksum": "8cf396e2ec24691020fae29ffc98b88a",
      "weights_path": "model-0000.params"
    },
    "framework": {
      "id": 1,
      "name": "MXNet",
      "version": "1.7.0",
      "architectures": [
        {
          "name": "amd64"
        }
      ]
    },
    "input": {
      "description": "",
      "type": ""
    },
    "license": "unrestricted",
    "name": "SqueezeNet_v1.0",
    "output": {
      "description": "the output label",
      "type": "image_classification"
    },
    "url": {
      "github": "https://github.com/dmlc/gluon-cv/blob/master/gluoncv/model_zoo/squeezenet.py",
      "citation": "https://arxiv.org/abs/1602.07360",
      "link1": "",
      "link2": ""
    },
    "version": "1.0"
  },
]

export default ExampleModels;
