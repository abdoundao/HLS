#! /bin/bash
sudo ffmpeg -re -i /dev/video0 -c:v libx264 -crf 21 -preset veryfast -c:a aac -b:a 128k -ac 2 -f hls -hls_time 4 -hls_playlist_type event ../HLSproject/trombinoscop/static/video/live/stream.m3u8
rm -rf ../HLSproject/trombinoscop/static/video/live/*
