
node fs-demo.js ./utils

1. it accepts a path as argument
2. validate if a directory is given as input instead of file
    node fs-demo.js readme.md // error
3. validate for empty values
    node fs-demo.js // error

4. read all file names in the directory
5. if you find a directory inside a path you go read recursively

7. for each file read the content
8. calculate the hash (sha1 and md5)
9. write the result to a file in the following format

/complete/path/file-name.txt  rweouajsdafsdjf  flaksjdfklajdfkla
/complete/path/file-name.txt  rweouajsdafsdjf  flaksjdfklajdfkla
/complete/path/file-name.txt  rweouajsdafsdjf  flaksjdfklajdfkla

what to use:
============
fs => read write streams, stats
path => path validations, get filename
crypto => createHash




