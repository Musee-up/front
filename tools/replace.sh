echo '['
rg  --json -U -i "t(?:\([\`]((:?[^\`]|\\n)*)[\`]\)|\([']((:?[^']|\\n)*)[']\))" -g "*.vue"
echo ']'
