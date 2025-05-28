#!/bin/sh
# exit immediately if any command fails
set -e

echo "Running makemigrations..."
python manage.py makemigrations --noinput

echo "Running migrate..."
python manage.py migrate --noinput