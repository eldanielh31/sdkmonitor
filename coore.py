from test import main
import threading

hilo1= threading.Thread(target=main)
hilo1.start()
        
