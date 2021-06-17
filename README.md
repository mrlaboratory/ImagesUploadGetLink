# ImagesUploadGetLink

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
