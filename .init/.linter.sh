#!/bin/bash
cd /home/kavia/workspace/code-generation/smart-tv-video-streaming-ui-design-300367-300376/tv_streaming_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

