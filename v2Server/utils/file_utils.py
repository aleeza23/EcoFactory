from flask import request
from fileinput import filename 
import os

def upload_file():
    file = request.files['file'] 
    dir = '../v2Server/files'
    file_path = os.path.join(dir, file.filename)
    file.save(file_path)
    
    return file_path
   
def delete_temp_file(file_path):
    try:
        os.remove(file_path)
        print("Temporary file deleted successfully.")
    except OSError as e:
        print(f"Error deleting temporary file: {e.strerror}")
        
def read_file_contents(file_path):
    print(file_path)
    
    with open(file_path, 'rb') as file:
        file_contents = file.read()    
    return file_contents