---
---
## 🎬 Wide Media Support

Rexedia supports all file extensions supported by [FFMPEG](https://ffmpeg.org/).

<!-- separator -->

```shell
rexedia -i "file.mp4" -c "(.+)" "$1.png" -o "(.+)" "$1.avi"
```

<!-- separator -->

## ⭐ Features

Complicated tasks simplified:
- Apply cover art and metadata.
- Customize output with regular expressions and back references.
- Support for preset files instead of command-line flags.
- Logging to track changes.

<!-- separator -->

```shell
rexedia -i video.mp4 -p preset.yml
```
```yml
// preset.yml
metadata:  
  - meta: 'title' 
    regex: '(.+)'
    format: '$1'
```

<!-- separator -->

## ✔️ Safe Video Formatting

Rexedia preserves the integrity of the video file.
- Media file integrity is verified at every stage.
- Backup files will always be saved on format failure.
- Use the `-b` flag to keep backup files even on successful formats.

<!-- separator -->

```shell
rexedia -i "file.mp4" -c "(.+)" "$1.png" -b
```