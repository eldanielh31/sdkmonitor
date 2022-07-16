#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys
from threading import Thread
from test import  main
import threading



class TestThread(Thread):
        def run(self):
            print('Thread running')

def main():
    """Run administrative tasks."""
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'SDKmonitorAPI.settings')
    try:
        from django.core.management import execute_from_command_line
        #Inicio thread cpu y memory
        hilo1= threading.Thread(target=main)
        hilo1.start()
        
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)


if __name__ == '__main__':
    main()