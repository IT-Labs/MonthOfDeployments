# MonthOfDeployments

## Docker ins & outs
docker commannds reference: https://docs.docker.com/engine/reference/commandline/docker/

### Exercise 1

Run a public image ex( postgres/redis  etc …) and try following commands:
 - docker run -d -p 6379:6379 --name redislab redis
 - docker images 
 - docker ps 
 - docker logs redislab 
 - docker stats --all
 - docker exec -it redislab /bin/bash 
    - redis-server –v
    - redis-cli -v 
    - uname -a
    - redis-cli 
    - Navigate to system logs 
 - docker stop  [container id] 
 - docker start  [container id] 
 - docker rm [container id]

### Exercise 2

Create Dockerfile:
 - update netcore-api Dockerfile:
    - WORKDIR /app
    - COPY --from=build-env /app/out .
    - ENTRYPOINT ["dotnet", "DockerDemoAPI.dll"]
 - update angular-app Dockerfile:
    - \# add app
    - COPY . /app
    - \# start app
    - CMD ng serve --host 0.0.0.0


Build Dockerfile:
  - build netcore-api Dockerfile:
    - docker build -t demoapi .
  - build netcore-api Dockerfile:
    - docker build -t demoweb

Run Dockerfile:
  - run demoapi image:
    -  docker run -p 5000:80 demoapi
  - run demoweb image:
    -  docker run -p 4201:4200 demoweb
 
### Exercise 3
Docker Compose
 - Run docker compose
    - docker-compose up
  - Extend docker compose with web api (docker-compose_b.yml)
  - Make web to depend from web api (docker-compose_c.yml)
  - Put both dockers in named network (docker-compose_d.yml)
    - List networks : docker network ls 
    - Check network:  docker network inspect demo-network 
  - Add environment  variable in web api -> ProfileName (docker-compose_e.yml)
  - Add postges and volume  (docker-compose_f.yml)
    > You can find all steps in Docker Compose Steps.zip


