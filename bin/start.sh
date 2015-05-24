#!/bin/bash

dir=`pwd`

# 安装 依赖
npm install

# forever 正在运行进程列表
./node_modules/.bin/forever list
# 停止所有 forever 进程
./node_modules/.bin/forever stop bin/www

NODE_ENV=development ./node_modules/.bin/forever start bin/www

# forever 正在运行进程列表
./node_modules/.bin/forever list 