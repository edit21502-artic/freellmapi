#!/bin/bash
cd "$(dirname "$0")"
T=897.75; N=6
for i in $(seq 0 $((N-1))); do
  a=$(python3 -c "print(round($T*$i/$N*24)/24)"); b=$(python3 -c "print(round($T*($i+1)/$N*24)/24)")
  node render.js seg $a $b out/seg$i.mp4 > out/seg$i.log 2>&1 &
done
wait
for i in $(seq 0 $((N-1))); do echo "file 'seg$i.mp4'"; done > out/list.txt
ffmpeg -y -loglevel error -f concat -safe 0 -i out/list.txt -i out/audio.wav -c:v copy -c:a aac -b:a 160k -shortest out/film.mp4
ffprobe -v error -show_entries format=duration,size -of csv=p=0 out/film.mp4
cat out/seg*.log
