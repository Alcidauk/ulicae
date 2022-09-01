#!/bin/bash

rsync -avz --progress dist alcidauk@ulica.fr:~
ssh -t alcidauk@ulica.fr "sudo rm -R docker-yml/nginx/content/ulicae && sudo mv ~/dist/ docker-yml/nginx/content/ulicae"
