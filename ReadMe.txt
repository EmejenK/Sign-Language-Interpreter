1. Import And Install Dependencies
   pip install opencv-python (computer vision library that allows you to work with laptops camera; access webcam)
   pip install tensorflow (library used for building and training machine learning models; With TensorFlow, developers can create models for a variety of tasks, such as image and speech recognition, natural language processing, and time-series analysis)
   pip install tensorflow-gpu (TensorFlow GPU (Graphics Processing Unit) is a version of the TensorFlow machine learning framework that is optimized to run on graphics processing units. GPUs are specialized hardware that can perform massively parallel computations, making them ideal for accelerating machine learning algorithms, which often require processing large amounts of data. It accelerate the training and inference of deep neural networks)
   pip install mediapipe (MediaPipe is an open-source, cross-platform framework developed by Google that provides a pipeline-based approach for building multimodal (audio, video, and sensor) applications. It offers a set of pre-built components, tools, and workflows for building machine learning (ML) and computer vision (CV) pipelines. MediaPipe enables developers to easily create complex pipelines for processing video and audio data, including real-time processing of camera and microphone input. It also includes a collection of pre-trained ML models for tasks such as object detection, face detection and recognition, pose estimation, hand tracking)
   pip install matplotlib (Matplotlib is a popular data visualization library for Python. It allows you to create a wide range of 2D and 3D plots, histograms, scatter plots, bar charts, and other types of visualizations. Matplotlib is highly customizable, allowing you to adjust almost every aspect of a plot, including the colors, fonts, labels, axes, and gridlines. Matplotlib is built on top of NumPy, another popular Python library for scientific computing, and is widely used in fields such as data science, machine learning, engineering, and finance. It is an open-source library and is available for free. Matplotlib also provides a number of tools for working with data, including functions for loading and manipulating data, as well as tools for generating statistical plots and visualizations.)
   pip install sklearn (s a popular open-source machine learning library for the Python programming language. It provides a wide range of tools for data preprocessing, feature extraction, feature selection, model selection, and evaluation. Scikit-learn is built on top of other Python libraries, such as NumPy, SciPy, and Matplotlib, and it integrates well with other Python libraries for data analysis and visualization. Scikit-learn provides a variety of machine learning algorithms, including supervised learning (classification and regression), unsupervised learning (clustering, dimensionality reduction), and semi-supervised learning. It also offers tools for model selection and evaluation, including cross-validation, grid search, and various metrics for evaluating model performance. Scikit-learn is widely used in industry and academia for a variety of applications, including natural language processing, image processing, and predictive analytics. Its popularity stems from its ease of use, well-documented API, and the large community of developers contributing to its development and maintenance.)

2. Keypoints Using MP Holistic 
   p2j command covert pyton file to notebook file
   mp_drawing.draw_landmarks?? used to see more functions that can be done to draw landmarks
   mp_holistic.POSE_CONNECTIONS this shows what Pose landmarks connnect to other landmarks

    -Defining the Holistic models and drawing utilities variables
    -Make functions for reuse of Holistic models and drawing utilities variables for detections
    -Access MediaPipe Holistic Model
    -Set MediaPipe Model
    -Can get the lenth, frame, results, draw_styled_landmarks and plt.imshow(cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)) #Convert to real original color of the frame 

3. Extract Keypoint Values
4. Setup Folder For Collection
5. Collect Keypoint Values For Training And Testing
6. Preprocess Data And Create Labels And Features
7. Build And Train LSTM Neutral Network
    -Less data required for training
    -Faster to train the data
    -Faster in real time detection
    
8. Make Predictions
9. Save Weights
10. Evaluation Using Confusion Matrix And Accuracy 
11. Test in Real Time