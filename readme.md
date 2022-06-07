# Суть и философия проекта
    Целью проекта является создание шаблона для разработке на основе Django и React технологий

Интерфейсы взаимодействия с инструментом:
- веб сайт

Стек технологий: Django, DRF, React, Docker, Ngnix, Gunicorn

## Установка проекта

1. Сделать 
```git clone```
 через ssh. Важно сделать через ssh, чтобы каждый раз не вводить пароль
2. Установить docker и docker-compose по данным туториалам:
- https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04-ru
- https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-ru

3. Запустить сборку проекта командой 
```./bin/dev```
4. После успешной сборки, по адресу ```localhost``` должна появится главная страница проекта, также необходимо перейти по адресу ```localhost/api``` и 
```localhost/admin```, и убедиться что там есть django.
5. Перейти в папку frontend и запустить команду ```npm i```, запускаем локально, не в докере. Нужно, чтобы у вас на системе стоял nodejs. Ожидаем окончания установки всех пакетов, обычно это достаточно долго.
6. Запускаем фронт командой ```npm start``` в папке frontend. Переходим на ```localhost:3000``` и убеждаемся, что проект работает. С фронтом мы будем работать по этому адресу, только тут он будет обновлятся при изменениях, на продакшн билд, по адресу ```localhost```, не обращаем внимание, это для прода. Он не будет меняться при изменениях в коде, только при перезапуске проекта.
7. Вход в админ панель django осуществляется по адресу ```localhost/admin```, чтобы создать аккаунт, вам необходимо проделать следующие действия:
- Запускаем проект
- ```./bin/manage createsuperuser ```
- Вводим все запрашиваемые данные и логинимся.

# Работа с проектом
- ```./bin/dev``` - запуск проекта
- ```./bin/lint``` - включение линтеров
- ```npm run lint``` - включение линтеров для фронта
- ```npm run lint:fix``` - автоисправление
- ```./bin/manage``` - алиас для команды python3 manage.py, принимает все аргументы
- ```./bin/shell``` - python3 shell внутри контейнера бэка
- ```./bin/debug``` - дебаг определенного контейнера, по сути просто подключает нас к контейнеру
- ```./bin/prod``` - НЕ ТРОГАТЬ!!! ЭТО ВЫКАТ ПРОЕКТА НА ПРОДАКШН

# Debug
Чтобы дебажить бэк прямо во время разработки, нам необходимо проделать следующие действия:
1. Открыть нужный нам файл и строку и вставить перед этой строкой ```import ipdb; ipdb.set_trace()```
2. Открыть новое окно в терминале и ввести ```./bin/debug```. Этот скрипт также принимает аргументы, поумолчанию он подключается к контейнеру backend, но если вы хотите дебажить другой контейнер, можете передать его имя в качестве аргумента

## Распространенные ошибки
1. ```The container name "/backend_container" is already in use by container "c62279c1ad2ce9e2b56eed1a1204f9c53f93749f6b03d9aca5be3e0df30449b7". You have to remove (or rename) that container to be able to reuse that name.'```
- Необходимо ввести две эти команды и перезапустить проект.
```
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
```
2. ```django.db.migrations.exceptions.InconsistentMigrationHistory```
- Останавливаем проект
```
docker-compose -f docker-compose.dev.yml up --build --remove-orphans db
docker exec -it tg_money_manager_db_1 dropdb hello_django_dev -U hello_django
docker exec -it tg_money_manager_db_1 createdb hello_django_dev -U hello_django
```
- Останавливаем проект
- Запускаем весь проект через ```./bin/dev```
