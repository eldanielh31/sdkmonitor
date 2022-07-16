import threading
import psutil 
from time import sleep
from test import main

def hola():
    while True:
        sleep(1)
        print("hola")

hilo1= threading.Thread(target=main)
hilo1.start()
