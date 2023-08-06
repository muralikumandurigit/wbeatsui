#!/bin//sh
echo
echo "Updating code"
echo
git pull origin main
cd wbeatsui
echo
echo "Updating build..."
echo
ng update
echo
echo "Building..."
echo
ng build
echo
echo "Removing old dist..."
echo
sudo rm -rf /var/www/dist
echo "Deploying dist..."
sudo cp -rf dist/wbeatsui/ /var/www/
echo "Completed..."
