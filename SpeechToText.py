import speech_recognition as sr
import pyttsx3


#Initializing the speech recognizer
r = sr.Recognizer()

# Function to identify the audio 
def record_text(): 
    #Loop in case of errors - Ex: If audio is unable to understand

    while(1):
        try:
            #Getting the microphone as the source of input
            with sr.Microphone() as source2:
                #Preparing the recognizer to recieve input
                r.adjust_for_ambient_noise(source2, duration=0.2)

                #Listen for the user's answers
                audio2 = r.listen(source2)

                #Using google's speech recognition to recognise the audio
                myText = r.recognize_google(audio2)

                return myText

        #These except blocks are used in cases when the audio cannot be understood
        except sr.RequestError as e:
            print("Could not request results; {0}".format(e))

        except sr.UnknownValueError:
            print("An Unknown Error Occured!")
    return

#Function to export the audio into text
def output_text(text):
    f = open("output.txt","a")
    f.write(text)
    f.write("\n")
    f.close();
    return

def answer_text():
    f = open("output.txt","r")
    f.read()



#Functions are are called repetitively. Therefore, the audio can be converted to text in a loop
while(1):
    text = record_text()
    output_text(text)

    print("Wrote Text")