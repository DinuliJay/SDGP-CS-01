import cv2
import mediapipe as mp
import numpy as np
from collections import Counter
import pandas as pd
import pickle


# Initialize variables for emotion counting and feedback
emotions = []

# Initialize MediaPipe
mp_drawing = mp.solutions.drawing_utils
mp_holistic = mp.solutions.holistic

# Load the trained machine learning model
with open('body_language.pkl', 'rb') as f:
    model = pickle.load(f)

# Initialize video capture
cap = cv2.VideoCapture(0)

# Open the text file for writing feedback
feedback_file = open("feedback.txt", "w")


# Function to provide feedback based on the most repeated emotion
def provide_feedback(most_repeated_emotion):
    if most_repeated_emotion == 'Pleasant':
        feedback = "Brilliant! You were maintaining a pleasant expression Throughout the Interview"
    elif most_repeated_emotion == 'Nervous':
        feedback = ("Oops! Facing an interview with a Nervous face would leave a bad impression. Make sure to be "
                    "pleasant")
    elif most_repeated_emotion == 'Confused':
        feedback = "Don't Show that you are confused during the interview"
    elif most_repeated_emotion == 'Good Posture':
        feedback = "Well Done! You've maintained good posture throughout the Interview"
    else:
        feedback = "You've shown {most_repeated_emotion} the most. How do you feel about that?"
    return feedback


with mp_holistic.Holistic(min_detection_confidence=0.5, min_tracking_confidence=0.5) as holistic:
    while True:
        ret, frame = cap.read()
        if not ret:
            break

        # Process frame with MediaPipe
        image = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        image.flags.writeable = False
        results = holistic.process(image)
        image.flags.writeable = True
        image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)

        # Extract the detected class
        try:
            # Extract Pose Landmarks
            pose = results.pose_landmarks.landmark
            pose_row = list(
                np.array([[landmark.x, landmark.y, landmark.z, landmark.visibility] for landmark in pose]).flatten())

            # Extract Face Landmarks
            face = results.face_landmarks.landmark
            face_row = list(
                np.array([[landmark.x, landmark.y, landmark.z, landmark.visibility] for landmark in face]).flatten())

            row = pose_row + face_row

            # Classify the detected emotion
            X = pd.DataFrame([row])
            body_language_class = model.predict(X)[0]
            emotions.append(body_language_class)

            # Provide feedback based on the detected emotion
            most_repeated_emotion = Counter(emotions).most_common(1)[0][0]
            feedback = provide_feedback(most_repeated_emotion)
            print(feedback)

            # Write feedback to the text file
            feedback_file.write(feedback + "\n")

        except Exception as e:
            print("Error:", e)

        # Draw landmarks on frame
        mp_drawing.draw_landmarks(image, results.face_landmarks, mp_holistic.FACEMESH_CONTOURS)
        mp_drawing.draw_landmarks(image, results.pose_landmarks, mp_holistic.POSE_CONNECTIONS)

        # Display the frame
        cv2.imshow('Frame', image)

        # Check for quit command
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

# Close the text file and release the video capture
feedback_file.close()
cap.release()
cv2.destroyAllWindows()
