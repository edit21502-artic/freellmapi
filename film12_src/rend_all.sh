set -e
T=519.9; N=5; L=$(python3 -c "print($T/$N)")
for i in $(seq 0 $((N-1))); do a=$(python3 -c "print(round($i*$L,3))"); b=$(python3 -c "print(round(($i+1)*$L,3))"); node render.js seg $a $b out/seg$i.mp4 > out/seg$i.log 2>&1 & done
wait
for i in $(seq 0 $((N-1))); do echo "file 'seg$i.mp4'"; done > out/list.txt
ffmpeg -y -loglevel error -f concat -safe 0 -i out/list.txt -i out/audio.wav -map 0:v -map 1:a -c:v copy -c:a aac -b:a 192k -shortest /home/user/freellmapi/robot_babysitter_7_rules.mp4
echo DONE
