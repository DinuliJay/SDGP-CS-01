from flask import Flask, request

app = Flask(__name__)

import speech_recognition as sr


#Initializing the speech recognizer
r = sr.Recognizer()

#Keywords for the answer
keywords = [
    ['professional','technology','passionate','hardworking',
    'goals','skills','achievement','passion','background',
    'problem solving', 'development','career','goals','teamwork',
    'collaboration','enthusiast','enthusiastic'] 
    ] 


# Function to identify the audio 
def record_text():

    try:

        #Getting the microphone as the source of input
        with sr.Microphone() as source2:
            #Preparing the recognizer to recieve input
            r.adjust_for_ambient_noise(source2, duration=0.2)

            #Listen for the user's answers
            audio2 = r.listen(source2, timeout=10)
        

        #Using google's speech recognition to recognise the audio
        myText = r.recognize_google(audio2)

        return myText  

    #These except blocks are used in cases when the audio cannot be understood
    except sr.RequestError as e:
        print("Could not request results; {0}".format(e))
        return ""

    except sr.UnknownValueError:
        print("An Unknown Error Occured!") 
        return "" 
    

#Function to check keywords in the given text
def checking_keywords(text):
    found_keywords = [keyword for keyword_list in keywords for keyword in keyword_list if keyword in text.lower()]
    return found_keywords
     

#Route to handle Speech Recognition
@app.route('/speechToText', methods=['POST'])
def speech_to_Text():
    try:
        #use the microphone to record
        text = record_text()
        
        #Write the text into a file
        with open("C:/Users/aqdha/OneDrive/Desktop/Jupyter Projects/Answer Recognition/output.txt","a") as f:
            print("Writing text to output.txt:", text)
            f.write(text + "\n")
            f.close()

        # Check for keywords in the answer
        keywords_found = checking_keywords(text)    
       
        return "Text Written Successfully : " + text + "\nKeywords Found Within the Text" + str(keywords_found)
           
    except Exception as e:
        return str(e)
    
    

#Function to read the last text that was converted
def read_text_file():
    try:
        with open("C:/Users/aqdha/OneDrive/Desktop/Jupyter Projects/Answer Recognition/output.txt","r") as f:
            lines = f.readlines()
            last_line = lines[-1].strip() if lines else "No text Available"
            return last_line
    except Exception as e:
        return str(e)
    
#Route to read the last text written to the output.txt file
@app.route('/readLastText', methods=['GET'])
def read_text_route():
    last_text = read_text_file()
    return "Text From Output.txt file : " + last_text    
    

if __name__ == "__main__":
    app.run(debug=True)
