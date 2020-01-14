# HLS
This document aims to deploy a website easily. The purpose of the website is to host the description of the protocol Http Live Streaming (HLS). Besides, the website implements this protocol and a demonstration of a video received thanks to the protocol HLS.
In the rest of the document, all lines starting with “$” mean that the lines need to be written in a terminal.


Prerequisites  :
	-Our github Link : https://github.com/VideoStreamingEnseirb/HLS
-Ubuntu 18.04 (https://ubuntu.com/download/desktop/thank-you?country=FR&version=18.04.3&architecture=amd64)
	-Install docker : Follow the tutorial (https://docs.docker.com/install/linux/docker-ce/ubuntu/) from the part “Install using the repository”
	-Install docker-compose : Follow this tutorial https://docs.docker.com/compose/install/
	And follow the part for Linux users.
	-ffmpeg : run the following commands : $ sudo apt-get update
						  $ sudo apt-get install ffmpeg
	

Deployment :

Application Deployment

Download the zip or clone the github from our github link.
Go to the directory application : $ cd HSLproject
Before running the docker check whether anything is running on port 80 with the following command : $ sudo netstat -nplv | grep 80
If there is already a service running on port 80 stop it with the command :
$ sudo service service_name stop

Run the following commands to run the docker: 

$sudo docker-compose build
$sudo docker-compose up -d

To verify whether this step works you can try to reach http://localhost/telecom/welcome and see whether the page is displayed or not.

Manifest generation

To use HLS, the application needs to have access to the manifest generated from a video. You can find a sample video thanks to the following link https://standaloneinstaller.com/blog/big-list-of-sample-videos-for-testers-124.html.

From a local video :

Go to the generate_manifest directory:
 $ cd generate_manifest
And run the following commands 
$ rm -rf HLSproject/trombinoscop/static/video/vid/*
$ chmod +x create-vod-hls.sh
$ ./create-vod-hls.sh /path_to_your_video ../HLSproject/trombinoscop/static/video/vid/playlist.m3u8


From the camera live streaming : 

This part will generate a manifest from the video camera.
Go to the generate_manifest directory :
 $ cd generate_manifest
And run the following commands : 
$ chmod +x live.sh
$ ./live.sh 

Demonstration

If you have follow this HowTo step by step, everything should be working. You can know go to the http://localhost/telecom/welcome


