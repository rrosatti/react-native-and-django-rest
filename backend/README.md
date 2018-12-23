## Steps used to build the project ##

1. Used a virtualenv to install the packages used in the project:

	$ pip3 install virtualenv virtualenvwrapper
	$ mkvirtualenv -p $(which python3) react-native-and-django-rest

	$ pip3 install django djangorestframework

	$ python3 manage.py migrate
	$ python3 manage.py createsuperuser

	# checkout http://127.0.0.1:8000/admin
