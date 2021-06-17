# ImagesUploadGetLink

#!/bin/bash

# convert ansi-colored terminal output to github markdown

# to colorize text on github, we use <span color="red">red</span> etc
# depends on: aha, xclip
# license: CC0-1.0
# note: some tools may need other arguments than `--color=always`
# sample use: colors-to-github.sh diff a.txt b.txt

cmd="$1"
shift
(
    echo '<pre>'
    $cmd --color=always "$@" 2>&1 | aha --no-header
    echo '</pre>'
) \
| sed -E 's/<span style="[^"]*color:([^;"]+);"/<span color="\1"/g' \
| sed -E 's/ style="[^"]*"//g' \
| xclip -i -sel clipboard
